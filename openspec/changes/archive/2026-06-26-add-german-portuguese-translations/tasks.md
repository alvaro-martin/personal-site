## 1. Translation Files

- [x] 1.1 Create `src/translations/de/global.json` with all 234 keys translated to German; set `about.cvLink` to `/personal-site/cv/CV-DE-Alvaro-Aspilcueta.pdf`
- [x] 1.2 Create `src/translations/pt-BR/global.json` with all 234 keys translated to Portuguese (Brazil); set `about.cvLink` to `/personal-site/cv/CV-PT-Alvaro-Aspilcueta.pdf`

## 2. Default Language Change

- [x] 2.1 Change `lng` from `"es"` to `"en"` in `src/index.jsx` i18next.init()
- [x] 2.2 Change default language fallback from `'es'` to `'en'` in `src/styles/ThemeContext.jsx`
- [x] 2.3 Change default language from `'es'` to `'en'` in `src/test/test-utils.jsx` i18next instance
- [x] 2.4 Update all 18 test files (Header, Hero, About, Footer, Skills, Services, NewProject, Portfolio, Research, Awards, Journey, Languages, Hobbies, Paintings, Books, Marathons, Home, ScrollToTop) — replace Spanish `screen.getByText()` assertions with English equivalents

## 3. Flag Placeholder Images

- [x] 3.1 Create placeholder `src/assets/DE-flag.webp`
- [x] 3.2 Create placeholder `src/assets/BR-flag.webp`

## 4. i18n Configuration

- [x] 4.1 Register `de` and `pt-BR` resources in `src/index.jsx` — imports + `i18next.init()` entries
- [x] 4.2 Register `de` and `pt-BR` resources in `src/test/test-utils.jsx` — same imports + init entries

## 5. Header Language Dropdown

- [x] 5.1 Import 4 flags (`ESflag`, `USflag`, `DEflag`, `BRflag`) and `IoChevronDown` in `src/components/03.organisms/Header/Header.jsx`
- [x] 5.2 Add `import { useRef } from "react"` and create `languages` config array inside the component
- [x] 5.3 Add `langOpen` state + `langRef` ref + click-outside `useEffect`
- [x] 5.4 Compute `currentLang` from the language config array
- [x] 5.5 Replace desktop flag buttons (lines 117-134) with dropdown trigger + 2×2 grid panel
- [x] 5.6 Replace mobile flag buttons (lines 186-203) with same dropdown trigger + 2×2 grid panel
- [x] 5.7 Remove `overflow-hidden` from `<header>` class — absolute dropdown extends 61px below header bounds and would otherwise be clipped
- [x] 5.8 Add `w-max` to the 2×2 grid container — prevents flag overlap when parent flex row is narrower than grid content

## 6. Test Updates

- [x] 6.1 Update `src/components/03.organisms/Header/Header.test.jsx` — rewrite "renders flag images" test to click the trigger and assert all 4 alt texts; use `getAllByAltText` to handle duplicate alt text (both trigger and dropdown show same flags)

## 7. Verification

- [x] 7.1 Run `npm test` — all 95 tests pass
- [x] 7.2 Run `npm run build` — production build succeeds
