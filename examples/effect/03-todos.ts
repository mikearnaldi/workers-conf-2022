import * as T from "@effect/core/io/Effect";
import * as S from "@effect/core/io/Schedule";
import { pipe } from "@tsplus/stdlib/data/Function";
import * as H from "./02-http";

export const getTodo = (id: string) =>
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
