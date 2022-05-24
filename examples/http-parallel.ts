const withRetry = (n: number, signal: AbortSignal) =>
  async <T>(body: () => Promise<T>): Promise<T> => {
    signal.throwIfAborted();
    try {
      return await body();
    } catch (e) {
      if (n > 0) {
        return await withRetry(n - 1, signal)(body);
      }
      throw e;
    }
  };

const getTodo = (id: number, signal: AbortSignal): Promise<unknown> =>
  withRetry(10, signal)(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { signal });
    return await res.json();
  });

const getTodos = async (from: number, to: number): Promise<unknown[]> => {
  const controller = new AbortController();
  const promises: Promise<any>[] = [];
  for (let n = from; n < to; n++) {
    promises.push(getTodo(n, controller.signal));
  }
  try {
    return Promise.all(promises);
  } catch (e) {
    controller.abort(e);
    throw e;
  }
};

const main = async () => {
  const todos = await getTodos(1, 10);
  console.log(todos);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
