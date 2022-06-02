import * as T from "@effect/core/io/Effect";

const main = T.succeed(() => console.log("hello world"));

T.unsafeRunPromise(main).catch(console.error);
