## ADDED Requirements

### Requirement: Hero greeting displays as two-line typewriter animation
The system SHALL display the hero greeting split into two lines with a typewriter animation effect.

#### Scenario: First line fades in immediately
- **WHEN** the page loads
- **THEN** the first line ("Hola, yo soy" / "Hello, I'm") SHALL fade in from `opacity: 0` to `opacity: 1` over 400ms

#### Scenario: Second line types out after first line
- **WHEN** the first line fade-in completes (400ms delay)
- **THEN** the second line ("Alvaro Martín!") SHALL animate using `clip-path: inset()` from hidden to visible over 2000ms using `steps(14)` timing

#### Scenario: Blinking cursor during animation
- **WHEN** the typewriter animation is active
- **THEN** a blinking cursor SHALL appear at the end of the second line using `border-right` animation

#### Scenario: Animation completes and stays
- **WHEN** the typewriter animation finishes
- **THEN** the name SHALL remain visible with `animation-fill-mode: forwards`

### Requirement: Hero titles fade in with staggered delays
The system SHALL display hero titles with staggered fade-in animations after the typewriter completes.

#### Scenario: First title fades in after typewriter
- **WHEN** the typewriter animation completes (2400ms total)
- **THEN** the first title (Msc. degree) SHALL fade in from `opacity: 0` to `opacity: 1` over 600ms

#### Scenario: Subsequent titles fade in with delays
- **WHEN** each subsequent title renders
- **THEN** it SHALL fade in with a 200ms delay after the previous title

#### Scenario: Social links fade in last
- **WHEN** all titles have faded in
- **THEN** the social links SHALL fade in with a 400ms delay

### Requirement: Hero section uses CSS-only animations
The system SHALL implement all hero animations using CSS keyframes only, with no JavaScript animation logic.

#### Scenario: Typewriter uses clip-path animation
- **WHEN** the typewriter animation renders
- **THEN** it SHALL use `@keyframes typing` with `clip-path: inset()` property animation (not width/max-width)

#### Scenario: Cursor uses CSS keyframes
- **WHEN** the blinking cursor renders
- **THEN** it SHALL use `@keyframes blink` with `border-color` animation

#### Scenario: Titles use CSS transitions
- **WHEN** titles fade in
- **THEN** they SHALL use CSS `opacity` transition with `animation-delay`

### Requirement: Hero greeting text structure
The system SHALL structure the hero greeting as two separate span elements within an h1.

#### Scenario: First line element
- **WHEN** the hero section renders
- **THEN** the first line SHALL be wrapped in `<span class="hero-name-line1">`

#### Scenario: Second line element
- **WHEN** the hero section renders
- **THEN** the second line SHALL be wrapped in `<span class="hero-name-line2">`

#### Scenario: Line break between greeting lines
- **WHEN** the hero section renders
- **THEN** a `<br />` element SHALL separate the two greeting lines

### Technical Notes

**Implementation Details:**
- Use `clip-path: inset(0 100% 0 0)` to `clip-path: inset(0 0 0 0)` for typewriter effect
- `clip-path` avoids layout issues caused by `width`/`max-width` animations
- Steps count must match character count of second line (14 for "Alvaro Martín!")
- Cursor (`border-right`) is applied only to `.hero-name-line2`, not the parent h1

**Why clip-path over width/max-width:**
- `width: 100%` resolves to parent container width which may be constrained
- `max-width` with flex layouts causes parent container to shrink
- `clip-path` doesn't affect layout, only visual clipping
