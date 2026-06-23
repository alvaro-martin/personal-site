# Tasks

## 1. CSS Class Refactoring

- [x] Rename `.paintings-masonry` → `.hobbies-masonry` in `src/index.css`
- [x] Rename `.painting-card` → `.hobbies-card` in `src/index.css`
- [x] Rename `.painting-date` → `.hobbies-date` in `src/index.css`
- [x] Rename reduced motion `.painting-card` → `.hobbies-card` in `src/index.css`
- [x] Update comments to match (e.g., `/* Paintings masonry grid */` → `/* Hobbies masonry grid */`)

## 2. Update Paintings.jsx Class Names

- [x] Update `src/components/03.organisms/Hobbies/Paintings/Paintings.jsx` line 77: `paintings-masonry` → `hobbies-masonry`
- [x] Update `src/components/03.organisms/Hobbies/Paintings/Paintings.jsx` line 81: `painting-card` → `hobbies-card`

## 3. Create Marathons Component

- [x] Create `src/components/03.organisms/Hobbies/Marathons/Marathons.jsx` with:
  - Hardcoded array of 3 marathon objects (src, date)
  - Same structure as Paintings.jsx
  - Uses `hobbies-masonry`, `hobbies-card`, `hobbies-date` classes
  - Localized month names via static arrays
  - Subsection label with i18n key `hobbies.marathons`
  - `useScrollReveal` with `card-reveal` class
  - Image alt text: `Marathon - {date}`

## 4. Update Hobbies.jsx

- [x] Import `Marathons` from `./Marathons/Marathons`
- [x] Uncomment `/* <Marathons /> */` → `<Marathons />`

## 5. Add i18n Keys

- [x] Add `hobbies.marathons` to `src/translations/en/global.json` (value: "Marathons")
- [x] Add `hobbies.marathons` to `src/translations/es/global.json` (value: "Maratones")

## 6. Create Tests

- [x] Create `src/components/03.organisms/Hobbies/Marathons/Marathons.test.jsx` with tests:
  - All 3 marathon images render
  - Most recent first (2026-05-24)
  - Oldest last (2025-06-22)
  - Date labels render (Mayo 2026, Diciembre 2025, Junio 2025)
  - Subsection label renders ("Maratones")
  - Lazy loading attributes present

## 7. Verification

- [x] Run `npm test` — all tests pass
- [x] Run `npm run build` — build succeeds
- [x] Verify via chrome-devtools: marathons layout on desktop, tablet, mobile
- [x] Verify brush-stroke animation works on marathons
- [x] Verify date labels display correctly

## 8. Spacing Fix

- [x] Add `mt-16` wrapper around `<Marathons />` in Hobbies.jsx to prevent marathons title from being blocked by paintings above
