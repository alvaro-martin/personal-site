## 1. Header Component

- [x] 1.1 Remove `{isDesktop && (...)}` conditional around code symbol JSX in `Header.jsx` (line 90)
- [x] 1.2 Verify `isDesktop` variable is still used for nav toggle and mobile menu (no unused variable)

## 2. Responsive Font Size

- [x] 2.1 Add `@media (max-width: 400px)` rule for `.code-symbol-wrap` in `index.css` with `font-size: 1.2rem`

## 3. Verification

- [x] 3.1 Run `npm test` to confirm no regressions
- [x] 3.2 Run `npm run build` to confirm build succeeds
- [ ] 3.3 Visual verification: `</>` visible on desktop (≥1400px)
- [ ] 3.4 Visual verification: `</>` visible on mobile (<1400px) with entrance animation
- [ ] 3.5 Visual verification: `</>` font size reduced on tiny screens (<400px)
