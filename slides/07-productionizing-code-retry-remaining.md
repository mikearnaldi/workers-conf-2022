---
layout: center
---

# Productionizing Code

Resilience on failures

Remaining Concerns on the previous code:

1. it will retry for any kind of error, is that ok?
2. it will retry immediately on failure, isn't capped exponential backoff kind of a standard?
