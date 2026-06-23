# Hobbies Section

## Purpose

Top-level Hobbies section organism that wraps all personal interest subsections (Paintings, Marathons, Books, Stories). Provides section heading, subtitle, navigation integration, and i18n support.

## Requirements

### Requirement: Hobbies section renders after Awards
The Home page SHALL render a Hobbies section between Awards and Footer, with section ID `hobbies`.

#### Scenario: Section order
- **WHEN** the Home page renders
- **THEN** the Hobbies section appears after Awards and before Footer in the DOM

#### Scenario: Section has ID for navigation
- **WHEN** the Hobbies section renders
- **THEN** it has `id="hobbies"` attribute for anchor link navigation

### Requirement: Section heading and subtitle from i18n
The Hobbies section SHALL display a heading and subtitle using i18n keys `hobbies.title` and `hobbies.subtitle`.

#### Scenario: Spanish heading
- **WHEN** the language is set to Spanish
- **THEN** the heading displays "Pasatiempos"

#### Scenario: English heading
- **WHEN** the language is set to English
- **THEN** the heading displays "Hobbies"

#### Scenario: Spanish subtitle
- **WHEN** the language is set to Spanish
- **THEN** the subtitle displays "Lo que hago fuera del trabajo"

#### Scenario: English subtitle
- **WHEN** the language is set to English
- **THEN** the subtitle displays "What I do outside of work"

### Requirement: Hobbies section uses section-wrapper pattern
The Hobbies section SHALL use the existing `section-wrapper` CSS class for consistent spacing with other sections.

#### Scenario: Consistent section styling
- **WHEN** the Hobbies section renders
- **THEN** it uses `section-wrapper` class for padding and margins
- **THEN** the heading uses `section-heading` class

### Requirement: Header navigation includes Hobbies link
The Header navLinks array SHALL include a Hobbies link pointing to `#hobbies`.

#### Scenario: Desktop nav includes Hobbies
- **WHEN** the Header renders on desktop
- **THEN** the nav contains a link with text "Pasatiempos" (ES) or "Hobbies" (EN) that navigates to `#hobbies`

#### Scenario: Mobile nav includes Hobbies
- **WHEN** the Header renders on mobile with menu open
- **THEN** the mobile menu contains a Hobbies link navigating to `#hobbies`

### Requirement: Footer navigation includes Hobbies anchor
The Footer SHALL include a Hobbies anchor in its navigation links.

#### Scenario: Footer anchor exists
- **WHEN** the Footer renders
- **THEN** its navigation includes a link with `href="#hobbies"` and label "Pasatiempos" (ES) or "Hobbies" (EN)

### Requirement: Hobbies component exports from organisms barrel
The Hobbies component SHALL be exported from `src/components/03.organisms/index.js`.

#### Scenario: Import from organisms
- **WHEN** Home.jsx imports Hobbies from `components/03.organisms`
- **THEN** the import resolves successfully

### Requirement: Placeholder for future subsections
The Hobbies section SHALL render `<Paintings />` and `<Marathons />` components, with comment-based placeholders for Books and Stories.

#### Scenario: Paintings rendered
- **WHEN** the Hobbies section renders
- **THEN** the Paintings subsection is visible

#### Scenario: Marathons rendered
- **WHEN** the Hobbies section renders
- **THEN** the Marathons subsection is visible below Paintings

#### Scenario: Spacing between subsections
- **WHEN** the Hobbies section renders multiple subsections
- **THEN** each subsection after the first has `mt-16` (4rem) top margin to prevent overlap

#### Scenario: Future subsections commented
- **WHEN** viewing the Hobbies.jsx source
- **THEN** commented lines for Books and Stories components exist below Marathons
