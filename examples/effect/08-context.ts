import { Effect, Chunk } from "./03-lib";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, unknown>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<unknown>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  ///const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  return Todos
})
