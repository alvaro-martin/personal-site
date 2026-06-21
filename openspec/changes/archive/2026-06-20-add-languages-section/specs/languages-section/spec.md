## ADDED Requirements

### Requirement: Languages section displays language proficiency
The system SHALL display a Languages section on the Home page between Journey and Portfolio, showing all languages with their proficiency levels.

#### Scenario: Section renders with all languages
- **WHEN** the Home page loads
- **THEN** the Languages section SHALL display Spanish, English, Portuguese, and German

#### Scenario: Each language row shows flag, name, progress bar, and level
- **WHEN** a language row renders
- **THEN** it SHALL display an emoji flag, language name, a progress bar, and the CEFR level text

### Requirement: Progress bars animate on scroll
The system SHALL animate progress bar fill from 0% to final value when the section scrolls into view. Language rows SHALL include the `card-reveal` class to integrate with the `useScrollReveal` hook.

#### Scenario: Progress bar fills on scroll reveal
- **WHEN** the Languages section enters the viewport
- **THEN** each progress bar SHALL animate from 0% width to its target width over 600ms

#### Scenario: Staggered row reveal
- **WHEN** the Languages section enters the viewport
- **THEN** each language row SHALL appear with a 150ms delay between rows

### Requirement: English shows TOEFL certification
The system SHALL display a TOEFL certification badge for English with a downloadable PDF. Language certificates SHALL be stored in `public/language-certificates/` directory.

#### Scenario: TOEFL badge visible for English
- **WHEN** the English language row renders
- **THEN** it SHALL display a "✓ TOEFL" badge

#### Scenario: TOEFL PDF download
- **WHEN** user clicks the TOEFL badge
- **THEN** the system SHALL open the TOEFL PDF from `public/language-certificates/` in a new tab

### Requirement: German shows learning progress
The system SHALL display German with a progress bar at approximately 50% and level text "A2 → B1".

#### Scenario: German progress bar at 50%
- **WHEN** the German language row renders
- **THEN** the progress bar SHALL be at 50% width

#### Scenario: German level shows progression
- **WHEN** the German language row renders
- **THEN** the level text SHALL display "A2 → B1"

### Requirement: Section supports bilingual content
The system SHALL display the section title and language names in both Spanish and English based on the active language.

#### Scenario: Spanish language mode
- **WHEN** the active language is Spanish
- **THEN** the section title SHALL display "Idiomas" and subtitle "Mis idiomas"

#### Scenario: English language mode
- **WHEN** the active language is English
- **THEN** the section title SHALL display "Languages" and subtitle "My languages"

### Requirement: Languages link in navigation
The system SHALL include a "Languages" link in the Header navigation, hamburger menu, and Footer anchors.

#### Scenario: Header nav includes Languages
- **WHEN** the Header renders
- **THEN** the navigation SHALL include a "Languages" link between "Skills" and "Services"

#### Scenario: Footer includes Languages anchor
- **WHEN** the Footer renders
- **THEN** the anchors SHALL include a "Languages" link

### Requirement: Hover effects on language rows
The system SHALL provide visual feedback when hovering over language rows.

#### Scenario: Row hover highlight
- **WHEN** user hovers over a language row
- **THEN** the row background SHALL transition to a highlighted state

#### Scenario: Progress bar glow on hover
- **WHEN** user hovers over a language row
- **THEN** the progress bar SHALL display a subtle glow effect
