# Frontend UI Anti Patterns

Claude must avoid the following:

## Markup mistakes

- div soup
- broken heading hierarchy
- clickable divs instead of buttons or links
- placeholder only form fields
- meaningless wrapper overload

## Layout mistakes

- random spacing
- oversized empty sections with no purpose
- cramped content
- text stretching too wide
- inconsistent alignment
- fragile nested layout structures

## Responsive mistakes

- desktop first layouts forced into mobile
- horizontal overflow
- tiny tap targets
- cards that break awkwardly
- unreadable hero sections on mobile
- mobile nav that is hard to use

## Tailwind mistakes

- chaotic utility strings
- excessive arbitrary values
- class conflicts
- styling that is hard to edit later
- inconsistent spacing scale

## Typography mistakes

- oversized hero text with weak line breaks
- too many font sizes
- low contrast body text
- long dense paragraphs
- weak distinction between heading and paragraph content

## Button mistakes

- weak CTA visibility
- too many button styles
- tiny buttons
- low contrast buttons
- hover only feedback with no focus state

## Form mistakes

- missing labels
- crowded fields
- low contrast borders
- unclear submit actions
- weak mobile usability

## JavaScript mistakes

- unnecessary complexity
- large scripts for tiny interactions
- poor naming
- unreadable event handling
- interactions that break accessibility

## Accessibility mistakes

- no keyboard support for toggles
- no visible focus state
- interactions based only on hover
- poor semantics
- inaccessible menu logic

## Strategic mistakes

- building for appearance only
- copying references without improving them
- ignoring maintainability
- adding code that future you will hate editing
