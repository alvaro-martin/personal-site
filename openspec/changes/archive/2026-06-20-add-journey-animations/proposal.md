## Why

The Professional Journey section currently displays a static timeline with 9 career entries. Adding scroll-triggered animations will create a more engaging user experience, guiding visitors through the career narrative with visual feedback that rewards scrolling and highlights progression.

## What Changes

- Add CSS-only animations to Journey component entries and timeline decorators
- Implement staggered reveal animations triggered by IntersectionObserver (using existing `useScrollReveal` hook)
- Add timeline line drawing effect that progresses as user scrolls
- Add dot pulse animations on timeline decorators
- Add slide-in animations from left/right for alternating entries
- Add subtle hover lift effect on entry cards
- Ensure mobile-responsive animations with adapted timing

## Capabilities

### New Capabilities
- `journey-animations`: Scroll-triggered CSS animations for the Professional Journey timeline, including entry reveals, timeline line drawing, dot pulse effects, and hover interactions

### Modified Capabilities
<!-- None - this is purely additive -->

## Impact

- **Files modified**:
  - `src/index.css` - New keyframes and animation styles
  - `src/components/03.organisms/Journey/Journey.jsx` - Add animation classes and useScrollReveal integration
- **Dependencies**: None (uses existing `useScrollReveal` hook and CSS variables)
- **Breaking changes**: None
- **Performance**: CSS-only animations, lightweight IntersectionObserver usage
