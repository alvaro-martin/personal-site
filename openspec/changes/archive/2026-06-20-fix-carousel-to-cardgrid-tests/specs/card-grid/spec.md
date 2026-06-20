## MODIFIED Requirements

### Requirement: Props contract
The CardGrid SHALL accept `{ items, ariaLabel }` props with the same shape as the existing Carousel component: `items` is an array of `{ img, alt, title, subtitle, link?, button? }` objects, and `ariaLabel` is a string.

#### Scenario: Rendering from carousel data
- **WHEN** an organism passes the same `items` array and `ariaLabel` that was used with Carousel
- **THEN** CardGrid renders all items without requiring data transformation

#### Scenario: All items visible in grid (TEST UPDATED)
- **WHEN** a test renders a component using CardGrid
- **THEN** all items are rendered simultaneously in the DOM (no navigation required)
- **THEN** each item's title and image are accessible via `screen.getByText` and `screen.getByAltText`

## ADDED Requirements

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
