## Why

The Footer component had poor color contrast in dark mode (text was nearly invisible), displayed different mini-presentation text than the Hero section, included nav links that didn't match the Header, had excessive vertical spacing, and lacked visual polish. This change brings the Footer in line with the rest of the site's design language while adding a playful Chrome T-Rex dino animation.

## What Changes

- Keep purple background (`bg-background5`) in light mode; change dark mode background to `#1A1330` (`var(--color-surface)`) to match the CardGrid component
- Use white text for all footer elements, with custom CSS classes (`footer-text`, `footer-text-muted`) that resolve to the correct color in each theme
- Add a Chrome T-Rex dino animation using path-based SVGs (provided by the user), with horizontal flip when changing direction, running at 20% larger size (53px)
- Add binary obstacles (chains of 0s and 1) aligned to the same ground level as the dino's feet
- Replace footer mini-presentation subtitles with Hero's `hero.title1-4` i18n keys so both sections show the same four titles
- Align footer nav links with Header's 6 links (Home, About, Languages, Portfolio, Research, Awards)
- Increase top padding (`pt-16`) to provide breathing room for the dino animation
- Make copyright year dynamic instead of hardcoded

## Capabilities

### New Capabilities

- `footer-redesign`: Visual and structural overhaul of the Footer component — dark mode background matching CardGrid, white text with theme support, Chrome T-Rex dino animation with flip, binary obstacles, mini-presentation sync, nav link alignment, and dynamic copyright year

### Modified Capabilities

- None. The dino animation is self-contained in the Footer component and CSS. No other components are affected.

## Impact

- **Components**: `src/components/03.organisms/Footer/Footer.jsx` — new dino SVG components, updated JSX structure, custom CSS classes for text
- **Data**: `src/data/content.json` — footer anchors array updated, copyrightYear removed
- **Translations**: `src/translations/es/global.json` and `src/translations/en/global.json` — footer link keys updated, subtitle keys removed
- **Styles**: `src/index.css` — dino animation CSS (`.dino-track`, `.dino-jumper`, `.dino-sprite`, keyframes), footer background/text CSS (`.site-footer`, `.footer-text`, `.footer-text-muted`), dark mode overrides via `[data-theme="dark"]`
- **No breaking changes**: All changes are internal to the Footer component; no external APIs affected
