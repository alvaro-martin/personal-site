## ADDED Requirements

### Requirement: Nav links reflect current site sections
The Header nav links SHALL display the following sections in order: Home, About, Languages, Portfolio, Research, Awards. Skills and Services links SHALL NOT appear.

#### Scenario: Desktop nav shows correct links
- **WHEN** the viewport is wider than 1400px
- **THEN** the header nav displays 6 links: Home, About, Languages, Portfolio, Research, Awards

#### Scenario: Mobile menu shows correct links
- **WHEN** the viewport is 1400px or narrower and the mobile menu is opened
- **THEN** the mobile menu displays 6 links: Home, About, Languages, Portfolio, Research, Awards

### Requirement: Translation keys for new nav links
The translation files SHALL include `header.research` and `header.awards` keys in both English and Spanish.

#### Scenario: English translations present
- **WHEN** the language is set to English
- **THEN** `header.research` displays "Research" and `header.awards` displays "Awards"

#### Scenario: Spanish translations present
- **WHEN** the language is set to Spanish
- **THEN** `header.research` displays "Investigación" and `header.awards` displays "Reconocimientos"

### Requirement: Desktop breakpoint raised to 1400px
The desktop media query breakpoint SHALL be `(min-width: 1400px)` instead of the current `(min-width: 1260px)`.

#### Scenario: Viewport between 1260-1399px shows mobile menu
- **WHEN** the viewport width is between 1260px and 1399px
- **THEN** the mobile hamburger menu is shown (not desktop nav)

#### Scenario: Viewport at 1400px shows desktop nav
- **WHEN** the viewport width is 1400px or wider
- **THEN** the desktop horizontal nav is shown

### Requirement: Section anchor IDs for Research and Awards
The Research section `<section>` tag SHALL have `id="research"` and the Awards section `<section>` tag SHALL have `id="awards"`.

#### Scenario: Research nav link scrolls to section
- **WHEN** user clicks the "Research" nav link
- **THEN** the page scrolls to the element with `id="research"`

#### Scenario: Awards nav link scrolls to section
- **WHEN** user clicks the "Awards" nav link
- **THEN** the page scrolls to the element with `id="awards"`
