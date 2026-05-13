/* Flammin Studio V2 — main.js */

(function () {
  'use strict';

  /* ---- Mobile menu ---- */
  const header     = document.getElementById('site-header');
  const toggle     = document.getElementById('menu-toggle');
  const nav        = document.getElementById('main-nav');

  function openMenu() {
    nav.classList.add('nav-open');
    toggle.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('nav-open');
    toggle.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.contains('nav-open');
      isOpen ? closeMenu() : openMenu();
    });

    /* Close when a nav link is tapped */
    nav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('nav-open')) closeMenu();
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
          if (otherAnswer) otherAnswer.hidden = true;
        }
      });

      /* Toggle this one */
      btn.setAttribute('aria-expanded', String(!expanded));
      if (answer) answer.hidden = expanded;
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

})();
