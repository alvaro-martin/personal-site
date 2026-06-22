## Why

The About section has three issues: (1) the flex layout is backwards — on mobile (<768px) the photo and text are side-by-side causing overlap, while on tablet+ they stack vertically; (2) the stats section (03+ years, 04+ articles, 11+ projects) is stale and should be removed; (3) the section lacks visual dynamism — it appears static with no scroll animations. Additionally, the Download CV button's static arrow icon should be animated to draw attention.

## What Changes

- **Fix responsive layout**: Flip `flex-row`/`md:flex-col` to `flex-col`/`md:flex-row` so mobile stacks vertically and desktop shows side-by-side.
- **Remove stats section**: Delete the 03+/04+/11+ stats row from `About.jsx`, the `stats` array from `content.json`, and the `subnumber1`/`subnumber2`/`subnumber3` translation keys from both language files.
- **Add staggered scroll reveal**: Apply existing `card-reveal` pattern (via `useScrollReveal` hook) to the photo (0ms delay), description (200ms delay), and CV button (400ms delay) so elements fade in sequentially as user scrolls.
- **Add bouncing arrow to CV button**: Add a `bounceDown` CSS keyframe that moves the download icon 4px down in a loop at 1.5s interval. Replace `<HiDownload>` with a wrapped version using the new `.download-icon` class.
- **Reduced motion**: The `download-icon` animation is disabled under `prefers-reduced-motion: reduce`. The `card-reveal` elements already have reduced motion handling.

## Capabilities

### New Capabilities
<!-- None — no new capabilities introduced -->

### Modified Capabilities
- `about-section`: Layout fix, stats removal, scroll reveal animation, bouncing download arrow

## Impact

- **Components**: `About.jsx` (layout flip, stats removal, scroll reveal, icon wrapper)
- **Styles**: `index.css` (new `bounceDown` keyframe, `.download-icon` class, reduced motion rule)
- **Data**: `content.json` (remove `stats` array from `about`)
- **Translations**: `en/global.json`, `es/global.json` (remove `subnumber1`, `subnumber2`, `subnumber3`)
- **Accessibility**: All animations respect `prefers-reduced-motion`. Stats removal has no accessibility impact.
