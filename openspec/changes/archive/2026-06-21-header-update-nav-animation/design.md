## Context

The Header component (`src/components/03.organisms/Header/Header.jsx`) is the fixed navigation bar at the top of the site. It uses a `useMediaQuery` hook at `1400px` to switch between desktop (horizontal nav) and mobile (hamburger menu). The nav links array contains 6 entries. The header now has matrix rain animation in the background and a `</>` code symbol next to the brand name.

The site uses Tailwind CSS v4 with design tokens in `src/index.css`. All animations are defined as `@keyframes` in `src/index.css` under the animations section. The component follows atomic design and uses named exports.

## Goals / Non-Goals

**Goals:**
- Replace Skills/Services nav links with Research/Awards in the correct site order
- Raise desktop breakpoint to prevent nav overflow with longer Spanish labels
- Add a CSS-only matrix rain animation as header background decoration
- Add a `</>` code symbol decoration next to the brand name (desktop only)
- Ensure all animations respect `prefers-reduced-motion`
- Add section anchor IDs for Research and Awards

**Non-Goals:**
- Interactive animation elements (no hover-triggered jumps or clicks)
- Canvas-based or JavaScript-driven animations
- Changes to mobile menu behavior (only desktop breakpoint changes)
- Changes to nav link styling (font size, padding, colors remain the same)
- Adding new dependencies

## Decisions

### 1. Breakpoint: 1400px (not 1300px or 1500px)

At 20px bold font + 32px horizontal padding per link, the 6 Spanish nav items total ~825px. Adding the brand (~150px), toggle + flags (~230px), and the breakpoint of 1260px leaves only ~55px of breathing room — too tight. At 1400px, there's ~195px of margin, which accommodates font rendering variations across platforms.

**Alternative considered**: Reduce nav-link padding from `spacing-4` (16px) to `spacing-3` (12px). Rejected because it changes existing visual design without user request.

### 2. Matrix rain: 20 columns, full header width, longer chains

The matrix rain uses 20 `<div>` columns positioned absolutely across the full header width (1% to 96%). Each column contains vertically stacked 5-6 character chains (`01010`, `10ai10`, `ai01ai`, `0ai10a`, etc.) animated with `@keyframes matrixFall`. Staggered `animation-delay` values (0-2.5s range) and varying `animation-duration` (3.5-5.8s range) create organic falling patterns. The container uses `opacity: 0.4` for subtlety and `color: var(--color-primary-dark)` for the green tint.

**Why not canvas**: CSS animations are simpler, lighter, already the pattern used in this codebase (see hero typewriter, journey animations), and sufficient for a subtle background effect.

**Why 20 columns**: 8 columns only covered ~320px of the header width (the brand name area). Expanding to 20 columns with 5-6 character chains creates a denser, more rain-like appearance across the full header width.

**Why opacity 0.4**: The original 0.2 was too faint to notice; 0.4 balances visibility with subtlety — the rain is clearly present but doesn't compete with nav link readability.

### 3. Code symbol: `</>` next to brand name, desktop only, per-character animation

The `</>` code symbol replaces the originally proposed pixel runner. It sits immediately to the right of the brand name in a `flex items-center` wrapper, visible only on desktop (1400px+). Each character enters with a separate animation: `<` slides from left, `/` drops from above with a 360° spin, `>` slides from right. Total entrance time is ~2s. After entrance, all three characters blink gently via `codeBlinkSlow`.

**Why `</>` instead of pixel runner**: The pixel runner was a Chrome dino-game reference that didn't clearly communicate "AI Engineer." The `</>` is a universal code symbol — immediately recognizable, lightweight (3 spans vs box-shadow pixel art), and directly reinforces the developer identity.

**Why per-character animation**: Three separate entrance animations with staggered delays (0.4s, 1.0s, 1.6s) create a noticeable build effect. A single fade-in would be too subtle for a 2-second window.

**Why flex wrapper**: Without it, the header's `justify-between` layout separates the brand name (left flex child) from the `</>` (right flex child). Wrapping both in `<div className="flex items-center">` keeps them together as a single unit.

**Why desktop only**: On mobile, horizontal space is scarce. The `</>` would either overflow or force the brand name to shrink. `{isDesktop && (...)}` conditionally renders it.

### 4. Z-index layering

- Matrix rain: `z-index: 0`, `pointer-events: none`
- Code symbol: `z-index: 1`, `pointer-events: none`
- Nav content (brand, links, controls): default stacking (implicit `z-index: auto` or `position: relative`)
- Header border separator: `z-index: 50` (already exists)

This ensures the matrix rain and code symbol never block nav interactions.

### 5. Translation keys: "Awards" not "Acknowledgments"

The Awards section heading is "Acknowledgments and Awards" but the nav label should be short. "Awards" is cleaner and more recognizable as a nav item. The section heading remains unchanged.

## Risks / Trade-offs

- **[Performance]** 20 animated CSS columns + 3 code symbol character animations = 23 simultaneous CSS animations in the header. → Mitigation: All are simple `translateY`/`translateX` + `opacity` transforms, which GPU-accelerate well. No layout thrashing. `will-change: transform` on animated elements. The matrix rain columns and code symbol characters are lightweight — no box-shadow pixel art.
- **[Breakpoint gap]** Raising to 1400px means devices between 1260-1400px now get mobile menu instead of desktop nav. → Mitigation: This is the correct behavior — those viewports couldn't fit the desktop nav anyway.
- **[Reduced motion]** Users with `prefers-reduced-motion` must see no animation. → Mitigation: All animations disabled via existing `@media (prefers-reduced-motion: reduce)` block in index.css. Matrix rain hidden entirely, code symbol characters visible at full opacity with no animation.
