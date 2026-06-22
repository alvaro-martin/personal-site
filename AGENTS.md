# AGENTS.md

## Stack
- Vite 6.4.3 + React 19.2.7, Tailwind CSS v4 (CSS-first config)
- i18next (Spanish default) with `useTranslation("global")` in every organism
- Absolute imports from `src/` via `vite.config.js` aliases + `jsconfig.json` `baseUrl: "src"`

## Commands
- `npm run dev` — Vite dev server (port 3000)
- `npm run build` — production build to `dist/`
- `npm test` — vitest run (single pass)
- `npm run test:watch` — vitest watch mode
- `npm run test:coverage` — coverage report (v8)
- CI runs: `npm audit && npm run build && npm test` (Node 24)

## Component Architecture (Atomic Design)
```
src/components/
├── 01.atoms/       → H5
├── 02.molecules/   → CardGrid, Carousel, ScrollToTop, Toggle
├── 03.organisms/   → 12 components (Header, Hero, About, Skills, Services,
│                     NewProject, Portfolio, Research, Awards, ContactMe,
│                     Journey, Languages, Footer)
├── 04.layout/      → Layout (wraps Header + Footer)
└── 05.pages/       → Home (composes all organisms)
```

## Key Conventions
- Named exports everywhere: `export { ComponentName }`
- Each component = `ComponentName.jsx` + barrel `index.js`
- Styling via Tailwind utility classes exclusively — no styled-components in use
- All CSS tokens/animations in `src/index.css` (Tailwind `@theme`, `@layer components`, `@keyframes`)
- Dark mode via `data-theme="dark"` on `<html>`, toggled by `src/styles/ThemeContext.jsx`
- Structured content in `src/data/content.json` — components never hardcode text
- All user-facing text via i18n keys in `src/translations/{es,en}/global.json`

## Testing
- Vitest 4.1.8 + jsdom + @testing-library/react 16
- Test utilities: `src/test/test-utils.jsx` (`renderWithProviders` wraps i18n + ThemeProvider + HelmetProvider)
- Test setup: `src/test/setup.js` (jest-dom matchers, localStorage/matchMedia mocks)
- Run a single test: `npm test -- --testNamePattern="pattern"` or `npx vitest run path/to/file.test.jsx`
- 16 test files exist across all atomic design levels

## Deployment
- GitHub Pages via `.github/workflows/deploy.yml` (push to `main` triggers build + deploy)
- Base path: `/personal-site/` — all internal links must account for this
- `public/404.html` handles SPA routing on GitHub Pages

## Workflow
- This repo uses **OpenSpec** for spec-driven development
- Specs live in `openspec/` (active specs + archived changes)
- OpenSpec skills are in `.opencode/skills/` (opsx-apply, opsx-archive, opsx-explore, opsx-propose, opsx-sync)

## Agent Rules
- **Do not commit** unless explicitly asked by the user
- **Do not execute** `/opsx` commands or OpenSpec skills unless explicitly asked by the user

## Gotchas
- `styled-components@6.4.2` and `react-helmet@^6.1.0` are dead dependencies in `package.json` — unused, safe to remove
- `ContactMe` component exists but is not rendered in `Home.jsx` (removed, orphaned)
- No ESLint or Prettier configured — no lint/format commands available
- `useMediaQuery` hook is inlined in `Header.jsx`, not shared
- EmailJS env vars use `import.meta.env.VITE_*` (Vite convention, not `process.env`)
