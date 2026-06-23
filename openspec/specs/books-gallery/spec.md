# Books Gallery

## Purpose

Masonry image gallery component that displays book photographs with brush-stroke scroll reveal animation. Part of the Hobbies section. Images are sourced from `public/books/` as WebP files with date-based filenames.

## Requirements

### Requirement: Static book list from public directory
The Books component SHALL maintain a hardcoded array of book objects with `src` and `date` properties, referencing files in `public/books/`.

#### Scenario: Image paths use WebP format
- **WHEN** the Books component defines its image list
- **THEN** all `src` paths end with `.webp` extension
- **THEN** all paths are prefixed with `/personal-site/books/`

#### Scenario: All 19 books listed
- **WHEN** the Books component renders
- **THEN** it contains entries for all 19 book files

### Requirement: Books sorted by date descending
The books array SHALL be sorted by date in descending order so the most recent book appears first.

#### Scenario: Most recent book first
- **WHEN** the Books component renders
- **THEN** the first book displayed has the most recent date (2026-04-25)

#### Scenario: Oldest book last
- **WHEN** the Books component renders
- **THEN** the last book displayed has the oldest date (2024-02-26)

### Requirement: Date parsing from filename
The Books component SHALL parse the `date` field (format `yyyy-mm-dd`) to extract year and month, then display a localized label like "Abril 2026" (ES) or "April 2026" (EN).

#### Scenario: Spanish month label
- **WHEN** the language is set to Spanish
- **THEN** a book with date "2026-04-25" displays the label "Abril 2026"

#### Scenario: English month label
- **WHEN** the language is set to English
- **THEN** a book with date "2026-04-25" displays the label "April 2026"

#### Scenario: Month name from lookup array
- **WHEN** the component parses a date
- **THEN** it uses static month name arrays (not i18n keys) for month lookup

### Requirement: Masonry grid layout
The Books component SHALL render books in a CSS columns masonry layout with responsive column counts, using generic `hobbies-*` CSS classes shared across all Hobbies subsections.

#### Scenario: Desktop layout
- **WHEN** the viewport width is 1024px or wider
- **THEN** books render in 3 columns with `column-gap: 1.6rem`

#### Scenario: Tablet layout
- **WHEN** the viewport width is between 641px and 1023px
- **THEN** books render in 2 columns

#### Scenario: Mobile layout
- **WHEN** the viewport width is 640px or less
- **THEN** books render in a single column

#### Scenario: Cards avoid column breaks
- **WHEN** a book card renders
- **THEN** it uses `hobbies-card` class with `break-inside: avoid` and `margin-bottom: 1.6rem` to prevent splitting across columns

### Requirement: Book card content structure
Each book card SHALL display the image and a date label below it, using generic `hobbies-card` and `hobbies-date` CSS classes.

#### Scenario: Image displays in natural orientation
- **WHEN** a book card renders
- **THEN** the image uses `object-cover` or natural dimensions (no forced aspect ratio)
- **THEN** portrait images appear taller, landscape images appear wider

#### Scenario: Date label below image
- **WHEN** a book card renders
- **THEN** a text element below the image displays the localized month-year label using `hobbies-date` class
- **THEN** the date label uses the brand accent color (`text-text-accent`)

#### Scenario: Image lazy loading
- **WHEN** a book card renders
- **THEN** the image has `loading="lazy"` and `decoding="async"` attributes

### Requirement: Subsection label
The Books component SHALL display a localized subsection label ("Books" / "Libros") above the masonry grid, styled in the brand accent color.

#### Scenario: Spanish subsection label
- **WHEN** the language is set to Spanish
- **THEN** a heading above the gallery displays "Libros"

#### Scenario: English subsection label
- **WHEN** the language is set to English
- **THEN** a heading above the gallery displays "Books"

#### Scenario: Label styled with brand color
- **WHEN** the subsection label renders
- **THEN** it uses `text-text-accent` color to match the header brand name

### Requirement: Brush-stroke scroll reveal animation
Book cards SHALL animate into view using a clip-path based brush-stroke reveal triggered on scroll.

#### Scenario: Initial state before scroll
- **WHEN** a book card is below the viewport
- **THEN** it has `opacity: 0` and a jagged clip-path polygon

#### Scenario: Brush-stroke reveal on scroll
- **WHEN** a book card enters the viewport (15% visible)
- **THEN** it animates from jagged clip-path to full rectangle (`polygon(0 0, 100% 0, 100% 100%, 0 100%)`) over 800ms with `ease-out`
- **THEN** opacity transitions from 0 to 1

#### Scenario: Staggered reveal
- **WHEN** multiple book cards enter the viewport simultaneously
- **THEN** each card's animation is delayed by 80ms per index (card 0: 0ms, card 1: 80ms, card 2: 160ms, etc.)

#### Scenario: Reduced motion
- **WHEN** the user has `prefers-reduced-motion: reduce` enabled
- **THEN** book card animations are disabled

### Requirement: Book card hover effect
Each book card SHALL have a subtle hover effect consistent with the site's card styling.

#### Scenario: Card hover
- **WHEN** a user hovers over a book card
- **THEN** the card lifts slightly with `translateY(-2px)` and increased shadow

### Requirement: Tests for Books component
The Books component SHALL have tests verifying rendering, sorting, and i18n behavior.

#### Scenario: All books render
- **WHEN** the Books component renders
- **THEN** all 19 book images are present in the document

#### Scenario: Books sorted most recent first
- **WHEN** the Books component renders
- **THEN** the first image's src contains "2026-04-25"
- **THEN** the last image's src contains "2024-02-26"

#### Scenario: Date labels render
- **WHEN** the Books component renders
- **THEN** date labels are visible below images (e.g., "Abril 2026")

#### Scenario: Subsection label renders
- **WHEN** the Books component renders
- **THEN** the subsection label "Libros" (ES) or "Books" (EN) is visible above the gallery
