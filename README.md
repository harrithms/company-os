# Company OS

A company runs on a few dozen decisions: what it is for, who owns what, what the numbers mean,
when people talk, and what was already decided. In most companies those live in someone's head,
a deck from March, and three Slack threads.

This is what it looks like when they live in files instead.

```
                                       ┌──────────────────────────────────┐
                                       │            direction/            │
                                       │                                  │
                                       │  read first — every layer below  │
                                       │  is constrained by what is here  │
                                       │                                  │
                                       │   mission · vision · strategy    │
                                       │     north-star · guardrails      │
                                       │  principles · annual-priorities  │
                                       └─────────────────┬────────────────┘
                                                         │
      ┌────────────────┬─────────────────┬───────────────┬───────────────┬───────────────┬───────────────┐
      ▼                ▼                 ▼               ▼               ▼               ▼               ▼
┌───────────┐ ┌─────────────────┐ ┌─────────────┐ ┌─────────────┐ ┌────────────┐ ┌──────────────┐ ┌────────────┐
│ planning/ │ │ accountability/ │ │ execution/  │ │ reporting/  │ │ decisions/ │ │ people/      │ │ customers/ │
├───────────┤ ├─────────────────┤ ├─────────────┤ ├─────────────┤ ├────────────┤ ├──────────────┤ ├────────────┤
│ annual    │ │ metrics         │ │ programme   │ │ weekly      │ │ log        │ │ expectations │ │ signal     │
│ okrs      │ │ goals           │ │ gates       │ │ one-on-ones │ │ frameworks │ │ hiring       │ │            │
│ roadmap   │ │ org-chart       │ │ work-links  │ │ monthly     │ │ resources  │ │ onboarding   │ │            │
│ retro     │ │ teams           │ │ escalations │ │ all-hands   │ │            │ │ performance  │ │            │
│ charters  │ │ status-rules    │ │             │ │ board       │ │            │ │              │ │            │
│           │ │ rights          │ │             │ │ investor    │ │            │ │              │ │            │
└───────────┘ └─────────────────┘ └─────────────┘ └─────────────┘ └────────────┘ └──────────────┘ └────────────┘

How they reference each other
  north-star ──► metrics ──► goals ──► status-rules   the accountability chain, in order
  okrs ◄──► roadmap ◄──► charters                     what we bet, what we build, who owns it
  goals ◄──► one-on-ones ◄──► performance             the same number, three conversations
  status-rules ──► weekly ──► decisions/log           a colour becomes a decision, and is kept
  guardrails ──► weekly, board                        what must stay true while you chase growth
  customers/signal ──► roadmap, okrs                  evidence entering the plan
  decision-rights ◄──► escalations ◄──► log           who decides, when stuck, and what stuck

Four folders, and the split is the point
  os/        what a human decided     a diff here means someone changed their mind
  data/      what was measured        dated, appended, never hand-edited
  reports/   what was generated       derived from the two above, safe to overwrite
  skills/    how a job gets done      the same procedure whoever — or whatever — runs it

skills/ is what makes the rest of it multiplayer
      os/  the shared context   ┐
                                ├──►  skills/<job>.md  ──►  reports/  ·  a proposed change to os/
    data/  what happened        ┘             │
                                              │   one written procedure, three kinds of runner
                               ┌──────────────┴──────────────┐
                               │  a founder on a Monday      │
                               │  someone in their week one  │
                               │  an agent with repo access  │
                               └─────────────────────────────┘

  set-accountability    one person, one metric, one goal, and who agreed it
  plan-quarter          grade the quarter honestly, then set the next one
  run-weekly-review     what changed, what is off track, what needs deciding
  diagnose-metric       why the number moved — or whether it can be trusted at all
  prepare-report        weekly, monthly, board, generated from the files
  update-company-context  keep os/ true when something changes upstream

  The one rule: a skill reads os/ and data/, writes reports/, and only ever *proposes* a change
  to os/. A report can be regenerated; a decision cannot. So an agent drafts the weekly review,
  and a person still ratifies the goal.

Free instruments behind three of the files
  accountability/metrics.md   The Funnel Diagnostic   is this number measured well enough to act on?
  accountability/goals.md     The Goal Ladder         does a company goal reach one person's number?
  reporting/one-on-ones.md    The 1:1 System          weekly and monthly, different questions
```

The same diagram lives in [`MAP.txt`](MAP.txt), so it can be pasted into a terminal, a README of
your own, or the top of a planning doc.

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

## Making it multiplayer

Most AI use inside a company is single-player: a private chat window, a prompt nobody else has, and
the company explained again from memory every session. Nothing accumulates, and two people asking
the same question get two different answers.

`os/` fixes the context half of that — it is the shared brief. [`skills/`](skills/) fixes the other
half: the recurring jobs, written down as procedures that read those files. Six of them, covering
setting accountability, planning a quarter, running the weekly review, diagnosing a metric,
preparing a report, and keeping `os/` true.

The point is that the runner becomes interchangeable. A founder on a Monday morning, someone in
their first week, and an agent with read access to the repository all follow the same steps over
the same facts — and when a step turns out to be wrong, fixing it once improves everyone's next run.

One rule makes this safe to hand to an agent: a skill reads `os/` and `data/`, writes `reports/`,
and only ever *proposes* a change to `os/`. A generated report can be regenerated; a decision
cannot. So an agent can draft the weekly review, and a person still ratifies the goal.

## Checking your own

```bash
npm run check
```

Validates that every file under `os/` and `skills/` has frontmatter, a recognised status, and an owner if it
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
