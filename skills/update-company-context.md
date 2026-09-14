---
status: template
owner: ~
reviewed: ~
runs: whenever something changes upstream, and on a monthly sweep
reads: [os/, data/sources/]
writes: [os/, os/decisions/log.md]
---
# Update the company context

Keep `os/` true. Every other skill reads these files, so a stale file here is a wrong answer
everywhere — quietly, and with full confidence.

## When to run this

Something changed in the real company: a reorganisation, a pricing change, a strategy shift, a
tool replaced, a person's remit moved. Plus a monthly sweep for the changes nobody announced.

## Steps

1. **Find the upstream change and its evidence.** A decision in a meeting, a document, a message
   from the person who owns it. Cite it.
2. **Work out which files are now wrong.** Use the map: a direction change cascades down to
   planning, accountability and reporting. Changing only the first file is the usual mistake.
3. **Change the minimum set, in one reviewable change.** One reason per change, so the history
   reads as a sequence of decisions rather than a sequence of edits.
4. **Update the frontmatter.** `reviewed:` to today. Promote `template` → `draft` → `live` when it
   is genuinely true and owned. Demote something to `draft` if it has stopped being true; that is
   a legitimate and useful move.
5. **Check the vocabulary.** A new term goes in `os/glossary.md` once, and every file uses that
   word. Two names for one thing costs a company more than it looks like it should.
6. **Log it if it was a decision, not a correction.** `os/decisions/log.md`: what was decided, by
   whom, when, and what it replaces.
7. **Run the check.** `npm run check`.
8. **Sweep monthly for silence.** List the `live` files whose `reviewed:` date is oldest and read
   the top three. Staleness does not announce itself.

## Done when

Nothing in `os/` contradicts anything else in `os/`, every changed file has a fresh `reviewed:`
date, the change has a reason in its history, and the check passes.

## Never

- Never update a fact without a source you can name.
- Never leave two files saying different things and plan to fix it later.
- Never mark something `live` because you would like it to be.
