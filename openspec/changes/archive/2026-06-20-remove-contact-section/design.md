## Context

The ContactMe component provides an email contact form powered by EmailJS. The user no longer wants to receive contact emails through the site. The component is rendered in Home.jsx with navigation links pointing to `#contactme` from Header, Hero, and NewProject.

## Goals / Non-Goals

**Goals:**
- Remove ContactMe from the rendered page
- Remove EmailJS and react-toastify dependencies
- Clean up navigation links that point to the removed section

**Non-Goals:**
- Deleting ContactMe component files (keep for reference)
- Removing i18n translation keys (unused but harmless)

## Decisions

1. **Keep ContactMe files on disk** - Component source stays available if needed later, just not imported or rendered.

2. **Remove react-toastify** - Only used by ContactMe; no other components use toast notifications.

3. **Update tests** - Hero.test.jsx and NewProject.test.jsx assert `href="#contactme"` which will no longer exist. Tests must be updated to match new link targets.

## Risks / Trade-offs

- **Risk**: Breaking Hero/NewProject tests → **Mitigation**: Update test assertions during implementation
