---
name: frontend-ui
description: Use this skill when building or improving front end websites, landing pages, service pages, sections, components, navigation, forms, and responsive layouts using HTML, Tailwind CSS, and vanilla JavaScript. Applies structure, spacing, responsiveness, accessibility, maintainability, and clean implementation standards.
---

# Frontend UI Skill

## Purpose

This skill ensures that websites are built with clean structure, strong responsiveness, clear hierarchy, maintainable code, and production ready front end quality.

Use this skill when:

- building a full page in HTML and Tailwind CSS
- creating or improving sections and components
- fixing layout and spacing issues
- making pages fully responsive
- building navigation, hero sections, forms, cards, footers, and service sections
- improving accessibility and semantic structure
- writing interaction logic in vanilla JavaScript
- translating design references into clean implementation

This skill must prioritize:

1. structure
2. responsiveness
3. clarity
4. maintainability
5. accessibility
6. performance
7. visual consistency

---

## Primary Stack Rules

Default stack:

- HTML
- Tailwind CSS
- Vanilla JavaScript

Claude must:

- default to semantic HTML
- use Tailwind CSS for styling
- use vanilla JavaScript for interactions
- keep code readable and modular

Claude must NOT:

- introduce React, Vue, Next, or other frameworks unless explicitly requested
- over engineer simple pages
- build unnecessary abstractions for static marketing sites

---

## Front End Build Philosophy

Claude must treat every page as a real production interface, not a visual mockup.

That means:

- layout must be clean
- spacing must feel intentional
- typography must create hierarchy
- mobile experience must be first class
- code must remain understandable for future edits

Claude must build for:

- easy reading
- easy interaction
- clean scaling
- reliable editing later

---

## Semantic HTML Rules

Claude must use semantic HTML whenever appropriate.

Preferred structure:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `aside`
- `footer`

Use:

- real headings in proper order
- buttons for actions
- anchors for navigation
- labels for form fields
- lists when content is truly a list

Claude must NOT:

- use div soup
- skip heading hierarchy
- use clickable divs when buttons or links are correct
- rely on placeholder text as the only form label

---

## Layout Rules

Claude must build layouts that are:

- clear
- balanced
- easy to scan
- responsive by default

Guidelines:

- use containers consistently
- use max width constraints for readability
- avoid over wide text blocks
- use grid or flex with clear purpose
- keep section padding consistent
- maintain spacing rhythm across the page

Claude should prefer:

- `max-w-*`
- `mx-auto`
- `px-*`
- `py-*`
- gap based spacing
- clean breakpoint logic

Claude must avoid:

- random spacing values without reason
- inconsistent section rhythm
- cramped content
- oversized empty areas that break flow

---

## Responsiveness Rules

Claude must build mobile first.

Breakpoints should support:

- mobile
- tablet
- laptop
- large desktop

Claude must ensure:

- text remains readable on smaller screens
- buttons remain easy to tap
- cards stack cleanly
- navigation works on mobile
- forms remain easy to complete
- no horizontal overflow
- no broken alignment across devices

Responsive logic should be intentional, not patched later.

Claude must NOT:

- build desktop first then force mobile fixes
- leave text too large or too small on mobile
- allow complex multi column layouts to break on smaller screens
- hide critical content on mobile unless explicitly justified

---

## Tailwind CSS Rules

Claude must use Tailwind cleanly and consistently.

Preferred approach:

- utility first styling
- reusable visual patterns
- consistent spacing scale
- limited arbitrary values
- readable class ordering

Claude should:

- group related classes logically
- keep typography consistent
- use Tailwind responsive modifiers cleanly
- use `gap` for layout spacing
- use `max-w` values for text readability
- use `rounded-*`, `shadow-*`, and borders with restraint

Claude must NOT:

- dump long chaotic class strings without structure
- overuse arbitrary pixel values
- use Tailwind in a way that makes later edits painful
- stack conflicting classes carelessly

---

## Typography Rules

Typography must create strong hierarchy and readability.

Claude must:

- establish clear heading levels
- keep paragraph width readable
- use line height that supports scanning
- make hero text strong without becoming oversized nonsense
- ensure RTL or LTR direction is respected based on project language

General expectations:

- hero heading should feel dominant
- subtext should support, not compete
- section titles should be distinct
- body copy should remain comfortable to read

Claude must avoid:

- giant headlines with weak structure
- long dense paragraphs
- too many font sizes in one section
- weak contrast between heading and body text

---

## Component Rules

Claude must build components that are:

- visually clean
- structurally simple
- reusable in style even if not abstracted into a framework

Common components:

- header
- nav
- hero
- trust bar
- service cards
- feature blocks
- process section
- testimonials
- forms
- footer

For each component Claude must think about:

- purpose
- hierarchy
- spacing
- mobile behavior
- interaction state

Claude must NOT:

- decorate components without purpose
- create fragile layouts
- mix too many styles in one component
- create inconsistent button systems

---

## Button and CTA Rules

Buttons must look intentional and clear.

Claude must:

- define one primary button style
- define secondary style only if needed
- ensure buttons have strong contrast
- ensure padding is balanced
- ensure states are clear on hover and focus

CTA buttons must remain visually important across the page.

Claude must NOT:

- make CTA buttons blend into the layout
- use tiny buttons
- use inconsistent button styles page to page
- over style secondary buttons until they compete with primary actions

---

## Form UI Rules

Forms must be clean, readable, and easy to use.

Claude must:

- use labels
- keep field spacing consistent
- ensure inputs are easy to tap on mobile
- show clear field boundaries
- support error or helper text placement cleanly

Claude must avoid:

- crowded form layouts
- tiny input heights
- low contrast fields
- unclear submit button placement
- messy inline form alignment on small screens

---

## Vanilla JavaScript Rules

Claude must use vanilla JavaScript for interactions unless explicitly asked otherwise.

Use JavaScript for:

- mobile menu toggles
- accordions
- tabs
- sliders if lightweight
- modal open and close logic
- form enhancements
- class toggles
- simple state interactions

Claude must:

- keep JavaScript modular
- use clear function names
- avoid global chaos when possible
- add comments only where helpful
- ensure interactions degrade gracefully

Claude must NOT:

- write bloated scripts for simple interactions
- use heavy dependency patterns for basic behavior
- create unreadable event logic
- break accessibility when adding interactivity

---

## Accessibility Rules

Accessibility is mandatory.

Claude must ensure:

- meaningful HTML structure
- alt text readiness for images
- focus states for interactive elements
- keyboard accessibility for menus and toggles
- labels for form controls
- sufficient contrast
- readable text sizes
- motion does not block usability

Claude should include:

- `aria-expanded`
- `aria-controls`
- `aria-label`
  when needed for interactive UI

Claude must avoid:

- inaccessible nav toggles
- hidden focus indicators
- using color only to communicate meaning
- interactions that depend only on hover

---

## Performance Aware UI Rules

Claude must build interfaces that stay light and fast.

Claude should:

- avoid unnecessary wrappers
- avoid excessive DOM complexity
- avoid layout shift prone structures
- keep assets and scripts purposeful
- prefer simple interaction patterns

Claude must NOT:

- overcomplicate markup
- add extra libraries for simple UI behavior
- build heavy visual patterns that hurt speed
- block rendering with unnecessary scripts

---

## Build Workflow

When using this skill Claude should follow this order:

1. Identify page or section purpose
2. Map semantic structure
3. Define layout system
4. Define responsive behavior
5. Implement Tailwind styling
6. Add necessary JavaScript interactions
7. Review accessibility
8. Review spacing and hierarchy
9. Review mobile usability
10. Refine for clean maintainable code

Claude must not rush into random markup.

---

## Output Requirements

When asked to build UI, Claude should provide:

- clean semantic HTML structure
- Tailwind classes with readable logic
- vanilla JavaScript only when needed
- responsive behavior built in
- accessible interactions
- maintainable code ready for editing

If a design reference is provided, Claude should:

- extract the layout system
- adapt it into clean implementation
- preserve clarity and responsiveness
- avoid blindly copying poor patterns

---

## When to Push Back

Claude should challenge:

- bloated layouts
- weak mobile decisions
- inaccessible interactions
- random spacing systems
- inconsistent typography
- unnecessary JavaScript complexity
- framework suggestions when HTML, Tailwind, and JS are enough

Claude should propose a cleaner solution.
