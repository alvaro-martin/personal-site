## Purpose

Visual and structural overhaul of the Footer component — dark mode background matching CardGrid, white text with theme support, Chrome T-Rex dino animation with flip, binary obstacles, mini-presentation sync, nav link alignment, and dynamic copyright year.

## Requirements

### Requirement: Footer background matches CardGrid in dark mode
The Footer SHALL use purple background (`#6865C3`) in light mode via `var(--color-background5)`. In dark mode, the Footer SHALL use `var(--color-surface)` (`#1A1330`), matching the CardGrid component's background. The background is controlled via CSS classes (`.site-footer` and `[data-theme="dark"] .site-footer`), not Tailwind `dark:` utilities.

#### Scenario: Footer background in light mode
- **WHEN** the page is rendered in light mode
- **THEN** the footer background is purple (`#6865C3`)

#### Scenario: Footer background in dark mode
- **WHEN** the page is rendered in dark mode
- **THEN** the footer background is `#1A1330`, matching the CardGrid component

### Requirement: Footer text is white in both modes
The Footer SHALL display white text in both light and dark modes. Text elements SHALL use custom CSS classes (`.footer-text`, `.footer-text-muted`) that resolve to `var(--color-text-inverse)` in light mode and `var(--color-text)` in dark mode via `[data-theme="dark"]` overrides.

#### Scenario: Text visibility in light mode
- **WHEN** the page is rendered in light mode
- **THEN** all footer text (brand name, titles, nav links, copyright) is white on purple background

#### Scenario: Text visibility in dark mode
- **WHEN** the page is rendered in dark mode
- **THEN** all footer text is white/light on dark background

### Requirement: Chrome T-Rex dino animation
The Footer SHALL display a Chrome T-Rex dino animation using path-based SVGs. Two SVG variants SHALL exist: `DinoStanding` and `DinoRunning` (with modified leg coordinates). The dino SHALL move horizontally across the footer via the `dino-move` animation (10s cycle), jump vertically via `dino-jump` (0.6s cycle), and flip horizontally via `dino-flip` (synced to `dino-move`). The dino SHALL be 53×53px (20% larger than original 44px).

#### Scenario: Dino visible in light mode
- **WHEN** the page loads in light mode
- **THEN** a white Chrome T-Rex dino is visible moving across the footer

#### Scenario: Dino visible in dark mode
- **WHEN** the page loads in dark mode
- **THEN** a white Chrome T-Rex dino is visible moving across the dark footer

#### Scenario: Dino flips when changing direction
- **WHEN** the dino moves from right to left
- **THEN** the dino is flipped horizontally (facing left)
- **WHEN** the dino moves from left to right
- **THEN** the dino is not flipped (facing right)

#### Scenario: Dino jumps while moving
- **WHEN** the dino is moving across the footer
- **THEN** the dino continuously jumps up and down via the `dino-jump` animation

### Requirement: Binary obstacles aligned to ground level
The Footer SHALL display 4 binary obstacles (chains of 0s and 1s) at fixed horizontal positions (15%, 35%, 55%, 75%). All obstacles SHALL start from the same ground level, positioned at `bottom: calc(100% - 65px)` where 65px = dino track top (12px) + dino height (53px).

#### Scenario: Obstacles visible
- **WHEN** the page loads
- **THEN** 4 binary obstacles are visible across the footer width

#### Scenario: Obstacles aligned to same ground level
- **WHEN** the obstacles render
- **THEN** all obstacles start from the same horizontal ground line, extending upward

#### Scenario: Obstacles do not block interaction
- **WHEN** obstacles are visible
- **THEN** all footer links, brand name, and social icons remain fully interactive

### Requirement: Footer mini-presentation matches Hero
The Footer SHALL display four title lines reusing the Hero's i18n keys (`hero.title1` through `hero.title4`). Line 1 SHALL use `.footer-text text-xl font-bold`. Lines 2-4 SHALL use `.footer-text-muted text-lg`.

#### Scenario: Four titles displayed
- **WHEN** the footer renders
- **THEN** four subtitle lines are displayed below the brand name

#### Scenario: First title is visually prominent
- **WHEN** the footer renders
- **THEN** the first subtitle is displayed in primary text color, larger font, and bold weight

#### Scenario: Remaining titles are muted
- **WHEN** the footer renders
- **THEN** subtitles 2-4 are displayed in muted text color at normal font size

### Requirement: Footer nav links match Header
The Footer navigation SHALL display exactly 6 links matching the Header's nav links: Home (`#home`), About (`#aboutme`), Languages (`#languages`), Portfolio (`#portfolio`), Research (`#research`), Awards (`#awards`). Links labeled "Skills" and "Services" SHALL NOT appear.

#### Scenario: Six nav links present
- **WHEN** the footer renders
- **THEN** exactly 6 navigation links are displayed

#### Scenario: Nav links match Header order
- **WHEN** the footer renders
- **THEN** links appear in order: Home, About, Languages, Portfolio, Research, Awards

#### Scenario: Skills and Services links absent
- **WHEN** the footer renders
- **THEN** no link points to `#skills` or `#services`

### Requirement: Footer has increased top spacing
The Footer SHALL use `pt-16` (64px) top padding to provide breathing room for the dino animation, and `pb-6` (24px) bottom padding.

#### Scenario: Top spacing accommodates dino
- **WHEN** the footer renders
- **THEN** there is sufficient space between the top edge and the brand name for the dino to be visible

### Requirement: Footer copyright year is dynamic
The Footer SHALL display the current year in the copyright line using `new Date().getFullYear()`. The hardcoded `copyrightYear` value in `content.json` SHALL be removed.

#### Scenario: Copyright shows current year
- **WHEN** the page loads in any year
- **THEN** the copyright line displays the current four-digit year

### Requirement: Footer respects reduced motion
The Footer SHALL disable all dino animations when `prefers-reduced-motion: reduce` is active. The `.dino-track`, `.dino-jumper`, `.dino-frame-1`, and `.dino-frame-2` animations SHALL be set to `none`.

#### Scenario: Reduced motion disables dino
- **WHEN** `prefers-reduced-motion` is `reduce`
- **THEN** the dino does not move, jump, or animate
