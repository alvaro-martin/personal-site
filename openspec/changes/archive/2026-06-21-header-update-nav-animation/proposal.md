## Why

The Header nav links are stale — they still show Skills and Services, which no longer represent the site's primary sections. Research and Awards are more relevant to Alvaro's profile as an AI Engineer. Additionally, the header lacks visual distinction; it's a plain white/dark bar that doesn't communicate the AI Engineer identity. A subtle matrix rain animation and `</>` code symbol give the header a memorable, on-brand visual signature.

## What Changes

- **Nav links reordered**: Remove Skills and Services, add Research and Awards. New order follows site section flow: Home, About, Languages, Portfolio, Research, Awards.
- **Translation keys added**: `header.research` and `header.awards` in both English and Spanish translation files.
- **Responsive breakpoint raised**: Desktop breakpoint moves from `1260px` to `1400px` to prevent nav overflow with longer Spanish labels ("Investigación", "Reconocimientos").
- **Matrix rain animation**: CSS-only falling `0`/`1`/`ai` characters across the full header width. 20 columns with longer chains (5-6 chars each), green-tinted at 40% opacity, staggered column speeds, fades at bottom.
- **Code symbol decoration**: `</>` code symbol rendered next to the brand name on desktop only. Each character (`<`, `/`, `>`) enters with a separate animation (slide from left, drop + 360° spin, slide from right) over ~2s, then blinks gently. Replaces the originally proposed pixel runner.
- **Section anchor IDs**: Add `id="awards"` and `id="research"` to section tags in Awards.jsx and Research.jsx.
- **Name fix**: Corrected "Alvaro Martin" to "Alvaro Martín" (accent) in content.json and index.jsx meta tags.

## Capabilities

### New Capabilities
- `header-nav-update`: Nav link reorder, translation keys, responsive breakpoint adjustment, and section anchor IDs.
- `header-matrix-rain`: CSS-only matrix rain animation in the header background.
- `header-code-symbol`: `</>` code symbol decoration next to the brand name (desktop only).

### Modified Capabilities
<!-- No existing capabilities have their requirements changed -->

## Impact

- **Components**: `Header.jsx`, `Awards.jsx`, `Research.jsx`
- **Styles**: `index.css` (new keyframes, new component classes)
- **Translations**: `en/global.json`, `es/global.json`
- **Data**: `content.json` (brandName accent fix)
- **SEO/Meta**: `index.jsx` (title and meta tags accent fix)
- **Responsive behavior**: Desktop breakpoint change affects header layout at 1260-1400px viewport widths
- **Accessibility**: Animations respect `prefers-reduced-motion`; no interactive elements affected
