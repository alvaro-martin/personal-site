## Why

All images in `src/assets/` have been converted from `.png`/`.jpg` to `.webp` format for better compression and performance. The code still references the old extensions, so imports need to be updated to match the new file names.

## What Changes

Update 24 image imports across 7 component files to use `.webp` extensions instead of `.png`/`.jpg`. No logic changes, just file extension references.

## Capabilities

No new capabilities. This is a mechanical migration of existing imports.

## Impact

- **Components**: 7 files updated (About.jsx, Awards.jsx, Header.jsx, Hero.jsx, Portfolio.jsx, Research.jsx, index.jsx)
- **No breaking changes**: Same images, same imports, just different file extensions
- **Performance**: WebP images are smaller than PNG/JPG, so bundle size improves
