## Why

The personal site no longer accepts contact emails. The ContactMe section with its email form, location info, and EmailJS integration is unused functionality that adds unnecessary code and dependencies.

## What Changes

- Remove `<ContactMe />` from the Home page composition
- Remove "Contact me" navigation link from Header
- Remove `#contactme` anchor link from Hero and NewProject CTAs
- Remove `@emailjs/browser` dependency (no longer needed)
- Remove `react-toastify` dependency (only used by ContactMe)
- Keep ContactMe component files intact (not imported, but available for reference)

## Capabilities

### New Capabilities

None

### Modified Capabilities

None (this is a removal, not a requirement change)

## Impact

- **Code**: Home.jsx, Header.jsx, Hero.jsx, NewProject.jsx (remove imports/links)
- **Tests**: Hero.test.jsx, NewProject.test.jsx (update href assertions)
- **Dependencies**: Remove `@emailjs/browser`, `react-toastify` from package.json
- **Translations**: contactme keys remain in i18n files (unused but harmless)
