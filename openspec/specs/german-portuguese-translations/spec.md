## Purpose

Defines multilingual support requirements including German and Portuguese (Brazil) translations, language selector UI, default language behavior, and related i18n configuration for the personal site.

## Requirements

### Requirement: German language support

The system SHALL provide a full German (de) translation of all user-facing text, covering all 234 keys present in the English translation file including `skills.frontend.3d`.

#### Scenario: German is selectable
- **WHEN** user clicks the German flag in the language dropdown
- **THEN** all user-facing text rendered via `useTranslation("global")` SHALL display in German

#### Scenario: German persists on refresh
- **WHEN** user selects German and reloads the page
- **THEN** the interface SHALL render in German

#### Scenario: German CV link exists
- **WHEN** user views the About section in German
- **THEN** the CV download link SHALL point to `/personal-site/cv/CV-DE-Alvaro-Aspilcueta.pdf`

### Requirement: Portuguese (Brazil) language support

The system SHALL provide a full Portuguese Brazil (pt-BR) translation of all user-facing text, covering all 234 keys present in the English translation file including `skills.frontend.3d`.

#### Scenario: Portuguese is selectable
- **WHEN** user clicks the Brazil flag in the language dropdown
- **THEN** all user-facing text rendered via `useTranslation("global")` SHALL display in Portuguese

#### Scenario: Portuguese persists on refresh
- **WHEN** user selects Portuguese and reloads the page
- **THEN** the interface SHALL render in Portuguese

#### Scenario: Portuguese CV link exists
- **WHEN** user views the About section in Portuguese
- **THEN** the CV download link SHALL point to `/personal-site/cv/CV-PT-Alvaro-Aspilcueta.pdf`

### Requirement: Language dropdown selector

The Header SHALL provide a dropdown language selector instead of individual flag buttons, supporting all available languages.

#### Scenario: Dropdown shows current language
- **WHEN** the page loads in Spanish
- **THEN** the selector trigger SHALL display the Spanish flag

#### Scenario: Dropdown expands on click
- **WHEN** user clicks the selector trigger
- **THEN** a 2×2 grid of flags SHALL appear below the trigger

#### Scenario: Dropdown contains all 4 languages
- **WHEN** the dropdown is expanded
- **THEN** flags for Spanish, English, German, and Portuguese (Brazil) SHALL be visible

#### Scenario: Dropdown closes on flag selection
- **WHEN** user clicks a flag in the dropdown
- **THEN** the dropdown SHALL close and the selected language SHALL activate

#### Scenario: Dropdown closes on outside click
- **WHEN** the dropdown is open and user clicks outside it
- **THEN** the dropdown SHALL close

#### Scenario: Dropdown works in mobile menu
- **WHEN** the mobile menu is open at viewports below 1400px
- **THEN** the language selector SHALL render inside the mobile menu with the same dropdown behavior

### Requirement: Default language is English

The site SHALL default to English (en) instead of Spanish (es) on first load.

#### Scenario: First visit shows English
- **WHEN** a visitor loads the site for the first time with no persisted language
- **THEN** all text SHALL render in English

#### Scenario: Spanish remains selectable
- **WHEN** user selects Spanish from the language dropdown
- **THEN** all text SHALL render in Spanish until a different language is chosen

### Requirement: Dropdown is not clipped by header

The header SHALL NOT use `overflow-hidden` to allow the absolute-positioned dropdown to render fully below the header.

#### Scenario: Dropdown visible below header
- **WHEN** the language dropdown is expanded
- **THEN** the entire dropdown (including the second row of flags) SHALL be visible below the header

#### Scenario: Matrix rain stays within header
- **WHEN** the page renders
- **THEN** the matrix rain animation SHALL remain visually contained within the header bounds (no visible overflow)

### Requirement: Dropdown grid uses `w-max`

The 2×2 flag grid in the dropdown SHALL use `w-max` to prevent flag overlap.

#### Scenario: No flag overlap in narrow parent
- **WHEN** the dropdown is expanded at any viewport width
- **THEN** all 4 flags SHALL be fully visible with no horizontal overlap

### Requirement: Header test handles duplicate alt text

The Header test SHALL use `getAllByAltText` instead of `getByAltText` for flag image assertions, since the trigger and dropdown may render the same alt text simultaneously.

#### Scenario: Test does not fail on duplicate alt
- **WHEN** the dropdown is expanded and the test queries for a flag by alt text
- **THEN** the test SHALL use `getAllByAltText` and assert the correct count

### Requirement: Test i18n instance uses English default

The test i18next instance in `src/test/test-utils.jsx` SHALL initialize with `lng: 'en'` to match production.

#### Scenario: Tests assert English text
- **WHEN** any component test calls `renderWithProviders`
- **THEN** the rendered text SHALL be in English by default

### Requirement: ThemeContext fallback matches i18n default

The ThemeContext default language fallback SHALL be `'en'` to match the i18n default.

#### Scenario: No persisted language in localStorage
- **WHEN** `localStorage` has no `"language"` key
- **THEN** `ThemeContext` SHALL return `'en'` as the current language

### Requirement: Flag images are consistent size

All language flags in the dropdown SHALL render at the same dimensions.

#### Scenario: Uniform flag dimensions
- **WHEN** any flag is rendered in the dropdown
- **THEN** it SHALL be 30px tall and 53px wide with `object-cover`

### Requirement: i18next configuration registers both new languages

The i18next initialization SHALL register both `de` and `pt-BR` as available languages.

#### Scenario: German resources are registered
- **WHEN** `i18next.init()` executes
- **THEN** `de` SHALL be present in the resources object with a `global` namespace

#### Scenario: Portuguese resources are registered
- **WHEN** `i18next.init()` executes
- **THEN** `pt-BR` SHALL be present in the resources object with a `global` namespace

#### Scenario: Test environment registers both languages
- **WHEN** `renderWithProviders()` renders a component in tests
- **THEN** both `de` and `pt-BR` SHALL be registered in the test i18next instance
