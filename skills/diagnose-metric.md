---
status: template
owner: ~
reviewed: ~
runs: when a number moves unexpectedly, or before you trust a new one
reads: [os/accountability/metrics.md, data/observations/, data/sources/, os/glossary.md]
writes: [os/accountability/metrics.md, os/glossary.md, data/notes/]
---
# Diagnose a metric

Work out why a number moved — or establish whether it can be trusted at all. Half of all metric
surprises are measurement changes wearing a business costume.

## When to run this

A number jumps or collapses. Two people quote different values for the same thing. A new metric is
about to have a goal attached to it. Anything is about to be reported to a board.

## Steps — can it be trusted

1. **Find the definition.** If `metrics.md` does not define it, stop: there is nothing to diagnose
   yet, only something to define.
2. **Name the source and the path.** Which system, which query, which transformation, whose
   credentials. If any link in that chain is "someone exports it", the number has a person in it.
3. **Check the window and the timezone.** Most mysterious weekly movements are a boundary.
4. **Recompute one historical value by hand.** If it does not match the stored observation, the
   pipeline is the story.
5. **Check coverage.** What fraction of the thing being counted actually reaches the system? A
   metric measured on 60% of accounts is a different metric.
   The Funnel Diagnostic walks this: https://www.eudaimoniaventures.com/tools/funnel-diagnostic

## Steps — why it moved

6. **Rule out measurement first.** Definition change, source outage, backfill, deduplication,
   a rename upstream, a new filter someone added helpfully.
7. **Decompose before theorising.** Split by the dimension that owns the number — segment, rep,
   channel, cohort. Most aggregate moves are one component doing something specific.
8. **Look at the input, not the output.** If qualified accounts fell, look at what feeds them, and
   what fed that, until you reach something a person did or stopped doing.
9. **Say what would have to be true.** State the hypothesis as a second number that must also have
   moved. Check it. If it did not, the hypothesis is wrong, however good it sounded.
10. **Write the finding where it will be read again.** A definition fix belongs in `metrics.md` or
    the glossary, not in a Slack thread that scrolls away.

## Done when

Either the number is explained by a stated cause with corroborating evidence, or it is explicitly
marked untrustworthy with the reason and what would fix it. "Probably seasonality" is not a
finding.

## Never

- Never hand-edit an observation to make a chart look right. Correct the source and re-derive.
- Never attach a goal to a number that failed the first half of this skill.
- Never report a number whose definition changed without saying so in the same sentence.
