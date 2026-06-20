## Context

The personal website is built with Create React App and hosted on GitHub Pages. The About component (`src/components/03.organisms/About/About.jsx`) includes a CV download button that currently links to PDFs stored on AWS S3. The links are sourced from i18n translations (`about.cvLink` key in `es/global.json` and `en/global.json`).

## Goals / Non-Goals

**Goals:**
- Store CV PDF files in the repo under `public/cv/`
- Update i18n translation links to relative paths
- Maintain current download behavior (opens in new tab)

**Non-Goals:**
- Modifying the About.jsx component or download button behavior
- Adding new language support
- Removing the AWS S3 bucket (user handles separately)
- Implementing PDF versioning or metadata

## Decisions

### Decision 1: Store PDFs in `public/cv/` directory

**Choice:** Use `public/cv/` rather than `src/assets/` or other locations.

**Rationale:**
- Files in `public/` are served as-is by GitHub Pages (no bundling)
- PDFs don't need to be imported or processed by webpack
- Clean separation from source code assets
- Easy to find and update

**Alternative considered:** `src/assets/cv/` — rejected because PDFs would be processed by webpack, creating hashed filenames and requiring imports.

### Decision 2: Use relative paths for PDF links

**Choice:** Use `/cv/CV-ES-Alvaro-Aspilcueta.pdf` instead of full URLs.

**Rationale:**
- Works on any deployment (GitHub Pages, local dev)
- No external dependency
- Consistent with how other assets are referenced

**Alternative considered:** Keep full GitHub Pages URL — rejected as unnecessary coupling.

### Decision 3: Keep `target="_blank"` on download link

**Choice:** Maintain current behavior where PDF opens in new tab.

**Rationale:**
- User can preview before downloading
- Consistent with current UX
- Browser's built-in PDF viewer provides download option

**Alternative considered:** Remove `target="_blank"` for direct download — rejected as scope creep.

## Risks / Trade-offs

- **[Risk]** PDFs increase git repo size → **Mitigation:** PDFs are typically small (100-500KB each); acceptable for personal site
- **[Risk]** Each PDF update creates a new git commit → **Mitigation:** Infrequent updates; acceptable trade-off for versioning
- **[Risk]** No CDN caching like S3 → **Mitigation:** GitHub Pages has its own CDN; PDFs are small enough that caching isn't critical
