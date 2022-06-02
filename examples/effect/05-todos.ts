import * as T from "@effect/core/io/Effect";
import * as S from "@effect/core/io/Schedule";
import * as Chunk from "@tsplus/stdlib/collections/Chunk";
import { pipe } from "@tsplus/stdlib/data/Function";
import * as H from "./04-http";

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

export const getTodos = (ids: number[]) =>
  pipe(
    T.forEachPar(
      () => ids,
      (id) => getTodo(id)
    ),
    T.withParallelism(10)
  );
