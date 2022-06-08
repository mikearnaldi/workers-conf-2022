import * as Effect from "@effect/core/io/Effect";
import * as Schedule from "@effect/core/io/Schedule";
import * as Duration from "@tsplus/stdlib/data/Duration";
import * as Either from "@tsplus/stdlib/data/Either";
import { pipe } from "@tsplus/stdlib/data/Function";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export const request = (input: RequestInfo, init?: RequestInit | undefined) =>
  Effect.asyncInterrupt<never, FetchError, Response>((resume) => {
    const controller = new AbortController();
    fetch(input, { ...(init ?? {}), signal: controller.signal }).then((response) => {
      resume(Effect.succeed(() => response));
    }).catch((error) => {
      resume(Effect.fail(() => new FetchError(error)));
    });
    return Either.left(Effect.succeed(() => {
      controller.abort();
    }));
  });

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const jsonBody = (input: Response) =>
  Effect.tryCatchPromise(
    (): Promise<unknown> => input.json(),
    (error) => new JsonBodyError(error)
  );

export const defaultRetrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(() => Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30)))
);
