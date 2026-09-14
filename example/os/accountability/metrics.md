---
status: live
owner: Chief of Staff
reviewed: 2026-09-12
read_by: [accountability-dashboard, weekly-review, diagnose-metric]
---
# Metrics

What each number means, where it comes from, and which direction is good. A metric with no source
named here is a metric nobody can compute on a Monday.

| Metric | Unit | Definition | Source | Good |
|---|---|---|---|---|
| Weekly active teams | teams | Teams with 3+ members active in a rolling 7 days | Product analytics | up |
| Net new ARR | AUD | New plus expansion minus churn, closed in the quarter | CRM | up |
| Qualified accounts | count | Accounts accepted by revenue, not marketing-sourced leads | CRM | up |
| Runway | months | Cash divided by trailing 3-month net burn | Finance close | up |
| Activated in 14 days | % | New teams reaching first shared workspace within 14 days | Product analytics | up |
| P75 bug lead time | days | 75th percentile, bug reported to shipped | Issue tracker | down |
| First response time | hours | Median first human reply, business hours | Support desk | down |
| Report on time | % | Weekly report published before the Monday cutoff | This repository | up |

**Weekly active teams** is the north star. It is defined, and it is measured, and it has no agreed
target — which is why the dashboard shows it as `no-target` rather than guessing one.
