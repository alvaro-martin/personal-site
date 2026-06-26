## Context

The portfolio currently supports 2 languages (es, en) via i18next with hardcoded flag buttons in the Header, defaulting to Spanish. Adding 2 more languages (de, pt-BR) requires:
- Registering new resources in i18next
- Redesigning the language selector to accommodate 4 flags without breaking the header layout
- Generating ~234 translation keys per language
- Changing the default language from Spanish to English

The header is fixed at the top with a 1400px desktop breakpoint and `h-20` height. Nav links, theme toggle, and language flags share a single row. The header has `overflow-hidden` which clips any absolute-positioned child extending beyond its 80px bounds — this must be removed for the dropdown to render fully below the header.

## Goals / Non-Goals

**Goals:**
- Add German (de) and Portuguese Brazil (pt-BR) as selectable languages
- Replace hardcoded flag buttons with a dropdown language selector
- Change default language from Spanish to English
- All existing user-facing text translated for both new languages
- No layout regressions at any viewport width
- All tests pass

**Non-Goals:**
- Not changing the i18n library (i18next stays)
- Not modifying content.json structure
- Not adding language auto-detection via browser
- Not modifying any organism beyond Header (translations flow through i18next automatically)

## Decisions

| Decision | Choice | Alternative | Rationale |
|----------|--------|-------------|-----------|
| Flag layout | 2×2 grid dropdown | Horizontal row, text pills, individual buttons | ~106×68px compact footprint; flags are visually distinct enough without text labels |
| Trigger display | Current language flag + chevron | Text label, globe icon | Clear which language is active, matches existing visual language |
| Chevron icon | `IoChevronDown` from react-icons/io5 | UTF-8 ▼ glyph | Already imported via react-icons; Tailwind styling consistent |
| Close behavior | Click-outside listener (mousedown) | Focus/blur, Escape key | Standard dropdown UX; Escape can be added later |
| Dropdown z-index | `z-60` | z-50 (header) or z-70 | Above header (z-50) but below potential modals; follows existing z-scale |
| Translation source | AI-generated translations | Manual translation | Practical for 234 keys; user reviews and adjusts |
| Flag images | Static imports per flag | Dynamic from content.json | Follows existing pattern (hardcoded imports); avoids Vite dynamic import complexity |
| CV links | Placeholder paths | Skip until PDFs are ready | User will upload CV PDFs later; paths are just strings |
| Default language | English (en) | Keep Spanish (es) as default | First-paint mismatch with persisted `localStorage` value; English matches user preference for initial visitors |
| Header overflow | Remove `overflow-hidden` | Keep `overflow-hidden` on `<header>` | Absolute-positioned dropdown extends 61px below header's `h-20` (80px) bounds; `overflow-hidden` clips it, causing missing flags |
| Dropdown grid sizing | `w-max` on grid container | Fixed width, no width constraint | Flex row with `items-center` may be narrower than the 2×2 grid; `w-max` prevents flag overlap by expanding to content width |
| Test assertions | Update all tests to English text | Keep Spanish assertions | With English as default, test i18n instance loads `lng: 'en'`; all `screen.getByText()` calls must match English strings |

## Risks / Trade-offs

- **[Accuracy risk]** AI-generated translations may contain errors → User should review key pages (Hero, About, Portfolio) after generation
- **[Layout risk]** Dropdown clipped at narrow viewports → Dropdown uses `right-0` to align to trigger's right edge; mobile version stacks vertically
- **[Layout risk]** Header `overflow-hidden` clips absolute-positioned dropdown → `overflow-hidden` must be removed from `<header>`; verify matrix rain animation does not leak outside header bounds
- **[Default mismatch]** Language stored in `localStorage` (e.g., `"es"`) persists across deploys — if user previously visited in Spanish, ThemeContext reads `|| 'en'`, so `localStorage` value takes precedence; cleared via `localStorage.removeItem("language")` once before the new default applies
- **[Performance]** Minimal — 2 extra JSON files (~15KB each) loaded at init
- **[Maintenance]** 4 translation files to keep in sync when adding new content → Mitigated by clear pattern: always update all 4 locales
