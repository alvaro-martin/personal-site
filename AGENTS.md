# AGENTS.md

## Stack
- Create React App (react-scripts 5.0.1) — NOT Vite
- React 18.1.0, styled-components 5.3.5
- i18next (Spanish default) with `useTranslation("global")` in every organism
- Absolute imports from `src/` via jsconfig.json `baseUrl: "src"`

## Commands
- `npm start` — dev server (CRA)
- `npm run build` — production build
- `npm test` — runs jest (no tests exist yet)
- `npm run eject` — CRA eject (avoid)

## Component Architecture (Atomic Design)
```
src/components/
├── 01.atoms/       → H5
├── 02.molecules/   → Toggle
├── 03.organisms/   → 12 components (Header, Hero, About, Skills, Services,
│                     NewProject, Portfolio, Research, Awards, ContactMe,
│                     Journey, Footer)
├── 04.layout/      → Layout (wraps Header + Footer)
└── 05.pages/       → Home (composes all organisms)
```

## Key Conventions
- Named exports everywhere: `export { ComponentName }`
- Each component = `ComponentName.js` + `ComponentName.styles.js` (styled-components)
- Barrel exports via `index.js` at each atomic design level
- All 158 styled components access theme via `${p => p.theme.propertyName}`
- Theme: `src/styles/themes/light.js` and `dark.js` (properties: `background1`–`6`, `fontColor1`–`5`, `id`)
- All user-facing text via i18n keys in `src/translations/{es,en}/global.json`

## Gotchas
- No `.gitignore` — must create one before any work
- No tests, no CI, no GitHub Actions — everything is greenfield
- `react-helmet` is deprecated — replace with `react-helmet-async` on upgrade
- `emailjs-com` v3 is deprecated — replace with `@emailjs/browser` v4
- EmailJS creds via `process.env.REACT_APP_*` — must convert to `import.meta.env.VITE_*` on Vite migration
- CRA-specific: `public/index.html` uses `%PUBLIC_URL%` template vars

## Migration In Progress
- PLAN.md exists with full React 18→19 + CRA→Vite + styled-components→Tailwind migration plan
- Feature branch: `feature/react-19-migration` (not yet created)
- Plan has 9 phases: 1-2 (git/security), 3a (CRA→Vite), 3b (React 18→19), 4 (Tailwind install), 5 (component migration), 6 (content decoupling), 7 (testing), 8 (CI/CD), 9 (deploy + SPA routing)
