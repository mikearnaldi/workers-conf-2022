import * as Effect from "@effect/core/io/Effect";
import { pipe } from "@tsplus/stdlib/data/Function";
import * as undici from "undici";

export class RequestError {
  readonly _tag = "RequestError";
  constructor(readonly reason: unknown) {}
}

export const request = (
  url: URL,
  options?: Parameters<typeof undici.request>[1]
) =>
  Effect.tryCatchPromise(
    () => undici.request(url, options),
    (reason) => new RequestError(reason)
  );

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly reason: unknown) {}
}

export const decodeJsonBody = (
  response: undici.Dispatcher.ResponseData
) =>
  Effect.tryCatchPromise(
    (): Promise<unknown> => response.body.json(),
    (reason) => new JsonBodyError(reason)
  );

const getTodo = (id: number) =>
  pipe(
    request(new URL(`https://jsonplaceholder.typicode.com/todos/${id}`)),
    Effect.flatMap(decodeJsonBody)
  );

async function main() {
  const todo_1 = await getTodo(1);
  console.log(todo_1);
}

main();
