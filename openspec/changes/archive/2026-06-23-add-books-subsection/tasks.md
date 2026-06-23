# Tasks

## 1. Create Books Component

- [x] Create `src/components/03.organisms/Hobbies/Books/Books.jsx` with:
  - Hardcoded array of 20 book objects (src, date) sorted descending
  - Same structure as Marathons.jsx
  - Uses `hobbies-masonry`, `hobbies-card`, `hobbies-date` classes
  - Localized month names via static arrays
  - Subsection label with i18n key `hobbies.books`
  - `useScrollReveal` with `card-reveal` class
  - Image alt text: `Book - {date}`
- [x] Create `src/components/03.organisms/Hobbies/Books/index.js` barrel export

## 2. Update Hobbies.jsx

- [x] Import `Books` from `./Books/Books`
- [x] Uncomment `/* <Books /> */` → `<Books />` (wrapped in `mt-16` div)

## 3. Add i18n Keys

- [x] Add `hobbies.books` to `src/translations/en/global.json` (value: "Books")
- [x] Add `hobbies.books` to `src/translations/es/global.json` (value: "Libros")

## 4. Create Tests

- [x] Create `src/components/03.organisms/Hobbies/Books/Books.test.jsx` with tests:
  - All 20 book images render
  - Most recent first (2026-04-25)
  - Oldest last (2024-02-26)
  - Date labels render (Abril 2026, Febrero 2024, etc.)
  - Subsection label renders ("Libros")
  - Lazy loading attributes present

## 5. Verification

- [x] Run `npm test` — all tests pass
- [x] Run `npm run build` — build succeeds
- [x] Verify layout on desktop, tablet, mobile
