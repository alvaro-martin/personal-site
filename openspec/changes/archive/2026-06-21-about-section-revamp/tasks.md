## 1. Layout Fix

- [x] 1.1 Flip flex direction in `About.jsx`: change `flex-row` to `flex-col` and `md:flex-col` to `md:flex-row`

## 2. Remove Stats Section

- [x] 2.1 Remove `content.about.stats.map(...)` block from `About.jsx`
- [x] 2.2 Remove `stats` array from `about` object in `src/data/content.json`
- [x] 2.3 Remove `about.subnumber1`, `about.subnumber2`, `about.subnumber3` from `src/translations/en/global.json`
- [x] 2.4 Remove `about.subnumber1`, `about.subnumber2`, `about.subnumber3` from `src/translations/es/global.json`

## 3. Scroll Reveal Animation

- [x] 3.1 Import `useScrollReveal` hook in `About.jsx`
- [x] 3.2 Add `useScrollReveal` hook call and wrap content in `ref` container
- [x] 3.3 Add `card-reveal` class to photo div with `animationDelay: '0ms'`
- [x] 3.4 Add `card-reveal` class to description `<p>` with `animationDelay: '200ms'`
- [x] 3.5 Add `card-reveal` class to CV button `<a>` with `animationDelay: '400ms'`

## 4. Bouncing Download Arrow

- [x] 4.1 Add `@keyframes bounceDown` to `index.css` (translateY 0→4px→0, 1.5s)
- [x] 4.2 Add `.download-icon` class to `index.css` with bounce animation
- [x] 4.3 Wrap `<HiDownload>` in `<span className="download-icon">` in `About.jsx`

## 5. Reduced Motion

- [x] 5.1 Add `.download-icon { animation: none; }` to the `prefers-reduced-motion: reduce` media query in `index.css`

## 6. Verification

- [x] 6.1 Run `npm test` to confirm no regressions
- [x] 6.2 Run `npm run build` to confirm build succeeds
- [ ] 6.3 Visual verification: mobile (375px) — photo stacks above text
- [ ] 6.4 Visual verification: desktop (≥768px) — photo left, text right
- [ ] 6.5 Visual verification: scroll reveal — elements fade in with stagger
- [ ] 6.6 Visual verification: CV button — arrow bounces continuously
- [ ] 6.7 Visual verification: `prefers-reduced-motion` — no animations
