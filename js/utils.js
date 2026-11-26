/** Small shared helpers used across the app. */

export function debounce(fn, wait = 150) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

/** Escape text before injecting it into a template string. */
export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

/** Generate a local SVG placeholder so cards still look right offline. */
export function placeholderFor(title) {
  const initials = String(title)
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0] || '')
    .join('')
    .toUpperCase();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <defs>
      <linearGradient id="a" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#3b1d78"/><stop offset="1" stop-color="#0a1b3d"/>
      </linearGradient>
    </defs>
    <rect width="600" height="400" fill="url(#a)"/>
    <circle cx="470" cy="90" r="130" fill="#a855f7" opacity="0.16"/>
    <circle cx="90" cy="350" r="150" fill="#22d3ee" opacity="0.12"/>
    <text x="300" y="230" text-anchor="middle" font-family="Arial, sans-serif"
      font-size="120" font-weight="700" fill="#ffffff" opacity="0.82">${initials}</text>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/** Apply the placeholder only if a remote image fails to load. */
export function applyImageFallback(img, title) {
  if (!img) return;
  img.addEventListener('error', () => {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = 'true';
    img.src = placeholderFor(title);
  });
}
