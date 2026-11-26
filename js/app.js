import { games } from './data/games.js';
import { renderGames } from './modules/render.js';
import { filterGames } from './modules/search.js';
import { loadFavorites, toggleFavorite } from './modules/favorites.js';
import { initNavigation, initModal, observeReveal } from './modules/ui.js';
import { applyImageFallback, debounce } from './utils.js';

const grid = document.getElementById('gamesGrid');
const filters = document.getElementById('filters');
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');
const resetButton = document.getElementById('resetFilters');

const favorites = loadFavorites();
const openDetails = initModal();

let activeGenre = 'All';
let query = '';

initNavigation();
applyImageFallback(document.getElementById('heroCover'), 'Elden Ring');

function update() {
  const visible = filterGames(games, query, activeGenre);
  renderGames(visible, grid, favorites);

  resultCount.textContent = `${visible.length} ${visible.length === 1 ? 'game' : 'games'}`;
  emptyState.hidden = visible.length > 0;
  observeReveal(grid);
}

function setActiveChip(clicked) {
  filters.querySelectorAll('.filter-chip').forEach((chip) => {
    const active = chip === clicked;
    chip.classList.toggle('is-active', active);
    chip.setAttribute('aria-pressed', String(active));
  });
}

filters.addEventListener('click', (event) => {
  const chip = event.target.closest('[data-filter]');
  if (!chip) return;
  activeGenre = chip.dataset.filter;
  setActiveChip(chip);
  update();
});

searchInput.addEventListener('input', debounce(() => {
  query = searchInput.value;
  update();
}, 160));

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  query = searchInput.value;
  update();
  document.getElementById('trending').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

resetButton.addEventListener('click', () => {
  searchInput.value = '';
  query = '';
  activeGenre = 'All';
  setActiveChip(filters.querySelector('[data-filter="All"]'));
  update();
  searchInput.focus();
});

grid.addEventListener('click', (event) => {
  const favButton = event.target.closest('[data-fav]');
  if (favButton) {
    const id = favButton.dataset.fav;
    const isActive = toggleFavorite(favorites, id);
    favButton.classList.toggle('is-active', isActive);
    favButton.setAttribute('aria-pressed', String(isActive));
    const title = games.find((game) => game.id === id)?.title || 'game';
    favButton.setAttribute('aria-label',
      `${isActive ? 'Remove' : 'Add'} ${title} ${isActive ? 'from' : 'to'} favorites`);
    return;
  }

  const detailsButton = event.target.closest('[data-details]');
  if (detailsButton) {
    const game = games.find((item) => item.id === detailsButton.dataset.details);
    if (game) openDetails(game);
  }
});

update();
