## Why

The portfolio currently supports only Spanish and English. Adding German and Portuguese (Brazil) makes it accessible to a wider international audience, especially relevant given the site's European and Brazilian tech community connections. The language dropdown UX also needs improvement to scale beyond 2 languages.

## What Changes

- Add two new translation files: German (`de/global.json`) and Portuguese Brazil (`pt-BR/global.json`)
- Register both languages in `i18next.init()` in `src/index.jsx` and `src/test/test-utils.jsx`
- Replace the two hardcoded flag buttons in the Header with a dropdown language selector that scales to 4 languages
- Add flag placeholder images for German and Brazil flags
- Update Header tests for the new dropdown pattern
- CV PDF download links pointing to placeholder paths for both new languages

## Capabilities

### New Capabilities
- `german-portuguese-translations`: Add German and Portuguese (Brazil) language support to the portfolio site, including full translation files, language selector UI, and i18n configuration

### Modified Capabilities
- (none — existing i18n infrastructure remains unchanged, only extended)

## Impact

- **22+ files affected**: 4 created (2 translation files, 2 flag placeholders) + 18+ modified (index.jsx, ThemeContext.jsx, test-utils.jsx, Header.jsx, Header.test.jsx, all 18 test files across organisms/pages)
- **i18n config**: `i18next.init()` resources object gains `de` and `pt-BR` entries; default language changed from `lng: "es"` to `lng: "en"`
- **Default language**: English replaces Spanish; updated in i18n init (`src/index.jsx`), persist fallback (`src/styles/ThemeContext.jsx`), and test environment (`src/test/test-utils.jsx`)
- **Header UI**: Flag buttons replaced with dropdown component using `useRef`, useState, and click-outside listener; `overflow-hidden` removed from `<header>` to prevent dropdown clipping; `w-max` added to the 2×2 grid to prevent flag overlap
- **All test files**: Assertions updated from Spanish to English text to match new default language
- **No breaking changes for users**: Spanish, German, Portuguese remain selectable in dropdown — only the initial render default changed
- **Content files**: `content.json` unchanged; its `header.flags` object remains as dead data
