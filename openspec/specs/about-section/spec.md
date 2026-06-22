## Purpose

Defines the About section layout, content, and interactive behavior including responsive design, scroll animations, and download button styling.

## Requirements

### Requirement: About section responsive layout
The About section SHALL display the photo and text content stacked vertically on viewports narrower than 768px, and side-by-side (photo left, text right) on viewports 768px and wider.

#### Scenario: Mobile layout stacks vertically
- **WHEN** the viewport is narrower than 768px
- **THEN** the photo appears above the text content, both centered

#### Scenario: Desktop layout shows side-by-side
- **WHEN** the viewport is 768px or wider
- **THEN** the photo appears to the left of the text content, aligned vertically center

### Requirement: Stats section removed
The About section SHALL NOT display the stats row (years of experience, published papers, completed projects). The `content.about.stats` data and `about.subnumber1`/`about.subnumber2`/`about.subnumber3` translation keys SHALL be removed.

#### Scenario: No stats displayed
- **WHEN** the About section renders
- **THEN** no numerical stats (03+, 04+, 11+) are visible

### Requirement: Staggered scroll reveal animation
The About section elements (photo, description, CV button) SHALL animate in with a staggered scroll reveal using the existing `card-reveal` pattern. The photo SHALL reveal first (0ms delay), followed by the description (200ms delay), then the CV button (400ms delay).

#### Scenario: Elements reveal on scroll
- **WHEN** the user scrolls to the About section
- **THEN** the photo fades in first, then the description, then the CV button, each with a 200ms delay

#### Scenario: Reduced motion disables reveal
- **WHEN** `prefers-reduced-motion` is `reduce`
- **THEN** all elements are visible immediately with no animation

### Requirement: Bouncing download arrow
The Download CV button SHALL display a download icon with a continuous bouncing animation. The icon SHALL move 4px down and back up over a 1.5s interval.

#### Scenario: Arrow bounces continuously
- **WHEN** the About section is visible
- **THEN** the download icon bounces 4px down and up at 1.5s intervals

#### Scenario: Reduced motion disables bounce
- **WHEN** `prefers-reduced-motion` is `reduce`
- **THEN** the download icon is static with no bouncing animation
