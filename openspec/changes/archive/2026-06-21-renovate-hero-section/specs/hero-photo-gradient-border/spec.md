## ADDED Requirements

### Requirement: Photo displays with rotating gradient border
The system SHALL display the hero photo with an animated gradient border that rotates continuously.

#### Scenario: Gradient border rotates
- **WHEN** the photo container renders
- **THEN** a conic-gradient border SHALL rotate 360 degrees over 3 seconds continuously

#### Scenario: Gradient uses theme colors
- **WHEN** the gradient border renders
- **THEN** it SHALL use `var(--color-primary)` and `var(--color-accent)` colors

#### Scenario: Border has rounded shape
- **WHEN** the photo container renders
- **THEN** it SHALL have `border-radius: 50%` for circular appearance

### Requirement: Photo container floats subtly
The system SHALL apply a subtle floating animation to the photo container.

#### Scenario: Photo floats up and down
- **WHEN** the photo container renders
- **THEN** it SHALL animate `translateY` between 0 and -5px over 3 seconds

#### Scenario: Float animation uses ease-in-out
- **WHEN** the float animation runs
- **THEN** it SHALL use `ease-in-out` timing for smooth motion

### Requirement: Photo maintains responsive sizing
The system SHALL display the photo at different sizes based on viewport width.

#### Scenario: Mobile photo size
- **WHEN** the viewport is less than 768px wide
- **THEN** the photo container SHALL be 200px x 200px

#### Scenario: Desktop photo size
- **WHEN** the viewport is 768px or wider
- **THEN** the photo container SHALL be 280px x 280px

### Requirement: Photo replaces clipImage animation
The system SHALL replace the existing `clipImage` animation with the new gradient border rotation.

#### Scenario: Old animation removed
- **WHEN** the photo container renders
- **THEN** it SHALL NOT use the `clipImage` keyframe animation

#### Scenario: New animation applied
- **WHEN** the photo container renders
- **THEN** it SHALL use the `rotateGradient` keyframe animation
