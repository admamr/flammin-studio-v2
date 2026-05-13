# Motion GSAP Examples

## Example 1, Hero Reveal

HTML:

```html
<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">
      High converting websites built with sharp structure
    </h1>
    <p class="hero-copy">
      We design and build websites that look premium, load fast, and guide users
      toward action.
    </p>
    <a href="#contact" class="hero-cta">Start your project</a>
  </div>
  <div class="hero-media">
    <img src="hero-image.jpg" alt="Website preview" />
  </div>
</section>
```

## Example 1 --

JavaScript:
gsap.set([".hero-title", ".hero-copy", ".hero-cta", ".hero-media"], {
y: 24,
opacity: 0
});

const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTl
.to(".hero-title", { y: 0, opacity: 1, duration: 0.7 })
.to(".hero-copy", { y: 0, opacity: 1, duration: 0.55 }, "-=0.35")
.to(".hero-cta", { y: 0, opacity: 1, duration: 0.45 }, "-=0.25")
.to(".hero-media", { y: 0, opacity: 1, duration: 0.7 }, "-=0.45");

Reasoning:
• headline appears first
• CTA arrives quickly
• motion supports hierarchy
• media does not delay the message

## Example 2, Section Reveal

JavaScript:

const sections = document.querySelectorAll(".reveal-section");

sections.forEach((section) => {
gsap.fromTo(
section,
{ y: 24, opacity: 0 },
{
y: 0,
opacity: 1,
duration: 0.7,
ease: "power3.out",
scrollTrigger: {
trigger: section,
start: "top 85%",
once: true
}
}
);
});

Reasoning:
• subtle movement
• easy to repeat
• once only, avoids noise
• strong for business pages

## Example 3, Stagger Grid

HTML:

<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 services-grid">
  <article class="service-card">...</article>
  <article class="service-card">...</article>
  <article class="service-card">...</article>
</div>

JavaScript:

gsap.from(".service-card", {
y: 20,
opacity: 0,
duration: 0.5,
ease: "power3.out",
stagger: 0.1,
scrollTrigger: {
trigger: ".services-grid",
start: "top 82%",
once: true
}
});

Reasoning:
• grouped reveal
• short stagger
• clean and readable

## Example 4, Reduced Motion Fallback

JavaScript:

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!prefersReducedMotion.matches) {
gsap.from(".faq-item", {
y: 16,
opacity: 0,
duration: 0.45,
ease: "power2.out",
stagger: 0.08,
scrollTrigger: {
trigger: ".faq-section",
start: "top 85%",
once: true
}
});
}

Reasoning:
• respects user preference
• avoids unnecessary motion
• content still works normally

## 6. `.claude/skills/motion-gsap/scripts/hero-reveal.js`

```js
function initHeroReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (prefersReducedMotion.matches) return;

  const hero = document.querySelector(".hero");
  const title = document.querySelector(".hero-title");
  const copy = document.querySelector(".hero-copy");
  const cta = document.querySelector(".hero-cta");
  const media = document.querySelector(".hero-media");

  if (!hero || !title || !copy || !cta) return;

  gsap.set([title, copy, cta, media], { y: 24, opacity: 0 });

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(title, { y: 0, opacity: 1, duration: 0.7 })
    .to(copy, { y: 0, opacity: 1, duration: 0.55 }, "-=0.35")
    .to(cta, { y: 0, opacity: 1, duration: 0.45 }, "-=0.22");

  if (media) {
    tl.to(media, { y: 0, opacity: 1, duration: 0.7 }, "-=0.42");
  }
}

window.initHeroReveal = initHeroReveal;

## 7. .claude/skills/motion-gsap/scripts/section-reveal.js

function initSectionReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (prefersReducedMotion.matches) return;

  const sections = document.querySelectorAll(".reveal-section");

  if (!sections.length) return;

  sections.forEach((section) => {
    gsap.fromTo(
      section,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true
        }
      }
    );
  });
}

window.initSectionReveal = initSectionReveal;

## 8. .claude/skills/motion-gsap/scripts/stagger-grid.js

function initStaggerGrid(gridSelector = ".stagger-grid", itemSelector = ".stagger-item") {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (prefersReducedMotion.matches) return;

  const grid = document.querySelector(gridSelector);

  if (!grid) return;

  const items = grid.querySelectorAll(itemSelector);

  if (!items.length) return;

  gsap.from(items, {
    y: 20,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: grid,
      start: "top 82%",
      once: true
    }
  });
}

window.initStaggerGrid = initStaggerGrid;
```
