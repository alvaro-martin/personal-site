## 1. Create CardGrid Component

- [x] 1.1 Create `src/components/02.molecules/CardGrid/CardGrid.jsx` with responsive grid layout (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`) and horizontal padding (`px-4 sm:px-6 lg:px-8`)
- [x] 1.2 Implement card rendering: image (`aspect-[3/2] object-contain`), title (`h3`), description (`line-clamp-3`), optional link (`<a>` with `btn-primary-sm` class)
- [x] 1.3 Apply `.card` class with `overflow-hidden flex flex-col` utilities for consistent card styling
- [x] 1.4 Add image hover effect (`hover:scale-105 transition-transform`)
- [x] 1.5 Create `src/components/02.molecules/CardGrid/index.js` barrel export

## 2. Add btn-primary-sm Utility

- [x] 2.1 Add `.btn-primary-sm` class in `src/index.css` under the existing `.btn-primary` block, overriding min-width/min-height/padding/font-size

## 3. Scroll Reveal Animation

- [x] 3.1 Create `src/hooks/useScrollReveal.js` — custom hook using IntersectionObserver that adds `is-visible` class to `.card-reveal` elements when they enter the viewport
- [x] 3.2 Add `.card-reveal` and `.card-reveal.is-visible` CSS rules in `src/index.css` using existing `@keyframes slideUp`
- [x] 3.3 Update CardGrid to use `useScrollReveal` hook, add `card-reveal` class and staggered `animationDelay` (`idx * 100ms`) to each card

## 4. Update Organisms

- [x] 4.1 Update `Research.jsx`: replace Carousel import with CardGrid, update JSX
- [x] 4.2 Update `Portfolio.jsx`: replace Carousel import with CardGrid, update JSX
- [x] 4.3 Update `Awards.jsx`: replace Carousel import with CardGrid, update JSX

## 5. Update Barrel Exports

- [x] 5.1 Update `src/components/02.molecules/index.js` to add CardGrid export (keep existing Carousel export)

## 6. Cleanup

- [x] 6.1 Remove `.carousel-arrow` CSS rules from `src/index.css`
- [x] 6.2 Remove `carousel.readMore` and `carousel.readLess` i18n keys from both translation files

## 7. Verify

- [x] 7.1 Run `npm run dev` and verify padding, images, scroll animation, and responsive layout at all breakpoints
- [x] 7.2 Verify no console errors or import warnings
