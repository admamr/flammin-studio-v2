/* Flammin Studio V2 — main.js */

(function () {
  'use strict';

  /* ---- Mobile menu ---- */
  const header    = document.getElementById('site-header');
  const toggle    = document.getElementById('menu-toggle');
  const nav       = document.getElementById('main-nav');
  const closeBtn  = document.getElementById('nav-close-btn');

  function openMenu() {
    nav.classList.add('nav-open');
    toggle.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    if (closeBtn) closeBtn.focus();
  }

  function closeMenu() {
    nav.classList.remove('nav-open');
    toggle.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.contains('nav-open');
      isOpen ? closeMenu() : openMenu();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    nav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('nav-open')) closeMenu();
    });

    /* Close on click outside panel */
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('nav-open') &&
          !nav.contains(e.target) &&
          !toggle.contains(e.target)) {
        closeMenu();
      }
    });
  }

  /* ---- Sticky header bg on scroll ---- */
  if (header) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      header.classList.toggle('scrolled', y > 40);
      lastScroll = y;
    }, { passive: true });
  }

  /* ---- Reveal on scroll (IntersectionObserver) ---- */
  var revealItems = document.querySelectorAll('.reveal-item');
  if (revealItems.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach(function (el) { observer.observe(el); });
  } else {
    /* Fallback: show everything if observer not supported */
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- FAQ accordion ---- */
  var faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var answerId = btn.getAttribute('aria-controls');
      var answer   = document.getElementById(answerId);

      /* Close all others */
      faqToggles.forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          var otherId = other.getAttribute('aria-controls');
          var otherAnswer = document.getElementById(otherId);
          if (otherAnswer) otherAnswer.classList.remove('faq-open');
        }
      });

      /* Toggle this one */
      btn.setAttribute('aria-expanded', String(!expanded));
      if (answer) answer.classList.toggle('faq-open', !expanded);
    });
  });

  /* ---- Form: basic client-side validation feedback ---- */
  var form = document.getElementById('audit-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var required = form.querySelectorAll('[required]');
      var valid = true;

      required.forEach(function (field) {
        field.classList.remove('input-error');
        if (!field.value.trim()) {
          field.classList.add('input-error');
          valid = false;
        }
      });

      if (valid) {
        /* Placeholder until EmailJS is wired */
        var btn = form.querySelector('[type="submit"]');
        btn.textContent = 'Message received — we will be in touch.';
        btn.disabled = true;
        btn.style.opacity = '0.6';
        form.reset();
      }
    });
  }

  /* ---- Newsletter form ---- */
  var nlForm = document.getElementById('newsletter-form');
  if (nlForm) {
    nlForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = nlForm.querySelector('.newsletter-input');
      var msg   = document.getElementById('newsletter-msg');
      var btn   = nlForm.querySelector('.newsletter-btn');
      if (!input || !input.value.trim()) {
        if (input) input.focus();
        return;
      }
      btn.disabled = true;
      btn.textContent = 'Subscribed';
      input.value = '';
      if (msg) {
        msg.hidden = false;
        msg.textContent = 'You\'re in. Studio notes coming your way.';
      }
    });
  }

  /* ---- Custom cursor ---- */
  (function () {
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches) return;

    var cursor = document.querySelector('.custom-cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', function (e) {
      cursor.style.transform = 'translate3d(calc(' + e.clientX + 'px - 50%), calc(' + e.clientY + 'px - 50%), 0)';
      if (!cursor.classList.contains('cursor-active')) {
        cursor.classList.add('cursor-active');
      }
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      cursor.classList.remove('cursor-active');
    });

    document.addEventListener('mouseover', function (e) {
      var isInteractive = !!e.target.closest('a, button, input, textarea, select, [data-cursor]');
      cursor.classList.toggle('is-hovering', isInteractive);
    });
  })();

  /* ---- Active nav state ---- */
  (function () {
    var page = document.body.getAttribute('data-page');
    var navLinks = document.querySelectorAll('[data-nav]');

    function setActive(key) {
      navLinks.forEach(function (link) {
        link.classList.toggle('nav-active', link.getAttribute('data-nav') === key);
      });
    }

    if (page === 'services') {
      setActive('services');
    } else if (page === 'home') {
      /* Scroll-based section tracking */
      var sectionMap = { services: 'services', work: 'work', audit: 'connect' };
      var sectionIds = Object.keys(sectionMap);
      var sectionEls = sectionIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);

      if (sectionEls.length && 'IntersectionObserver' in window) {
        var sectionObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var navKey = sectionMap[entry.target.id] || entry.target.id;
              setActive(navKey);
            }
          });
        }, { threshold: 0.25, rootMargin: '-15% 0px -60% 0px' });

        sectionEls.forEach(function (el) { sectionObserver.observe(el); });
      }
    }
  })();

  /* ---- GSAP hero entrance ---- */
  if (typeof gsap !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var heroTl = gsap.timeline({ defaults: { ease: 'power2.out', clearProps: 'all' } });
    heroTl
      .from('.hero .eyebrow',   { opacity: 0, y: 12, duration: 0.55 }, 0.1)
      .from('.hero-headline',   { opacity: 0, y: 22, duration: 0.65 }, 0.28)
      .from('.hero-sub',        { opacity: 0, y: 16, duration: 0.55 }, 0.52)
      .from('.hero-ctas',       { opacity: 0, y: 12, duration: 0.5  }, 0.7)
      .from('.hero-caps',       { opacity: 0, duration: 0.45         }, 0.88)
      .from('.hero-visual',     { opacity: 0, x: 18, duration: 0.65  }, 0.55);
  }

})();
