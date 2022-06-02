---
layout: center
---

# POC Like Code

Fetching a list of TODOs from a public API

```ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return await res.json();
};
const getTodos = async (from: number, to: number) => {
  const todos: unknown[] = [];
  for (let n = from; n < to; n++) {
    todos.push(await getTodo(n));
  }
  return todos;
};

const main = async () => {
  const todos = await getTodos(1, 10);
  console.log(todos);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
```
