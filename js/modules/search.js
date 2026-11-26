/** Pure filtering helpers: search text + genre, applied together. */

function normalize(value) {
  return String(value).toLowerCase().trim();
}

export function filterGames(games, query = '', genre = 'All') {
  const term = normalize(query);

  return games.filter((game) => {
    const matchesGenre = genre === 'All' || game.genre === genre;
    if (!matchesGenre) return false;
    if (!term) return true;

    const haystack = normalize(
      `${game.title} ${game.genre} ${game.year} ${game.developer} ${game.description}`
    );
    return haystack.includes(term);
  });
}
