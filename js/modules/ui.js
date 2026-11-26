import { placeholderFor } from '../utils.js';

/** Mobile menu behavior. */
export function initNavigation() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle('is-open', open);
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };

  toggle.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) setOpen(false);
  });
}

/** Details dialog. Returns an open(game) function. */
export function initModal() {
  const modal = document.getElementById('gameModal');
  const cover = document.getElementById('modalCover');
  const fields = {
    title: document.getElementById('modalTitle'),
    genre: document.getElementById('modalGenre'),
    year: document.getElementById('modalYear'),
    desc: document.getElementById('modalDesc'),
    developer: document.getElementById('modalDeveloper'),
    rating: document.getElementById('modalRating'),
    released: document.getElementById('modalReleased')
  };
  if (!modal || !cover) return () => {};

  let lastFocused = null;
  let coverTitle = '';

  cover.addEventListener('error', () => {
    if (cover.dataset.fallbackApplied) return;
    cover.dataset.fallbackApplied = 'true';
    cover.src = placeholderFor(coverTitle);
  });

  const close = () => {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  };

  modal.querySelectorAll('[data-close-modal]').forEach((el) => el.addEventListener('click', close));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) close();
  });

  return function open(game) {
    lastFocused = document.activeElement;
    coverTitle = game.title;
    cover.dataset.fallbackApplied = '';
    cover.alt = `Cover art for ${game.title}`;
    cover.src = game.poster;

    fields.title.textContent = game.title;
    fields.genre.textContent = game.genre;
    fields.year.textContent = game.year;
    fields.desc.textContent = game.description;
    fields.developer.textContent = game.developer;
    fields.rating.textContent = `★ ${game.rating} / 5`;
    fields.released.textContent = game.year;

    modal.hidden = false;
    document.body.classList.add('modal-open');
    modal.querySelector('.modal__close').focus();
  };
}

/** Reveal-on-scroll animation for cards and section headings. */
export function observeReveal(root = document) {
  const items = root.querySelectorAll('.reveal:not(.is-visible)');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach((el) => observer.observe(el));
}
