## Why

The Hobbies section currently has Paintings (38 images) and Marathons (3 images). Adding a Books subsection completes the personal interests gallery, showcasing books read with the same masonry grid and brush-stroke reveal animation. The existing `public/books/` directory already contains 20 WebP images with date-based filenames.

## What Changes

New **Books** sub-component with 20 WebP images in CSS columns masonry grid, following the exact same pattern as Paintings and Marathons. Reuses generic `hobbies-*` CSS classes (already refactored in the previous change).

## Capabilities

### New Capabilities
- `books-gallery`: Books gallery subsection within Hobbies — masonry grid, brush-stroke animation, date parsing, i18n

## Impact

- **Components**: New `src/components/03.organisms/Hobbies/Books/` directory
- **Components**: `Hobbies.jsx` — import + render Books below Marathons
- **i18n**: `src/translations/{en,es}/global.json` — added `hobbies.books` key
- **No CSS changes**: Reuses existing `hobbies-masonry`, `hobbies-card`, `hobbies-date` classes
- **No breaking changes**: Additive only
