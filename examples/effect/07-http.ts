import * as Effect from "@effect/core/io/Effect";
import * as Layer from "@effect/core/io/Layer";
import * as Metrics from "@effect/core/io/Metrics";
import * as Schedule from "@effect/core/io/Schedule";
import * as Duration from "@tsplus/stdlib/data/Duration";
import * as Either from "@tsplus/stdlib/data/Either";
import { pipe } from "@tsplus/stdlib/data/Function";
import { Service } from "@tsplus/stdlib/service/Service";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const HttpRequestCount = pipe(
  Metrics.counter("HttpRequest"),
  Metrics.fromConst(() => 1)
)

export const makeHttpService = () => {
  const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
    pipe(
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
      }),
      HttpRequestCount
    );
  const jsonBody = (input: Response) =>
    Effect.tryCatchPromise(
      (): Promise<unknown> => input.json(),
      (error) => new JsonBodyError(error)
    );
  const defaultRetrySchedule = pipe(
    Schedule.exponential(Duration.millis(10), 2.0),
    Schedule.either(Schedule.spaced(() => Duration.seconds(1))),
    Schedule.compose(Schedule.elapsed),
    Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30)))
  );
  return {
    request,
    jsonBody,
    defaultRetrySchedule
  };
};

export interface HttpService extends ReturnType<typeof makeHttpService> {}
export const HttpService = Service.Tag<HttpService>();
export const LiveHttpService = Layer.fromValue(HttpService, makeHttpService);
