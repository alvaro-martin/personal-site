# Migration Plan — Personal Website

## 2.1 Current State Summary

### React Version
- **React 18.1.0** / **ReactDOM 18.1.0** (`^18.1.0`)

### Build Tool
- **Create React App (react-scripts 5.0.1)** — NOT Vite, NOT raw Webpack
- No `vite.config.js` or `webpack.config.js` — CRA abstracts all config
- jsconfig.json sets `baseUrl: "src"` enabling absolute imports (`import { Layout } from "components/04.layout"`)

### Dependencies (Exact Versions)

| Package | Version | Notes |
|---|---|---|
| react | ^18.1.0 | |
| react-dom | ^18.1.0 | |
| react-scripts | 5.0.1 | CRA — pinned exact |
| styled-components | ^5.3.5 | Primary styling solution |
| i18next | ^21.7.1 | i18n core |
| react-i18next | ^11.16.8 | React bindings for i18next |
| react-icons | ^4.3.1 | Icon library |
| react-helmet | ^6.1.0 | Document head management |
| react-toastify | ^9.0.1 | Toast notifications |
| react-scroll-to-top | ^1.0.8 | Scroll-to-top button — **REMOVE** |
| emailjs-com | ^3.2.0 | Contact form email service |
| webfontloader | ^1.6.28 | Google Fonts loader — **REMOVE** |
| web-vitals | ^2.1.4 | Performance metrics |
| @testing-library/jest-dom | ^5.16.4 | Test utilities (unused) |
| @testing-library/react | ^13.2.0 | Test utilities (unused) |
| @testing-library/user-event | ^13.5.0 | Test utilities (unused) |

### styled-components Usage (File by File)

Every `.styles.js` file imports `styled` from `styled-components`:

| File | Styled Components | Special Patterns |
|---|---|---|
| `src/styles/globalStyles.js` | `createGlobalStyle` | Theme prop access (`p.theme.*`) |
| `src/components/01.atoms/H5/H5.styles.js` | `H5Heading` | — |
| `src/components/02.molecules/Toggle/Toggle.styles.js` | `IconToogleWrapper`, `ToggleWrapper`, `Notch` | Conditional transform via `isActive` prop |
| `src/components/04.layout/Layout/Layout.styles.js` | `LayoutWrapper` | — |
| `src/components/05.pages/Home/Home.styles.js` | `HomeWrapper` | — |
| `src/components/03.organisms/Header/Header.styles.js` | 7 components | `css` helper, conditional responsive via `isOpen` prop |
| `src/components/03.organisms/Hero/Hero.styles.js` | 9 components | `keyframes` animation (`clipImage`) |
| `src/components/03.organisms/About/About.styles.js` | 12 components | Nested `img` selector |
| `src/components/03.organisms/Footer/Footer.styles.js` | 10 components | — |
| `src/components/03.organisms/Skills/Skills.styles.js` | 17 components | Dynamic `percent` prop in `linear-gradient` |
| `src/components/03.organisms/Services/Services.styles.js` | 14 components | Fixed-position popup, `PopupBackground` overlay |
| `src/components/03.organisms/Portfolio/Portfolio.styles.js` | 11 components | Nested `img` selector |
| `src/components/03.organisms/ContactMe/ContactMe.styles.js` | 13 components | — |
| `src/components/03.organisms/NewProject/NewProject.styles.js` | 6 components | — |
| `src/components/03.organisms/Research/Research.styles.js` | 11 components | Duplicated from Portfolio |
| `src/components/03.organisms/Awards/Awards.styles.js` | 11 components | Duplicated from Portfolio |
| `src/components/03.organisms/Journey/Journey.styles.js` | 11 components | Dynamic grid positioning via `gcs`/`gce`/`grs`/`gre` props |

**Total: 158 styled components** across 16 `.styles.js` files + 1 global styles file.

### Theme System

Two theme objects (`src/styles/themes/light.js`, `src/styles/themes/dark.js`) with properties:
- `id`, `background1`–`background6`, `fontColor1`–`fontColor5`
- Injected via `<ThemeProvider theme={{...theme, setTheme: ...}}>` from styled-components
- All components access theme via `${p => p.theme.propertyName}`

### i18n Setup
- i18next initialized in `src/index.js` with `lng: "es"` (Spanish default)
- Two translation files: `src/translations/es/global.json`, `src/translations/en/global.json`
- `useTranslation("global")` hook used in every organism component

### Component Architecture (Atomic Design)
```
src/components/
├── 01.atoms/          → H5
├── 02.molecules/      → Toggle
├── 03.organisms/      → About, Awards, ContactMe, Footer, Header, Hero,
│                        Journey, NewProject, Portfolio, Research,
│                        Services, Skills
├── 04.layout/         → Layout
└── 05.pages/          → Home
```

### Existing CI/CD
- **None.** No `.github/` directory exists.

### Existing Test Coverage
- **Zero tests.** No `.test.*` or `.spec.*` files found. Testing libraries are installed but unused.

### Security Concerns
- **react-scripts 5.0.1**: Uses deprecated `webpack-dev-server` v4 with known vulnerabilities (CVE-2024-29180 etc.)
- **emailjs-com ^3.2.0**: v3 is deprecated; v4 is current
- **No lockfile commit enforcement**: `package-lock.json` exists but no `.npmrc` enforcing `npm ci`
- **No .gitignore**: Repository is missing a `.gitignore` file
- **Environment variables**: EmailJS credentials referenced via `process.env.REACT_APP_*` — need migration to Vite's `import.meta.env`
- **All deps use `^` (caret)**: Not pinned to exact versions — supply chain risk

---

## 2.2 Target State

| Layer | Current | Target |
|---|---|---|
| **React** | 18.1.0 | 19 (latest stable) |
| **Build Tool** | CRA (react-scripts 5.0.1) | Vite 6+ |
| **Styling** | styled-components 5.3.5 | Tailwind CSS v4 (CSS-first, Vite plugin) |
| **Testing** | None (installed but unused) | Vitest + React Testing Library |
| **CI/CD** | None | GitHub Actions: ci.yml, deploy.yml, security.yml |
| **Deployment** | None configured | GitHub Pages |
| **Branch Strategy** | main + develop | main / develop / feature/* |
| **Package Security** | Caret versions, no .npmrc | Exact versions via .npmrc, npm ci in CI |

---

## 2.3 Migration Phases

### Phase 1: Branch and Git Setup

**What changes:**
- Create `.gitignore` (currently missing)
- Create feature branch from `develop`

**Commands:**
```bash
git checkout develop
git checkout -b feature/react-19-migration
```

**Create `.gitignore`:**
```
node_modules/
build/
dist/
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.DS_Store
*.pem
```

**Verify:** `git status` shows `.gitignore` tracked, feature branch checked out.

---

### Phase 2: npm Security Audit and .npmrc Hardening

**What changes:**
- Add `.npmrc` to project root
- Run `npm audit` to baseline known issues
- Update `package-lock.json`

**`.npmrc` content:**
```
save-exact=true
package-lock=true
audit=true
```

**Commands:**
```bash
npm audit --audit-level=moderate
```

**Verify:** Document all audit findings. Note which are resolved by later upgrades vs. remaining.

---

### Phase 3a: CRA → Vite (Stay on React 18)

This phase only migrates the build tool. React version is NOT changed yet.

**What changes:**
- Remove `react-scripts`
- Install `vite`, `@vitejs/plugin-react`
- Create `vite.config.js` with absolute import aliases
- Move `public/index.html` → `index.html` at project root (Vite convention)
- Convert `process.env.REACT_APP_*` → `import.meta.env.VITE_*`
- Update `package.json` scripts
- Remove `webfontloader` (unmaintained, incompatible with Vite)
- Remove `react-scroll-to-top` (replace later in Phase 5 with native implementation)

**Vite absolute import aliases:**

The codebase uses four absolute import root patterns scanned from all source files:

| Alias | Resolves To | Import Pattern |
|---|---|---|
| `src` | `/src` | `from 'src/...'` (root anchor) |
| `components` | `/src/components` | `from 'components/03.organisms/Header/Header'` |
| `styles` | `/src/styles` | `from 'styles/globalStyles'` |
| `translations` | `/src/translations` | `from 'translations/es/global.json'` |
| `assets` | `/src/assets` | `from 'assets/me2.png'` |

**`vite.config.js`:**
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
      translations: path.resolve(__dirname, 'src/translations'),
      assets: path.resolve(__dirname, 'src/assets'),
    }
  },
  server: {
    port: 3000
  }
})
```

**Files modified:**
- `package.json` — deps, scripts (remove `react-scripts` scripts, add Vite scripts)
- `index.html` — moved to project root, remove `%PUBLIC_URL%`, add `<script type="module" src="/src/index.js">`
- `vite.config.js` — new file
- All files using `process.env.REACT_APP_*` → `import.meta.env.VITE_*`
- Remove `webfontloader` import from `src/index.js` (replaced with `@fontsource` in Phase 3b)
- Remove `react-scroll-to-top` import from `Home.js` (replaced with native component in Phase 5)

**Updated `package.json` scripts:**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

**EmailJS environment variable migration (`src/components/03.organisms/ContactMe/ContactMe.js`):**
```js
// Before (CRA):
process.env.REACT_APP_EMAILJS_SERVICE_ID
process.env.REACT_APP_EMAILJS_TEMPLATE_ID
process.env.REACT_APP_EMAILJS_KEY

// After (Vite):
import.meta.env.VITE_EMAILJS_SERVICE_ID
import.meta.env.VITE_EMAILJS_TEMPLATE_ID
import.meta.env.VITE_EMAILJS_KEY
```

**Verify:**
- `npm run dev` starts the dev server on port 3000
- `npm run build` produces output in `dist/`
- All absolute imports resolve correctly (no "cannot find module" errors)
- React 18 is still running (check `react` version in `package.json`)

---

### Phase 3b: React 18 → React 19 (Only After 3a Verified)

This phase only upgrades React. Build tool is already Vite.

**What changes:**
- Upgrade `react` and `react-dom` to v19
- Upgrade `styled-components` to v6 (required: v5 uses legacy context removed in React 19)
- Replace `react-helmet` with `react-helmet-async`
- Replace `emailjs-com` with `@emailjs/browser` v4
- Upgrade `i18next`, `react-i18next`, `react-icons`, `react-toastify`, `web-vitals`
- Install `@fontsource/radio-canada` to replace `webfontloader`
- Remove `react-scroll-to-top` (already removed in 3a)
- Rename `src/index.js` → `src/index.jsx` if needed for JSX in vite

**Revised dependency target versions:**

| Package | Current | Target | Notes |
|---|---|---|---|
| react | ^18.1.0 | ^19.0.0 | |
| react-dom | ^18.1.0 | ^19.0.0 | |
| styled-components | ^5.3.5 | ^6.1.0 | Required: v5 breaks on React 19 |
| react-helmet | ^6.1.0 | REMOVE | Replace with `react-helmet-async` |
| react-helmet-async | — | ^2.0.0 | New dependency |
| react-i18next | ^11.16.8 | ^15.0.0 | |
| i18next | ^21.7.1 | ^24.0.0 | |
| emailjs-com | ^3.2.0 | REMOVE | Replace with `@emailjs/browser` |
| @emailjs/browser | — | ^4.0.0 | New dependency |
| react-toastify | ^9.0.1 | ^11.0.0 | |
| react-icons | ^4.3.1 | ^5.0.0 | |
| react-scroll-to-top | ^1.0.8 | REMOVE | Replaced by native component |
| webfontloader | ^1.6.28 | REMOVE | Replaced by `@fontsource` |
| @fontsource/radio-canada | — | latest | New dependency (replaces webfontloader) |
| web-vitals | ^2.1.4 | ^4.0.0 | |
| @testing-library/jest-dom | ^5.16.4 | ^6.0.0 | |
| @testing-library/react | ^13.2.0 | ^16.0.0 | |
| @testing-library/user-event | ^13.5.0 | ^14.0.0 | |

**`react-helmet` → `react-helmet-async` migration (`src/index.js`):**
```jsx
// Before:
import { Helmet } from 'react-helmet';
// ...
<Helmet>
  <link rel='shortcut icon' href={favicon} type='image/x-icon' />
  <title>Alvaro Martín</title>
</Helmet>

// After:
import { HelmetProvider, Helmet } from 'react-helmet-async';
// ...
<HelmetProvider>
  <Helmet>
    <link rel='shortcut icon' href={favicon} type='image/x-icon' />
    <title>Alvaro Martín</title>
  </Helmet>
</HelmetProvider>
```

**`webfontloader` → `@fontsource` migration (`src/index.js`):**
```js
// Before:
import WebFont from 'webfontloader';
WebFont.load({
  google: { families: ['Radio Canada:400,500,700', 'sans-serif'] }
});

// After:
import '@fontsource/radio-canada/400.css';
import '@fontsource/radio-canada/500.css';
import '@fontsource/radio-canada/700.css';
```

**`emailjs-com` → `@emailjs/browser` migration (`src/components/03.organisms/ContactMe/ContactMe.js`):**
```js
// Before:
import {send} from 'emailjs-com';
send(serviceId, templateId, toSend, userId)

// After:
import emailjs from '@emailjs/browser';
emailjs.send(serviceId, templateId, toSend, { publicKey: userId })
```

**Commands:**
```bash
npm install react@19 react-dom@19
npm install styled-components@6
npm install react-helmet-async
npm install @emailjs/browser@4
npm install @fontsource/radio-canada
npm install react-i18next@15 i18next@24
npm install react-icons@5 react-toastify@11 web-vitals@4
npm install -D @testing-library/jest-dom@6 @testing-library/react@16 @testing-library/user-event@14
npm uninstall react-helmet emailjs-com webfontloader react-scroll-to-top
```

**Verify:**
- `npm run dev` starts without errors
- `npm run build` succeeds
- React 19 is installed (check `npm ls react`)
- No console errors about deprecated APIs

---

### Phase 4: Tailwind CSS v4 Installation and styled-components Removal

**What changes:**
- Install `tailwindcss` and `@tailwindcss/vite` (v4 uses Vite plugin, no config file)
- Add Tailwind `@import` to CSS entry point
- Remove `styled-components` from all `.styles.js` files
- Convert theme tokens to CSS custom properties

**Tailwind v4 setup (CSS-first, no tailwind.config.js):**
```js
// vite.config.js — add tailwindcss plugin
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
      translations: path.resolve(__dirname, 'src/translations'),
      assets: path.resolve(__dirname, 'src/assets'),
    }
  },
  server: { port: 3000 }
})
```

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --color-primary: #6865C3;
  --color-accent: #FE9F4B;
  --color-bg-light: white;
  --color-bg-dark: #1A1525;
  --color-text-light: black;
  --color-text-dark: white;
  --color-text-muted: gray;
}
```

**Theme system migration strategy:**
- Convert `light.js` and `dark.js` theme objects to CSS custom properties
- Use Tailwind's `dark:` variant or a custom `data-theme` attribute for dark mode
- `GlobalStyle` (`createGlobalStyle`) → standard CSS in `src/index.css` + Tailwind `@layer base`

**Verify:** All pages render correctly with Tailwind classes replacing styled-components.

---

### Phase 5: Component-by-Component Tailwind Migration

Migrate each component file by file. Order: atoms → molecules → layout → organisms → pages.

**Migration pattern per component:**
1. Read `.styles.js` file
2. Replace styled-component imports with Tailwind class string (`className`)
3. Delete `.styles.js` file
4. Update `.js` file to use `className` instead of styled component imports

**Files to migrate (in order):**

1. `src/components/01.atoms/H5/H5.js` + `H5.styles.js`
2. `src/components/02.molecules/Toggle/Toggle.js` + `Toggle.styles.js`
3. `src/components/04.layout/Layout/Layout.js` + `Layout.styles.js`
4. `src/components/03.organisms/Header/Header.js` + `Header.styles.js`
5. `src/components/03.organisms/Hero/Hero.js` + `Hero.styles.js`
6. `src/components/03.organisms/About/About.js` + `About.styles.js`
7. `src/components/03.organisms/Skills/Skills.js` + `Skills.styles.js`
8. `src/components/03.organisms/Services/Services.js` + `Services.styles.js`
9. `src/components/03.organisms/NewProject/NewProject.js` + `NewProject.styles.js`
10. `src/components/03.organisms/Portfolio/Portfolio.js` + `Portfolio.styles.js`
11. `src/components/03.organisms/Research/Research.js` + `Research.styles.js`
12. `src/components/03.organisms/Awards/Awards.js` + `Awards.styles.js`
13. `src/components/03.organisms/ContactMe/ContactMe.js` + `ContactMe.styles.js`
14. `src/components/03.organisms/Journey/Journey.js` + `Journey.styles.js`
15. `src/components/03.organisms/Footer/Footer.js` + `Footer.styles.js`
16. `src/components/05.pages/Home/Home.js` + `Home.styles.js` — also replace `react-scroll-to-top` with native ScrollToTop component here
17. `src/styles/globalStyles.js` → delete
18. `src/styles/themes/light.js` → convert to CSS vars
19. `src/styles/themes/dark.js` → convert to CSS vars
20. `src/styles/variables.js` → convert to CSS vars or Tailwind theme

**Replace `react-scroll-to-top` with native component:**

Create `src/components/02.molecules/ScrollToTop/ScrollToTop.js`:
```jsx
import { useState, useEffect } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-primary p-3 text-white shadow-lg
                 hover:bg-primary/80 transition-colors cursor-pointer"
      aria-label="Scroll to top"
    >
      <BsArrowUpShort size={24} />
    </button>
  );
};

export { ScrollToTop };
```

**Patterns requiring custom attention:**
- **Dynamic `percent` prop** in `Skills.styles.js` `ProgressBar`: Use inline `style={{ width: percent }}`
- **Dynamic `isActive` prop** in `Toggle.styles.js`: Use conditional Tailwind classes
- **Dynamic `isOpen` prop** in `Header.styles.js`: Conditional responsive classes
- **`keyframes` clipImage animation** in `Hero.styles.js`: Define in `@theme` or `@keyframes` in CSS
- **CSS Grid with dynamic `gcs`/`gce`/`grs`/`gre` props** in `Journey.styles.js`: Use inline `style` for grid positions
- **Fixed-position popup** in `Services.styles.js`: Use Tailwind `fixed`, `z-*`, `inset-*` classes
- **Nested `img` selectors** in About/Portfolio/Research/Awards: Use Tailwind `[:&_img]` or wrap img

**Verify:** Each component renders identically after migration. Visual regression test each section.

---

### Phase 6: Content Decoupling via data.json

**What changes:**
- Create `src/data/content.json` containing all user-facing text (currently hardcoded in components or read from i18n)
- Components import from `content.json` instead of containing inline text
- i18n keys remain for translated content; `content.json` holds structural/text data like project lists, skill percentages, experience entries

**Why this matters:**
- Any content update (new project, changed description, updated skill level) requires editing only one JSON file
- No component code changes needed for content updates
- Easier for non-developers to maintain site content

**File to create:**
- `src/data/content.json` — structured with sections matching the i18n keys

**Components to update:**
- All 12 organisms that render content from i18n or hardcoded values

**Verify:** Site renders identically. Edit `content.json` and confirm changes appear.

---

### Phase 7: Test Setup and Test Writing

**What changes:**
- Install `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`
- Create `vitest.config.js` or configure in `vite.config.js`
- Create `src/test/setup.js`
- Write tests for each component

**Commands:**
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

**Test files to create:**
- `src/components/01.atoms/H5/H5.test.jsx`
- `src/components/02.molecules/Toggle/Toggle.test.jsx`
- `src/components/03.organisms/Header/Header.test.jsx`
- `src/components/03.organisms/Hero/Hero.test.jsx`
- `src/components/03.organisms/About/About.test.jsx`
- `src/components/03.organisms/Skills/Skills.test.jsx`
- `src/components/03.organisms/Services/Services.test.jsx`
- `src/components/03.organisms/ContactMe/ContactMe.test.jsx`
- `src/components/03.organisms/Footer/Footer.test.jsx`
- `src/components/03.organisms/Journey/Journey.test.jsx`
- `src/components/05.pages/Home/Home.test.jsx`

**Test focus:**
- Component renders without crashing
- i18n translations load correctly
- Dark/light toggle works
- Mobile hamburger menu toggle works
- Portfolio/Research/Awards carousel navigation works
- Contact form validation works
- Services popup open/close works

**Add to `package.json`:**
```json
"scripts": {
  "test": "vitest run",
  "test:watch": "vitest",
  "test:coverage": "vitest run --coverage"
}
```

**Verify:** `npm test` passes with 0 failures.

---

### Phase 8: GitHub Actions Workflow Creation

**What changes:**
- Create `.github/workflows/ci.yml`
- Create `.github/workflows/deploy.yml`
- Create `.github/workflows/security.yml`

**ci.yml:**
```yaml
name: CI
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm audit --audit-level=high
      - run: npm run build
      - run: npm test
```

**deploy.yml:**
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
        id: deployment
```

**security.yml:**
```yaml
name: Security Audit
on:
  schedule:
    - cron: '0 6 * * 1'  # Weekly Monday 6am
  workflow_dispatch:
jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm audit --audit-level=high
```

**Verify:** Push to `develop`, confirm CI passes in GitHub Actions.

---

### Phase 9: SPA Routing and Final Deployment

**What changes:**
- Configure `base` in `vite.config.js` for GitHub Pages (`/personal-site/`)
- Handle SPA routing for GitHub Pages (see options below)
- Update `manifest.json` for PWA
- Final full build test
- Merge to `main`

---

#### SPA Routing on GitHub Pages

GitHub Pages does not understand client-side routing. If a user hits a subpath directly or refreshes the page, GitHub Pages returns a 404. Two options:

**Option A: 404.html redirect trick**
Create a `public/404.html` that redirects to `index.html` with the original path as a query string, plus a small script in `index.html` that reconstructs the path on load.

```html
<!-- public/404.html -->
<script>
  // Redirect 404 to index.html with path as query param
  var pathSegmentsToKeep = 0;
  var l = window.location;
  l.replace(
    l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
    l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
    l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
    (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
    l.hash
  );
</script>

<!-- In index.html, add this script before </head> -->
<script>
  (function(l) {
    if (l.search[1] === '/') {
      var decoded = l.search.slice(1).split('&').map(function(s) {
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
        l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

- **Pros:** Clean URLs (`/personal-site/about`), no hash in URL, supports direct navigation and refresh
- **Cons:** Slightly more complex setup, query string reconstruction can edge-case with encoded characters

**Option B: HashRouter**
Switch from BrowserRouter to HashRouter in the React app, making URLs like `username.github.io/#/section`.

```js
// In src/index.js or App.js
import { HashRouter } from 'react-router-dom';
// Wrap <App /> with <HashRouter>
```

- **Pros:** Zero config on GitHub Pages, no 404.html needed, works out of the box
- **Cons:** Ugly URLs with `#` (`/#/about`), no server-side routing, slightly less conventional

**Recommendation: Option A (404.html redirect trick).** This project is a personal portfolio site where clean URLs matter for professionalism and sharing. The 404.html approach is well-tested (used by GitHub's own pages team) and provides a seamless experience. The implementation is a one-time setup with no ongoing maintenance cost.

---

**Commands:**
```bash
npm run build
npm run test
git checkout main
git merge develop
git push origin main
```

**Verify:**
- `npm run build` produces clean output with no warnings
- All tests pass
- Site deploys to GitHub Pages
- Dark/light mode works
- Language toggle works
- Contact form sends emails
- All sections render on mobile and desktop
- Direct URL navigation and page refresh work (SPA routing)
- No console errors in browser

---

## 2.4 Risk Assessment

### Breaking Changes: React 18 → React 19 (Codebase-Specific)

| Risk | Severity | Details |
|---|---|---|
| **styled-components v5 + React 19** | HIGH | React 19 removed legacy context API. styled-components v5 uses legacy context for `ThemeProvider`. Will break at runtime. **Must upgrade to styled-components v6 before or simultaneously with React 19.** |
| **`react-helmet` + React 19** | HIGH | `react-helmet` v6 is unmaintained and uses deprecated React APIs. Replace with `react-helmet-async` or inline `<head>` management. |
| **`createGlobalStyle`** | MEDIUM | In styled-components v6, `createGlobalStyle` still works but behavior may differ. Must verify theme injection still functions. |
| **`useTheme` hook** | LOW | `useTheme()` from styled-components works in v6 but import path changes. No issue expected. |
| **`emailjs-com` v3** | LOW | Deprecated. API likely unchanged but should migrate to `@emailjs/browser` v4. |
| **CRA → Vite environment variables** | MEDIUM | All `process.env.REACT_APP_*` must become `import.meta.env.VITE_*`. Affects `ContactMe.js` (EmailJS credentials). |

### styled-components Patterns with No Direct Tailwind Equivalent

| Pattern | Component | Tailwind Solution |
|---|---|---|
| **`keyframes` clipImage animation** | Hero | Define `@keyframes` in CSS, use `animate-[clipImage]` or custom class |
| **Dynamic `percent` prop in gradient** | Skills `ProgressBar` | Use inline `style={{ width: percent }}` with Tailwind container |
| **Conditional responsive display** (`isOpen` prop) | Header | Use state-driven class switching: `className={isOpen ? 'flex flex-col ...' : 'hidden'}` |
| **Nested CSS selectors** (`img { border-radius }`) | About, Portfolio, Research, Awards | Use `[&>img]:rounded-xl` or wrap in div with Tailwind |
| **CSS Grid with dynamic column/row spans** | Journey | Use inline `style` for grid-column/grid-row, Tailwind for layout |
| **Fixed-position popup with z-index layering** | Services | Tailwind `fixed inset-0 z-50` with backdrop overlay |
| **`createGlobalStyle` with theme** | GlobalStyle | Move to `src/index.css` with CSS custom properties + `@layer base` |

### Dependencies Potentially Incompatible with React 19

| Package | Status | Action |
|---|---|---|
| `styled-components@5` | INCOMPATIBLE | Upgrade to v6 |
| `react-helmet@6` | INCOMPATIBLE | Replace with `react-helmet-async` |
| `react-scroll-to-top@1` | INCOMPATIBLE | **REMOVE** — replace with native component |
| `webfontloader@1` | INCOMPATIBLE | **REMOVE** — replace with `@fontsource/radio-canada` |
| `react-i18next@11` | LIKELY OK | Upgrade to v15 for safety |
| `react-toastify@9` | LIKELY OK | Upgrade to v11 |
| `emailjs-com@3` | DEPRECATED | Replace with `@emailjs/browser@4` |
| `react-icons@4` | LIKELY OK | Upgrade to v5 |

---

## 2.5 AGENTS.md

```markdown
# AGENTS.md — Personal Website

## Stack
- React 19 + Vite 6
- Tailwind CSS v4 (CSS-first, no tailwind.config.js)
- Vitest + React Testing Library
- i18next + react-i18next (Spanish default)
- Deployed to GitHub Pages

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm test` — Run tests (vitest)
- `npm run test:watch` — Run tests in watch mode
- `npm run lint` — Run ESLint (if configured)

## Branch Strategy
- `main` — Production, protected
- `develop` — Integration branch
- `feature/*` — Feature branches from develop
- All PRs target `develop`, merge to `main` for releases

## Code Conventions
- Components use Atomic Design: `01.atoms/`, `02.molecules/`, `03.organisms/`, `04.layout/`, `05.pages/`
- Each component has its own directory with `ComponentName.js` and `ComponentName.test.jsx`
- Named exports: `export { ComponentName }`
- Absolute imports from `src/` via Vite aliases: `components/`, `styles/`, `translations/`, `assets/`
- i18n keys in `src/translations/{es,en}/global.json`
- All user-facing text MUST use `t("key")` — no hardcoded strings

## Do NOT Do
- Do NOT use `npm install` — use `npm ci` for reproducible installs
- Do NOT add comments to code unless explicitly asked
- Do NOT modify `package.json` without understanding full dependency tree
- Do NOT hardcode strings — always use i18n translation keys
- Do NOT use inline styles — use Tailwind classes
- Do NOT create new styled-components — use Tailwind exclusively
- Do NOT commit `.env` files or secrets
- Do NOT use `any` type in TypeScript (if added later)

## Skills
- Load `customize-opencode` skill when editing opencode config files
```
