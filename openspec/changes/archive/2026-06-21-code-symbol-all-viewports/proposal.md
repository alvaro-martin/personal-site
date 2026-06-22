## Why

The `</>` code symbol next to the brand name is a developer identity signature that should be visible to all visitors, including those on mobile devices. Currently it's gated behind `{isDesktop && ...}`, meaning mobile visitors never see it. Since the header already has the matrix rain on all viewports, the `</>` should be consistent.

## What Changes

- **Remove `isDesktop` gate on code symbol**: The `{isDesktop && (...)}` conditional around the `</>` JSX in `Header.jsx` is removed. The symbol renders on all viewports.
- **Responsive font size (optional)**: On viewports narrower than 400px, reduce `</>` font size from `1.6rem` to `1.2rem` so it doesn't compete visually with the brand name on tiny screens.
- **No animation changes**: The per-character entrance animation (`codeSlideFromLeft`, `codeDropSpin`, `codeSlideFromRight`) and the `codeBlinkSlow` loop already work on all viewports — no CSS changes needed.
- **No matrix rain changes**: The matrix rain is already unconditional (renders on all viewports) — no changes needed.

## Capabilities

### New Capabilities
<!-- None — no new capabilities introduced -->

### Modified Capabilities
- `header-code-symbol`: Requirement "Code symbol decoration next to brand name" changes from desktop-only to all viewports

## Impact

- **Components**: `Header.jsx` (remove `isDesktop` conditional around code symbol)
- **Styles**: `index.css` (optional responsive font-size for `< 400px`)
- **Accessibility**: No change — `pointer-events: none`, `aria-hidden="true"`, reduced-motion rules already apply universally
- **Mobile layout**: "Alvaro Martín" (~150px) + `</>` (~40px) + hamburger (~35px) = ~225px, fits on all screens ≥ 320px
