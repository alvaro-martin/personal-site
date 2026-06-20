## Why

After migrating Awards, Portfolio, and Research from Carousel to CardGrid, 17 tests fail because they still assert Carousel-specific behavior (navigation buttons, single-item display). Additionally, CardGrid depends on `useScrollReveal()` which uses `IntersectionObserver` — an API not available in the jsdom test environment, causing all CardGrid-rendering components to crash during tests.

## What Changes

- Add `IntersectionObserver` mock to the test environment so CardGrid-rendering components can mount successfully
- Rewrite Awards.test.jsx to assert grid rendering (all cards visible) instead of carousel navigation
- Rewrite Portfolio.test.jsx to assert grid rendering instead of carousel navigation
- Rewrite Research.test.jsx to assert grid rendering instead of carousel navigation
- Home.test.jsx passes without changes once IntersectionObserver is mocked

## Capabilities

### New Capabilities

- `test-intersection-observer-mock`: Global IntersectionObserver mock for the jsdom test environment

### Modified Capabilities

- `card-grid`: Test coverage updated to match CardGrid's grid rendering behavior instead of Carousel's navigation behavior

## Impact

- **Test files modified**: `Awards.test.jsx`, `Portfolio.test.jsx`, `Research.test.jsx`
- **Test setup modified**: `src/test/test-utils.jsx` (or new global setup file) for IntersectionObserver mock
- **No production code changes**: Components already use CardGrid correctly
- **Existing specs**: `openspec/specs/card-grid/spec.md` (test scenarios may need update)
