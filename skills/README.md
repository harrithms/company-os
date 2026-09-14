# skills/ — the repeatable jobs

A skill is one of the company's routines, written down well enough that a person or an agent can
run it and get the same shape of answer.

## Why this folder exists

Most AI use inside companies is single-player. Each person has their own chat window, their own
prompt, their own explanation of how the company works, retyped from memory every time. Nothing
accumulates. Two people ask the same question in the same week and get two different answers,
because they briefed it differently and neither briefing survived the conversation.

The fix is not a better prompt. It is putting the procedure and the context somewhere shared:

- **`os/` is the shared context.** What the company decided, in files, with a history.
- **`skills/` is the shared procedure.** How a recurring job gets done, in files, with a history.

Once both are in the repository, running a routine stops being a private act. The founder on a
Monday morning, the person who joined last week, and an agent with read access to the repo are all
working from the same instructions and the same facts. When the procedure turns out to be wrong,
you fix it once and everyone's next run is better — including the machine's. That is the whole
argument: it makes the company's knowledge work multiplayer, and AI is simply the newest player
that benefits.

```
      os/  the shared context   ┐
                                ├──►  skills/<job>.md  ──►  reports/  ·  a proposed change to os/
    data/  what happened        ┘             │
                                              │   one written procedure, three kinds of runner
                               ┌──────────────┴──────────────┐
                               │  a founder on a Monday      │
                               │  someone in their week one  │
                               │  an agent with repo access  │
                               └─────────────────────────────┘
```

## The rule that keeps it safe

A skill reads `os/` and `data/`, writes `reports/`, and **proposes** changes to `os/`. It never
authors truth unreviewed. A generated report can be overwritten and regenerated; a decision cannot.
So an agent may draft the weekly review, and a person still ratifies the goal.

That single rule is what makes it reasonable to give an agent repository access at all.

## The six

| Skill | The job |
|---|---|
| [`set-accountability`](set-accountability.md) | Give one person one metric and one goal, and record who agreed it |
| [`plan-quarter`](plan-quarter.md) | Grade the quarter honestly, then set the next one |
| [`run-weekly-review`](run-weekly-review.md) | Assemble what changed and surface what needs a decision |
| [`diagnose-metric`](diagnose-metric.md) | Work out why a number moved, or whether it can be trusted |
| [`prepare-report`](prepare-report.md) | Generate weekly, monthly or board from the files |
| [`update-company-context`](update-company-context.md) | Keep `os/` true when something changes upstream |

Six, because these are the routines that happen often enough that doing them differently each time
has a visible cost. A job that happens once is not a skill; it is a task.

## How a skill is written

Frontmatter declaring `runs`, `reads` and `writes` — the contract — then prose:

1. **When to run this.** The trigger. Vague triggers mean the routine quietly stops happening.
2. **What it reads.** Named files, so the run is reproducible and the dependency is visible.
3. **Steps.** Numbered, in order, each one an action. Include the judgment calls, not only the
   mechanics: the step that says *decompose before theorising* is the one that carries the
   expertise.
4. **Done when.** A checkable condition, not a feeling.
5. **Never.** The failure modes. This section does more work than the steps — it is where the
   experience of having done the job badly gets stored.

Instructions, not code. A skill that needs to run something should say which command; the knowledge
worth keeping is the sequence and the judgment, and those outlive any tool.

## Using these with an agent

Point the agent at this repository, tell it which skill to run, and require it to cite the files it
read. Then read the diff. If the output is wrong, the usual cause is that a file in `os/` is stale
or a step here is underspecified — both fixable, and both fixed for everyone at once.
