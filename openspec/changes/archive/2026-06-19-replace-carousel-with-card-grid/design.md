## Context

The personal site uses a `Carousel` molecule component in three organisms (Research, Portfolio, Awards) to display project cards. Each carousel holds 6-7 items with image, title, description, and optional link. The carousel requires user interaction (arrows, swipe, or keyboard) to reveal content, and on mobile the arrows are hidden entirely.

The codebase follows atomic design (atoms → molecules → organisms → pages), uses Tailwind CSS for styling, and i18next for translations. All three organisms share the same data shape from `content.json`.

## Goals / Non-Goals

**Goals:**
- Add a CardGrid component that shows all items simultaneously
- Maintain the same props contract (`{ items, ariaLabel }`) to minimize organism changes
- Use Tailwind responsive utilities for the grid layout with horizontal padding
- Reuse existing `.card` class for consistent visual language
- Add staggered scroll reveal animation as cards enter the viewport
- Stop using Carousel in organisms (Carousel remains in codebase)

**Non-Goals:**
- Redesigning the card visual style (reuse existing `.card` class)
- Changing the data shape in `content.json`
- Modifying section headings, subtitles, or overall page layout
- Adding filtering, sorting, or search to the card grid
- Changing the theme system or design tokens

## Decisions

### 1. New component vs. modifying Carousel

**Decision**: Create a new `CardGrid` component. Keep `Carousel` in the codebase but stop importing it in organisms.

**Rationale**: The carousel's core logic (state tracking, touch handlers, arrow navigation, expand/collapse) is entirely irrelevant to a grid layout. A new component is cleaner. Keeping Carousel avoids deleting code that may be useful for future sections or experimentation.

**Alternatives considered**:
- Modify Carousel to conditionally render as grid: adds complexity, unclear prop semantics
- Delete Carousel entirely: removes potentially useful code

### 2. Grid breakpoints

**Decision**: `grid-cols-1` → `sm:grid-cols-2` → `lg:grid-cols-3`

**Rationale**: Follows the existing Tailwind breakpoint conventions used across the site. The `sm` (640px) breakpoint for 2 columns gives tablets a useful layout, and `lg` (1024px) for 3 columns matches the desktop content width. This is consistent with the responsive patterns already in the codebase.

**Alternatives considered**:
- `md:grid-cols-2` instead of `sm`: delays the 2-column layout too long; tablets at 768px+ would show single column
- 4 columns on `xl`: with only 6-7 items, 4 columns creates very short rows with orphan cards

### 3. Description truncation

**Decision**: Use Tailwind's `line-clamp-3` instead of expand/collapse.

**Rationale**: The expand/collapse pattern requires `useState`, `useEffect`, and two i18n keys. With all cards visible, truncated descriptions give enough context to decide whether to click the link. The full text remains accessible via the link button. This eliminates ~30 lines of state management code.

**Alternatives considered**:
- Keep expand/collapse per card: adds complexity for minimal value when all cards are visible
- No truncation: long descriptions would create uneven card heights

### 4. Button styling for cards

**Decision**: Add a `btn-primary-sm` utility class in `index.css`.

**Rationale**: The existing `btn-primary` has `min-width: 17rem; min-height: 6rem` — designed for a large CTA, not a card footer. Rather than inlining Tailwind overrides on every `<a>`, a reusable utility class keeps consistency and is easier to maintain. The class overrides only sizing, inheriting colors and transitions from `btn-primary`.

**Alternatives considered**:
- Inline Tailwind classes on each `<a>`: works but repeats `min-w-0 min-h-0 px-4 py-2 text-sm` everywhere
- Modify `btn-primary` directly: would break the existing large CTA buttons

### 5. Card image display

**Decision**: Use `object-contain` with `aspect-[3/2]` and a background color, matching the old carousel's behavior.

**Rationale**: The old carousel used `object-contain` (`Carousel.jsx:93`), which shows the full image without cropping. The project images and screenshots have varying aspect ratios — `object-cover` would crop important parts of the content. `object-contain` preserves the full image, and the `bg-background5` on the container provides a consistent background.

**Alternatives considered**:
- `object-cover`: crops images to fill the container, losing content at edges
- No aspect ratio container: causes uneven card heights

### 6. Scroll reveal animation

**Decision**: Staggered scroll-triggered animation using a custom `useScrollReveal` hook with IntersectionObserver.

**Rationale**: Cards animate from invisible to visible as they enter the viewport, creating a sense of discovery. The stagger effect (100ms delay per card) gives a cascading feel without being distracting. Using a custom hook keeps the dependency footprint zero and stays consistent with the codebase's lightweight approach.

**Implementation**:
- `useScrollReveal` hook attaches to the grid container, observes `.card-reveal` children
- When a card intersects (threshold: 0.15, rootMargin: `0px 0px -50px 0px`), it adds `is-visible` class
- CSS rule `.card-reveal.is-visible` triggers the existing `@keyframes slideUp` animation (600ms)
- Each card gets `animationDelay: idx * 100ms` for the stagger effect
- `prefers-reduced-motion: reduce` globally disables all animations (`index.css:388-396`)

**Alternatives considered**:
- CSS-only with `animation-delay`: no scroll control, plays on page load regardless of viewport
- `framer-motion` or similar library: adds bundle weight for a simple effect
- `react-intersection-observer` package: unnecessary dependency for one use case

## Risks / Trade-offs

- **[Orphan card on last row]** → Research has 7 items (3+3+1). The last row will have a single card spanning 1/3 width. Mitigation: acceptable for a portfolio site; the grid gap keeps it visually balanced.

- **[Page length increases]** → All items visible means more vertical scroll. Mitigation: the current carousel approach hides content, so the trade-off favors discoverability over compactness.

- **[btn-primary specificity]** → `btn-primary-sm` must override `btn-primary`'s min-width/min-height. Mitigation: use equal or higher specificity in the utility class, applied after `btn-primary` in HTML.

- **[Carousel unused but kept]** → Carousel stays in codebase with no active consumers. Mitigation: acceptable; it's a small molecule component and may be reused later.

- **[Animation performance]** → IntersectionObserver + CSS animations are lightweight, but observing many DOM nodes could impact scroll performance. Mitigation: observer disconnects per child after animation; only ~6-7 cards per section.
