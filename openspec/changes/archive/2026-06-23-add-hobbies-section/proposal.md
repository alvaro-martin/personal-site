## Why

The personal site showcases professional work (portfolio, research, awards) but has no space for personal interests. Adding a Hobbies section humanizes the site and gives visitors a more complete picture. The first subsection — Paintings — will display 38油画 photographs in a masonry gallery with art-themed reveal animations.

## What Changes

- New **Hobbies** organism section rendered after Awards and before Footer
- New **Paintings** sub-component with CSS masonry grid (3→2→1 columns responsive)
- **Brush-stroke reveal** animation on scroll (clip-path based, no JS dependency)
- Images converted from JPG (313MB total) to WebP (~12-19MB target) for performance
- Navigation updates: Header nav link + Footer anchor for Hobbies
- i18n keys in both EN and ES for section title/subtitle and month names
- Placeholder structure for future subsections: Marathons, Books, Stories

## Capabilities

### New Capabilities
- `hobbies-section`: Top-level Hobbies section organism — wrapper, section heading, i18n, navigation integration
- `paintings-gallery`: Masonry image gallery with brush-stroke scroll reveal, date parsing from filenames, responsive column layout

### Modified Capabilities
- `card-grid`: The existing CardGrid component is NOT modified — Paintings uses its own masonry layout (CSS columns) rather than the CSS grid approach in CardGrid, since mixed portrait/landscape images require natural height flow

## Impact

- **Components**: New files under `src/components/03.organisms/Hobbies/`
- **Styling**: Additions to `src/index.css` (masonry classes, brush-stroke keyframe)
- **Data**: `src/data/content.json` updated with hobbies section + footer anchor
- **i18n**: `src/translations/{en,es}/global.json` updated with hobbies keys
- **Navigation**: `Header.jsx` navLinks array + `content.json` footer.anchors
- **Page composition**: `Home.jsx` imports and renders Hobbies
- **Assets**: `public/paintings/` — JPGs replaced with WebP files
- **No breaking changes**: All additions, no removals or API changes
