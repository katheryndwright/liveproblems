# Live Problems — Site Update Guide

## Overview

The site has five main pages (Making, Writing, Teaching, Designing, About), three back-matter repository pages, and an index. Content lives directly in the HTML files. This guide covers how to update each page.

---

## Files in the site

| File | Purpose |
|------|---------|
| `index.html` | Home page |
| `making.html` | Making page with carousel |
| `teaching.html` | Teaching page with image reel, course list, and detail panel |
| `writing.html` | Writing page with publication entries |
| `designing.html` | Designing page with expand cards |
| `about.html` | Bio page with photo |
| `dh-pedagogy.html` | Back-matter repository — talks and materials |
| `posthumanist-philosophy.html` | Back-matter repository |
| `community-global.html` | Back-matter repository |
| `cv.pdf` | CV download — replace this file to update |
| `images/` | All images used across the site |

---

## Adding a new Making project

1. Open `making.html`
2. Copy an existing project card (everything between `<!-- CARD N -->` comments) and paste it after the last card before `</div><!-- /carousel-track -->`
3. Update `data-real` to the next number in sequence (0-indexed)
4. Update all image `src` paths, alt text, card label, title, description, and any external links
5. Update the label using the site vocabulary: `place-based · data · embodied · analog-digital · game · posthumanist · collaborative · interdisciplinary · public · global`
6. Add the project name to the `projectSlugs` array in the JS at the bottom of the file
7. Add a dot to the `.project-dots` section at the bottom: `<span class="project-dot" onclick="goTo(N)">Project Name</span>`
8. Update `const TOTAL = N` in the JS to match the new total
9. Add any new images to `images/`

---

## Updating an existing Making project

Open `making.html`, find the card by its title or `data-real` number, and edit the relevant HTML directly.

---

## Adding a new Teaching course

1. Open `teaching.html`
2. Add a list item to the right cluster in the course list:
```html
<li class="course-item" onclick="showCourse('mycourse')">
  <span class="course-item-label">label text</span>
  <span class="course-item-title">Course Title</span>
</li>
```
3. Add a course data object to the `courses` JS object:
```js
mycourse: {
  label: 'cluster label',
  title: 'Course Title',
  image: 'images/my-image.jpg',  // or null
  desc: 'Course description.',
  focus: ''  // optional secondary line, or empty string
},
```
4. Add any new images to `images/`

---

## Adding a new Writing entry

1. Open `writing.html`
2. Find the right cluster (digital humanities and pedagogy, or media and popular culture)
3. Copy an existing `entry-plain` block and update the title, meta line, description, and link

```html
<div class="entry-plain">
  <div class="entry-plain-content">
    <p class="entry-plain-title"><a href="URL" target="_blank">"Title"</a></p>
    <span class="entry-plain-meta">Venue, Year</span>
    <p class="entry-plain-desc">Description.</p>
  </div>
</div>
```

Remove the `<a>` wrapper if there's no link yet.

---

## Adding a new Designing card

1. Open `designing.html`
2. Copy an existing `expand-card` block and update the label, quote, body text, and sublabel
3. The sublabel uses the site vocabulary: `place-based · data · embodied · analog-digital · game · posthumanist · collaborative · interdisciplinary · public · global`

---

## Updating the About page bio

Open `about.html` and edit the text inside `.bio-text`. The photo is referenced as `images/KW-headshot.JPG` — replace that file in `images/` to update the photo.

---

## Updating a back-matter repository page

Open the relevant file (`dh-pedagogy.html`, `posthumanist-philosophy.html`, or `community-global.html`) and add entries using the `entry-plain` pattern:

```html
<div class="entry-plain">
  <div class="entry-plain-content">
    <p class="entry-plain-title"><a href="URL" target="_blank">Title</a></p>
    <span class="entry-plain-meta">Venue · Year</span>
    <p class="entry-plain-desc">Description.</p>
  </div>
</div>
```

Remove the `<a>` wrapper if there's no link.

---

## Adding images

Drop new image files into the `images/` folder. Reference them in HTML as `images/filename.jpg`. Filenames are case-sensitive on GitHub Pages — `image.JPG` and `image.jpg` are different files.

---

## Updating the CV

Replace `cv.pdf` in the repo root with the new version. Keep the filename the same.

---

## Label vocabulary

Use these terms consistently across making cards and designing sublabels:

`place-based` · `data` · `embodied` · `analog-digital` · `game` · `posthumanist` · `collaborative` · `interdisciplinary` · `public` · `global`

---

## After making changes

```
git add .
git commit -m "brief description of what changed"
git push
```

GitHub Pages usually updates within a minute or two. If the old version persists, hard refresh with `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows), or open in a private window.

