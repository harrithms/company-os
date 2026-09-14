---
status: template
owner: ~
reviewed: ~
read_by: [weekly-review, all-hands, board]
---
# North star

The single number that tells you whether the bet is working.

## What this file has to answer

- What is the number?
- How exactly is it computed, and from what source?
- Who owns it?
- What is it today, and what would good look like in a year?
- What does it deliberately ignore?

## Yours

_Delete everything below and write your own._

**Number.** Weekly active priced accounts.

**Definition.** Distinct accounts that completed at least one price change in a rolling 7 days.
Source: product database, `events.price_committed`. Excludes internal accounts.

**Owner.** Head of Product.

**Today.** 412. **A year out.** 2,000.

**Ignores.** Revenue, and deliberately so — this number is about whether the habit forms.

---

If you cannot say how it is computed, you do not have a north star, you have a slogan.
