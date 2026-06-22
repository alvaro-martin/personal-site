## MODIFIED Requirements

### Requirement: Code symbol decoration next to brand name
The Header SHALL display a `</>` code symbol immediately to the right of the brand name on all viewports. The symbol SHALL be wrapped in a `flex items-center` container with the brand name to keep them visually grouped. On viewports narrower than 400px, the symbol font size SHALL be reduced to `1.2rem` for visual balance.

#### Scenario: Code symbol visible on all viewports
- **WHEN** the page loads on any viewport
- **THEN** a `</>` symbol appears immediately to the right of the brand name "Alvaro Martín"

#### Scenario: Code symbol font size on small screens
- **WHEN** the viewport is narrower than 400px
- **THEN** the `</>` symbol renders at `1.2rem` font size

#### Scenario: Code symbol font size on standard screens
- **WHEN** the viewport is 400px or wider
- **THEN** the `</>` symbol renders at `1.6rem` font size
