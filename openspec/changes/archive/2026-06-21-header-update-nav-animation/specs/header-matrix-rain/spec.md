## ADDED Requirements

### Requirement: Matrix rain animation in header background
The Header SHALL display a CSS-only matrix rain animation behind the brand name area. The animation consists of 20 columns of vertically falling 5-6 character chains (`01010`, `10ai10`, `ai01ai`, `0ai10a`, etc.) in green-tinted color (`--color-primary-dark`) at 40% opacity.

#### Scenario: Matrix rain visible on desktop
- **WHEN** the page loads on a desktop viewport (1400px+)
- **THEN** 20 columns of falling character chains are visible across the full header width

#### Scenario: Matrix rain fades at bottom
- **WHEN** matrix rain columns animate downward
- **THEN** characters fade to transparent opacity before reaching the header bottom edge

#### Scenario: Matrix rain has staggered timing
- **WHEN** the matrix rain animates
- **THEN** each column starts at a different delay (0-2.5s range) and falls at a different speed (3.5-5.8s duration range)

### Requirement: Matrix rain does not block interaction
The matrix rain container SHALL have `pointer-events: none` and be positioned behind nav content via `z-index: 0`.

#### Scenario: Nav links remain clickable
- **WHEN** matrix rain is visible
- **THEN** all nav links, brand name, toggle, and language flags remain fully interactive

### Requirement: Matrix rain respects reduced motion
The matrix rain animation SHALL be disabled when the user has `prefers-reduced-motion: reduce` set.

#### Scenario: Reduced motion user sees no matrix rain
- **WHEN** `prefers-reduced-motion` is `reduce`
- **THEN** matrix rain container is hidden (`display: none`)
