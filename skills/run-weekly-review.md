---
status: template
owner: ~
reviewed: ~
runs: weekly, same day, before the meeting
reads: [data/observations/, os/accountability/goals.md, os/accountability/status-rules.md, os/direction/guardrails.md, os/execution/escalations.md]
writes: [reports/weekly/<date>.md, os/decisions/log.md, data/commitments/]
---
# Run the weekly review

Assemble what changed, apply the rules, and surface only what needs a decision. The output is a
short document, not a meeting that reads numbers aloud.

## When to run this

Same day every week, before the meeting, from a fixed cutoff. A moving cutoff makes two weeks
incomparable.

## Steps

1. **Take the cutoff.** Note the date and time. Every number in the report comes from on or before
   it, including the ones that arrive late and would have looked better.
2. **Pull the observations.** Latest value per metric from `data/observations/`, with its date.
3. **Apply `status-rules.md` mechanically.** Do not adjust a colour because you know the context.
   If the rule gives the wrong answer, the rule is wrong — change the rule, in a separate change,
   with a reason.
4. **Flag staleness separately from performance.** A metric that has not been updated in three
   weeks is not green. It is unknown, and that is the finding.
5. **Check the guardrails.** `os/direction/guardrails.md`. A breach outranks every other item on
   the agenda.
6. **Read last week's commitments.** Anything promised and not done goes at the top, by name and
   with its age. This is the single highest-value part of the ritual and the first thing that gets
   dropped.
7. **Write the report: what changed, what is off track, what needs a decision this week.** Three
   sections. Nothing that is on track and uninteresting.
8. **In the meeting, decide.** Every item leaves as a decision, a commitment with an owner and a
   date, or an explicit "accepted, no action".
9. **Write the outcomes back.** Decisions to `os/decisions/log.md`, commitments to
   `data/commitments/`. If they only exist in the meeting notes, they did not happen.

## Done when

`reports/weekly/<date>.md` exists, every red has an owner and a next step, and every commitment
made in the room is written down where next week's run will read it.

## Never

- Never let the report be written by the person being reported on.
- Never negotiate a colour in the meeting.
- Never carry an unmet commitment forward without naming it.
