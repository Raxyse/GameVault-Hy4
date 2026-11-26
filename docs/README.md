# GameVault

A vanilla HTML, CSS, and JavaScript game catalog homepage. No build step, no dependencies, no API calls.

## Run locally

ES modules need to be served over HTTP (opening `index.html` directly with `file://` will not work). From the project root, use any one of these:

```bash
# Python 3
python -m http.server 8000
```

```bash
# Node (no install required)
npx serve .
```

Or open the folder in VS Code and use the **Live Server** extension.

Then visit <http://localhost:8000> (or the URL your server prints).

## Features

- Responsive dark-navy design with purple/electric-blue accents
- Sticky navigation with a mobile menu
- Hero section with live search (filters by title, genre, year, or developer)
- Trending grid of 9 games with artwork, genre, and release year
- Genre filter chips, favorites saved in `localStorage`, and a details dialog
- Reveal-on-scroll and hover animations, with reduced-motion support

## Project structure

```text
GameVault/
├── index.html
├── css/
│   ├── variables.css      # Design tokens
│   ├── base.css           # Reset and globals
│   ├── layout.css         # Header, hero, sections, footer, breakpoints
│   └── components.css     # Buttons, cards, dialog, animations
├── js/
│   ├── app.js             # Entry point + event wiring
│   ├── utils.js           # Debounce, escaping, image fallbacks
│   ├── data/games.js      # Static catalog (edit this to add games)
│   └── modules/
│       ├── render.js      # Card markup
│       ├── search.js      # Filter logic
│       ├── favorites.js   # localStorage favorites
│       └── ui.js          # Navigation, dialog, scroll reveals
├── assets/images/logo.svg
└── docs/README.md
```

Game artwork loads from Steam's public CDN; if an image fails, a local SVG placeholder is shown instead.

## Adding a game

Add an object to the `games` array in `js/data/games.js` with an `id`, `title`, `genre`, `year`, `rank`, `rating`, `developer`, `cover`, `poster`, and `description`. To add a new genre filter, add a matching button in the `#filters` group in `index.html`.
