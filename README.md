# Company OS

A company runs on a few dozen decisions: what it is for, who owns what, what the numbers mean,
when people talk, and what was already decided. In most companies those live in someone's head,
a deck from March, and three Slack threads.

This is what it looks like when they live in files instead.

```
os/                  what a human decided        ← changed by a person, in a pull request
├── direction/       mission · vision · strategy · north star · guardrails · principles
├── planning/        annual · quarterly OKRs · roadmap · charters
├── accountability/  org chart · teams · metrics · goals · status rules · decision rights
├── execution/       programme · gates · work links · escalations
├── reporting/       weekly · one-to-ones · monthly · all-hands · board · investor
├── decisions/       log · frameworks · resource allocation
├── people/          expectations · hiring · onboarding · performance
└── customers/       signal

data/                what was measured           ← written by machines, never hand-edited
reports/             what was generated          ← derived, safe to overwrite
skills/              the repeatable jobs         ← how to run a quarter, a review, a report
```

## Why files

**A diff means someone changed their mind.** When the strategy lives in a file, a change to it is
a reviewable event with an author and a date. When it lives in a deck, it changes silently.

**One vocabulary.** `status-rules.md` decides once what red means, so nobody negotiates it in the
meeting.

**Anything can read it.** A dashboard, a report generator, an AI assistant briefed at the start of
every session. The files are the database, and there is no database.

**It survives you.** Git history is the company's record of how it came to think what it thinks.

## How to use this

1. **Take it.** Use this as a template, or just copy the `os/` folder into a repo you already have.
2. **Start with three files.** `direction/north-star.md`, `accountability/metrics.md`,
   `accountability/status-rules.md`. Those three do most of the work.
3. **Delete what you do not need.** A ten-person company does not need `investor.md`. An empty
   file is worse than a missing one.
4. **Change `status:` as you go.** Every file is `template` until you write your own, then `draft`,
   then `live` once someone owns it. `npm run check` tells you where you are.

Nothing here needs to be finished before it is useful. A company that has honestly filled in four
of these files is further along than one with a full wiki nobody trusts.

## What is in each file

The same three parts: what the file is for, the questions it has to answer, and a worked example
in a company that does not exist. Replace the example. Keep the questions.

## Checking your own

```bash
npm run check
```

Validates that every file under `os/` has frontmatter, a recognised status, and an owner if it
claims to be live. It does not check whether what you wrote is true — that is your job.

## The instruments

Three of these squares have a free tool behind them, no sign-up, nothing leaves your browser:

| File | Tool |
|---|---|
| `accountability/goals.md` | [The Goal Ladder](https://www.eudaimoniaventures.com/tools/goal-ladder) — walk a company goal down to individual numbers |
| `accountability/metrics.md` | [The Funnel Diagnostic](https://www.eudaimoniaventures.com/tools/funnel-diagnostic) — whether a number is measured well enough to act on |
| `reporting/one-on-ones.md` | [The 1:1 System](https://www.eudaimoniaventures.com/tools/one-to-ones) — weekly and monthly templates |

## Who made this

[Harri Thomas](https://www.eudaimoniaventures.com/about), Eudaimonia Ventures. This is the
operating model I use with founders and run myself. If you want help putting it in place,
[that is a conversation](https://www.eudaimoniaventures.com/inquire).

MIT licensed. Take it, change it, no attribution needed.
