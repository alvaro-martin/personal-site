## ADDED Requirements

### Requirement: Hero name displays with typewriter animation
The system SHALL display the hero name with a typewriter animation effect that types out characters sequentially.

#### Scenario: Name types out on page load
- **WHEN** the page loads
- **THEN** the hero name SHALL animate from `width: 0` to `width: 100%` over 2000ms using `steps(20)` timing

#### Scenario: Blinking cursor during animation
- **WHEN** the typewriter animation is active
- **THEN** a blinking cursor SHALL appear at the end of the text using `border-right` animation

#### Scenario: Animation completes and stays
- **WHEN** the typewriter animation finishes
- **THEN** the name SHALL remain visible with `animation-fill-mode: forwards`

### Requirement: Hero titles fade in with staggered delays
The system SHALL display hero titles with staggered fade-in animations after the typewriter completes.

#### Scenario: First title fades in after typewriter
- **WHEN** the typewriter animation completes (2000ms)
- **THEN** the first title (Msc. degree) SHALL fade in from `opacity: 0` to `opacity: 1` over 600ms

#### Scenario: Subsequent titles fade in with delays
- **WHEN** each subsequent title renders
- **THEN** it SHALL fade in with a 200ms delay after the previous title

#### Scenario: Social links fade in last
- **WHEN** all titles have faded in
- **THEN** the social links SHALL fade in with a 400ms delay

### Requirement: Hero section uses CSS-only animations
The system SHALL implement all hero animations using CSS keyframes only, with no JavaScript animation logic.

#### Scenario: Typewriter uses CSS keyframes
- **WHEN** the typewriter animation renders
- **THEN** it SHALL use `@keyframes typing` with `width` property animation

#### Scenario: Cursor uses CSS keyframes
- **WHEN** the blinking cursor renders
- **THEN** it SHALL use `@keyframes blink` with `border-color` animation

#### Scenario: Titles use CSS transitions
- **WHEN** titles fade in
- **THEN** they SHALL use CSS `opacity` transition with `animation-delay`
