## Why

CV PDF files are currently hosted on AWS S3, creating an external dependency for a critical personal asset. Storing PDFs in the repo eliminates S3 costs, simplifies updates (just replace the file), and keeps the CV versioned with the codebase. GitHub Pages can serve PDFs from `public/` as static files.

## What Changes

- Add `public/cv/` directory with language-specific PDF files
- Update i18n translation links from S3 URLs to relative paths
- No changes to About.jsx component (already uses `t("about.cvLink")`)

## Capabilities

### New Capabilities

- `cv-pdf-storage`: PDF file storage and serving from GitHub Pages via `public/cv/` directory

### Modified Capabilities

None — no existing specs require modification.

## Impact

- **Files created**: `public/cv/CV-ES-Alvaro-Aspilcueta.pdf`, `public/cv/CV-EN-Alvaro-Aspilcueta.pdf`
- **Files modified**: `src/translations/es/global.json` (about.cvLink), `src/translations/en/global.json` (about.cvLink)
- **Dependencies removed**: AWS S3 (for CV hosting)
- **Hosting**: GitHub Pages serves PDFs from `public/` as static files
