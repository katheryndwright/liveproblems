# Live Problems — Site Update Guide

## The one file you need to know: `site-data.js`

Almost everything on this site flows from `site-data.js`. When you add a new project, publication, or course — or update an existing one — this is the file to edit. You do not need to touch the individual page HTML files for most updates.

---

## How to add a new entry

Open `site-data.js` and add a new object to the `SITE_DATA` array. Copy an existing entry as a template and fill in the fields:

```js
{
  id: 'my-new-project',           // unique slug, no spaces, use hyphens
  page: 'making',                 // which page: making, teaching, writing, or designing
  pageUrl: 'making.html?project=my-new-project',  // link from the tag results page
  title: 'My New Project',        // title as it appears on the card
  label: 'place-based · data',    // small label above the title
  desc: 'A description of the project.',
  tags: ['place-based', 'data'],  // must use tags from the TAGS list (see below)
  image: 'images/my-image.jpg',   // path to image, or null if none
  link: 'https://example.com',    // external link, or null
  linkText: 'View project →'      // link label, or null
}
```

Place it in the right section (Making, Teaching, Writing, or Designing) and save.

---

## How to update an existing entry

Find the entry by its `id` in `site-data.js` and edit the relevant fields. Save the file.

---

## How to add a new tag

The tag vocabulary lives at the top of `site-data.js`:

```js
const TAGS = [
  'place-based',
  'data',
  'embodied',
  'analog-digital',
  'game',
  'posthumanist',
  'collaborative',
  'interdisciplinary',
  'public',
  'global'
];
```

To add a new tag, add it to this array. Then add it to any entries that should carry it.

---

## How to add a new Making project

1. Add the entry to `site-data.js` (see above).
2. Add the card HTML to `making.html` inside the `#carousel-track` div. Copy an existing card as a template. Make sure the `data-real` attribute increments correctly and the slug in the card matches the `id` in `site-data.js`.
3. Add the project name to the `projectSlugs` array in the making page JS.
4. Add the project to the dots list at the bottom of the carousel.
5. Update `TOTAL` in the making page JS if needed.
6. Add any new images to `liveproblems/images/`.

---

## How to add a new Teaching course

1. Add the entry to `site-data.js`.
2. Add the course list item HTML to the right cluster in `teaching.html`.
3. Add the course data object to the `courses` JS object in `teaching.html`, including a `tags` array.
4. Add any new images to `liveproblems/images/`.

---

## How to add a new Writing entry

1. Add the entry to `site-data.js`.
2. Add the entry HTML to the right cluster in `writing.html`. Copy an `entry-plain` block as a template.
3. Add tag links using: `<a href="tags.html?tag=place-based" class="entry-tag">place-based</a>`

---

## How to add a new Designing card

1. Add the entry to `site-data.js`.
2. Add the expand card HTML to `designing.html`. Copy an existing card as a template.
3. Add tag links inside a `<div class="card-tags">` block at the bottom of the card.

---

## How the tag system works

Every tag on the site is a link to `tags.html?tag=tagname`. The tags page reads that URL parameter, filters `SITE_DATA` for matching entries, and displays results from across all four pages. No server needed — it all runs in the browser.

When you add a new entry to `site-data.js` with tags, it automatically appears in tag results. You don't need to edit `tags.html`.

---

## Adding images

All images live in `liveproblems/images/`. Drop new images there and reference them in `site-data.js` as `images/filename.jpg`.

---

## Files in the site

| File | Purpose |
|------|---------|
| `site-data.js` | Central data file — edit this to add/update content |
| `index.html` | Home page |
| `making.html` | Making page with carousel |
| `teaching.html` | Teaching page with course list and detail panel |
| `writing.html` | Writing page with publication entries |
| `designing.html` | Designing page with expand cards |
| `about.html` | Bio page |
| `tags.html` | Tag filter page — no need to edit |
| `dh-pedagogy.html` | Back-matter repository |
| `posthumanist-philosophy.html` | Back-matter repository |
| `community-global.html` | Back-matter repository |
| `cv.pdf` | CV download — replace this file to update |

---

## What still needs manual updates

The **Making page** carousel is the most complex part of the site. Adding a new project requires edits to both `site-data.js` and `making.html`. The teaching page course detail panel similarly requires edits to both `site-data.js` and `teaching.html`. Everything else can be updated by editing `site-data.js` and the relevant HTML file.

