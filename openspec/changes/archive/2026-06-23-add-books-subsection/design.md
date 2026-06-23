## Context

The Hobbies section already has Paintings and Marathons subsections using a shared pattern: hardcoded image array, masonry grid, brush-stroke animation, date labels. The CSS classes were refactored to generic `hobbies-*` prefix in the previous change. Books follows the identical pattern with 20 images.

## Goals / Non-Goals

**Goals:**
- Create Books component identical in structure to Paintings/Marathons
- Maintain visual consistency across all Hobbies subsections
- Reuse existing `hobbies-*` CSS classes (no new CSS needed)

**Non-Goals:**
- Changing the masonry grid layout or animation behavior
- Adding new visual effects specific to books
- Creating a generic "gallery" component (subsection components remain separate)
- Optimizing book images (user can do this separately if desired)

## Decisions

### 1. Same component structure as Marathons

**Decision**: Create `Books.jsx` as a near-identical copy of `Marathons.jsx` with only data and i18n key differences.

**Why**: With 3 subsections total (paintings, marathons, books), the shared pattern is small enough that copying is simpler than creating a generic abstraction. Each component is ~60 lines.

### 2. Sort order: descending (most recent first)

**Decision**: Sort books by date descending, matching Paintings and Marathons.

**Why**: Consistency across all subsections. Most recent content appears first.

### 3. Sequential layout: Paintings → Marathons → Books

**Decision**: Render Books directly below Marathons in Hobbies.jsx.

**Why**: Follows the existing pattern. The visual separation is achieved through subsection label headings.

## Risks / Trade-offs

- **Larger images than Paintings**: Two book images are 1.2MB+ (vs ~23KB avg for paintings). With `loading="lazy"`, this affects initial load but not scroll performance. User can optimize separately.
- **Long Hobbies section**: 61 total images (38 + 3 + 20). The section will be quite long on mobile. Acceptable for a personal portfolio.
- **Duplicated component code**: Acceptable trade-off for simplicity; refactoring into a generic gallery can happen later if more subsections are added.
