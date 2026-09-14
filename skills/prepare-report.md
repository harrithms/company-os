---
status: template
owner: ~
reviewed: ~
runs: weekly, monthly, and at quarter open for the board
reads: [os/reporting/, data/observations/, data/commitments/, os/accountability/goals.md, os/planning/quarterly/okrs.md]
writes: [reports/weekly/, reports/monthly/, reports/board/]
---
# Prepare a report

Generate the weekly, monthly or board document from the files. The numbers are assembled; the
judgment is written by a person. Those two jobs should never be done in the same pass.

## When to run this

To the published cadence in `os/cadence.json`. The value of a report is largely that it arrives on
a known day, so the audience can plan to read it.

## Steps

1. **Pick the audience and open its definition.** `os/reporting/<audience>.md` says what that
   report is for, who reads it, and what it must contain. Weekly, monthly, board and investor are
   genuinely different documents; the commonest failure is sending one of them to all four.
2. **Fix the cutoff and state it in the document.** On the page, near the top.
3. **Assemble the numbers from the files.** Never by retyping from a deck or another report. A
   number that is retyped is a number that will eventually disagree with itself.
4. **Mark provenance.** For each figure: its source and its date. Anything estimated, unaudited or
   partial says so beside itself.
5. **Fill the judgment sections last, as a person.** What it means, what worries you, what you are
   going to do. This is the only part a reader cannot get elsewhere, and the only part that should
   take real time.
6. **State what is missing.** Metrics with no data, goals not yet set, sections deliberately
   omitted. A gap declared is information; a gap hidden is a trap.
7. **Diff against last period.** Any figure that has changed for a prior period needs a line
   saying why. Silently restated history is how trust in reporting dies.
8. **File it in `reports/` and link it from where the audience already looks.**

## Done when

The document is generated, dated, provenanced, has its judgment written by the accountable person,
and could be regenerated from the same cutoff to the same numbers.

## Never

- Never let a report be the first place a number appears. Reports read the OS; they do not author it.
- Never round toward the story.
- Never omit a bad number that the audience saw last period.
