## Purpose

Defines the `</>` code symbol decoration next to the brand name in the header, providing a developer-themed visual signature.

## Requirements

### Requirement: Code symbol decoration next to brand name
The Header SHALL display a `</>` code symbol immediately to the right of the brand name on desktop viewports (1400px+). The symbol SHALL be wrapped in a `flex items-center` container with the brand name to keep them visually grouped.

#### Scenario: Code symbol visible on desktop
- **WHEN** the page loads on a desktop viewport (1400px+)
- **THEN** a `</>` symbol appears immediately to the right of the brand name "Alvaro Martín"

#### Scenario: Code symbol hidden on mobile
- **WHEN** the page loads on a viewport narrower than 1400px
- **THEN** the `</>` symbol is not rendered

### Requirement: Per-character entrance animation
Each character of `</>` SHALL enter with a separate animation: `<` slides in from the left, `/` drops from above with a 360° spin, `>` slides in from the right. Total entrance duration is approximately 2 seconds.

#### Scenario: Characters animate in sequence
- **WHEN** the page loads on desktop
- **THEN** `<` enters at 0.4s delay, `/` enters at 1.0s delay with spin, `>` enters at 1.6s delay, completing the build effect by ~2.1s

#### Scenario: Characters blink after entrance
- **WHEN** the entrance animations complete
- **THEN** all three characters blink gently via `codeBlinkSlow` animation (2.5s step-end infinite)

### Requirement: Code symbol does not block interaction
The code symbol SHALL have `pointer-events: none` and not interfere with nav link interactions.

#### Scenario: Nav links remain clickable
- **WHEN** code symbol is visible
- **THEN** all nav links, brand name, toggle, and language flags remain fully interactive

### Requirement: Code symbol respects reduced motion
The code symbol entrance animations SHALL be disabled when the user has `prefers-reduced-motion: reduce` set.

#### Scenario: Reduced motion user sees static symbol
- **WHEN** `prefers-reduced-motion` is `reduce`
- **THEN** `</>` characters are visible at full opacity with no animation
