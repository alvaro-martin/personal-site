## Why

The current carousel component hides 6-7 items per section (Research, Portfolio, Awards) behind navigation arrows. On mobile, arrows are hidden entirely — users can only swipe, which most won't discover. This means the majority of portfolio and research content is effectively invisible, reducing engagement and discoverability.

## What Changes

- Add a new `CardGrid` molecule that displays all items in a responsive grid
- Update Research, Portfolio, and Awards organisms to use CardGrid instead of Carousel
- Each card shows image, title, truncated description (3 lines), and optional link button
- Grid layout: 1 column on mobile, 2 on tablet, 3 on desktop, with horizontal padding
- Cards animate in with a staggered scroll reveal as they enter the viewport
- Add `btn-primary-sm` utility class for smaller action buttons inside cards
- The `Carousel` molecule remains in the codebase but is no longer used by any organism
- Remove unused carousel-related CSS and i18n keys

## Capabilities

### New Capabilities

- `card-grid`: Responsive card grid component that replaces the carousel, displaying all items simultaneously in a scannable layout

### Modified Capabilities

<!-- No existing spec-level capabilities are changing -->

## Impact

- **Components**: `CardGrid` molecule created; `Carousel` molecule kept but no longer imported
- **Hooks**: `useScrollReveal` custom hook created for IntersectionObserver-based scroll animation
- **Organisms**: `Research`, `Portfolio`, `Awards` — import and usage changes from Carousel to CardGrid
- **CSS**: `.carousel-arrow` styles removed from `index.css` (unused), `btn-primary-sm` added, `.card-reveal` animation rules added
- **i18n**: `carousel.readMore` / `carousel.readLess` keys removed from `es/global.json` and `en/global.json` (unused)
- **Dependencies**: `react-icons` remains (used by Carousel which stays in codebase)
- **Barrel exports**: `02.molecules/index.js` updated to export CardGrid (Carousel export kept)
