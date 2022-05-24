---
layout: center
---

# Productionizing Code

Cancelling requests on failures

```ts
const getTodos = async (from: number, to: number): Promise<unknown[]> => {
  const controller = new AbortController();
  const promises: P[] = [];
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
```
