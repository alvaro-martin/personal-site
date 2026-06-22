## Context

The About section (`src/components/03.organisms/About/About.jsx`) displays a photo, description text, stats row, and Download CV button. The current layout uses `flex-row` by default with `md:flex-col` — this stacks content on tablet but keeps it side-by-side on mobile, causing overlap on small screens.

The codebase already has a `useScrollReveal` hook (`src/hooks/useScrollReveal.js`) that uses IntersectionObserver to add `.is-visible` class to `.card-reveal` elements. The `.card-reveal` CSS class starts at `opacity: 0; translateY(2rem)` and animates `slideUp` when `.is-visible` is added. This pattern is used in Journey, CardGrid, and Languages components.

The `HiDownload` icon from `react-icons/hi` is used in the CV button. The photo is 250x350px with rounded corners.

## Goals / Non-Goals

**Goals:**
- Fix responsive layout so mobile stacks vertically and desktop shows side-by-side
- Remove stale stats section (03+, 04+, 11+)
- Add scroll-triggered staggered reveal animation to photo, description, and button
- Add a bouncing arrow animation to the Download CV button
- Maintain accessibility with `prefers-reduced-motion`

**Non-Goals:**
- Changing the photo size (250x350 works on all screens)
- Changing the section heading or subtitle
- Changing the description text content
- Adding new dependencies
- Changing the CV download behavior

## Decisions

### 1. Layout: `flex-col` default, `md:flex-row`

Flip the flex direction so mobile (<768px) stacks vertically and desktop (≥768px) shows photo left, text right. The `md:` breakpoint (768px) is the correct threshold — below this, side-by-side is too cramped.

**Why not `sm:` or `lg:`**: 768px is where tablets start. Below this, a 250px photo + text doesn't fit in 375px. Above this, there's enough horizontal space.

### 2. Staggered scroll reveal using existing `card-reveal` pattern

Apply `.card-reveal` class to photo, description, and button with staggered `animationDelay` inline styles (0ms, 200ms, 400ms). The `useScrollReveal` hook observes `.card-reveal` elements and adds `.is-visible` when they enter the viewport.

**Why not a new animation system**: The pattern already exists and works. Adding a second system would be redundant. The stagger is achieved via CSS `animationDelay` — no JavaScript timing needed.

**Why these delays**: 200ms between elements creates a noticeable but not slow cascade. The total reveal sequence takes ~1s (400ms delay + 600ms animation).

### 3. Bouncing arrow: CSS `@keyframes bounceDown`

A simple `translateY(0)` → `translateY(4px)` → `translateY(0)` loop at 1.5s interval. Applied to a `<span className="download-icon">` wrapper around the `<HiDownload>` icon.

**Why 4px**: Subtle enough to not be annoying, visible enough to draw attention. 8px would be too much for a button icon.

**Why 1.5s**: Fast enough to notice, slow enough to not feel frantic. 1s would be too fast, 2s too slow.

### 4. Photo size: keep 250x350 on all screens

The photo at 250x350px works on mobile because the layout now stacks vertically. On desktop, it sits comfortably next to the text. No responsive sizing needed.

## Risks / Trade-offs

- **[Scroll reveal timing]** If the user scrolls fast, elements might reveal before they're fully in view. → Mitigation: The `useScrollReveal` hook uses `threshold: 0.15` and `rootMargin: '0px 0px -50px 0px'`, which triggers reveals when elements are 15% visible and 50px into the viewport. This is already tuned for the existing components.
- **[Bouncing arrow annoyance]** A continuously bouncing icon could feel distracting. → Mitigation: The bounce is subtle (4px) and slow (1.5s). If needed, it can be reduced to hover-only in the future.
- **[Stats removal]** Removing stats changes the section's visual weight. → Mitigation: The scroll reveal animation adds visual interest that compensates for the removed content.
