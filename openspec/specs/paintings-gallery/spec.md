# Paintings Gallery

## Purpose

Masonry image gallery component that displays油画 photographs with brush-stroke scroll reveal animation. Part of the Hobbies section. Images are sourced from `public/paintings/` as WebP files with date-based filenames.

## Requirements

### Requirement: Static painting list from public directory
The Paintings component SHALL maintain a hardcoded array of painting objects with `src` and `date` properties, referencing files in `public/paintings/`.

#### Scenario: Image paths use WebP format
- **WHEN** the Paintings component defines its image list
- **THEN** all `src` paths end with `.webp` extension
- **THEN** all paths are prefixed with `/personal-site/paintings/`

#### Scenario: All 38 paintings listed
- **WHEN** the Paintings component renders
- **THEN** it contains entries for all 38 painting files

### Requirement: Paintings sorted by date descending
The paintings array SHALL be sorted by date in descending order so the most recent paintings appear first.

#### Scenario: Most recent painting first
- **WHEN** the Paintings component renders
- **THEN** the first painting displayed has the most recent date (2026-06-10)

#### Scenario: Oldest painting last
- **WHEN** the Paintings component renders
- **THEN** the last painting displayed has the oldest date (2024-09-15)

### Requirement: Date parsing from filename
The Paintings component SHALL parse the `date` field (format `yyyy-mm-dd`) to extract year and month, then display a localized label like "Junio 2026" (ES) or "June 2026" (EN).

#### Scenario: Spanish month label
- **WHEN** the language is set to Spanish
- **THEN** a painting with date "2026-06-10" displays the label "Junio 2026"

#### Scenario: English month label
- **WHEN** the language is set to English
- **THEN** a painting with date "2026-06-10" displays the label "June 2026"

#### Scenario: Month name from lookup array
- **WHEN** the component parses a date
- **THEN** it uses static month name arrays (not i18n keys) for month lookup

### Requirement: Masonry grid layout
The Paintings component SHALL render paintings in a CSS columns masonry layout with responsive column counts, using generic `hobbies-*` CSS classes shared across all Hobbies subsections.

#### Scenario: Desktop 3-column layout
- **WHEN** the viewport width is 1024px or wider
- **THEN** paintings render in 3 columns with `column-gap: 1.6rem`

#### Scenario: Tablet 2-column layout
- **WHEN** the viewport width is between 641px and 1023px
- **THEN** paintings render in 2 columns

#### Scenario: Mobile 1-column layout
- **WHEN** the viewport width is 640px or less
- **THEN** paintings render in a single column

#### Scenario: Cards avoid column breaks
- **WHEN** a painting card renders
- **THEN** it uses `hobbies-card` class with `break-inside: avoid` and `margin-bottom: 1.6rem` to prevent splitting across columns

### Requirement: Painting card content structure
Each painting card SHALL display the image and a date label below it, using generic `hobbies-card` and `hobbies-date` CSS classes.

#### Scenario: Image displays in natural orientation
- **WHEN** a painting card renders
- **THEN** the image uses `object-cover` or natural dimensions (no forced aspect ratio)
- **THEN** portrait images appear taller, landscape images appear wider

#### Scenario: Date label below image
- **WHEN** a painting card renders
- **THEN** a text element below the image displays the localized month-year label using `hobbies-date` class
- **THEN** the date label uses the brand accent color (`text-text-accent`)

#### Scenario: Image lazy loading
- **WHEN** a painting card renders
- **THEN** the image has `loading="lazy"` and `decoding="async"` attributes

### Requirement: Subsection label
The Paintings component SHALL display a localized subsection label ("Paintings" / "Pinturas") above the masonry grid, styled in the brand accent color.

#### Scenario: Spanish subsection label
- **WHEN** the language is set to Spanish
- **THEN** a heading above the gallery displays "Pinturas"

#### Scenario: English subsection label
- **WHEN** the language is set to English
- **THEN** a heading above the gallery displays "Paintings"

#### Scenario: Label styled with brand color
- **WHEN** the subsection label renders
- **THEN** it uses `text-text-accent` color to match the header brand name

### Requirement: Brush-stroke scroll reveal animation
Painting cards SHALL animate into view using a clip-path based brush-stroke reveal triggered on scroll.

#### Scenario: Initial state before scroll
- **WHEN** a painting card is below the viewport
- **THEN** it has `opacity: 0` and a jagged clip-path polygon

#### Scenario: Brush-stroke reveal on scroll
- **WHEN** a painting card enters the viewport (15% visible)
- **THEN** it animates from jagged clip-path to full rectangle (`polygon(0 0, 100% 0, 100% 100%, 0 100%)`) over 800ms with `ease-out`
- **THEN** opacity transitions from 0 to 1

#### Scenario: Staggered reveal
- **WHEN** multiple painting cards enter the viewport simultaneously
- **THEN** each card's animation is delayed by 80ms per index (card 0: 0ms, card 1: 80ms, card 2: 160ms, etc.)

#### Scenario: Reduced motion
- **WHEN** the user has `prefers-reduced-motion: reduce` enabled
- **THEN** painting card animations are disabled

### Requirement: Painting card hover effect
Each painting card SHALL have a subtle hover effect consistent with the site's card styling.

#### Scenario: Card hover
- **WHEN** a user hovers over a painting card
- **THEN** the card lifts slightly with `translateY(-2px)` and increased shadow

### Requirement: Tests for Paintings component
The Paintings component SHALL have tests verifying rendering, sorting, and i18n behavior.

#### Scenario: All paintings render
- **WHEN** the Paintings component renders
- **THEN** all 38 painting images are present in the document

#### Scenario: Paintings sorted most recent first
- **WHEN** the Paintings component renders
- **THEN** the first image's src contains "2026-06-10"
- **THEN** the last image's src contains "2024-09-15"

#### Scenario: Date labels render
- **WHEN** the Paintings component renders
- **THEN** date labels are visible below images (e.g., "Junio 2026")

#### Scenario: Subsection label renders
- **WHEN** the Paintings component renders
- **THEN** the subsection label "Pinturas" (ES) or "Paintings" (EN) is visible above the gallery
