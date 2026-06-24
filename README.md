<p align="center">
  <img src="src/assets/me2.webp" alt="Alvaro Martin" width="150" style="border-radius: 50%;" />
</p>

<h1 align="center">👋 Hi, I'm Alvaro Martín</h1>

<p align="center">
  <strong>🚀 Personal portfolio rebuilt with AI-assisted development</strong>
</p>

<p align="center">
  <a href="https://alvaro-martin.github.io/personal-site/">🌐 Live Site</a> ·
  <a href="https://github.com/alvaro-martin">💻 GitHub</a> ·
  <a href="https://linkedin.com/in/almartinuni">🔗 LinkedIn</a>
</p>

---

## 📖 The Story

> I built my first personal site in **2022** with Create React App and styled-components. It worked, but the codebase was aging — styled-components everywhere, zero tests, no CI/CD, and a stack that felt stuck in 2021.
>
> With AI-assisted development tools, instead of spending weeks manually migrating 158 styled components, while learning best practices along the way.
>
> This site is the result: a modern React 19 + Tailwind CSS v4 portfolio, built through **human intent and AI execution**. 🤖✨

---

## 🔄 The Transformation

```
┌──────────────────────┬──────────────────────────────────────────┐
│      ⏪ BEFORE       │              ⏩ AFTER                     │
├──────────────────────┼──────────────────────────────────────────┤
│  ⚛️  React 18        │  ⚛️  React 19                            │
│  🔥 Create React App │  ⚡ Vite 6                               │
│  💅 styled-components│  🎨 Tailwind CSS v4                      │
│  📦 158 styled comps │  🧩 Utility-first classes                │
│  ❌ Zero tests       │  ✅ 95 tests (Vitest)                    │
│  🚫 No CI/CD         │  🔄 GitHub Actions (3 workflows)         │
│  📝 No specs         │  📋 18 capability specs (OpenSpec)       │
│  🌐 i18n (partial)   │  🌍 i18n (full) + content.json           │
│  🖼️  PNG/JPG images  │  📸 WebP optimized                       │
└──────────────────────┴──────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Category | Technology | 
|----------|------------|
| 🎨 **Frontend** | React 19, Vite 6, Tailwind CSS v4 |
| 🧪 **Testing** | Vitest, React Testing Library |
| 🔄 **CI/CD** | GitHub Actions (CI, Deploy, Security) |
| 🌐 **Deployment** | GitHub Pages |
| 🌍 **i18n** | i18next (Spanish/English) — already in original site |
| 🏗️ **Architecture** | Atomic Design |

---

## 🤖 AI Tooling

### 🧰 The Stack

| Tool | Role |
|------|------|
| 🧠 **OpenCode** | AI coding assistant — reads specs, executes tasks, follows patterns |
| 📋 **OpenSpec** | Spec-driven development — proposals, designs, specs, tasks |
| 🔌 **MCP Servers** | External integrations — Chrome DevTools, TestSprite, context7 |
| 🎯 **Custom Skills** | 16 specialized instruction sets |

### ⚙️ The Workflow

```
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│   🧑 HUMAN       │     │   🤖 OPENCODE    │     │   ✅ RESULT      │
│   (Intent)       │────▶│   (Execution)    │────▶│   (Code)         │
│                  │     │                  │     │                  │
│ • "Add a         │     │ • Loads relevant │     │ • Working code   │
│   Hobbies section│     │   skills         │     │ • Tests written  │
│   with masonry   │     │ • Reads specs    │     │ • Specs synced   │
│   grid"          │     │ • Implements     │     │ • Commit ready   │
│                  │     │ • Writes tests   │     │                  │
└──────────────────┘     └──────────────────┘     └──────────────────┘
                                │
                                ▼
                          ┌──────────────────┐
                          │   🎯 SKILLS      │
                          │   (Patterns)     │
                          └──────────────────┘
```

### 🎯 Custom Skills

**🧠 Agent Skills** — loaded based on task context:

| Skill | Purpose |
|-------|---------|
| `git-commit` | 💾 Conventional commits with intelligent staging |
| `vitest` | 🧪 Test writing and mocking patterns |
| `tailwind-css-patterns` | 🎨 Utility-first styling |
| `react-best-practices` | ⚛️  Performance optimization |
| `vite` | ⚡ Build tool configuration |
| `seo` | 🔍 Search engine optimization |
| `accessibility` | ♿ WCAG compliance |
| `frontend-design` | 🎨 Visual design guidance |
| `composition-patterns` | 🧩 React component architecture |
| `nodejs-best-practices` | 🟢 Backend patterns |
| `nodejs-backend-patterns` | 🔌 API design patterns |

**📋 OpenSpec Skills** — spec-driven workflow:

| Skill | Purpose |
|-------|---------|
| `openspec-propose` | 💡 Generate change proposals |
| `openspec-apply` | ⚙️ Execute tasks from specs |
| `openspec-explore` | 🔍 Think through problems |
| `openspec-archive` | 📦 Finalize and archive changes |
| `openspec-sync` | 🔄 Sync specs to main |

### 🔌 MCP Servers

| Server | Status | Purpose |
|--------|--------|---------|
| 🖥️ **Chrome DevTools** | ✅ Active | Browser automation, performance profiling, Lighthouse audits |
| 🧪 **TestSprite** | 📅 Planned | Automated visual and functional testing |
| 📚 **context7** | 📅 Planned | Context-aware code generation from documentation |

---

## 🏗️ Architecture

```
src/components/
├── 🔬 01.atoms/       → H5
├── 🧬 02.molecules/   → CardGrid, ScrollToTop, Toggle
├── 🌿 03.organisms/   → Header, Hero, About, Skills, Services,
│                        Portfolio, Research, Awards, Hobbies,
│                        Journey, Languages, Footer
├── 📐 04.layout/      → Layout (wraps Header + Footer)
└── 📄 05.pages/       → Home (composes all organisms)
```

### 🔑 Key Patterns

- 🏗️ **Atomic Design** — Components organized by complexity (atoms → molecules → organisms → pages)
- 📋 **Spec-driven Development** — Every feature has a proposal, design, spec, and task list
- 📤 **Named Exports** — All components use `export { ComponentName }`
- 🎨 **Tailwind CSS** — Utility classes exclusively, no styled-components
- 🌍 **i18n** — All user-facing text via translation keys
- 🌙 **Dark Mode** — Toggled via `data-theme` attribute on `<html>`

---

## 🔧 How This Was Built

### 📋 The Spec-Driven Workflow

Every feature follows the same pattern:

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ 🔍 EXPLORE  │───▶│ 💡 PROPOSE  │───▶│ ⚙️ APPLY    │───▶│ 📦 ARCHIVE  │
│             │    │             │    │             │    │             │
│ "What do    │    │ Generate    │    │ Execute     │    │ Finalize    │
│  you want?" │    │ proposal +  │    │ tasks one   │    │ and sync    │
│             │    │ specs       │    │ by one      │    │ specs       │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

### 🧑 vs 🤖 Human vs AI

| 🧑 Human Defined | 🤖 AI Executed |
|------------------|----------------|
| 📝 Feature requirements | 💻 Component implementation |
| 🎨 Design decisions | 🧪 Test writing (95 tests) |
| 🏗️ Architecture choices | 📋 Spec documentation (18 specs) |
| ✅ Quality gates | 💾 Git commits (64 commits) |
| 🎯 UX decisions | 🔄 CI/CD workflows |


---

## 🚀 Getting Started

### 📋 Prerequisites

- 📦 Node.js 24+
- 📦 npm

### 💻 Install

```bash
git clone https://github.com/alvaro-martin/personal-site.git
cd personal-site
npm install
```

### ⚡ Development

```bash
npm run dev        # 🚀 Start dev server (port 3000)
npm run build      # 📦 Production build
npm test           # 🧪 Run tests
```

### 🌐 Deployment

Push to `main` — GitHub Actions auto-deploys to GitHub Pages. 🔄

**Note:** Base path is `/personal-site/`.

---

## 🔗 Links

| Platform | URL |
|----------|-----|
| 🌐 **Live Site** | [alvaro-martin.github.io/personal-site](https://alvaro-martin.github.io/personal-site/) |
| 💻 **GitHub** | [github.com/alvaro-martin](https://github.com/alvaro-martin) |
| 🔗 **LinkedIn** | [linkedin.com/in/almartinuni](https://linkedin.com/in/almartinuni) |

---

## 📄 License

MIT License · Copyright (c) 2026 Alvaro Martín 🎉
