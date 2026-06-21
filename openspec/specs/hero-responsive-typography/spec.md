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

### Requirement: Hero uses flex layout with content-fitting text container
The system SHALL use a flex layout where the text container fits its content width.

#### Scenario: Desktop layout
- **WHEN** the viewport is 768px or wider
- **THEN** the hero section SHALL use `flex-row` with text container using `w-fit` to fit content

#### Scenario: Mobile layout
- **WHEN** the viewport is less than 768px wide
- **THEN** the hero section SHALL use `flex-col` with centered alignment

#### Scenario: Horizontal gap between text and photo
- **WHEN** the viewport is 768px or wider
- **THEN** the gap between text and photo SHALL be 24px (`gap-6`)

### Requirement: Hero greeting is split into two lines
The system SHALL display the hero greeting as two separate lines.

#### Scenario: Spanish greeting structure
- **WHEN** the language is Spanish
- **THEN** the greeting SHALL display as "Hola, yo soy" on line 1 and "Alvaro Martín!" on line 2

#### Scenario: English greeting structure
- **WHEN** the language is English
- **THEN** the greeting SHALL display as "Hello, I'm" on line 1 and "Alvaro Martín!" on line 2

### Technical Notes

**Layout Implementation:**
```jsx
<section className="w-full flex flex-col items-center mt-20 pt-20 md:flex-row md:justify-center md:items-center gap-6 md:gap-6">
  <div className="flex flex-col w-fit px-6 md:px-4">
    {/* Text content */}
  </div>
  <div className="photo-container flex-shrink-0 ...">
    {/* Photo */}
  </div>
</section>
```

**Key Points:**
- `w-fit` on text container ensures it only takes width needed for content
- `flex-shrink-0` on photo prevents it from being compressed
- `gap-6` (24px) provides consistent spacing between text and photo
- On mobile, `flex-col` stacks elements vertically with centered alignment
