## ADDED Requirements

### Requirement: CV PDF files stored in repo
PDF files for CV downloads SHALL be stored in the `public/cv/` directory, one file per supported language.

#### Scenario: PDF files exist in public/cv
- **WHEN** the build completes
- **THEN** `public/cv/CV-ES-Alvaro-Aspilcueta.pdf` exists
- **THEN** `public/cv/CV-EN-Alvaro-Aspilcueta.pdf` exists

### Requirement: CV download links use relative paths with base URL
The i18n translation keys for CV links SHALL use paths that include the Vite base URL (`/personal-site/`) to the PDF files in `public/cv/`.

#### Scenario: Spanish CV link
- **WHEN** the app loads with Spanish locale
- **THEN** `t("about.cvLink")` returns `/personal-site/cv/CV-ES-Alvaro-Aspilcueta.pdf`

#### Scenario: English CV link
- **WHEN** the app loads with English locale
- **THEN** `t("about.cvLink")` returns `/personal-site/cv/CV-EN-Alvaro-Aspilcueta.pdf`

### Requirement: PDF files served by GitHub Pages
PDF files in `public/cv/` SHALL be accessible via GitHub Pages as static files.

#### Scenario: Direct PDF access
- **WHEN** a user navigates to `https://<domain>/personal-site/cv/CV-ES-Alvaro-Aspilcueta.pdf`
- **THEN** the PDF file is served with correct content type
