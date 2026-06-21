## Why

The Hero section is the first impression visitors see. The current design has outdated text hierarchy, a button that redirects to the same section as navigation, and static presentation. Renovating it with a typewriter animation, improved text sizing, and a modern photo effect will create a more engaging and professional first impression.

## What Changes

- Remove "Contact me" button (redundant with navigation)
- Remove "Fundador y CEO de Aubo..." description text
- Add "Msc. Computer Science" degree to text hierarchy
- Add "AI Engineer" title to text hierarchy
- Reorder titles: Name → Degree → Engineer → AI → IoT Researcher
- Implement typewriter animation for the name
- Add staggered fade-in for titles
- Replace clipImage photo animation with gradient border rotation
- Move social links below titles (consistent layout)
- Improve responsive text sizing

## Capabilities

### New Capabilities
- `hero-typewriter-animation`: Typewriter effect for the hero name with staggered title reveals
- `hero-photo-gradient-border`: Animated gradient border around the photo with floating effect
- `hero-responsive-typography`: Responsive text sizing system for hero section hierarchy

### Modified Capabilities
<!-- None - this is a standalone section renovation -->

## Impact

- **Files modified**:
  - `src/components/03.organisms/Hero/Hero.jsx` - Component restructure
  - `src/index.css` - New animations and styles
  - `src/translations/es/global.json` - Updated hero translations
  - `src/translations/en/global.json` - Updated hero translations
- **Dependencies**: None
- **Breaking changes**: None (button removal is intentional)
- **Performance**: CSS-only animations, no JS runtime cost
