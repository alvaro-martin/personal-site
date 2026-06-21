## Context

The Hero component (`src/components/03.organisms/Hero/Hero.jsx`) is the first section visitors see. Current state:
- 3-column layout: text (left), photo (center), social links (right)
- Mobile: photo on top, text below, social links at bottom
- Static text presentation with simple fadeIn animation
- Photo has clipImage animation (pulsing circle)
- "Contact me" button links to #portfolio (same as navigation)
- "Fundador y CEO de Aubo..." description adds visual clutter

The project uses:
- Tailwind CSS for styling
- i18next for translations
- CSS keyframes for animations
- `useScrollReveal` hook for scroll-triggered animations

## Goals / Non-Goals

**Goals:**
- Create an engaging first impression with typewriter animation
- Establish clear text hierarchy (Name → Degree → Titles)
- Add modern photo effect (gradient border rotation)
- Ensure responsive design works across all viewports
- Maintain accessibility (screen readers, reduced motion)

**Non-Goals:**
- JavaScript-driven animations (CSS-only for performance)
- Complex particle effects or 3D transforms
- Interactive elements beyond social links
- Dark/light mode specific changes

## Decisions

### 1. Typewriter Animation: CSS-only with steps()

**Decision**: Use CSS `typing` animation with `steps()` timing function for the name.

**Rationale**:
- Pure CSS, no JS runtime cost
- `steps()` creates authentic typewriter feel
- Blinking cursor adds visual feedback
- Easy to customize speed and steps

**Alternatives considered**:
- JS typewriter: More control but adds bundle size and complexity
- CSS `width` transition: Smooth, not typewriter-like
- SVG text animation: Overkill for this use case

### 2. Photo Effect: Gradient Border Rotation

**Decision**: Replace clipImage with rotating conic-gradient border.

**Rationale**:
- Modern, tech-forward aesthetic
- Fits IoT/Full-Stack developer theme
- Lightweight CSS animation
- Draws attention without being distracting

**Alternatives considered**:
- Morphing blob: Too organic for tech portfolio
- Neon glow: Can look cheesy
- Glitch effect: Too distracting for hero section
- Simple float: Too subtle

### 3. Social Links: Move Below Titles

**Decision**: Move social links from right side to below titles.

**Rationale**:
- Creates consistent layout on mobile and desktop
- Better visual hierarchy: Name → Titles → Social → Photo
- Social links feel more connected to text content
- Reduces visual clutter

**Alternatives considered**:
- Keep on right side: Disconnects from content
- Move to header: Loses prominence
- Remove: Loses networking opportunity

### 4. Text Hierarchy: Clear Visual Layers

**Decision**: Implement 4-tier text hierarchy with distinct sizing.

**Rationale**:
- Name: Primary focus (text-3xl/text-5xl)
- Degree: Secondary (text-lg/text-xl)
- Titles: Tertiary (text-base/text-lg)
- Creates clear visual scanning path

**Alternatives considered**:
- Same size for all: No hierarchy
- Reverse hierarchy: Confusing
- Two tiers only: Less nuance

### 5. Responsive Breakpoints: Mobile-first

**Decision**: Use mobile-first approach with md: breakpoint.

**Rationale**:
- Aligns with Tailwind conventions
- Progressive enhancement
- Easier to maintain
- Better performance on mobile

**Alternatives considered**:
- Desktop-first: More overrides needed
- Multiple breakpoints: Overkill for this section

## Risks / Trade-offs

### Risk: Typewriter animation may feel slow
**Mitigation**: Keep animation to 2s, use ` forwards` to maintain final state

### Risk: Gradient border may not match all themes
**Mitigation**: Use existing CSS variables for colors, test with light/dark themes

### Risk: Removing button may reduce conversions
**Mitigation**: Button linked to #portfolio (same as nav), social links provide alternative CTA

### Risk: Responsive text may be too small on some devices
**Mitigation**: Test on 320px-1440px viewports, use clamp() if needed

## Migration Plan

1. Update translation files (remove description, button, add title4)
2. Add new CSS keyframes and animation classes
3. Restructure Hero.jsx component
4. Test responsive design across viewports
5. Verify accessibility (screen reader, reduced motion)

## Implementation Findings (chrome-devtools verified)

### Typewriter Animation Issues & Solutions

**Issue 1: Text clipping with width animation**
- `width: 100%` resolves to parent container width, which may be constrained
- `max-width` with flex layouts causes parent container to shrink
- **Solution**: Use `clip-path: inset()` instead of width/max-width
- `clip-path` doesn't affect layout, only visual clipping

**Issue 2: Steps count must match character count**
- Original: `steps(20)` for "Hola, soy Alvaro Martín" (24 chars) - didn't work
- Fixed: `steps(14)` for "Alvaro Martín!" (14 chars) - works correctly
- Steps must match the animated text length exactly

**Issue 3: Cursor position**
- Initial: Cursor on parent h1 element - appeared between text and photo
- Fixed: Cursor only on `.hero-name-line2` - appears only on second line

### Layout Findings

**Two-line greeting structure:**
- Split "Hola, soy Alvaro Martín" into "Hola, yo soy" + "Alvaro Martín!"
- First line fades in immediately (400ms)
- Second line types out after first line completes

**Flex layout optimization:**
- `w-fit` on text container ensures it only takes width needed for content
- `flex-shrink-0` on photo prevents compression
- `gap-6` (24px) provides consistent spacing

**Responsive behavior (verified at 320px, 375px, 768px, 1024px, 1440px):**
- Mobile: flex-col, centered, text above photo
- Desktop: flex-row, text left, photo right
- Photo maintains circular shape with flex-shrink-0

### Reduced Motion Support

Added comprehensive reduced motion handling:
```css
@media (prefers-reduced-motion: reduce) {
  .hero-name-line1,
  .hero-name-line2 {
    animation: none;
    opacity: 1;
    clip-path: inset(0 0 0 0);
    border-right: none;
  }
}
```

## Open Questions

- Should we add a subtle background gradient to the Hero section?
- Should the typewriter animation replay on scroll or only once?
- Should we add a "scroll down" indicator below the Hero?
