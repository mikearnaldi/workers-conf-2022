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
import * as T from "@effect/core/io/Effect";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  T.tryCatchPromise(
    () => fetch(input, init),
    (error) => new FetchError(error)
  );
```
You can use any structure you like to host the error but we advise using a tagged discriminator called `_tag` given we expose combinators like `T.catchTag` that deal with a tagged error channel.

---

# Introduction to Effect
## Creating a `fetch` wrapper

The second function that we may want to wrap in a functional effect is `json`.

```ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---
import * as T from "@effect/core/io/Effect";

// previously defined: request

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const jsonBody = (input: Response) =>
  T.tryCatchPromise(
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
import * as T from "@effect/core/io/Effect";
import * as S from "@effect/core/io/Schedule";
import * as D from "@tsplus/stdlib/data/Duration";
import { pipe } from "@tsplus/stdlib/data/Function";

// previously defined: request & jsonBody

export const defaultRetrySchedule = pipe(
  S.exponential(D.millis(10), 2.0),
  S.either(S.spaced(() => D.seconds(1))),
  S.compose(S.elapsed),
  S.whileOutput(D.lowerThenOrEqual(D.seconds(30)))
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
export * as T from "@effect/core/io/Effect";
export * as S from "@effect/core/io/Schedule";
export { pipe } from "@tsplus/stdlib/data/Function";
export * as H from "./http";
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
import { T, H } from "./prelude";
```

---

# Introduction to Effect
## Using the `fetch` wrapper

In the following snippet we are describing an effect that when executed fetches a todo with the specified ID retying with the default policy while the error is different from a `JsonBodyError`

```ts twoslash
// @module: esnext
// @filename: prelude.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { S, T, H, pipe } from "./prelude";

export const getTodo = (id: number) =>
  pipe(
    H.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    T.flatMap(H.jsonBody),
    T.retry(() =>
      pipe(
        H.defaultRetrySchedule,
        S.whileInput((error) => error._tag !== "JsonBodyError")
      )
    )
  );
```

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
import { S, T, H, pipe } from "./prelude";

export const getTodo = (id: number) =>
  pipe(
    H.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    T.flatMap(H.jsonBody),
    T.retry(() =>
      pipe(
        H.defaultRetrySchedule,
        S.whileInput((error) => error._tag !== "JsonBodyError")
      )
    ),
    T.orDie
  );
```

Defects have a separated channel and their type is lost, that is because defects can happen everywhere.

---

# Introduction to Effect
## The Failure Cause

We mentioned non-recoverable defects, Effect behind the scenes collect all the errors that may happen during the execution of your program (predicted and not) in a tree-like data type called `Cause<E>`.

The following snippet recovers from all the errors included "non-recoverable" and prints out the full cause.

```ts twoslash
// @module: esnext
// @filename: prelude.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
import { S, T, H, pipe } from "./prelude";
export const getTodo = (id: number) =>
  pipe(
    H.request(`https://jsonplaceholder.typicode.com/todos/${id}`),
    T.flatMap(H.jsonBody),
    T.retry(() =>
      pipe(
        H.defaultRetrySchedule,
        S.whileInput((error) => error._tag !== "JsonBodyError")
      )
    ),
    T.orDie
  );
// @filename: index.ts
// ---cut---
import { T, pipe } from "./prelude"
import { getTodo } from "./todos"

const log = (message: string) => T.succeed(() => console.log(message))

const program = pipe(
  getTodo(10),
  T.sandbox,
  T.catchAll((cause) => log(JSON.stringify(cause)))
);
```

Note: `JSON.stringify` is temporary, Effect will provide a default way to pretty print a failure cause that renders the tree like structure showing all the occurred failures.


---

# Introduction to Effect
## Interruption

Effects can describe interruptible computations with a very rich semantic, in fact differently from most of the frameworks that deal with cancelation in Effect cancellation is itself an effect and is, by nature, asyncronious.

The following snippet uses the `T.asyncInterrupt` constructor to create an interruptible fetch wrapper.

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
import * as T from "@effect/core/io/Effect";
import * as E from "@tsplus/stdlib/data/Either";

export const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  T.asyncInterrupt<never, FetchError, Response>((resume) => {
    const controller = new AbortController();
    fetch(input, { ...(init ?? {}), signal: controller.signal }).then((response) => {
      resume(T.succeed(() => response));
    }).catch((error) => {
      resume(T.fail(() => new FetchError(error)));
    });
    return E.left(T.succeed(() => {
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
import { T, pipe } from "./prelude";
import * as H from "./http";
export declare const getTodo: (id: number) => T.Effect<never, H.FetchError | H.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) =>
  T.forEachPar(
    () => ids,
    (id) => getTodo(id)
  );
```

Controlling how many operations are allowed to run in parallel is done by using the `T.withParallelism` aspect.

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
import { T, pipe } from "./prelude";
import * as H from "./http";
export declare const getTodo: (id: number) => T.Effect<never, H.FetchError | H.JsonBodyError, unknown>
// ---cut---
export const getTodos = (ids: number[]) =>
  pipe(
    T.forEachPar(
      () => ids,
      (id) => getTodo(id)
    ),
    T.withParallelism(15)
  );
```
