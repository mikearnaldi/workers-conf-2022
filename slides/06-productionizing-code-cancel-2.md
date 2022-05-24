---
layout: center
---

# Productionizing Code

Cancelling requests on failures

```ts
const getTodo = (id: number, signal: AbortSignal): Promise<unknown> =>
  withRetry(
    10,
    signal
  )(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      { signal }
    );
    return await res.json();
  });
```
