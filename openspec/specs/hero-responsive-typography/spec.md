## ADDED Requirements

### Requirement: Hero name has responsive text sizing
The system SHALL display the hero name with different text sizes based on viewport width.

#### Scenario: Mobile name size
- **WHEN** the viewport is less than 768px wide
- **THEN** the hero name SHALL use `text-3xl` (1.875rem)

#### Scenario: Desktop name size
- **WHEN** the viewport is 768px or wider
- **THEN** the hero name SHALL use `text-5xl` (3rem)

### Requirement: Hero degree has responsive text sizing
The system SHALL display the Msc. degree with different text sizes based on viewport width.

#### Scenario: Mobile degree size
- **WHEN** the viewport is less than 768px wide
- **THEN** the degree text SHALL use `text-lg` (1.125rem)

#### Scenario: Desktop degree size
- **WHEN** the viewport is 768px or wider
- **THEN** the degree text SHALL use `text-xl` (1.25rem)

### Requirement: Hero titles have responsive text sizing
The system SHALL display the career titles with different text sizes based on viewport width.

#### Scenario: Mobile title size
- **WHEN** the viewport is less than 768px wide
- **THEN** the title text SHALL use `text-base` (1rem)

#### Scenario: Desktop title size
- **WHEN** the viewport is 768px or wider
- **THEN** the title text SHALL use `text-lg` (1.125rem)

### Requirement: Hero text hierarchy is visually distinct
The system SHALL create clear visual hierarchy between name, degree, and titles.

#### Scenario: Name is largest
- **WHEN** the hero section renders
- **THEN** the name text SHALL be visually larger than the degree text

#### Scenario: Degree is medium
- **WHEN** the hero section renders
- **THEN** the degree text SHALL be visually larger than the title text

#### Scenario: Titles are smallest
- **WHEN** the hero section renders
- **THEN** the title text SHALL be the smallest of the three hierarchy levels

### Requirement: Hero maintains consistent layout on mobile and desktop
The system SHALL display social links below the titles on both mobile and desktop viewports.

#### Scenario: Mobile layout
- **WHEN** the viewport is less than 768px wide
- **THEN** social links SHALL appear below the titles and above the photo

#### Scenario: Desktop layout
- **WHEN** the viewport is 768px or wider
- **THEN** social links SHALL appear below the titles and to the left of the photo
