const withRetry = (n: number) =>
  <T, ARGS extends unknown[]>(body: (...args: ARGS) => Promise<T>) =>
    async (...args: ARGS): Promise<T> => {
      try {
        return await body(...args);
      } catch (e) {
        if (n > 0) {
          return await withRetry(n - 1)(body)(...args);
        }
        throw e;
      }
    };

const getTodo = withRetry(10)(async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return await res.json();
});

const getTodos = async (from: number, to: number) => {
  const promises: Promise<any>[] = [];
  for (let n = from; n < to; n++) {
    promises.push(getTodo(n));
  }
  return Promise.all(promises);
};

const main = async () => {
  const todos = await getTodos(1, 10);
  console.log(todos);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
