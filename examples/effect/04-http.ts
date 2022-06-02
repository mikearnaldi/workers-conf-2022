import * as T from "@effect/core/io/Effect";
import * as S from "@effect/core/io/Schedule";
import * as D from "@tsplus/stdlib/data/Duration";
import * as E from "@tsplus/stdlib/data/Either";
import { pipe } from "@tsplus/stdlib/data/Function";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

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

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const jsonBody = (input: Response) =>
  T.tryCatchPromise(
    (): Promise<unknown> => input.json(),
    (error) => new JsonBodyError(error)
  );

export const defaultRetrySchedule = pipe(
  S.exponential(D.millis(10), 2.0),
  S.either(S.spaced(() => D.seconds(1))),
  S.compose(S.elapsed),
  S.whileOutput(D.lowerThenOrEqual(D.seconds(30)))
);
