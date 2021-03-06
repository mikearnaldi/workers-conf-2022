import * as Effect from "@effect/core/io/Effect";
import * as Exit from "@effect/core/io/Exit";
import * as Schedule from "@effect/core/io/Schedule";
import { pipe } from "@tsplus/stdlib/data/Function";
import * as Http from "./04-http";

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

export const getTodos = (ids: number[]) =>
  pipe(
    Effect.forEachPar(
      () => ids,
      (id) => getTodo(id)
    ),
    Effect.withParallelism(10)
  );


// Effect.unsafeRunAsyncWith(getTodo(0), (exit) => {
//   if (Exit.isFailure(exit)) {
//     console.error(`Unexpected failure: ${JSON.stringify(exit.cause)}`)
//   }
// })
