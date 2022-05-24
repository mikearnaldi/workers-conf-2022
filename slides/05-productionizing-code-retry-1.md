---
layout: center
---

# Productionizing Code

Resilience on failures

```ts twoslash
const withRetry =
  (n: number) =>
  async <T>(body: () => Promise<T>): Promise<T> => {
    try {
      return await body();
    } catch (e) {
      if (n > 0) {
        return await withRetry(n - 1)(body);
      }
      throw e;
    }
  };

const getTodo = (id: number): Promise<unknown> =>
  withRetry(10)(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return await res.json();
  });
```
