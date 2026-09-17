---
status: template
owner: ~
reviewed: ~
runs: last two weeks of the quarter
reads: [os/planning/quarterly/okrs.md, os/planning/quarterly/roadmap.md, os/planning/charters/, os/direction/annual-priorities.md, data/observations/]
writes: [os/planning/quarterly/okrs.md, os/planning/quarterly/retrospective.md, os/planning/quarterly/roadmap.md, os/accountability/goals.md]
---
# Plan the quarter

Close the quarter honestly, then open the next one. Two halves, in that order, because a plan made
before the grade is a plan that repeats the same mistake.

## When to run this

The last two weeks of a quarter. Grading in week one, setting in week two, ratified before day one
of the new quarter — not three weeks into it.

## Steps — closing

1. **Grade every key result against what it actually said.** The number at the cutoff, not the
   number plus an explanation.
2. **Separate missed from mis-set.** A KR that was never worked is a prioritisation failure. A KR
   that was worked hard and missed is a modelling failure. They have different fixes.
3. **Write the retrospective as decisions, not feelings.** Three things to keep, three to change,
   each with an owner. File it in `os/planning/quarterly/retrospective.md`.
4. **Carry nothing silently.** Anything rolling into next quarter gets re-argued on its merits or
   it dies here.

## Steps — opening

5. **Re-read direction first.** `os/direction/annual-priorities.md` and `north-star.md`. If the
   quarter's bets do not visibly serve one of them, one of the two documents is wrong.
6. **Set three to five objectives.** More than five means none of them is a priority.
7. **Write key results as numbers with a source.** For each one, name the file or system the value
   will come from. A KR nobody can measure on a Monday is a slogan.
8. **Reconcile with the roadmap and the charters.** Every KR should map to work someone owns; every
   large piece of work should serve a KR or be deliberately unattached.
9. **Refresh individual goals.** Run `set-accountability` for anyone whose number or target
   changes. Metrics are the job and colour the card; KRs are the quarter's bets and do not.
10. **Ratify on a date, in a room, with the owners present.** Then change `status:` to `live`.

## Done when

`okrs.md` is `live` with an owner per objective, the retrospective is filed, `goals.md` reflects
the new quarter, and the roadmap and charters do not contradict any of it.

## Never

- Never grade and re-plan in the same session. The grade will get softened to protect the plan.
- Never carry a KR forward without re-deciding it.
- Never open a quarter with objectives that have no owner.
