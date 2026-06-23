## Context

The Hobbies section was added in the previous change (`add-hobbies-section`) with a Paintings subsection. The CSS classes used painting-specific names (`paintings-masonry`, `painting-card`, `painting-date`). Now that we're adding a Marathons subsection with identical layout and animation, these classes should be generalized to `hobbies-*` for reuse across all subsections.

The Marathons gallery has only 3 images (vs 38 for Paintings), all WebP format, already optimized at 130-157KB each.

## Goals / Non-Goals

**Goals:**
- Refactor CSS classes from painting-specific to generic hobbies naming
- Create Marathons component identical in structure to Paintings
- Maintain visual consistency across both subsections
- Keep brush-stroke animation for marathons

**Non-Goals:**
- Changing the masonry grid layout or animation behavior
- Adding new visual effects specific to marathons
- Creating a generic "gallery" component (subsection components remain separate)

## Decisions

### 1. CSS class naming: hobbies-* prefix

**Decision**: Rename `paintings-masonry`, `painting-card`, `painting-date` to `hobbies-masonry`, `hobbies-card`, `hobbies-date`.

**Why**: With multiple subsections (paintings, marathons, books, stories), painting-specific class names become semantically incorrect when used for marathon images. The `hobbies-*` prefix accurately describes the shared gallery pattern across all subsections.

**Alternatives considered**:
- Keep `paintings-masonry` and create parallel `marathons-masonry` — creates duplication and inconsistent naming
- Create generic `gallery-masonry` — too generic, loses context that these belong to the Hobbies section

### 2. Same component structure for Marathons

**Decision**: Create `Marathons.jsx` as a near-identical copy of `Paintings.jsx` with only data and i18n key differences.

**Why**: With 3 subsections total (paintings, marathons, books, stories), the shared pattern is small enough that copying is simpler than creating a generic abstraction. Each component is ~60 lines. A generic `ImageGallery` component would need props for data source, alt text pattern, and i18n key — adding complexity without real benefit.

### 3. Sequential layout: Paintings → Marathons

**Decision**: Render Marathons directly below Paintings in Hobbies.jsx.

**Why**: Matches the user's explicit request. The visual separation is achieved through the subsection label headings ("Pinturas" / "Paintings" and "Maratones" / "Marathons").

## Risks / Trade-offs

- **Class rename affects existing Paintings component** → Update Paintings.jsx simultaneously with CSS rename to avoid broken styles
- **Marathons with only 3 images may look sparse on desktop** → Accept for now; can verify with chrome-devtools and adjust layout later if needed
- **Duplicated component code between Paintings and Marathons** → Acceptable trade-off for simplicity; refactoring into a generic gallery can happen later if more subsections are added
