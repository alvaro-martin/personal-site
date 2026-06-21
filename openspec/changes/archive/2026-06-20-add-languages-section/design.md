## Context

The site uses a consistent section pattern: heading, subtitle, content area. Existing animations rely on IntersectionObserver via `useScrollReveal` hook (adds `is-visible` class to `.card-reveal` elements). Progress bars in Skills section use inline CSS with `linear-gradient` for fill. The site is bilingual (ES/EN) via i18next. All styling uses Tailwind CSS with custom CSS variables for theming.

## Goals / Non-Goals

**Goals:**
- Create a visually distinct Languages section with animated progress bars
- Support bilingual content (ES/EN)
- Maintain visual consistency with existing sections
- Add TOEFL certification download for English

**Non-Goals:**
- Modifying existing Skills section (user confirmed it's not rendered)
- Adding new dependencies
- Creating a complex certification verification system

## Decisions

1. **Hybrid card layout over separate cards**: Single container with rows keeps the section compact and allows visual comparison between languages. Rows separated by subtle borders for readability.

2. **CSS keyframe animation for progress bars**: Instead of JavaScript-driven animation, use `@keyframes fillBar` with `animation-fill-mode: forwards`. Triggered by adding a class when `is-visible` is set by IntersectionObserver. This keeps animation logic in CSS (performant) while using existing scroll reveal pattern.

3. **Staggered delay via inline style**: Each row gets `animation-delay: ${idx * 150}ms` inline, matching CardGrid pattern. No new hook needed.

4. **Emoji flags over image flags**: Simpler implementation, no asset management, consistent rendering across devices. Unicode flags (🇪🇸🇺🇸🇧🇷🇩🇪) are widely supported.

5. **TOEFL badge as secondary element**: Small inline badge with `shine` CSS animation on hover. Download link opens PDF in new tab.

6. **German progress at 50%**: Represents A2→B1 transition visually. Level text shows "A2 → B1" to indicate progression.

## Risks / Trade-offs

- **[Risk]** Emoji flags may render differently across platforms → **Mitigation**: Unicode flags are standardized; minor visual differences are acceptable
- **[Risk]** Progress bar animation may not trigger if user scrolls quickly → **Mitigation**: IntersectionObserver threshold 0.15 ensures trigger before fully visible
