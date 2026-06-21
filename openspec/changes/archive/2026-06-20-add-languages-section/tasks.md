## 1. Data & Translations

- [x] 1.1 Add `languages` data structure to `src/data/content.json`
- [x] 1.2 Add Spanish translations to `src/translations/es/global.json` (languages.title, languages.subtitle, languages.spanish, languages.english, languages.portuguese, languages.german)
- [x] 1.3 Add English translations to `src/translations/en/global.json`

## 2. Languages Component

- [x] 2.1 Create `src/components/03.organisms/Languages/Languages.jsx` with hybrid card layout
- [x] 2.2 Add progress bar with CSS keyframe fill animation (`@keyframes fillBar`)
- [x] 2.3 Add staggered row reveal with `useScrollReveal` hook and inline `animation-delay`
- [x] 2.4 Add TOEFL badge with shine animation and PDF download link
- [x] 2.5 Add hover effects (row highlight, progress bar glow)

## 3. Styles

- [x] 3.1 Add CSS keyframes for `fillBar`, `badgePopIn`, and `shine` animations to `src/index.css`

## 4. Navigation Updates

- [x] 4.1 Add "languages" link to Header nav items (between skills and services) in `src/components/03.organisms/Header/Header.jsx`
- [x] 4.2 Add "languages" anchor to Footer in `src/components/03.organisms/Footer/Footer.jsx`

## 5. Integration

- [x] 5.1 Add Languages export to `src/components/03.organisms/index.js`
- [x] 5.2 Add `<Languages />` to `src/components/05.pages/Home/Home.jsx` between Journey and NewProject

## 6. Tests

- [x] 6.1 Create `src/components/03.organisms/Languages/Languages.test.jsx`
- [x] 6.2 Verify all tests pass with `npm test`

## 7. Verify

- [x] 7.1 Run `npm run build` — build succeeds
- [x] 7.2 Verify Languages section renders on Home page with correct content
