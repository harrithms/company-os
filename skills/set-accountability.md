---
status: template
owner: ~
reviewed: ~
runs: when someone takes on a new area, or at quarter open
reads: [os/accountability/metrics.md, os/accountability/goals.md, os/accountability/org-chart.md, os/accountability/status-rules.md]
writes: [os/accountability/goals.md, os/decisions/log.md]
---
# Set accountability

Give one person one metric and one goal, and record who agreed it and when. This is the job that
most companies do in a meeting and then never write down, which is why six weeks later nobody
agrees what was decided.

## When to run this

A person changes role. A team is created. A metric goes live. Quarter open. Any moment where
someone is about to become responsible for a number.

## What you need in front of you

- `os/accountability/org-chart.md` — who this person reports to, and what their team owns
- `os/accountability/metrics.md` — whether the metric already exists and is defined
- `os/accountability/goals.md` — the current targets, so the new one is consistent with them
- `os/direction/north-star.md` — the number this one has to eventually roll up to

## Steps

1. **Name the one metric.** One. If two are proposed, ask which one you would use to decide
   whether this person had a good quarter, and use that.
2. **Check it is defined.** Open `metrics.md`. If there is no definition, no source and no owner
   of the data, you are setting a goal on a number nobody can compute. Run `diagnose-metric`
   first and come back.
3. **Trace it upwards.** Say out loud how this number moving improves the north star. If the
   sentence needs three hops and a hope, the metric is wrong for this person.
   The Goal Ladder does this on screen: https://www.eudaimoniaventures.com/tools/goal-ladder
4. **Set the target and the shape.** A number, a date, and whether progress is expected to be
   linear or to arrive in milestones. Without the shape, "behind" is not computable mid-quarter.
5. **Get it agreed by the person who owns it.** Not their manager. Theirs.
6. **Write it down as `proposed` or `ratified`.** Add the row to `goals.md` with the date and who
   agreed. If they have not agreed yet, it is `proposed`, and it stays visibly proposed.
7. **Log the decision** in `os/decisions/log.md` if this changes who is accountable for what.

## Done when

`goals.md` has a row with metric, target, shape, state and date. The person could recite their
number from memory. `npm run check` passes.

## Never

- Never invent a target to fill a gap. `no-target` is a truthful state; a made-up number is not.
- Never give one person two metrics because the conversation was difficult.
- Never mark something `ratified` on someone's behalf.
