## Context

The Footer component (`src/components/03.organisms/Footer/Footer.jsx`) uses `bg-background5` (purple `#6865C3` in light mode) as its background. In dark mode, `--color-background5` resolves to `#0A0612`, which is much darker than the CardGrid's `--color-surface` (`#1A1330`). The original implementation used `text-text-inverse` for text, but this variable resolves to `#1A1525` (near-black) in dark mode, making text invisible. The footer also displayed different mini-presentation text than the Hero section, included nav links that didn't match the Header, and had excessive padding.

The site uses `data-theme="dark"` for dark mode toggling (set by `ThemeContext.jsx`), but Tailwind's `dark:` variant uses `@media (prefers-color-scheme: dark)` by default, making `dark:` prefixed utilities ineffective for this project.

## Goals / Non-Goals

**Goals:**
- Fix dark mode contrast by matching CardGrid's background (`#1A1330`) in dark mode
- Ensure white text in both light and dark modes using custom CSS classes
- Add a Chrome T-Rex dino animation with path-based SVG, horizontal flip, and binary obstacles
- Sync mini-presentation with Hero by reusing `hero.title1-4` i18n keys
- Align footer nav links with Header's 6 links
- Provide more top spacing for the dino animation
- Make copyright year dynamic

**Non-Goals:**
- Refactoring the Header component or other sections
- Changing the overall page layout
- Adding new i18n keys (reusing existing `hero.*` keys instead)
- Modifying the dark mode toggle mechanism

## Decisions

### Decision 1: Background — CSS-based theme override, not Tailwind `dark:`

**Choice**: Remove `bg-background5` from the JSX. Use a `.site-footer` CSS class with `background-color: var(--color-background5)` for light mode and `[data-theme="dark"] .site-footer { background-color: var(--color-surface); }` for dark mode.

**Rationale**: Tailwind's `dark:` variant doesn't work with `data-theme` attributes. The site's existing pattern uses `[data-theme="dark"]` CSS selectors for dark mode overrides. Using a CSS class avoids the Tailwind layer specificity issue where `dark:bg-surface` would be overridden by the utility layer.

**Alternatives considered**:
- Use `dark:bg-surface` in JSX — doesn't work because Tailwind's `dark:` uses `@media (prefers-color-scheme: dark)`, not `data-theme`
- Use `!important` on the CSS override — works but is a code smell
- Configure Tailwind to use `data-theme` for dark mode — requires build config changes, out of scope

### Decision 2: Text color — Custom CSS classes with theme-aware variables

**Choice**: Define `.footer-text`, `.footer-text-muted`, and `.footer-text-hover` CSS classes that use `var(--color-text-inverse)` in light mode and `var(--color-text)` in dark mode via `[data-theme="dark"]` overrides.

**Rationale**: `text-text-inverse` resolves to `#FFFFFF` in light mode but `#1A1525` (dark) in dark mode. Using `text-text` gives `#1A1525` in light (poor contrast on purple). Custom classes allow correct colors in both modes without modifying the design token system.

**Alternatives considered**:
- Use `text-white` explicitly — works but loses opacity control for muted text
- Change `--color-text-inverse` token in dark mode — affects all uses of the token globally

### Decision 3: Dino animation — Path-based SVG with horizontal flip

**Choice**: Use the user-provided Chrome T-Rex SVG path (`viewBox="0 0 144 144"`, scaled to 53×53px). Create two variants: DinoStanding and DinoRunning (leg coordinates shifted ±4px). Apply `scaleX(-1)` flip via `dino-flip` animation synced to the 10s `dino-move` cycle.

**Rationale**: The user provided the actual Chrome T-Rex SVG path, which is more accurate than hand-drawn pixel art. The flip ensures the dino faces the direction of movement: facing left when moving right→left, facing right when moving left→right.

**Alternatives considered**:
- Use rect-based pixel art — less accurate, user rejected earlier versions
- Don't flip the dino — user explicitly requested it face the movement direction
- Apply flip to `.dino-track` — would mirror the positioning, breaking the animation

### Decision 4: Obstacles — Aligned to ground level via `bottom` positioning

**Choice**: Position `.dino-obstacle` elements with `bottom: calc(100% - 65px)` where 65px = dino track top (12px) + dino height (53px). This ensures all obstacles start from the same imaginary ground line where the dino's feet are.

**Rationale**: The dino runs along an imaginary ground line at the bottom of its bounding box. Obstacles should visually sit on this line, extending upward. Using `bottom` positioning with a calculated value ensures consistent alignment regardless of obstacle height (2-4 lines of binary text).

**Alternatives considered**:
- Use `top` with `transform: translateY(-100%)` — works but less intuitive
- Use fixed `top` value — obstacles have different heights, would misalign

### Decision 5: Dino size — 20% larger (44px → 53px)

**Choice**: Increase SVG `width`/`height` from 44 to 53, and `.dino-sprite` dimensions from 44×44 to 53×53. Increase `dino-move` left offset from -60px to -80px to account for larger size.

**Rationale**: The 44px dino was too small to be visually prominent on a full-width footer. 20% larger (53px) provides better visibility without overwhelming the content.

**Alternatives considered**:
- Keep 44px — user explicitly requested larger
- Make 50% larger (66px) — too large, would dominate the footer

### Decision 6: Spacing — More top padding for dino

**Choice**: Change footer padding from `py-6` to `pt-16 pb-6` (64px top, 24px bottom).

**Rationale**: The dino animation runs near the top of the footer (`top: 12px`). More top padding provides breathing room between the dino and the brand name, preventing visual overlap.

## Risks / Trade-offs

- **[Risk] Custom CSS classes bypass Tailwind utility system** — Mitigated by keeping the classes simple and well-documented in the CSS file. The site already uses custom CSS for animations and dark mode overrides.
- **[Risk] Dino flip animation synced to movement** — The `dino-flip` and `dino-move` animations both run on 10s cycles. If one is paused (e.g., via `prefers-reduced-motion`), the other should also be paused. This is handled by the reduced-motion CSS rule.
- **[Trade-off] Path-based SVG vs pixel art** — Path-based SVGs are more accurate but harder to modify manually. The user provided the SVG path, so this is acceptable.
- **[Trade-off] Binary obstacles at fixed positions** — Obstacles don't move with the dino; the dino passes over them. This simplifies the animation but means the dino doesn't "jump over" specific obstacles.
