# CardGrid

## Purpose

Responsive card grid component that displays all items simultaneously in a scannable layout, replacing the carousel for Research, Portfolio, and Awards sections.

## Requirements

### Requirement: Responsive card grid layout
The CardGrid component SHALL render all items in a CSS grid that adapts to viewport width: 1 column below 640px, 2 columns from 640px to 1023px, and 3 columns at 1024px and above.

#### Scenario: Mobile layout
- **WHEN** the viewport width is less than 640px
- **THEN** each card renders in a single column, full width

#### Scenario: Tablet layout
- **WHEN** the viewport width is between 640px and 1023px
- **THEN** cards render in a 2-column grid with `gap-6` spacing

#### Scenario: Desktop layout
- **WHEN** the viewport width is 1024px or wider
- **THEN** cards render in a 3-column grid with `gap-6` spacing

### Requirement: Card content structure
Each card SHALL display, in order from top to bottom: an image (with `aspect-[3/2]` and `object-contain`), a title (`h3`, bold), a description (`p`, truncated to 3 lines), and an optional link button.

#### Scenario: Card with link
- **WHEN** an item has a `link` property
- **THEN** the card renders an `<a>` element styled with `btn-primary-sm` that opens the link in a new tab

#### Scenario: Card without link
- **WHEN** an item does not have a `link` property
- **THEN** the card renders no link button

### Requirement: Horizontal padding
The CardGrid grid wrapper SHALL have horizontal padding that scales with viewport width: `px-4` on mobile, `sm:px-6` on tablets, `lg:px-8` on desktop.

#### Scenario: Mobile padding
- **WHEN** the viewport width is less than 640px
- **THEN** the grid has 1rem (16px) horizontal padding on each side

#### Scenario: Desktop padding
- **WHEN** the viewport width is 1024px or wider
- **THEN** the grid has 2rem (32px) horizontal padding on each side

### Requirement: Card visual styling
Each card SHALL use the existing `.card` CSS class for background, border-radius, shadow, and hover effects. Cards SHALL have `overflow-hidden` and render as `flex flex-col` to ensure consistent height within a row.

#### Scenario: Hover effect
- **WHEN** a user hovers over a card
- **THEN** the card lifts with `translateY(-2px)` and increased shadow (via existing `.card:hover` styles)

#### Scenario: Image hover effect
- **WHEN** a user hovers over the card image
- **THEN** the image scales to 1.05x with a smooth transition

### Requirement: Props contract
The CardGrid SHALL accept `{ items, ariaLabel }` props with the same shape as the existing Carousel component: `items` is an array of `{ img, alt, title, subtitle, link?, button? }` objects, and `ariaLabel` is a string.

#### Scenario: Rendering from carousel data
- **WHEN** an organism passes the same `items` array and `ariaLabel` that was used with Carousel
- **THEN** CardGrid renders all items without requiring data transformation

#### Scenario: All items visible in grid
- **WHEN** a test renders a component using CardGrid
- **THEN** all items are rendered simultaneously in the DOM (no navigation required)
- **THEN** each item's title and image are accessible via `screen.getByText` and `screen.getByAltText`

### Requirement: Test coverage for grid rendering
Tests for organisms using CardGrid SHALL verify that all items render in the grid, not that items navigate one at a time.

#### Scenario: All project titles render
- **WHEN** a test renders Awards, Portfolio, or Research
- **THEN** all project titles from `content.json` are present in the document

#### Scenario: All project images render
- **WHEN** a test renders Awards, Portfolio, or Research
- **THEN** all project images with correct alt text are present in the document

#### Scenario: No navigation buttons
- **WHEN** a test renders Awards, Portfolio, or Research
- **THEN** no elements with `aria-label="Next"` or `aria-label="Previous"` exist

#### Scenario: Section heading and subtitle render
- **WHEN** a test renders Awards, Portfolio, or Research
- **THEN** the section title and subtitle from i18n are present in the document

### Requirement: Stop using Carousel in organisms
The three organisms (Research, Portfolio, Awards) SHALL import and use CardGrid instead of Carousel. The Carousel component itself remains in the codebase.

#### Scenario: Organisms use CardGrid
- **WHEN** Research, Portfolio, or Awards renders its project grid
- **THEN** it imports CardGrid from `components/02.molecules` and passes the same `items` and `ariaLabel` props

#### Scenario: Carousel no longer imported by organisms
- **WHEN** the implementation is complete
- **THEN** no organism file in `src/components/03.organisms/` imports Carousel

### Requirement: Scroll reveal animation
Cards SHALL animate into view as they enter the viewport using a staggered reveal. Each card starts invisible (`opacity: 0`, `translateY(2rem)`) and animates to full visibility using the existing `slideUp` keyframe over 600ms. Cards SHALL be staggered with a 100ms delay per card index.

#### Scenario: Cards animate on scroll
- **WHEN** a card enters the viewport (15% visible, 50px below viewport edge)
- **THEN** the card animates from `opacity: 0; transform: translateY(2rem)` to `opacity: 1; transform: translateY(0)` over 600ms

#### Scenario: Staggered reveal
- **WHEN** multiple cards enter the viewport simultaneously
- **THEN** each card's animation starts 100ms after the previous card (card 0: 0ms, card 1: 100ms, card 2: 200ms, etc.)

#### Scenario: Reduced motion
- **WHEN** the user has `prefers-reduced-motion: reduce` enabled
- **THEN** all card animations are disabled (animation-duration: 0.01ms)
