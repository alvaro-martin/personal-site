## Why

The personal site showcases professional experience, skills, and portfolio but has no dedicated section for language proficiency. Alvaro speaks four languages (Spanish, English, Portuguese, German) with varying levels and a TOEFL certification for English. A Languages section adds credibility for international opportunities and fills a gap in the professional profile.

## What Changes

- Add a new Languages organism component between Journey and Portfolio on the Home page
- Display four languages in a hybrid card layout with emoji flags, progress bars, and CEFR levels
- Include TOEFL certification badge and PDF download for English
- Add animated progress bar fill and staggered row reveal on scroll
- Add "Languages" link to Header nav, hamburger menu, and Footer anchors
- Add i18n translations for Spanish and English

## Capabilities

### New Capabilities

- `languages-section`: Displays language proficiency with animated progress bars, CEFR levels, emoji flags, and optional certification badges in a hybrid card layout

### Modified Capabilities

None

## Impact

- **New files**: `src/components/03.organisms/Languages/Languages.jsx`, `Languages.test.jsx`
- **Modified files**: Home.jsx (add component), Header.jsx (nav link), Footer.jsx (anchor), index.js (export), content.json (language data), es/global.json (Spanish translations), en/global.json (English translations)
- **Dependencies**: None new — uses existing Tailwind, IntersectionObserver hook, and CSS animation patterns
- **Existing components**: No changes to existing component behavior
