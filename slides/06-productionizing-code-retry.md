---
layout: center
---

# Productionizing Code

Resilience on failures

```ts
const withLimitedRetry =
  (n: number) =>
  <T, ARGS extends unknown[]>(body: (...args: ARGS) => Promise<T>) =>
  async (...args: ARGS): Promise<T> => {
    try {
      return await body(...args);
    } catch (e) {
      if (n > 0) {
        return await withLimitedRetry(n - 1)(body)(...args);
      }
      throw e;
    }
  };

const getTodo = withLimitedRetry(10)(async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return await res.json();
});
```
