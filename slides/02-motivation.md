---
layout: full
---

# POC Like Code

Building a small application that fetches a list of `TODOs` from the [{JSON} Placeholder](https://jsonplaceholder.typicode.com) API.

```ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  
  return await res.json();
};

const getTodos = async (ids: number[]) => {
  const todos: unknown[] = [];

  for (const id of ids) {
    todos.push(await getTodo(id));
  }

  return todos;
};

const main = async () => {
  const todos = await getTodos([1, 2, 3, 4, 5]);

  for (const todo of todos) {
    console.log(`Got a todo: ${JSON.stringify(todo)}`);
  }
};
```

---
layout: center
---

# From POC to Production

Production code has to deal with reality, and reality is everything but the happy path. 

Let's see what it takes!

---
layout: full
---

# Concurrency

Maximising efficiency requires doing things in parallel as much as possible.

Unbounded parallelism isn't too hard:

```ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return await res.json();
};
// ---cut---
const getTodos = async (ids: number[]) => {
  const todos: Promise<unknown>[] = [];
  for (const id of ids) {
    todos.push(getTodo(id));
  }
  return await Promise.all(todos);
};
```

Things gets more complicated when we want to control the concurrency.

```ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return await res.json();
};
// ---cut---
const getTodos = async (ids: number[]) => {
  const chunkSize = 5;
  const todos: unknown[] = [];
  for (let i = 0; i < ids.length; i += chunkSize) {
    const chunk = ids.slice(i, i + chunkSize);
    todos.push(await Promise.all(chunk.map(getTodo)))
  }
  return todos;
};
```

---
layout: full
---

# Concurrency

Is that it? 

We are not really maximising parallelism, we are simply chunking up requests... This may be better:

<style>
pre .code-container {
  overflow: hidden;
  font-size: 14px;
}
pre .code-container .line {
  padding-bottom: 3px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>

```ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
const getTodo = async (id: number): Promise<unknown> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return await res.json();
};
// ---cut---
const getTodos = (ids: number[], limit = 5) => {
  const remaining = ids.slice(0, ids.length).map((id, index) => [id, index] as const).reverse();
  const results: unknown[] = [];
  return new Promise<unknown[]>((resolve, reject) => {
    let pending = 0;
    for (let i = 0; i < limit; i++) {
      fetchRemaining();
    }
    function fetchRemaining() {
      if (remaining.length > 0) {
        const [remainingToFetchId, remainingToFetchIdx] = remaining.pop()!;
        pending++;
        getTodo(remainingToFetchId).then((res) => {
          results[remainingToFetchIdx] = res;
          pending--;
          fetchRemaining();
        }).catch((err) => reject(err));
      } else if (pending === 0) {
        resolve(results);
      }
    }
  });
};
```

---
layout: full
---

# Interruption

Ongoing operations should be interrupted on failures:

<style>
pre .code-container {
  overflow: hidden;
  font-size: 11px;
}
pre .code-container .line {
  padding-bottom: 0px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>


```ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const getTodo = async (id: number, opt?: { signal?: AbortSignal; }): Promise<unknown> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { signal: opt?.signal });
  return await res.json();
};
const getTodos = (ids: number[], opt?: { limit?: number; signal?: AbortSignal; }) => {
  const limit = opt?.limit ?? 5;
  const controller = new AbortController();
  const remaining = ids.slice(0, ids.length).map((id, index) => [id, index] as const).reverse();
  const results: unknown[] = [];
  if (opt?.signal) {
    opt.signal.addEventListener("abort", () => {
      controller.abort();
    });
  }
  return new Promise<unknown[]>((resolve, reject) => {
    let pending = 0;
    for (let i = 0; i < limit; i++) {
      fetchRemaining();
    }
    function fetchRemaining() {
      if (remaining.length > 0) {
        const [remainingToFetchId, remainingToFetchIdx] = remaining.pop()!;
        pending++;
        getTodo(remainingToFetchId, { signal: controller.signal }).then((res) => {
          results[remainingToFetchIdx] = res;
          pending--;
          fetchRemaining();
        }).catch((err) => {
          controller.abort();
          return reject(err);
        });
      } else if (pending === 0) {
        resolve(results);
      }
    }
  });
};
```

And we still don't have interruption on program shutdown, and especially async interruption...

---
layout: full
---

# Resilience on errors

Our software should be resilient on failures, especially when dealing with things like http requests or any kind of network dependent activity.

<style>
pre .code-container {
  overflow: hidden;
  font-size: 14px;
}
pre .code-container .line {
  padding-bottom: 2px;
}
pre.shiki div.line {
  min-height: 0px;
}
</style>

```ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
// ---cut---
const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

const callWithRetry = async <A>(
  fn: () => Promise<A>,
  opt?: { limit?: number; cap?: number; base?: number; exp?: number; },
  depth = 0
): Promise<A> => {
  try {
    return await fn();
  } catch (e) {
    if (depth > (opt?.limit ?? 10)) {
      throw e;
    }
    await wait(Math.min((opt?.base ?? 2) ** depth * (opt?.exp ?? 10), opt?.cap ?? 2000));
    return callWithRetry(fn, opt, depth + 1);
  }
};

const getTodo = (id: number, opt?: { signal?: AbortSignal; }): Promise<unknown> =>
  callWithRetry(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { signal: opt?.signal });
    return await res.json();
  }, { limit: 10, cap: 2000, base: 2, exp: 10 });
```

That's a simple capped exponential backoff, missing timeouts and error specializaion.

---
layout: center
---

# We haven't even started
We'll be needing to figure out a long list of further requirements.

<v-clicks>

- Logging
- Metrics
- Tracing
- Dependency Injection
- Etc.

</v-clicks>

---
layout: center
---

# What about Maintainability?

The code looked pretty awful even to understand, let alone extending it...

