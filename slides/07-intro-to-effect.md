---
layout: full
---

# Introduction to Effect

## Creating a `fetch` wrapper

We'll start by creating a new `http.ts` module that will be used to group fetch related functions, let's start by `fetch` itself.

```ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---
import * as Effect from "@effect/core/io/Effect";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  Effect.tryCatchPromise(
    () => fetch(input, init),
    (error) => new FetchError(error)
  );
```
You can use any structure you like to host the error but we advise using a tagged discriminator called `_tag` given we expose combinators like `Effect.catchTag` that deal with a tagged error channel.

---

# Introduction to Effect
## Creating a `fetch` wrapper

The second function that we may want to wrap in a functional effect is `json`.

```ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---
import * as Effect from "@effect/core/io/Effect";

// previously defined: request

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

Note how even in this case we isolated the error to be specific to the effect we are performing and additionally we specify the return type as `Promise<unknown>` in order to avoid implicitly ending up with `any`.

---

# Introduction to Effect
## Creating a `fetch` wrapper

We may also want to export a default schedule to be used in retry operations.

```ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---
import * as Effect from "@effect/core/io/Effect";
import * as Schedule from "@effect/core/io/Schedule";
import * as Duration from "@tsplus/stdlib/data/Duration";
import { pipe } from "@tsplus/stdlib/data/Function";

// previously defined: request & jsonBody

export const defaultRetrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(() => Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30)))
);
```

The `defaultRetrySchedule` above describes a schedule that recurs using a capped exponential backoff growth for a maximum of 30 seconds.

---

# Introduction to Effect
## Prelude module

To simplify imports in your app it is a common pattern to have a `prelude.ts` module which includes a re-export of modules from both `Effect` and utilities like the following

```ts twoslash
// @filename: http.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/02-http"
// @filename: prelude.ts
// ---cut---
export * as Effect from "@effect/core/io/Effect";
export * as Schedule from "@effect/core/io/Schedule";
export { pipe } from "@tsplus/stdlib/data/Function";
export * as Http from "./http";
```

To be used like:

```ts twoslash
// @module: esnext
// @filename: prelude.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http } from "./prelude";
```

Pay attention to avoid cyclical dependencies by not using the `prelude` module in any of the modules that re-exports, tools like `eslint` and `madge` may help you prevent this mistake.

---

# Introduction to Effect
## Using the `fetch` wrapper

In the following snippet we are describing an effect that when executed fetches a todo with the specified ID retrying with the default policy while the error is different from a `JsonBodyError`

```ts twoslash
// @module: esnext
// @filename: prelude.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Schedule, Effect, Http, pipe } from "./prelude";

export const getTodo = (id: number) =>
  pipe(
    Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(() =>
      pipe(
        Http.defaultRetrySchedule,
        Schedule.whileInput((error) => error._tag !== "JsonBodyError")
      )
    )
  );
```

Note how the default schedule is composed locally with `Schedule.whileInput` in order to refine its behaviour based on the error type which is fully inferred.

---

# Introduction to Effect
## Using the `fetch` wrapper

We may say that after having performed all retries if we are still in an error case we consider it non recoverable. Given an Effect using `orDie` will consider all failures as non-recoverable defects.

```ts twoslash
// @module: esnext
// @filename: prelude.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Schedule, Effect, Http, pipe } from "./prelude";

export const getTodo = (id: number) =>
  pipe(
    Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(() =>
      pipe(
        Http.defaultRetrySchedule,
        Schedule.whileInput((error) => error._tag !== "JsonBodyError")
      )
    ),
    Effect.orDie
  );
```

Defects have a separated channel and their type is lost, that is because defects can happen everywhere.

---

# Introduction to Effect
## The Failure Cause

We mentioned non-recoverable defects, Effect behind the scenes collect all the errors that may happen during the execution of your program (predicted and not) in a tree-like data type called `Cause<E>`.

The following snippet recovers from all the errors included "non-recoverable" and logs out the full cause together with a message using the error log level.

```ts twoslash
// @module: esnext
// @filename: prelude.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
import { Schedule, Effect, Http, pipe } from "./prelude";
export const getTodo = (id: number) =>
  pipe(
    Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(() =>
      pipe(
        Http.defaultRetrySchedule,
        Schedule.whileInput((error) => error._tag !== "JsonBodyError")
      )
    ),
    Effect.orDie
  );
// @filename: index.ts
// ---cut---
import { Effect, pipe } from "./prelude"
import { getTodo } from "./todos"

const program = pipe(
  getTodo(10),
  Effect.sandbox,
  Effect.catchAll((cause) =>
    Effect.logErrorCauseMessage(
      () => "error encountered while executing",
      () => cause
    )
  )
);
```

---

# Introduction to Effect
## Interruption

Effects can describe interruptible computations with a very rich semantic, in fact differently from most of the frameworks that deal with cancelation in Effect cancellation is itself an effect and is, by nature, asyncronious.

The following snippet uses the `Effect.asyncInterrupt` constructor to create an interruptible fetch wrapper.

```ts twoslash
// @module: esnext
// @filename: prelude.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}
// ---cut---
import * as Effect from "@effect/core/io/Effect";
import * as Either from "@tsplus/stdlib/data/Either";

export const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
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

---

# Introduction to Effect
## Controlled concurrency

The following snippet of code describes a program that when executed fetches a list of `TODOs` from the API in parallel, the execution will terminate at the first request failure and all ongoing requests will be interrupted.

```ts twoslash
// @module: esnext
// @filename: prelude.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./prelude";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) =>
  Effect.forEachPar(
    () => ids,
    (id) => getTodo(id)
  );
```

Controlling how many operations are allowed to run in parallel is done by using the `Effect.withParallelism` aspect.

```ts twoslash
// @module: esnext
// @filename: prelude.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./prelude";
import * as Http from "./http";
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) =>
  pipe(
    Effect.forEachPar(
      () => ids,
      (id) => getTodo(id)
    ),
    Effect.withParallelism(15)
  );
```
