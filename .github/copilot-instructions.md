# Project Guidelines

## Code Style
- Keep pages as plain HTML/CSS/vanilla JS. Do not introduce frameworks or build tooling unless explicitly requested.
- Preserve the existing naming patterns for shared UI structure (for example: `.nav-*`, `.hero-*`, `.card-*`, `.book-*`).
- Reuse the existing CSS custom properties and font tokens already defined in each page's `:root` block.
- Prefer small, surgical edits and keep visual behavior consistent across `index.html`, `designing.html`, and `writing.html`.

## Architecture
- This repository is a static multi-page site with three primary documents: `index.html`, `designing.html`, and `writing.html`.
- Each page is self-contained with inline styles and minimal inline JavaScript.
- Shared assets live in the `images/` directory.
- There is no component system, bundler, or application framework.

## Build and Test
- There is no build step.
- There is no automated test suite.
- For local preview, run a static file server from the repo root, for example:
  - `python3 -m http.server 8000`
  - Open `http://localhost:8000`

## Conventions
- Keep metadata tags (description, keywords, Open Graph fields) aligned across pages when making content updates.
- If changing shared UI styling, update all affected pages to avoid style drift caused by duplicated CSS.
- Maintain progressive enhancement: pages should remain usable without JavaScript.
- When adding interactivity, prefer lightweight vanilla JS patterns consistent with current usage (for example, class toggling on click).