## 1. CSS Keyframes

- [x] 1.1 Add `@keyframes slideInLeft` animation (translateX -100px to 0)
- [x] 1.2 Add `@keyframes slideInRight` animation (translateX 100px to 0)
- [x] 1.3 Add `@keyframes dotPulse` animation (scale + box-shadow pulse)

## 2. Timeline Line Styles

- [x] 2.1 Add `.journey-line` base styles (height: 0%, transition)
- [x] 2.2 Add `.journey-decorator.is-visible .journey-line` styles (height: 100%)

## 3. Timeline Dot Styles

- [x] 3.1 Add `.journey-dot` base styles (scale: 0, transition)
- [x] 3.2 Add `.journey-decorator.is-visible .journey-dot` styles (scale: 1, dotPulse animation)

## 4. Entry Animation Styles

- [x] 4.1 Add `.journey-entry` base styles (opacity: 0, transition for hover)
- [x] 4.2 Add `.journey-entry-left` styles (translateX: -100px)
- [x] 4.3 Add `.journey-entry-left.is-visible` styles (slideInLeft animation)
- [x] 4.4 Add `.journey-entry-right` styles (translateX: 100px)
- [x] 4.5 Add `.journey-entry-right.is-visible` styles (slideInRight animation)

## 5. Hover Effect Styles

- [x] 5.1 Add `.journey-entry:hover` styles (translateY: -4px, box-shadow)
- [x] 5.2 Add transition properties for smooth hover effect

## 6. Mobile Adaptations

- [x] 6.1 Add media query for viewport < 768px
- [x] 6.2 Override `.journey-entry-left` to use translateX: -50px
- [x] 6.3 Override `.journey-entry-right` to use translateX: 50px
- [x] 6.4 Override stagger delay to 100ms on mobile

## 7. Journey.jsx Updates

- [x] 7.1 Import `useScrollReveal` hook
- [x] 7.2 Add `ref={ref}` to section element
- [x] 7.3 Add `card-reveal` class to entry articles
- [x] 7.4 Add `journey-entry` class to entry articles
- [x] 7.5 Add `journey-entry-left` or `journey-entry-right` class based on grid position
- [x] 7.6 Add `animationDelay` style based on index
- [x] 7.7 Add `card-reveal` class to decorator divs
- [x] 7.8 Add `journey-decorator` class to decorator divs
- [x] 7.9 Add `animationDelay` style to decorators based on index

## 8. Testing

- [x] 8.1 Verify all existing Journey tests still pass
- [x] 8.2 Test animations on desktop viewport
- [x] 8.3 Test animations on mobile viewport
- [x] 8.4 Test hover effects on entry cards
