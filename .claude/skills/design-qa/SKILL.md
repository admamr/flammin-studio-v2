---
name: design-qa
description: Use this skill when reviewing, auditing, or refining websites, landing pages, service pages, blog layouts, and UI sections before final delivery. Applies strict quality assurance across visual hierarchy, CRO clarity, responsiveness, accessibility, frontend cleanliness, SEO structure, and motion discipline.
---

# Design QA Skill

## Purpose

This skill exists to audit output before it ships.

Use this skill when:

- reviewing a full page before launch
- checking a homepage or landing page for weak sections
- auditing responsiveness
- checking visual hierarchy
- reviewing CTA visibility and conversion clarity
- checking SEO structure and scannability
- reviewing motion quality
- identifying generic design drift
- finding quality gaps after implementation

This skill must prioritize:

1. clarity
2. hierarchy
3. conversion readiness
4. responsiveness
5. consistency
6. accessibility
7. maintainability

This skill is not for generating praise.
This skill is for exposing weaknesses and fixing them.

---

## Review Philosophy

Claude must review like a strict senior operator.

Claude must:

- identify weaknesses clearly
- explain why they matter
- suggest cleaner alternatives
- prioritize fixes by impact

Claude must NOT:

- give fake positive feedback
- say something is good when it is only acceptable
- ignore small issues that compound
- protect weak design decisions

If something feels:

- generic
- cluttered
- weak at conversion
- inconsistent
- poorly structured

Claude must say so directly.

---

## Review Order

Claude should review in this order:

1. page goal clarity
2. hero clarity
3. CTA dominance
4. section structure and sequence
5. visual hierarchy
6. spacing rhythm
7. typography clarity
8. responsiveness
9. form usability
10. accessibility
11. SEO and semantic structure
12. motion quality, if used
13. consistency and maintainability

Claude must not jump randomly between review categories.

---

## Page Goal Review Rule

Claude must first identify:

- what the page is trying to achieve
- who it is for
- what the main action is

If the page goal feels unclear, Claude must flag it immediately.

Questions to assess:

- is the purpose obvious
- is the audience clear
- is the primary next step clear
- does the page support that goal consistently

If the page tries to do too many things:
Claude must recommend narrowing focus.

---

## Hero Review Rule

The hero must answer quickly:

- what this is
- who it is for
- why it matters
- what to do next

Claude must check:

- headline clarity
- subtext usefulness
- CTA placement
- visual support
- above the fold comprehension

Claude must flag:

- vague headlines
- weak CTA
- cluttered layout
- visuals that distract from the offer
- heroes that look premium but say little

---

## CTA Review Rule

Claude must review:

- whether there is one dominant CTA
- whether CTA wording is strong
- whether CTA appears early enough
- whether CTA is repeated logically

Claude must flag:

- multiple competing CTAs
- weak CTA language
- buried CTA
- CTA styles that blend into the page
- sections that distract from action

If action is unclear, the page is weak.

---

## Section Structure Review Rule

Claude must check:

- whether each section earns its place
- whether the order supports trust and action
- whether unnecessary sections exist
- whether key missing sections reduce clarity or conversion

Claude must flag:

- section bloat
- repeated ideas in different sections
- random order
- trust appearing too late
- no objection handling where needed
- pages that feel long but not useful

---

## Visual Hierarchy Review Rule

Claude must review:

- what draws attention first
- whether headings stand out enough
- whether supporting text is clearly secondary
- whether the eye moves naturally

Claude must flag:

- flat hierarchy
- everything competing equally
- excessive visual noise
- unclear focal points
- decorative elements stealing attention

Good UI guides the eye.
Bad UI makes the user work.

---

## Spacing and Layout Review Rule

Claude must assess:

- section rhythm
- internal spacing
- content width
- alignment quality
- whitespace balance

Claude must flag:

- cramped layouts
- oversized empty areas
- uneven spacing logic
- text stretched too wide
- inconsistent alignment

Spacing problems often make good designs feel amateur.

---

## Typography Review Rule

Claude must check:

- heading scale
- body readability
- paragraph length
- line height
- contrast between title and supporting text

Claude must flag:

- oversized hero text with bad wrapping
- weak heading contrast
- long dense blocks
- too many font sizes
- typography that looks styled but reads poorly

Typography must support understanding first.

---

## Responsiveness Review Rule

Claude must review the page on:

- mobile
- tablet
- desktop

Claude must check:

- stacking logic
- text scaling
- tap target usability
- nav behavior
- card behavior
- overflow issues
- form usability

Claude must flag:

- desktop layouts forced into mobile
- broken stacking
- tiny buttons
- unreadable text
- horizontal overflow
- mobile layouts that feel like an afterthought

If the page is weak on mobile, it is weak overall.

---

## Form Review Rule

Claude must review:

- field count
- label clarity
- spacing
- mobile usability
- submit CTA clarity
- trust support near the form

Claude must flag:

- too many fields
- unclear labels
- poor spacing
- weak submit action
- forms placed in low intent areas
- forms that feel harder than they should

---

## Accessibility Review Rule

Claude must check:

- semantic HTML
- heading order
- labels for inputs
- keyboard access
- focus visibility
- contrast
- motion safety
- aria usage where needed

Claude must flag:

- clickable divs
- missing labels
- invisible focus states
- hover only interactions
- poor contrast
- inaccessible nav or accordion patterns

Accessibility problems are quality problems.

---

## SEO and Semantic Review Rule

Claude must review:

- H1 clarity
- heading hierarchy
- metadata opportunities
- FAQ usefulness
- extractable answer blocks
- internal linking opportunities
- semantic structure

Claude must flag:

- vague H1
- decorative headings
- weak topic clarity
- missing FAQ where friction exists
- service pages that hide the core topic
- pages that are visually polished but semantically weak

---

## Motion Review Rule

If motion exists, Claude must assess:

- whether motion improves hierarchy
- whether it delays content
- whether it hurts speed or clarity
- whether it feels aligned with the design direction
- whether reduced motion is respected

Claude must flag:

- over animation
- long delays
- heavy scroll triggers
- motion that competes with CTA
- trend based effects with no UX role

Motion must be earned.

---

## Consistency Review Rule

Claude must check consistency across:

- buttons
- section spacing
- card styles
- borders and radius
- shadows
- typography logic
- tone of visual system

Claude must flag:

- inconsistent button systems
- one section feeling like a different site
- random radius or spacing changes
- visual drift from established direction

A premium site feels consistent.

---

## Maintainability Review Rule

Claude must assess whether:

- the HTML is clean
- Tailwind use is manageable
- JS logic is simple
- the file can be edited later without pain

Claude must flag:

- chaotic class stacks
- pointless wrappers
- messy JS for simple actions
- code that future edits will hate

A page that looks fine but is painful to maintain is still weak.

---

## Output Format Rule

When using this skill, Claude should return:

1. Overall verdict
2. Top issues by priority
3. What is working
4. What is weak
5. Specific improvement recommendations
6. If requested, corrected implementation guidance

Claude should separate:

- critical issues
- medium issues
- polish issues

---

## Severity Rule

Claude should classify issues as:

### Critical

Hurts conversion, comprehension, responsiveness, or usability directly

### Medium

Weakens quality noticeably, but does not fully break the page

### Polish

Refinement issues that improve perceived quality and consistency

Claude must prioritize critical issues first.

---

## When to Push Back

Claude should push back on:

- “it looks modern so it’s good”
- “mobile is fine enough”
- “we can fix clarity later”
- adding more sections instead of fixing weak structure
- decorative redesigns that ignore conversion issues

Claude must recommend the highest impact fixes first.
