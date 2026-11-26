import { escapeHtml, applyImageFallback } from '../utils.js';

const heartIcon = `<svg viewBox="0 0 24 24" aria-hidden="true">
  <path d="M12 20.5 4.2 13a4.6 4.6 0 0 1 6.5-6.5l1.3 1.3 1.3-1.3a4.6 4.6 0 0 1 6.5 6.5Z"
        fill="currentColor" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
</svg>`;

function cardTemplate(game, isFavorite) {
  const title = escapeHtml(game.title);
  const genre = escapeHtml(game.genre);
  const rank = String(game.rank).padStart(2, '0');

  return `
    <article class="game-card reveal" style="--index: ${game.rank - 1}" data-id="${game.id}">
      <div class="game-card__media">
        <img class="game-card__image" src="${game.cover}" alt="Cover art for ${title}"
             loading="lazy" data-cover data-title="${title}">
        <span class="game-card__rank">#${rank}</span>
        <button class="game-card__fav${isFavorite ? ' is-active' : ''}" type="button"
                data-fav="${game.id}" aria-pressed="${isFavorite}"
                aria-label="${isFavorite ? 'Remove' : 'Add'} ${title} ${isFavorite ? 'from' : 'to'} favorites">
          ${heartIcon}
        </button>
        <span class="game-card__shine" aria-hidden="true"></span>
      </div>
      <div class="game-card__body">
        <div class="game-card__meta">
          <span class="genre-pill">${genre}</span>
          <span class="game-card__year">${game.year}</span>
        </div>
        <h3 class="game-card__title">${title}</h3>
        <div class="game-card__footer">
          <span class="game-card__rating"><span aria-hidden="true">★</span> ${game.rating}</span>
          <button class="game-card__details" type="button" data-details="${game.id}">
            Details <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>`;
}

export function renderGames(list, grid, favorites) {
  grid.innerHTML = list.map((game) => cardTemplate(game, favorites.has(game.id))).join('');
  grid.querySelectorAll('img[data-cover]').forEach((img) => {
    applyImageFallback(img, img.dataset.title);
  });
}
