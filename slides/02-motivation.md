---
layout: center
---

# Motivation

## From Proof of Concept to Producton

Writing good code has never been easy, when hacking together POCs we focus on the happy path and we don’t care too much about performance, when not trying to write good code we can move fast, or at least we think we can.

All is good up till the point where we start productionizing what we’ve built and problems start to bubble up from everywhere.

Let's have a look at what it usually takes!

---
layout: full
---

# Motivation

## POC Like Code

We would like to build a small application that fetches a list of `TODOs` from the [{JSON} Placeholder](https://jsonplaceholder.typicode.com) API.

We will start by creating some basic functions that enable us to fetch the todos:

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

# Motivation
## Requirements

Production code has to deal with reality, and reality is everything but the happy path, to ensure things work in production we end up having to do a lot more.

For example:
- Concurrency, ideally controlled
- Interruption, ongoing operations should be interrupted on failures and on graceful shutdown, ideally in a safe manner (e.g. stopping one thing that depends on another first stops the other then stops)
- Resilience on errors, ideally fine tuned depending on the error and "intelligent" (e.g. capped exponential backoff)
- Logging, ideally multi-level with escalation
- Metrics, the application should collect both system level metrics and custom ones
- Tracing, the application should be observable via e.g. OpenTelemetry
- Etc...

---

# Motivation
## Concurrency

Let's start by making things parallel.

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

Good... Now let's limit the parallelism to never fetch more than 5 at the same time.

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

# Motivation
## Concurrency

Is that it? We are not really maximising parallelism, we are simply chunking up requests... This may be better:

<style>
pre .code-container {
  overflow: hidden;
  font-size: 0.9rem;
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

# Motivation
## Interruption

We will be using the javascript standard `AbortController`, doing better wouldn't fit the slides:

<style>
pre .code-container {
  overflow: hidden;
  font-size: 0.7rem;
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

---

# Motivation
## Resilience

Let's implement a minimal exponential backoff retry policy with an optional cap and limit:

<style>
pre .code-container {
  overflow: hidden;
  font-size: 0.9rem;
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
