---
status: live
owner: Chief of Staff
reviewed: 2026-09-12
read_by: [accountability-dashboard, weekly-review]
---
# Status rules

How a number plus a target becomes a colour. Decided once, here, so that nobody negotiates it in
the meeting.

## Performance

For a `linear` goal, expected progress at a date is the target multiplied by the fraction of the
quarter elapsed. Attainment is actual divided by expected — inverted for metrics where down is
good.

| Attainment | Colour | Label |
|---|---|---|
| 95% or above | green | On plan |
| 80% up to 95% | yellow | Slightly behind |
| below 80% | red | Well behind plan |

For a `standard`, attainment is measured against the threshold itself, with the same three bands.

## States that are not performance

| State | When | Shown as |
|---|---|---|
| needs-setup | The person has no row in `goals.md` | grey, "No metric agreed" |
| no-target | A metric exists, no number is agreed | grey, "No target" |
| unavailable | A goal exists, no observation has arrived | grey, "Data unavailable" |
| stale | The latest observation is more than 14 days old | the colour, plus a stale flag |

## The rules behind the rules

- **A colour is never averaged and never inherited.** A manager's card shows the manager's own
  number. Rolling a team up into one green square is how bad news stops travelling.
- **Stale is not green.** An old number is unknown, and unknown is the finding.
- **Proposed is shown as proposed.** A target nobody has agreed to does not get to look agreed.
- **If the rule gives the wrong answer, change the rule** — in its own change, with a reason, and
  not in the meeting where it produced an inconvenient colour.
