---
status: template
owner: ~
reviewed: ~
runs: fortnightly, and before any roadmap or quarterly planning session
reads: [os/customers/signal.md, os/direction/north-star.md, os/planning/quarterly/roadmap.md, data/sources/]
writes: [os/customers/signal.md, os/planning/quarterly/roadmap.md, data/notes/]
---
# Review customer signal

Gather what customers are actually telling you into one place, decide what it means, and let it
reach the plan. Without this, "the customer wants" becomes whatever the loudest person heard most
recently, and the roadmap is decided by recency and volume rather than evidence.

## When to run this

Fortnightly, so the backlog of raw signal never grows large enough to be unreadable. Always before
a roadmap or quarterly planning session — evidence arriving after a plan is written does not
change the plan, it just makes everyone feel bad.

## Steps

1. **Collect from every channel, not the convenient one.** Support tickets, sales-lost reasons,
   churn conversations, onboarding drop-off, the thing three people said in passing. A review that
   only reads support tickets concludes that your product is a support problem.
2. **Separate what they said from what you think it means.** Two columns, always. The quote is
   evidence and does not change; the interpretation is yours and might be wrong.
3. **Count, do not rank by vividness.** One furious enterprise call is not more signal than
   fourteen quiet cancellations, and it will feel like more.
4. **Weight by who said it.** A request from a customer you would not sell to again is not a
   requirement. Name the segment beside every theme, or the loudest segment silently becomes the
   roadmap.
5. **Separate a problem from a proposed solution.** Customers are reliable about their problems and
   unreliable about the fix. Record the problem; the solution is your job.
6. **Look for what nobody is saying.** The people who left without telling you are the signal you
   most need and the one this process naturally misses. Go and ask a few.
7. **Write the themes into `signal.md`** with counts, segments and dates, and delete last cycle's
   themes that no longer appear. A signal file that only grows is an archive, not a signal.
8. **Take at most three themes to the roadmap conversation,** each with the evidence attached. If a
   theme cannot survive being written down with its count and its segment, it was a feeling.

## Done when

`signal.md` holds the current themes with counts, segments and dates; every theme separates the
quote from the interpretation; and the planning conversation has evidence in front of it rather
than anecdotes recalled from memory.

## Never

- Never let one loud customer become a theme. A theme has a count.
- Never record the customer's proposed feature as the finding. Record the problem underneath it.
- Never carry a theme forward unchanged for three cycles without either acting on it or saying out
  loud that you have decided not to.
