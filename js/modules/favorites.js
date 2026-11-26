/** Favorites persisted in localStorage (safe in private browsing too). */

const STORAGE_KEY = 'gamevault:favorites';

export function loadFavorites() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return new Set(Array.isArray(stored) ? stored : []);
  } catch {
    return new Set();
  }
}

export function saveFavorites(favorites) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favorites]));
  } catch {
    // Storage may be unavailable — favorites still work for this session.
  }
}

export function toggleFavorite(favorites, id) {
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  saveFavorites(favorites);
  return favorites.has(id);
}
