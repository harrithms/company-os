#!/usr/bin/env node
// scripts/check.mjs
//
// Validates the shape of os/, not the truth of it.
//
// The point of keeping the company in files is that something can read them. This is the smallest
// version of that: if the frontmatter is wrong, nothing downstream can rely on it. It deliberately
// does NOT check whether what you wrote is any good — that is the one job it cannot do for you.

import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const OS = join(ROOT, 'os')
const STATUSES = ['template', 'draft', 'live']

const problems = []
const notes = []
const counts = { template: 0, draft: 0, live: 0 }

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full)
    else if (entry.endsWith('.md')) checkDoc(full)
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

function checkJson(file) {
  const rel = relative(ROOT, file)
  try {
    JSON.parse(readFileSync(file, 'utf8'))
  } catch (e) {
    problems.push(`${rel}: invalid JSON — ${e.message}`)
  }
}

walk(OS)

const total = counts.template + counts.draft + counts.live
for (const n of notes) console.log(`note  ${n}`)
for (const p of problems) console.log(`ERROR ${p}`)

console.log(
  `\n${total} documents: ${counts.live} live, ${counts.draft} draft, ${counts.template} still template.`
)
if (counts.live === 0) {
  console.log('Nothing is live yet. Start with north-star.md, metrics.md and status-rules.md.')
}
console.log(problems.length ? `\n${problems.length} problem(s).` : '\nShape is valid.')
process.exit(problems.length ? 1 : 0)
