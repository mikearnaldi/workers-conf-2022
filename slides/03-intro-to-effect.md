---
layout: center
---

# Welcome to Effect

---
layout: full
---

# Creating a `fetch` wrapper

```ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---
import * as Effect from "@effect/core/io/Effect";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export const request = (input: RequestInfo, init?: RequestInit | undefined) =>
  Effect.tryCatchPromise(
    () => fetch(input, init),
    (error) => new FetchError(error)
  );

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const jsonBody = (input: Response) =>
  Effect.tryCatchPromise(
    (): Promise<unknown> => input.json(),
    (error) => new JsonBodyError(error)
  );
```

---
layout: center
---

# Common module

To simplify imports in your app it is a common pattern to have a `common.ts` module which includes a re-export of modules from both `Effect` and utilities like the following

```ts twoslash
// @filename: http.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/02-http"
// @filename: common.ts
// ---cut---
export * as Effect from "@effect/core/io/Effect";
export * as Schedule from "@effect/core/io/Schedule";
export * as Duration from "@tsplus/stdlib/data/Duration";
export { pipe } from "@tsplus/stdlib/data/Function";
export * as Http from "./http";
```

To be used like:

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http } from "./common";
```

Pay attention to avoid cyclical dependencies by not using the `common` module in any of the modules that re-exports, tools like `eslint` and `madge` may help you prevent this mistake.

---
layout: full
---

# Using the `fetch` wrapper

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http, pipe } from "./common";

export const getTodo = (id: number) =>
  pipe(
    Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    Effect.flatMap(Http.jsonBody)
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(() => ids.map(getTodo)) 
```

Looking at the types inferred from TS we can explicitely see `getTodo` may returns: 

```ts
Effect<never, FetchError | JsonBodyError, unknown>
```

Which can be read as `one operation that has no requirements, and when performed may fail for either a FetchError or for a JsonBodyError and when succesful returns unknown`

---
layout: full
---

# Handling Failures

Effect programs when executed may encounter failure due to predictable circumstances that may trigger recovery procedures and unexpected exceptions.

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
// ---cut---
import { Effect, Exit, pipe } from "./common";
import * as Todos from "./todos";

export const program = Effect.struct({
  first: Todos.getTodo(1),
  second: Todos.getTodo(2)
})

export const main = pipe(
  program,
  Effect.flatMap((todos) => Effect.logInfo(() => `Todos: ${JSON.stringify(todos)}`)),
  Effect.catchTag("FetchError", (error) => Effect.logError(() => `FetchError: ${JSON.stringify(error)}`)),
  Effect.catchTag("JsonBodyError", (error) => Effect.logError(() => `JsonBodyError: ${JSON.stringify(error)}`))
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(`Unexpected failure: ${JSON.stringify(exit.cause)}`)
  }
})
```

---
layout: center
---

# Resilience on failures

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Schedule, Effect, Http, Duration, pipe } from "./common";

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(() => Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30)))
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(() =>
      pipe(
        retrySchedule,
        Schedule.whileInput((error) => error._tag !== "JsonBodyError")
      )
    )
  );
```

Note how the default schedule is composed locally with `Schedule.whileInput` in order to refine its behaviour.

---
layout: center
---

# Failure Escalation

To control the boundaries of explicitness of errors it may happend that you want to turn failures into defect, for example in the case of `getTodo` if after the retry policy we still have an error there is pretty much nothing else we can do with it and carrying the information at the type level may be both verbose and an implementation detail leak.

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts

import { Effect, Http, Schedule, Duration, pipe } from "./common"

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(() => Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30)))
);

// ---cut---

export const getTodo = (id: number) =>
  pipe(
    Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(() =>
      pipe(
        retrySchedule,
        Schedule.whileInput((error) => error._tag !== "JsonBodyError")
      )
    ),
    Effect.orDie
  );
```

We can see by looking at the types that the error type has now disappeared. You can recover from ALL failures including defects by using functions like `Effect.catchAllCause` or turn the error into a full `Cause<E>` using `Effect.sandbox`.

---
layout: center
---

# Interruption

Effects can describe interruptible computations with a very rich semantic, in fact differently from most of the frameworks that deal with cancelation in Effect cancellation is itself an effect and is, by nature, asyncronious.

The following snippet uses the `Effect.asyncInterrupt` constructor to create an interruptible fetch wrapper.

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}
// ---cut---
import * as Effect from "@effect/core/io/Effect";
import * as Either from "@tsplus/stdlib/data/Either";

export const request = (input: RequestInfo, init?: RequestInit | undefined) =>
  Effect.asyncInterrupt<never, FetchError, Response>((resume) => {
    const controller = new AbortController();
    fetch(input, { ...(init ?? {}), signal: controller.signal }).then((response) => {
      resume(Effect.succeed(() => response));
    }).catch((error) => {
      resume(Effect.fail(() => new FetchError(error)));
    });
    return Either.left(Effect.succeed(() => {
      controller.abort();
    }));
  });
```

That's it interruption is propagated through program execution without explicitly passing signals or controllers.

---
layout: full
---

# Controlled concurrency

The following snippet of code describes a program that when executed fetches a list of `TODOs` from the API in parallel, the execution will terminate at the first request failure and all ongoing requests will be interrupted.

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(() => ids.map(getTodo));
```

Controlling how many operations are allowed to run in parallel is done by using the `Effect.withParallelism` aspect.

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => pipe(
  Effect.collectAllPar(() => ids.map(getTodo)),
  Effect.withParallelism(15)
);
```

Or leave it to the caller:


```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(() => ids.map(getTodo));

export const program = pipe(getTodos([0, 1, 2, 3]), Effect.withParallelism(3))
```


---
layout: full
---

# Metrics

Defining prometheus-compatible metrics for your program becomes painless, Metrics are native to Effect and we have our own representations for them that is independent of third parties, multiple exporters will be provided as ecosystem packages.

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
// ---cut---
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

export const GetTodoCount = Metrics.counter("GetTodoCount")

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.tap(() => Metrics.increment(GetTodoCount))
)
```

Or by making increment part of the metric definition:

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

// ---cut---
export const GetTodoCount = pipe(Metrics.counter("GetTodoCount"), Metrics.fromConst(() => 1))

export const getTodo = (id: number) => GetTodoCount(Todos.getTodo(id))
```

---
layout: full
---

# Tracing

We are currently integrating with OpenTelemetry via the ecosystem package `@effect/otel` but we are working on a native representation of spans and tracing following the same principles applied for `Metrics`

```ts
import { Effect, pipe } from "./common";
import * as Todos from "./todos";

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.withSpanAttribute("id", id),
  Effect.withSpan("GetTodo")
)

export const getTodos = (ids: number[]) => pipe(
  Todos.getTodos(ids),
  Effect.withSpanAttribute("ids", ids),
  Effect.withSpan("GetTodos")
)
```

Note: This isn't yet ready but we are actively working on it! for the time being you'll find `withSpan` in the otel ecosystem package.

---
layout: full
---

# Dependency Injection

Effect has native support for Context propagation, think of it like the React context on type-safe steroids.

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
// ---cut---
import { Effect, Chunk } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(() => `todo: ${JSON.stringify(todo)}`))
  }
  
  return Chunk.size(todos)
})
```

---
layout: full
---

# Dependency Injection

Running a program requires all dependencies to be provided into the Context, a smart way of constructing dependency trees of potentially interdependent services is by using `Layer`

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(() => `todo: ${JSON.stringify(todo)}`))
  }

  return Chunk.size(todos)
})

// ---cut---

import * as Layer from "@effect/core/io/Layer"
import * as Impl from "./todos-impl";

export const LiveTodoRepo = Layer.fromEffect(TodoRepo, () => 
  Effect.succeed(() => ({
    getTodo: Impl.getTodo,
    getTodos: Impl.getTodos
  }))
)

export const main = pipe(
  program,
  Effect.provideSomeLayer(LiveTodoRepo)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(`Unexpected failure: ${JSON.stringify(exit.cause)}`)
  }
})
```

---
layout: full
---

# Dependency Injection

Layers represents modules of your application and they compose very well, you could imagine having a service `TodoRepo` which constructors depends on `Http` and we have a program that uses both `TodoRepo | Http`

```ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, Http as HttpImpl, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export interface Http {
  readonly request: typeof HttpImpl.request
}

export const Http = Tag<Http>()

// ---cut---

import * as Layer from "@effect/core/io/Layer"

export declare const LiveHttp: Layer.Layer<never, never, Http>
export declare const LiveTodoRepo: Layer.Layer<Http, never, TodoRepo>

export const AppContext = pipe(
  LiveHttp,
  Layer.andTo(LiveTodoRepo)
)

export declare const program: Effect.Effect<Http | TodoRepo, never, void>

export const main = pipe(
  program,
  Effect.provideSomeLayer(AppContext)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(`Unexpected failure: ${JSON.stringify(exit.cause)}`)
  }
})
```

---
layout: center
---

# Recap!

we've been only scratching the surface of Effect and a lot of its power hasn't made it to this presentation but we've seen how to deal with:

<v-clicks>

- Errors
- Retries
- Concurrency
- Interruption
- Logging
- Tracing
- Metrics
- Dependencies

</v-clicks>

---
layout: full
---

# What's in the Box?

When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in `@effect/core` you'll find:

<v-clicks>

- Effect: Generic Program Definition
- Cause: Representing potentially multiple failure causes of different kinds
- Scope: Safe Resource Management to model things like database connections
- Fiber: Low Level Concurrency Primitives
- Queue: Work-Stealing Concurrent & Backpressured Queues
- Hub: Like a Pub/Sub for Effects
- Layer: Context Construction
- Metrics: Prometheus Compatible Metrics
- Tracing: OpenTelemetry Compatible Tracing

</v-clicks>

---
layout: full
---

# What's in the Box?

When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in `@effect/core` you'll find:

<v-clicks>

- Logger: Multi-Level & Abstract Logger
- Ref: Mutable Reference to immutable State with potentially Syncronized access and updates
- Schedule: Time-based Scheduling Policies
- Stream: Pull Based Effectful Streams (like an Effect that can produce 0 - infinite values)
- Deferred: Like a Promise of an Effect that may be fulfilled at a later point
- STM: Transactional Data Structures & Coordination 
- Semaphore: Concurrency Control
- Clock: System Clock & Time Utilities
- Random: Deterministic Seeded Random Utilities
- Runtime: Runtime Configuration and Runner
- Supervisor: Fiber Monitoring

</v-clicks>

---
layout: full
---

<style>
  img {
    max-width: 50% !important;
  }
</style>

# Early adopters feedback

<br />

![Imgur](https://i.imgur.com/ZUKacox.png)

---
layout: center
---

# Thank you!

Where to go next?

Check out our [Website](https://www.effect.website/) 

Join our [Discord](https://discord.gg/cWtHKdAXwC) Community

Follow us on [YouTube](https://www.youtube.com/channel/UC8wNHsXmEuoikbwRdLeoJQg) for [Effect Time](https://www.youtube.com/playlist?list=PLDf3uQLaK2B8kVv0PS1bwMwzENHpq48Ox)

Follow us on Twitter: [Effect](https://twitter.com/effectTS_), [Me](https://twitter.com/MichaelArnaldi), [MATECHS](https://twitter.com/matechsdigital)
