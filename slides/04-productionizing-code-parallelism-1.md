---
layout: center
---

# Productionizing Code

Parallelism

```ts twoslash
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return await res.json();
};

// ---cut---


const getTodos = async (from: number, to: number): Promise<unknown[]> => {
  const todos: Promise<unknown>[] = [];
  for (let n = from; n < to; n++) {
    todos.push(getTodo(n));
  }
  return Promise.all(todos);
};

```

---

# Effect

```ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---


import * as T from "@effect/core/io/Effect"
import { pipe } from "@tsplus/stdlib/data/Function"

const main = pipe(
  T.succeed(() => console.log("hello world")),
  T.repeatN(5)
)

```
