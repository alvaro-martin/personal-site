## ADDED Requirements

### Requirement: Hero section uses responsive flex layout
The system SHALL display hero content using a flex layout that adapts between mobile and desktop.

#### Scenario: Mobile layout
- **WHEN** the viewport is less than 768px wide
- **THEN** the hero section SHALL use `flex-col` with centered alignment
- **AND** text SHALL appear above the photo

#### Scenario: Desktop layout
- **WHEN** the viewport is 768px or wider
- **THEN** the hero section SHALL use `flex-row` with `justify-center` and `items-center`
- **AND** text SHALL appear to the left of the photo

### Requirement: Hero text container fits content width
The system SHALL size the text container to fit its content rather than taking available space.

#### Scenario: Text container uses w-fit
- **WHEN** the hero section renders
- **THEN** the text container SHALL use `w-fit` class to size based on content

#### Scenario: Text container does not expand
- **WHEN** the viewport is wider than the text content
- **THEN** the text container SHALL NOT expand to fill available space

### Requirement: Hero section has consistent horizontal spacing
The system SHALL maintain consistent spacing between text and photo.

#### Scenario: Desktop horizontal gap
- **WHEN** the viewport is 768px or wider
- **THEN** the gap between text and photo SHALL be 24px (`gap-6`)

#### Scenario: Mobile vertical gap
- **WHEN** the viewport is less than 768px wide
- **THEN** the gap between text and photo SHALL be 24px (`gap-6`)

### Requirement: Hero section has proper vertical spacing
The system SHALL apply appropriate top padding and margin to the hero section.

#### Scenario: Top margin and padding
- **WHEN** the hero section renders
- **THEN** it SHALL have `mt-20` (5rem) margin-top and `pt-20` (5rem) padding-top

### Technical Notes

**Full Layout Implementation:**
```jsx
<section
  id="home"
  aria-labelledby="hero-heading"
  className="w-full flex flex-col items-center mt-20 pt-20 md:flex-row md:justify-center md:items-center gap-6 md:gap-6"
>
  <div className="flex flex-col w-fit px-6 md:px-4">
    <h1 id="hero-heading" className="text-text text-3xl md:text-5xl font-bold mb-4 leading-tight">
      <span className="hero-name-line1">{t("hero.hello1")}</span>
      <br />
      <span className="hero-name-line2">{t("hero.hello2")}</span>
    </h1>
    {/* Titles and social links */}
  </div>
  <div className="photo-container flex-shrink-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] photo-float">
    {/* Photo */}
  </div>
</section>
```

**Key Classes:**
- `flex flex-col md:flex-row` - Column on mobile, row on desktop
- `items-center` - Center items vertically (row) or horizontally (col)
- `justify-center` - Center content horizontally (row)
- `gap-6` - 24px gap between children
- `w-fit` - Text container fits content width
- `flex-shrink-0` - Photo maintains its size
