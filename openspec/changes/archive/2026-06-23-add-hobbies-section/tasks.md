## 1. Image Optimization (Manual)

- [x] 1.1 Convert all 38 JPGs in `public/paintings/` to WebP format using `cwebp -q 80`
- [x] 1.2 Remove original JPG files from `public/paintings/`
- [x] 1.3 Verify total folder size is under 20MB

## 2. CSS Animations and Masonry Styles

- [x] 2.1 Add `@keyframes brushReveal` to `src/index.css` with jagged-to-rectangle clip-path animation
- [x] 2.2 Add `.paintings-masonry` class with responsive `column-count` (3→2→1)
- [x] 2.3 Add `.painting-card` class with `break-inside: avoid`, margin, and initial clip-path state
- [x] 2.4 Add `.painting-card.is-visible` class with brush-reveal animation trigger
- [x] 2.5 Add `prefers-reduced-motion` media query to disable painting animations

## 3. Paintings Component

- [x] 3.1 Create `src/components/03.organisms/Hobbies/Paintings/` directory
- [x] 3.2 Create `Paintings.jsx` with static array of 38 painting objects (src + date)
- [x] 3.3 Add date parsing logic (extract year-month from filename, lookup localized month name)
- [x] 3.4 Add static month name arrays (MONTHS_EN, MONTHS_ES) for localization
- [x] 3.5 Sort paintings array by date descending (most recent first)
- [x] 3.6 Implement masonry grid rendering with CSS columns
- [x] 3.7 Add brush-stroke reveal animation integration with `useScrollReveal` pattern
- [x] 3.8 Add staggered animation delay per card index (80ms increment)
- [x] 3.9 Add `loading="lazy"` and `decoding="async"` to all images
- [x] 3.10 Add subsection label ("Paintings" / "Pinturas") above masonry grid using i18n
- [x] 3.11 Style date label with `text-text-accent` to match brand color

## 4. Hobbies Wrapper Component

- [x] 4.1 Create `src/components/03.organisms/Hobbies/` directory
- [x] 4.2 Create `Hobbies.jsx` with `section-wrapper`, heading, subtitle, and `<Paintings />`
- [x] 4.3 Add i18n integration with `useTranslation("global")`
- [x] 4.4 Add commented placeholders for Marathons, Books, Stories components

## 5. Internationalization

- [x] 5.1 Add `header.hobbies` key to `src/translations/en/global.json` ("Hobbies")
- [x] 5.2 Add `hobbies.title` and `hobbies.subtitle` keys to EN translation file
- [x] 5.3 Add `header.hobbies` key to `src/translations/es/global.json` ("Pasatiempos")
- [x] 5.4 Add `hobbies.title` and `hobbies.subtitle` keys to ES translation file
- [x] 5.5 Add `footer.link7` key to both translation files for Footer anchor
- [x] 5.6 Add `hobbies.paintings` key to both translation files ("Paintings" / "Pinturas")

## 6. Data and Navigation

- [x] 6.1 Add `hobbies` section to `src/data/content.json` (empty object for now)
- [x] 6.2 Add `{ "href": "#hobbies", "labelKey": "footer.link7" }` to `content.json` footer.anchors
- [x] 6.3 Add `{ key: "header.hobbies", href: "#hobbies" }` to `Header.jsx` navLinks array

## 7. Page Integration

- [x] 7.1 Add Hobbies export to `src/components/03.organisms/index.js`
- [x] 7.2 Import and render `<Hobbies />` in `Home.jsx` after Awards

## 8. Tests

- [x] 8.1 Create `Paintings.test.jsx` — verify all 38 images render
- [x] 8.2 Create `Paintings.test.jsx` — verify sort order (most recent first)
- [x] 8.3 Create `Paintings.test.jsx` — verify date labels render with i18n
- [x] 8.4 Create `Hobbies.test.jsx` — verify section heading and subtitle render
- [x] 8.5 Create `Hobbies.test.jsx` — verify Paintings subsection is present
- [x] 8.6 Create `Paintings.test.jsx` — verify subsection label renders

## 9. Verification

- [x] 9.1 Run `npm run build` — verify no build errors
- [x] 9.2 Run `npm test` — verify all tests pass
- [ ] 9.3 Run dev server and visually verify masonry layout, animations, and navigation links
