## Context

The user manually converted all images in `src/assets/` from PNG/JPG to WebP format. The old files were deleted. The code still imports the old extensions, which will cause build errors.

## Goals / Non-Goals

**Goals:**
- Update all 24 image imports to use `.webp` extensions
- Ensure build and tests pass after migration

**Non-Goals:**
- Changing any component logic
- Optimizing image quality/settings (user already did this)
- Adding fallback formats for older browsers

## Decisions

### 1. Simple find-and-replace

**Decision**: Replace `.png` and `.jpg` extensions with `.webp` in all import statements.

**Why**: The filenames are identical except for the extension. No renaming of the actual image files was done, just format conversion.

## Risks / Trade-offs

- **Favicon compatibility**: `me.jpg` → `me.webp` for favicon. Some older browsers may not render WebP favicons, but this is a personal site targeting modern browsers.
