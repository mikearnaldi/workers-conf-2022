---
layout: center
---

# Productionizing Code

Cancelling requests on failures

```ts
const withRetry =
  (n: number, signal: AbortSignal) =>
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
```
