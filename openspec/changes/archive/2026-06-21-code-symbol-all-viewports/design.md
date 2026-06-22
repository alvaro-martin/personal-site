## Context

The `</>` code symbol is currently rendered conditionally: `{isDesktop && (...)}` where `isDesktop = useMediaQuery('(min-width: 1400px)')`. The CSS, animations, and reduced-motion rules for the symbol already work on all viewports — the only thing preventing mobile display is this JSX conditional.

The header layout on mobile is:
```
┌──────────────────────────────────────────────┐
│  Alvaro Martín                        [☰]   │
└──────────────────────────────────────────────┘
```

The brand name group (`<div className="flex items-center">`) wraps `<H5>` and the `</>` symbol. On desktop, `justify-between` pushes nav to the right. On mobile, only the hamburger sits on the right.

## Goals / Non-Goals

**Goals:**
- Make `</>` visible on all viewports (mobile included)
- Optionally reduce `</>` font size on very small screens for visual balance
- Preserve entrance animation behavior on all viewports

**Non-Goals:**
- Changing the matrix rain (already unconditional)
- Changing the entrance animation keyframes or timing
- Changing the header layout structure
- Changing the `isDesktop` breakpoint (still needed for nav vs hamburger toggle)

## Decisions

### 1. Remove conditional, keep `isDesktop` for other uses

The `isDesktop` variable is still needed for:
- Toggling between desktop nav and hamburger menu (line 100, 140)
- Closing mobile menu on resize to desktop (line 47)

Only the code symbol conditional is removed. The variable itself stays.

**Alternative considered**: Extract code symbol into its own component with no viewport check. Rejected — over-engineering for a single conditional removal.

### 2. Responsive font size: `@media (max-width: 400px)`

On viewports < 400px, reduce `.code-symbol-wrap` font-size from `1.6rem` to `1.2rem`. This prevents the symbol from visually competing with the brand name on tiny screens while staying readable.

**Why 400px**: The iPhone SE (320px) and iPhone 12 Mini (360px) are the smallest common devices. 400px covers all "small" screens without affecting standard phones (375px+).

**Alternative considered**: No responsive sizing — keep `1.6rem` everywhere. Rejected because on 320px screens the combined width (~225px) is tight and the symbol feels disproportionately large next to the brand name.

### 3. No animation changes needed

The CSS animations (`codeSlideFromLeft`, `codeDropSpin`, `codeSlideFromRight`, `codeBlinkSlow`) use relative units and work on all viewports. The reduced-motion rules (`animation: none; opacity: 1`) already apply universally. No CSS changes required for animation behavior.

## Risks / Trade-offs

- **[Visual density on tiny screens]** Adding `</>` to a 320px header adds ~40px of decorative content. → Mitigation: Responsive font size reduces to `1.2rem` below 400px. The symbol is `pointer-events: none` and `aria-hidden`, so it doesn't affect usability.
- **[Animation performance on mobile]** Three simultaneous CSS animations on mobile. → Mitigation: These are lightweight `translate` + `opacity` transforms that GPU-accelerate well. The matrix rain (20 columns) already runs on mobile with no issues.
