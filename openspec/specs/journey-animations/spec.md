# Journey Animations

## Purpose

Adds scroll-triggered CSS animations to the Professional Journey timeline, including entry reveals, timeline line drawing, dot pulse effects, and hover interactions.

## Requirements

### Requirement: Journey entries animate on scroll
The system SHALL animate Journey entries when they enter the viewport, with left entries sliding from the left and right entries sliding from the right.

#### Scenario: Left entry slides in from left
- **WHEN** a left-side Journey entry enters the viewport
- **THEN** it SHALL animate from `translateX(-100px)` to `translateX(0)` over 600ms

#### Scenario: Right entry slides in from right
- **WHEN** a right-side Journey entry enters the viewport
- **THEN** it SHALL animate from `translateX(100px)` to `translateX(0)` over 600ms

#### Scenario: Entries animate with staggered timing
- **WHEN** multiple Journey entries enter the viewport
- **THEN** each entry SHALL animate with a 150ms delay between entries

#### Scenario: All entries receive is-visible class
- **WHEN** the Journey section scrolls into viewport
- **THEN** all 9 entry elements SHALL receive the `is-visible` class via IntersectionObserver

### Requirement: Timeline line draws on scroll
The system SHALL animate the timeline vertical line segments when decorators enter the viewport, creating a "drawing" effect.

#### Scenario: Line segment animates height
- **WHEN** a timeline decorator enters the viewport
- **THEN** its vertical line SHALL animate from `height: 0%` to `height: 100%` over 800ms

#### Scenario: Line segments animate with staggered timing
- **WHEN** multiple timeline decorators enter the viewport
- **THEN** each line segment SHALL animate with a 100ms delay between decorators

#### Scenario: Timeline line reaches full height
- **WHEN** all decorators have entered the viewport
- **THEN** the complete timeline vertical line SHALL be visible at `height: 100%`

### Requirement: Timeline dots pulse on scroll
The system SHALL animate timeline dots when they enter the viewport with a pulse effect.

#### Scenario: Dot pulses when entering viewport
- **WHEN** a timeline decorator enters the viewport
- **THEN** its dot SHALL animate from `scale(0)` to `scale(1)` with a brief overshoot to `scale(1.3)` and box-shadow pulse

#### Scenario: Dot animation uses bounce easing
- **WHEN** a timeline dot animates
- **THEN** it SHALL use `--ease-bounce` easing for a playful feel

#### Scenario: All dots receive is-visible class
- **WHEN** the Journey section scrolls into viewport
- **THEN** all 9 decorator elements SHALL receive the `is-visible` class via IntersectionObserver

### Requirement: Journey entries have hover lift effect
The system SHALL provide visual feedback when hovering over Journey entries.

#### Scenario: Entry lifts on hover
- **WHEN** user hovers over a Journey entry
- **THEN** the entry SHALL translate up by 4px and display a subtle box-shadow

#### Scenario: Hover effect transitions smoothly
- **WHEN** user hovers over a Journey entry
- **THEN** the transform and box-shadow SHALL transition over 200ms

### Requirement: Journey animations work on mobile
The system SHALL adapt Journey animations for mobile viewports (< 768px).

#### Scenario: Mobile entries use smaller slide distance
- **WHEN** the viewport is less than 768px wide
- **THEN** entry slide animations SHALL use `translateX(50px)` instead of `translateX(100px)`

#### Scenario: Mobile uses faster stagger timing
- **WHEN** the viewport is less than 768px wide
- **THEN** entry stagger delay SHALL be 100ms instead of 150ms

### Requirement: Journey animations follow existing patterns
The system SHALL integrate with the existing `useScrollReveal` hook and `card-reveal` class pattern.

#### Scenario: Section uses useScrollReveal hook
- **WHEN** the Journey component renders
- **THEN** it SHALL use the `useScrollReveal()` hook to detect viewport entry

#### Scenario: Entries use card-reveal class
- **WHEN** Journey entries and decorators render
- **THEN** they SHALL include the `card-reveal` class for scroll detection

#### Scenario: IntersectionObserver triggers animations
- **WHEN** elements with `.card-reveal` class enter the viewport
- **THEN** the IntersectionObserver SHALL add `.is-visible` class to trigger CSS animations

### Requirement: Journey grid layout preserves alternating structure
The system SHALL maintain the existing 3-column grid layout with entries alternating left/right.

#### Scenario: Left entries in column 1
- **WHEN** Journey entries render
- **THEN** left-side entries SHALL have `gridColumn: 1 / 2`

#### Scenario: Right entries in column 3
- **WHEN** Journey entries render
- **THEN** right-side entries SHALL have `gridColumn: 3 / 4`

#### Scenario: Decorators in column 2
- **WHEN** Journey decorators render
- **THEN** they SHALL have `gridColumn: 2 / 3`
