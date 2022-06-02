import * as Effect from "@effect/core/io/Effect";

const main = Effect.succeed(() => console.log("hello world"));

Effect.unsafeRunPromise(main).catch(console.error);
