## Context

The Journey component (`src/components/03.organisms/Journey/Journey.jsx`) displays a vertical timeline with 9 career entries arranged in a CSS Grid layout. Entries alternate left/right with a central vertical line and dot decorators.

Current structure:
- 3-column grid: `[1fr 5rem 1fr]` (desktop) / `[1fr 3rem 1fr]` (mobile)
- Left entries in column 1, decorators in column 2, right entries in column 3
- Each entry has: title, company, date
- Each decorator has: dot (circle) + line (vertical bar)

The project already has:
- `useScrollReveal()` hook that adds `.is-visible` class to `.card-reveal` elements
- Existing keyframes: `slideUp`, `fadeIn`, `scaleIn`
- CSS variables for easing (`--ease-default`, `--ease-out`, `--ease-bounce`) and durations

## Goals / Non-Goals

**Goals:**
- Add scroll-triggered animations that reveal entries sequentially
- Create a "timeline drawing" effect where the vertical line progresses as entries appear
- Add pulse animation on timeline dots when they enter viewport
- Add slide-in animations from alternating sides (left/right)
- Add subtle hover lift effect on entry cards
- Ensure mobile-responsive animations
- Follow existing pattern (card-reveal + useScrollReveal) for consistency

**Non-Goals:**
- JavaScript-driven animations (CSS-only for performance)
- Complex particle effects or 3D transforms
- Animation timing customization by users
- Parallax scrolling effects

## Decisions

### 1. Animation Trigger: IntersectionObserver via useScrollReveal

**Decision**: Use existing `useScrollReveal()` hook with `.card-reveal` class pattern.

**Rationale**:
- Consistent with Languages section implementation
- Already tested and working
- No new dependencies needed
- Lightweight (single observer per section)

**Alternatives considered**:
- Custom IntersectionObserver per entry: More code, no benefit
- Scroll event listener: Performance concerns, more complex
- CSS-only scroll-timeline: Limited browser support

### 2. Entry Animation: translateX slide from sides

**Decision**: Left entries slide from `translateX(-100px)`, right entries from `translateX(100px)`.

**Rationale**:
- Creates clear visual directionality
- Matches the alternating layout pattern
- Smooth, professional appearance
- Easy to understand and maintain

**Alternatives considered**:
- translateY (slide from top): Doesn't emphasize left/right alternation
- fadeIn only: Less dynamic, entries just appear
- scaleIn: Can feel jarring for text content

### 3. Timeline Line: height animation

**Decision**: Animate the line's `height` from 0% to 100% when decorator enters viewport.

**Rationale**:
- Simple CSS transition, no keyframes needed
- Creates natural "drawing" effect
- Each line segment animates independently
- Works well with staggered timing

**Alternatives considered**:
- clip-path: More complex, same visual result
- SVG stroke-dashoffset: Requires SVG conversion
- Background gradient: Doesn't create line drawing effect

### 4. Dot Animation: scale + box-shadow pulse

**Decision**: Scale from 0 to 1 with a brief overshoot (scale 1.3) and box-shadow pulse.

**Rationale**:
- Draws attention to timeline progression
- `--ease-bounce` easing adds playful feel
- Box-shadow creates "ripple" effect
- Brief duration (600ms) keeps it subtle

**Alternatives considered**:
- Simple scale: Less dynamic
- Color change: Doesn't work well with theme colors
- Rotation: Doesn't fit timeline metaphor

### 5. Stagger Timing: 100ms for decorators, 150ms for entries

**Decision**: Decorators delay by `index * 100ms`, entries by `index * 150ms`.

**Rationale**:
- Creates cascading reveal effect
- Total animation duration ~2.3s for 9 entries (reasonable)
- Entries slightly delayed from decorators for visual flow
- Consistent with Languages section timing

**Alternatives considered**:
- Same delay for all: No cascade effect
- Random delays: Looks chaotic
- Longer delays: Animation feels slow

### 6. Mobile Adaptations

**Decision**: On mobile (< 768px), reduce translateX to 50px and stagger delay to 100ms.

**Rationale**:
- Smaller viewport needs less dramatic slides
- Faster animations feel more responsive on mobile
- Grid changes to single column, so left/right distinction remains
- Maintains visual interest without being overwhelming

**Alternatives considered**:
- Disable animations on mobile: Loses engagement
- Same as desktop: Too dramatic for small screens
- Simpler fade-only: Loses directional emphasis

## Risks / Trade-offs

### Risk: Performance on low-end devices
**Mitigation**: CSS-only animations use compositor thread, minimal CPU impact. IntersectionObserver is efficient.

### Risk: Animation fatigue
**Mitigation**: Keep durations short (600ms max), use subtle effects, ensure hover effect is optional (doesn't trigger on touch).

### Risk: Accessibility concerns
**Mitigation**: Animations are decorative, don't affect content availability. Users with `prefers-reduced-motion` can be handled with media query (optional enhancement).

### Risk: Grid layout complexity
**Mitigation**: Test on multiple screen sizes, use existing responsive breakpoints, keep mobile adaptations simple.

## Migration Plan

1. Add CSS keyframes and animation classes to `src/index.css`
2. Update Journey.jsx with animation classes and useScrollReveal integration
3. Test on desktop and mobile viewports
4. Verify all 9 entries animate correctly
5. Check hover effects work as expected

## Open Questions

- Should we add `prefers-reduced-motion` media query to disable animations for accessibility? (Recommended: yes, as optional enhancement)
- Should the timeline line draw continuously or in segments? (Current plan: segments per decorator)

## Verified Implementation

All animations have been verified working in the browser:

### Browser Testing Results
- **IntersectionObserver**: Successfully adds `is-visible` class to all 9 entries and 9 decorators
- **Entry animations**: Left entries slide from left, right entries slide from right
- **Timeline line**: Height animation progresses as decorators enter viewport
- **Timeline dots**: Pulse animation with bounce easing works correctly
- **Hover effects**: Lift effect with box-shadow transitions smoothly
- **Mobile adaptations**: translateX reduced to 50px on viewports < 768px

### Files Modified
- `src/index.css`: Added 3 keyframes (slideInLeft, slideInRight, dotPulse) and 15+ animation classes
- `src/components/03.organisms/Journey/Journey.jsx`: Added useScrollReveal, animation classes, and stagger delays

### Test Results
- All 76 tests passing (16 test files)
- Journey component tests: 6 tests passing
- No regressions in existing functionality
