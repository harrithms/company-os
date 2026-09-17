#!/usr/bin/env node
// scripts/check.mjs
//
// Validates the shape of os/, not the truth of it.
//
// The point of keeping the company in files is that something can read them. This is the smallest
// version of that: if the frontmatter is wrong, nothing downstream can rely on it. It deliberately
// does NOT check whether what you wrote is any good — that is the one job it cannot do for you.

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const OS = join(ROOT, 'os')
const SKILLS = join(ROOT, 'skills')
const STATUSES = ['template', 'draft', 'live']

const problems = []
const notes = []
const counts = { template: 0, draft: 0, live: 0 }
const skills = { template: 0, draft: 0, live: 0 }

function walk(dir, doc = checkDoc) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full, doc)
    else if (entry.endsWith('.md')) doc(full)
    else if (entry.endsWith('.json')) checkJson(full)
  }
}

function checkDoc(file) {
  const rel = relative(ROOT, file)
  const text = readFileSync(file, 'utf8')

  if (rel.endsWith('README.md')) return

  const fm = text.match(/^---\n([\s\S]*?)\n---/)
  if (!fm) {
    problems.push(`${rel}: no frontmatter. Every os/ document needs status, owner, reviewed, read_by.`)
    return
  }
  const field = (k) => (fm[1].match(new RegExp(`^${k}:\\s*(.*)$`, 'm')) || [, ''])[1].trim()

  const status = field('status')
  if (!STATUSES.includes(status)) {
    problems.push(`${rel}: status "${status}" is not one of ${STATUSES.join(', ')}.`)
  } else counts[status]++

  const owner = field('owner')
  const unset = (v) => v === '' || v === '~' || v === 'null'

  if (status === 'live' && unset(owner)) {
    problems.push(`${rel}: status is live but nobody owns it. A live file without an owner goes stale silently.`)
  }
  if (status === 'live' && unset(field('reviewed'))) {
    notes.push(`${rel}: live, but never reviewed. Add a date so staleness is visible.`)
  }
  if (status === 'template' && !text.includes('Delete everything below')) {
    notes.push(`${rel}: marked template but the example has been edited — should this be draft?`)
  }
}

// A skill is a contract as much as a document: it declares what it reads and what it writes, so a
// person handing it to an agent can see the blast radius before they do. Missing sections are
// checked because the two that get skipped — "Done when" and "Never" — are the two that carry the
// judgment. A skill without them is a wish.
const SKILL_SECTIONS = ['## When to run this', '## Steps', '## Done when', '## Never']

function checkSkill(file) {
  const rel = relative(ROOT, file)
  const text = readFileSync(file, 'utf8')
  // _template.md is the blank to copy, not a skill the company runs.
  if (rel.endsWith('README.md') || /\/_/.test(rel)) return

  const fm = text.match(/^---\n([\s\S]*?)\n---/)
  if (!fm) {
    problems.push(`${rel}: no frontmatter. Every skill declares runs, reads and writes.`)
    return
  }
  const field = (k) => (fm[1].match(new RegExp(`^${k}:\\s*(.*)$`, 'm')) || [, ''])[1].trim()

  const status = field('status')
  if (!STATUSES.includes(status)) {
    problems.push(`${rel}: status "${status}" is not one of ${STATUSES.join(', ')}.`)
  } else skills[status]++

  for (const k of ['runs', 'reads', 'writes']) {
    if (!field(k)) problems.push(`${rel}: no ${k}: in the frontmatter. A skill declares its contract.`)
  }
  // A skill's whole claim is that its blast radius is declared and therefore
  // checkable. That is only true if someone checks it. An os/ path must resolve
  // to a real file — those are authored and in the repo. data/ and reports/
  // paths are output locations a template repo has not created yet, so a
  // missing one is a note, not a failure.
  for (const key of ['reads', 'writes']) {
    const raw = (fm[1].match(new RegExp(`^${key}:\\s*(.*)$`, 'm')) || [, ''])[1]
    for (const decl of raw.replace(/^\[|\]$/g, '').split(',').map((x) => x.trim()).filter(Boolean)) {
      const bare = decl.replace(/<[^>]*>/g, '').replace(/\/$/, '')
      if (existsSync(join(ROOT, bare))) continue
      if (decl.startsWith('os/')) {
        problems.push(`${rel}: ${key} declares ${decl}, which does not exist. A declared blast radius that does not resolve is worse than none.`)
      } else {
        notes.push(`${rel}: ${key} declares ${decl}, not created yet — expected for an output path.`)
      }
    }
  }

  const missing = SKILL_SECTIONS.filter((h) => !text.includes(h))
  if (missing.length) {
    problems.push(`${rel}: missing ${missing.join(', ')}.`)
  }
  if (/\bwrites:.*\bos\/(?!decisions)/.test(fm[1]) && !text.includes('## Never')) {
    notes.push(`${rel}: writes into os/ — make sure the Never section says what it must not decide alone.`)
  }
}

function checkJson(file) {
  const rel = relative(ROOT, file)
  try {
    JSON.parse(readFileSync(file, 'utf8'))
  } catch (e) {
    problems.push(`${rel}: invalid JSON — ${e.message}`)
  }
}

walk(OS)
walk(SKILLS, checkSkill)

const total = counts.template + counts.draft + counts.live
for (const n of notes) console.log(`note  ${n}`)
for (const p of problems) console.log(`ERROR ${p}`)

const skillTotal = skills.template + skills.draft + skills.live
console.log(
  `\n${total} documents: ${counts.live} live, ${counts.draft} draft, ${counts.template} still template.`
)
console.log(`${skillTotal} skills: ${skills.live} live, ${skills.draft} draft, ${skills.template} still template.`)
if (counts.live === 0) {
  console.log('Nothing is live yet. Start with north-star.md, metrics.md and status-rules.md.')
}
console.log(problems.length ? `\n${problems.length} problem(s).` : '\nShape is valid.')
process.exit(problems.length ? 1 : 0)
