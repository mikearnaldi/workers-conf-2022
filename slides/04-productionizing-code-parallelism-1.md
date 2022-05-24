---
layout: center
---

# Productionizing Code

Parallelism

```ts
const getTodos = async (from: number, to: number): Promise<unknown[]> => {
  const todos: Promise<unknown>[] = [];
  for (let n = from; n < to; n++) {
    todos.push(getTodo(n));
  }
  return Promise.all(todos);
};
```
