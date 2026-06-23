## Why

The Hobbies section currently only has a Paintings subsection. Adding a Marathons subsection continues building out the personal interests gallery, showcasing marathon participation with the same masonry grid and brush-stroke reveal animation. The CSS classes will also be refactored from painting-specific to generic hobbies classes to support multiple subsections cleanly.

## What Changes

- **Refactor CSS classes**: Rename `paintings-masonry` / `painting-card` / `painting-date` to generic `hobbies-masonry` / `hobbies-card` / `hobbies-date` for reuse across all Hobbies subsections
- New **Marathons** sub-component with 3 WebP images in CSS columns masonry grid
- Same brush-stroke scroll reveal animation as Paintings
- Same card structure: image + localized date label
- i18n keys for "Marathons" / "Maratones" in both languages
- Hobbies.jsx updated to import and render Marathons below Paintings

## Capabilities

### New Capabilities
- `marathons-gallery`: Marathon images gallery subsection within Hobbies — masonry grid, brush-stroke animation, date parsing, i18n

### Modified Capabilities
- `paintings-gallery`: CSS classes renamed from painting-specific to generic hobbies classes (refactor, no behavior change)

## Impact

- **Components**: New `src/components/03.organisms/Hobbies/Marathons/` directory
- **Styling**: `src/index.css` — class renames (paintings-masonry → hobbies-masonry, etc.)
- **Components**: `Paintings.jsx` — updated class names
- **Components**: `Hobbies.jsx` — import + render Marathons
- **i18n**: `src/translations/{en,es}/global.json` — added `hobbies.marathons` key
- **No breaking changes**: CSS class rename is internal, no external API changes
