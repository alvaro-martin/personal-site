# Marathons Gallery

## Purpose

Masonry image gallery component that displays marathon photographs with brush-stroke scroll reveal animation. Part of the Hobbies section. Images are sourced from `public/marathons/` as WebP files with date-based filenames.

## Requirements

### Requirement: Static marathon list from public directory
The Marathons component SHALL maintain a hardcoded array of marathon objects with `src` and `date` properties, referencing files in `public/marathons/`.

#### Scenario: Image paths use WebP format
- **WHEN** the Marathons component defines its image list
- **THEN** all `src` paths end with `.webp` extension
- **THEN** all paths are prefixed with `/personal-site/marathons/`

#### Scenario: All 3 marathons listed
- **WHEN** the Marathons component renders
- **THEN** it contains entries for all 3 marathon files

### Requirement: Marathons sorted by date descending
The marathons array SHALL be sorted by date in descending order so the most recent marathon appears first.

#### Scenario: Most recent marathon first
- **WHEN** the Marathons component renders
- **THEN** the first marathon displayed has the most recent date (2026-05-24)

#### Scenario: Oldest marathon last
- **WHEN** the Marathons component renders
- **THEN** the last marathon displayed has the oldest date (2025-06-22)

### Requirement: Date parsing from filename
The Marathons component SHALL parse the `date` field (format `yyyy-mm-dd`) to extract year and month, then display a localized label like "Mayo 2026" (ES) or "May 2026" (EN).

#### Scenario: Spanish month label
- **WHEN** the language is set to Spanish
- **THEN** a marathon with date "2026-05-24" displays the label "Mayo 2026"

#### Scenario: English month label
- **WHEN** the language is set to English
- **THEN** a marathon with date "2026-05-24" displays the label "May 2026"

#### Scenario: Month name from lookup array
- **WHEN** the component parses a date
- **THEN** it uses static month name arrays (not i18n keys) for month lookup

### Requirement: Masonry grid layout
The Marathons component SHALL render marathons in a CSS columns masonry layout with responsive column counts.

#### Scenario: Desktop layout
- **WHEN** the viewport width is 1024px or wider
- **THEN** marathons render in 3 columns with `column-gap: 1.6rem`

#### Scenario: Tablet layout
- **WHEN** the viewport width is between 641px and 1023px
- **THEN** marathons render in 2 columns

#### Scenario: Mobile layout
- **WHEN** the viewport width is 640px or less
- **THEN** marathons render in a single column

#### Scenario: Cards avoid column breaks
- **WHEN** a marathon card renders
- **THEN** it uses `break-inside: avoid` and `margin-bottom: 1.6rem` to prevent splitting across columns

### Requirement: Marathon card content structure
Each marathon card SHALL display the image and a date label below it.

#### Scenario: Image displays in natural orientation
- **WHEN** a marathon card renders
- **THEN** the image uses `object-cover` or natural dimensions (no forced aspect ratio)
- **THEN** portrait images appear taller, landscape images appear wider

#### Scenario: Date label below image
- **WHEN** a marathon card renders
- **THEN** a text element below the image displays the localized month-year label
- **THEN** the date label uses the brand accent color (`text-text-accent`)

#### Scenario: Image lazy loading
- **WHEN** a marathon card renders
- **THEN** the image has `loading="lazy"` and `decoding="async"` attributes

### Requirement: Subsection label
The Marathons component SHALL display a localized subsection label ("Marathons" / "Maratones") above the masonry grid, styled in the brand accent color.

#### Scenario: Spanish subsection label
- **WHEN** the language is set to Spanish
- **THEN** a heading above the gallery displays "Maratones"

#### Scenario: English subsection label
- **WHEN** the language is set to English
- **THEN** a heading above the gallery displays "Marathons"

#### Scenario: Label styled with brand color
- **WHEN** the subsection label renders
- **THEN** it uses `text-text-accent` color to match the header brand name

### Requirement: Brush-stroke scroll reveal animation
Marathon cards SHALL animate into view using a clip-path based brush-stroke reveal triggered on scroll.

#### Scenario: Initial state before scroll
- **WHEN** a marathon card is below the viewport
- **THEN** it has `opacity: 0` and a jagged clip-path polygon

#### Scenario: Brush-stroke reveal on scroll
- **WHEN** a marathon card enters the viewport (15% visible)
- **THEN** it animates from jagged clip-path to full rectangle (`polygon(0 0, 100% 0, 100% 100%, 0 100%)`) over 800ms with `ease-out`
- **THEN** opacity transitions from 0 to 1

#### Scenario: Staggered reveal
- **WHEN** multiple marathon cards enter the viewport simultaneously
- **THEN** each card's animation is delayed by 80ms per index (card 0: 0ms, card 1: 80ms, card 2: 160ms)

#### Scenario: Reduced motion
- **WHEN** the user has `prefers-reduced-motion: reduce` enabled
- **THEN** marathon card animations are disabled

### Requirement: Marathon card hover effect
Each marathon card SHALL have a subtle hover effect consistent with the site's card styling.

#### Scenario: Card hover
- **WHEN** a user hovers over a marathon card
- **THEN** the card lifts slightly with `translateY(-2px)` and increased shadow

### Requirement: Tests for Marathons component
The Marathons component SHALL have tests verifying rendering, sorting, and i18n behavior.

#### Scenario: All marathons render
- **WHEN** the Marathons component renders
- **THEN** all 3 marathon images are present in the document

#### Scenario: Marathons sorted most recent first
- **WHEN** the Marathons component renders
- **THEN** the first image's src contains "2026-05-24"
- **THEN** the last image's src contains "2025-06-22"

#### Scenario: Date labels render
- **WHEN** the Marathons component renders
- **THEN** date labels are visible below images (e.g., "Mayo 2026")

#### Scenario: Subsection label renders
- **WHEN** the Marathons component renders
- **THEN** the subsection label "Maratones" (ES) or "Marathons" (EN) is visible above the gallery
