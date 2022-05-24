---
layout: center
---

# Productionizing Code

Parallelism

Remaining Concerns on the previous code:

1. it will run every request in parallel, do we really want unbounded parallelism?
2. it will exit at the first failure, shouldn't we cancel remaining requests?
