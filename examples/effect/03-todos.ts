import * as Effect from "@effect/core/io/Effect";
import * as Schedule from "@effect/core/io/Schedule";
import { pipe } from "@tsplus/stdlib/data/Function";
import * as Http from "./02-http";

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
