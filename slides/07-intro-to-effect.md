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
