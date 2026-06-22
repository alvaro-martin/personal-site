## 1. Translations

- [x] 1.1 Add `header.research` and `header.awards` keys to `src/translations/en/global.json`
- [x] 1.2 Add `header.research` and `header.awards` keys to `src/translations/es/global.json`

## 2. Section Anchor IDs

- [x] 2.1 Add `id="research"` to the `<section>` tag in `src/components/03.organisms/Research/Research.jsx`
- [x] 2.2 Add `id="awards"` to the `<section>` tag in `src/components/03.organisms/Awards/Awards.jsx`

## 3. Header Nav Update

- [x] 3.1 Replace `navLinks` array in `Header.jsx` with new order: Home, About, Languages, Portfolio, Research, Awards
- [x] 3.2 Change `useMediaQuery` breakpoint from `1260px` to `1400px` in `Header.jsx`

## 4. Matrix Rain Animation

- [x] 4.1 Add `@keyframes matrixFall` animation to `src/index.css`
- [x] 4.2 Add `.matrix-rain` and `.matrix-column` component classes to `src/index.css` (opacity 0.4, color: `--color-primary-dark`)
- [x] 4.3 Add matrix rain container and 20 column divs to `Header.jsx` JSX (full header width, 5-6 char chains like `01010`, `10ai10`, `ai01ai`)

## 5. Code Symbol Animation

- [x] 5.1 Add `@keyframes codeSlideFromLeft`, `codeDropSpin`, `codeSlideFromRight`, `codeBlinkSlow` to `src/index.css`
- [x] 5.2 Add `.code-symbol-wrap`, `.code-char`, `.code-lt`, `.code-slash`, `.code-gt` component classes to `src/index.css`
- [x] 5.3 Add brand name + `</>` wrapped in `<div className="flex items-center">` to `Header.jsx` JSX (desktop only, `pointer-events: none`)

## 6. Name Fix

- [x] 6.1 Fix "Alvaro Martin" → "Alvaro Martín" in `src/data/content.json` (brandName, photoAlt)
- [x] 6.2 Fix title and all meta tags in `src/index.jsx` to use "Alvaro Martín"

## 7. Reduced Motion

- [x] 7.1 Add `prefers-reduced-motion` rules for `.matrix-rain` (display: none) and `.code-symbol-wrap`/`.code-char` (animation: none, opacity: 1) to the existing reduced motion media query in `src/index.css`

## 8. Verification

- [x] 8.1 Run `npm test` to confirm no regressions (75/75 passing)
- [x] 8.2 Run `npm run build` to confirm build succeeds
- [ ] 8.3 Visual verification: desktop nav shows correct links at 1400px+ breakpoint
- [ ] 8.4 Visual verification: matrix rain animates across full header width
- [ ] 8.5 Visual verification: `</>` animates next to brand name with per-character entrance
- [ ] 8.6 Visual verification: animations disabled with `prefers-reduced-motion: reduce`
