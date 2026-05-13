---
name: motion-gsap
description: Use this skill when adding motion, transitions, scroll reveals, stagger effects, section entrances, or interaction based animation to websites built with HTML, Tailwind CSS, and vanilla JavaScript. Applies performance safe, conversion aware, GSAP based motion rules that improve polish without hurting usability, clarity, or speed.
---

# Motion GSAP Skill

## Purpose

This skill ensures motion is used with intent, control, and discipline.

Use this skill when:

- adding hero motion
- adding section reveal animation
- animating cards or content blocks
- improving page transitions or visual flow
- translating a reference website's motion style into clean GSAP implementation
- creating subtle premium motion for landing pages and service sites
- adding interaction polish without harming conversion clarity

This skill must prioritize:

1. clarity
2. performance
3. hierarchy
4. restraint
5. responsiveness
6. accessibility
7. premium feel

Motion is a support layer, not the product.

---

## Primary Motion Philosophy

Claude must treat motion as:

- guidance
- emphasis
- polish
- rhythm

Claude must NOT treat motion as:

- decoration for its own sake
- proof of creativity
- a substitute for layout quality
- something that should dominate the experience

If the page works better without the animation, the animation should not exist.

---

## Library Rule

Default animation library for advanced motion:

- GSAP

Claude must:

- use GSAP for complex sequencing, stagger timing, and scroll based reveals
- keep implementation modular and readable
- ensure the layout still works without animation

Claude must NOT:

- add multiple motion libraries unless explicitly requested
- use GSAP when simple CSS transitions are enough
- over engineer tiny interactions with timelines

Use CSS for:

- hover transitions
- simple opacity changes
- basic button states
- micro interactions that do not need timeline control

Use GSAP for:

- hero entrance sequences
- stagger reveals
- section in view animations
- controlled scroll triggered motion
- layered timing between headline, copy, CTA, and media

---

## Motion Goals Per Page

Motion should usually help:

- reveal the hero with clear emphasis
- guide the reading flow through sections
- make cards and content enter smoothly
- support section transitions
- reinforce premium design direction

Motion must NOT:

- delay comprehension
- block interaction
- hide key information for too long
- make users wait for content

---

## Performance Rules

Performance is mandatory.

Claude must:

- animate transform and opacity whenever possible
- avoid layout thrashing
- keep timelines efficient
- minimize scroll trigger overload
- avoid unnecessary continuous animation
- keep startup animation lightweight

Claude must NOT:

- animate width
- animate height directly for major layout blocks
- animate margin or padding unnecessarily
- attach dozens of heavy scroll triggers without reason
- create infinite motion that draws attention away from content

Claude should prefer:

- `y`, `x`, `scale`, `rotate`, `autoAlpha`, `opacity`
- concise durations
- stagger timing that feels intentional

---

## CRO Protection Rule

Motion must never weaken conversion.

Claude must ensure:

- hero CTA remains visible quickly
- key value proposition appears early
- trust elements are not buried behind motion
- important content is not delayed excessively

If motion conflicts with:

- CTA clarity
- readability
- trust
- page speed

Then motion loses.

---

## Accessibility Rules

Accessibility is required.

Claude must:

- respect `prefers-reduced-motion`
- ensure content is available without motion
- avoid flashing or disorienting movement
- keep interaction states understandable even without animation

Claude must NOT:

- rely on motion to explain important functionality
- create movement that feels overwhelming
- use aggressive parallax or disorienting motion patterns

---

## Timing and Easing Rules

Motion should feel premium and controlled.

Claude should prefer:

- short to medium durations
- ease out motion
- smooth deceleration
- slight stagger for grouped content

General direction:

- subtle and sharp
- modern and confident
- fast enough to feel responsive
- slow enough to feel intentional

Claude must NOT:

- use bounce easing
- use exaggerated elastic easing
- make animations drag
- stack too many delays before useful content appears

---

## Approved Motion Types

Claude can use these motion patterns when relevant:

1. Hero reveal

- headline enters first
- supporting text follows
- CTA appears quickly after
- media or visual enters in parallel or just after

2. Section reveal

- section fades in with light upward movement
- content becomes visible when entering viewport
- no exaggerated travel distance

3. Stagger grid

- cards reveal with short stagger
- movement remains subtle
- supports readability

4. Feature emphasis

- one key element can receive slightly stronger motion to guide attention

5. Accordion or expandable content

- motion should clarify state change
- keep timing short and readable

6. Modal or overlay entry, only if modal is truly needed

- quick opacity and scale combination
- easy exit
- no theatrical transitions

---

## Scroll Trigger Rules

Scroll based motion must be used carefully.

Claude must:

- use scroll triggers only where they add real value
- keep motion synchronized to reading flow
- avoid firing too late
- avoid overanimating every section on the page

Claude must NOT:

- animate every single block on scroll
- create scroll hijacking
- use pinned sections unless clearly justified
- make users feel the site is fighting their scrolling

---

## Responsive Motion Rules

Motion must adapt to screen size.

Claude must:

- reduce complexity on mobile
- keep entry motion shorter on smaller screens
- avoid large distance movement on mobile
- ensure motion does not make mobile feel heavy

Claude must NOT:

- copy desktop motion intensity directly onto mobile
- use motion that causes jank on smaller devices
- hide critical content too long on mobile

---

## Design Alignment Rule

Motion must match the design direction.

Examples:

- premium minimal pages should use restrained elegant motion
- bold modern pages can use slightly stronger reveals
- corporate structured pages should use quiet, efficient motion

Claude must NOT:

- apply the same motion style to every project
- make all motion look like a trendy template
- use flashy motion that clashes with brand tone

---

## Motion Review Workflow

When using this skill, Claude should follow this order:

1. identify page goal
2. identify which elements deserve motion
3. identify what should remain static
4. choose simplest motion pattern that works
5. implement with GSAP cleanly
6. check responsiveness
7. check reduced motion support
8. check whether motion improves or hurts clarity
9. reduce anything excessive
10. keep only what earns its place

---

## Output Requirements

When asked to add motion, Claude should provide:

- a short explanation of the motion strategy
- which elements will animate
- why each animation exists
- clean GSAP implementation
- reduced motion fallback where appropriate

If a screenshot or reference is provided, Claude should:

- infer likely motion behavior
- translate it into performant GSAP patterns
- preserve clarity and usability
- avoid blindly recreating bad motion

---

## When to Push Back

Claude should challenge:

- too many scroll animations
- long hero delays
- flashy motion that weakens trust
- complex timelines with no UX reason
- parallax abuse
- motion requests that hurt performance
- animation ideas that compete with the CTA

Claude should propose a simpler alternative.
