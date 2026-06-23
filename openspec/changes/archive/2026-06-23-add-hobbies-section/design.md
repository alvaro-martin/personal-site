## Context

The personal site uses Atomic Design (atoms → molecules → organisms → pages) with Vite + React 19 + Tailwind CSS v4. All organisms follow the same pattern: import content from `content.json`, use `useTranslation("global")` for i18n, and render inside `section-wrapper` with `section-heading`.

Current image situation: 38 JPG paintings in `public/paintings/` totaling 313MB. Average 8.2MB per image, with the largest at 20.3MB. These must be converted to WebP before implementation.

The existing `CardGrid` molecule uses a fixed `aspect-[3/2]` CSS grid — designed for uniform landscape cards. Paintings include both portrait and landscape orientations, requiring a different layout approach.

## Goals / Non-Goals

**Goals:**
- Display paintings in a responsive masonry grid that respects original image orientation
- Animate paintings into view with a brush-stroke themed clip-path reveal
- Parse `yyyy-mm-dd.webp` filenames into localized "Month Year" labels
- Keep total image payload under 20MB (from 313MB)
- Maintain consistency with existing section patterns (section-wrapper, i18n, scroll reveal)

**Non-Goals:**
- Building a lightbox or image viewer — images are displayed inline only
- Creating a generic masonry component for reuse — this is painting-specific
- Modifying the existing CardGrid — it works well for uniform cards
- Image upload or admin interface — images are committed to `public/`
- Implementing Marathons, Books, or Stories subsections — only Paintings for now

## Decisions

### 1. CSS columns masonry vs JS masonry library

**Decision**: CSS `column-count` masonry (no JS dependency).

**Why**: The site has zero runtime dependencies beyond React + i18next. Adding a masonry library (e.g., `react-masonry-css`) for one subsection is overkill. CSS columns handle mixed-height items naturally with `break-inside: avoid`.

**Alternatives considered**:
- `react-masonry-css` — adds dependency, but handles dynamic content better. Not needed since painting list is static.
- CSS Grid `grid-auto-rows: 1px` with `grid-row-end: span N` — more control, but requires JS to calculate span heights. Too complex for this use case.

### 2. Brush-stroke animation via clip-path vs opacity-only

**Decision**: Animated `clip-path` polygon that transitions from jagged brush-edge to full rectangle, combined with opacity fade.

**Why**: A plain `slideUp` fade would be generic. The brush-stroke clip-path gives art-themed personality without adding JS or dependencies. The polygon vertices create an irregular edge that "paints" the image into view.

**Implementation**: Define a jagged polygon in `@keyframes brushReveal` with ~30 vertices along top/bottom edges simulating brush texture. Animate to `polygon(0 0, 100% 0, 100% 100%, 0 100%)` over 800ms with `ease-out`.

### 3. Image path strategy

**Decision**: Hardcoded paths in Paintings component prefixed with `/personal-site/paintings/`.

**Why**: Files in `public/` can't be auto-imported by Vite. The base path `/personal-site/` is already configured in `vite.config.js:8`. Paths must be correct for both dev (localhost:3000) and production (GitHub Pages).

**Alternative considered**: Moving images to `src/assets/` for Vite auto-import — rejected because 38 images would bloat the JS bundle and lose the `public/` static serving benefit.

### 4. Date parsing and localization

**Decision**: Parse filename substring `yyyy-mm` → lookup month name from static arrays (not i18n keys).

**Why**: i18n keys for 12 months × 2 languages = 24 keys that are never reused elsewhere. Static arrays (`MONTHS_EN`, `MONTHS_ES`) in the component are simpler and the Paintings component is the only consumer.

### 5. Component nesting structure

**Decision**: `Hobbies/` folder contains `Hobbies.jsx` (wrapper) and `Paintings/` subfolder.

**Why**: Each subsection has a fundamentally different layout (paintings = masonry, marathons = timeline, books = grid, stories = text). Separate components avoid a monolithic file. Nesting under `Hobbies/` keeps them co-located.

### 6. Subsection labels for multi-category Hobbies

**Decision**: Each subsection (Paintings, Marathons, Books, Stories) renders its own localized `<h2>` label above its content, styled with `text-text-accent`.

**Why**: Since the Hobbies section will contain multiple distinct subsections, each needs a visible label to indicate what category the content belongs to. The label uses the brand accent color (matching the header brand name) for visual consistency.

### 7. Date label color

**Decision**: Painting date labels use `text-text-accent` (brand purple/indigo) instead of `text-text-muted`.

**Why**: The accent color ties the paintings gallery visually to the brand identity. It also makes the date labels more prominent against the card background while remaining consistent with the site's color system.

## Risks / Trade-offs

- **38 WebP images still substantial** → Lazy loading (`loading="lazy"`) ensures only visible images load. Most recent images (top of gallery) load first since they're sorted descending.
- **CSS columns can't animate items individually** → Use `column-fill: auto` and per-card `animationDelay` for staggered reveal. Each card gets `useScrollReveal` class `card-reveal` behavior.
- **Brush-stroke clip-path may clip content on very small cards** → Set `min-h-[200px]` on painting cards to ensure adequate visible area.
- **Hardcoded image paths are fragile** → If paintings are added/removed, the static array in Paintings.jsx must be updated manually. Acceptable for a personal site with infrequent updates.
- **GitHub Pages base path** → All image paths must include `/personal-site/` prefix. Forgetting this causes 404s in production.
