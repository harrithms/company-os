# example/ — one fictional company, filled in

Everything in `os/` at the root of this repository is a blank template. This folder is the same
files with a company in them, so you can see what "filled in" looks like before you do it — and so
that anything that *reads* the OS has something real-shaped to read.

The company is **Kestrel**, a Series A product company with fourteen people. It does not exist.
Every person, number and target here is invented.

```
example/
├── os/accountability/
│   ├── org-chart.md      who reports to whom
│   ├── metrics.md        what each number means and where it comes from
│   ├── goals.md          the target behind each number, and who agreed it
│   └── status-rules.md   how a number plus a target becomes a colour
└── data/observations/
    └── 2026-09-12.json   what was measured, on one date
```

## Why it is deliberately messy

Two of fourteen people are green. Six have no documented goal at all. One metric has no target,
one goal is unratified, one number has not been updated in three weeks.

That is the realistic state of a company two months into doing this, and showing it is the point.
An org chart where everyone is green because the gaps are hidden tells you nothing. The states
`no-target`, `proposed`, `stale` and `needs-setup` exist so that the gaps are visible rather than
absent.

## What reads it

A dashboard on [eudaimoniaventures.com/tools/accountability][demo] renders these four files and
that one observation file. Nothing is typed into that page: every colour on it is computed from
`status-rules.md` at render time. Change a target here and the colour there changes.

That is the whole argument for keeping a company in files — not that files are tidy, but that
something else can read them.

[demo]: https://www.eudaimoniaventures.com/tools/accountability
