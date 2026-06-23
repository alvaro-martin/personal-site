## 1. Translation Updates

- [x] 1.1 Update `src/translations/es/global.json` footer section: replace `link1-5` values with Inicio, Sobre mi, Idiomas, Portafolio, Investigacion, Reconocimientos; add `link6`; remove `subtitle1`, `subtitle2`, `subtitle3`
- [x] 1.2 Update `src/translations/en/global.json` footer section: replace `link1-5` values with Home, About, Languages, Portfolio, Research, Awards; add `link6`; remove `subtitle1`, `subtitle2`, `subtitle3`

## 2. Data Updates

- [x] 2.1 Update `src/data/content.json` footer.anchors array to 6 entries matching Header nav: `#home`, `#aboutme`, `#languages`, `#portfolio`, `#research`, `#awards`
- [x] 2.2 Remove `copyrightYear` from `content.json` footer section

## 3. Footer Component — Chrome T-Rex Dino Animation

- [x] 3.1 Add `DinoStanding` component with path-based SVG (`viewBox="0 0 144 144"`, `width="53" height="53"`, `fill="currentColor"`)
- [x] 3.2 Add `DinoRunning` component with modified leg coordinates (right leg forward, left leg back — ±4px shift)
- [x] 3.3 Add `.dino-track` CSS: `position: absolute; top: 12px; z-index: 1; pointer-events: none; animation: dino-move 10s ease-in-out infinite`
- [x] 3.4 Add `.dino-jumper` CSS: `animation: dino-jump 0.6s ease-in-out infinite`
- [x] 3.5 Add `.dino-sprite` CSS: `position: relative; width: 53px; height: 53px; animation: dino-flip 10s ease-in-out infinite`
- [x] 3.6 Add `@keyframes dino-move`: 0%/100% `left: calc(100% + 20px)`, 50% `left: -80px`
- [x] 3.7 Add `@keyframes dino-jump`: 0%/100% `translateY(0)`, 50% `translateY(-16px)`
- [x] 3.8 Add `@keyframes dino-flip`: 0%-49.9% `scaleX(-1)`, 50%-100% `scaleX(1)`
- [x] 3.9 Add `@keyframes dino-legs`: opacity toggle for frame alternation
- [x] 3.10 Add `.dino-frame-1` and `.dino-frame-2` CSS for sprite animation

## 4. Footer Component — Binary Obstacles

- [x] 4.1 Add 4 `<span className="dino-obstacle">` elements at fixed positions (15%, 35%, 55%, 75%)
- [x] 4.2 Each obstacle contains stacked binary digits (`<span className="block">`) in monospace font
- [x] 4.3 Add `.dino-obstacle` CSS: `position: absolute; bottom: calc(100% - 65px); z-index: 0`

## 5. Footer Component — Background & Text Colors

- [x] 5.1 Remove `bg-background5` Tailwind class from `<footer>` element
- [x] 5.2 Add `site-footer` class to `<footer>` element
- [x] 5.3 Add `.site-footer` CSS: `background-color: var(--color-background5)` (purple in light mode)
- [x] 5.4 Add `[data-theme="dark"] .site-footer` CSS: `background-color: var(--color-surface)` (#1A1330 in dark mode)
- [x] 5.5 Add `.footer-text` CSS: `color: var(--color-text-inverse)` with `[data-theme="dark"]` override to `var(--color-text)`
- [x] 5.6 Add `.footer-text-muted` CSS with 0.8 opacity and dark mode override
- [x] 5.7 Add `.footer-text-hover:hover` CSS with dark mode override
- [x] 5.8 Update all footer text elements to use `.footer-text` and `.footer-text-muted` classes
- [x] 5.9 Update obstacle text to use `text-white/20` for consistent visibility in both modes

## 6. Footer Component — Layout & Spacing

- [x] 6.1 Change `<footer>` padding from `py-6` to `pt-16 pb-6` for dino breathing room
- [x] 6.2 Add dino track, jumper, and sprite div structure before content
- [x] 6.3 Update content div structure with `relative z-10` for layering above dino

## 7. Footer Component — Dynamic Year

- [x] 7.1 Add `const currentYear = new Date().getFullYear();` at top of Footer component
- [x] 7.2 Replace `{content.footer.copyrightYear}` with `{currentYear}` in copyright paragraph

## 8. Footer Component — Accessibility

- [x] 8.1 Add `aria-hidden="true"` to dino track and obstacle elements
- [x] 8.2 Add `prefers-reduced-motion: reduce` CSS rule to disable all dino animations (`.dino-track`, `.dino-jumper`, `.dino-frame-1`, `.dino-frame-2`)

## 9. Verification

- [x] 9.1 Run `npm run build` to verify no build errors
- [x] 9.2 Run `npm test` to verify all 73 tests pass
- [x] 9.3 Visually verify footer in light mode: purple background, white text, Chrome T-Rex dino, binary obstacles, correct nav links, dynamic year
- [x] 9.4 Visually verify footer in dark mode: #1A1330 background (matching CardGrid), white text, dino visible and flipped correctly
