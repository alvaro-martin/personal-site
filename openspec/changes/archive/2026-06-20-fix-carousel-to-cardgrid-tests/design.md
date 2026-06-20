## Context

The codebase migrated Awards, Portfolio, and Research organisms from `Carousel` to `CardGrid` for displaying project items. The `Carousel` component still exists but is no longer imported by these organisms. Tests were not updated during the migration, resulting in 17 failing tests across 4 test files.

The test environment uses jsdom (via Vitest), which lacks browser APIs like `IntersectionObserver`. `CardGrid` depends on `useScrollReveal()` which instantiates `IntersectionObserver`, causing a `ReferenceError` when any CardGrid-rendering component mounts in tests.

## Goals / Non-Goals

**Goals:**
- Restore all 17 failing tests to passing state
- Add `IntersectionObserver` mock to the test environment
- Rewrite Carousel-specific test assertions to match CardGrid's grid rendering
- Ensure Home.test.jsx passes (currently blocked by IntersectionObserver)

**Non-Goals:**
- Modifying production components (Awards, Portfolio, Research, CardGrid)
- Removing the Carousel component from the codebase
- Adding new test coverage beyond what existed before the migration
- Changing the test framework or configuration

## Decisions

### Decision 1: Mock IntersectionObserver in test-utils.jsx

**Choice:** Add the mock directly in `src/test/test-utils.jsx` rather than a separate setup file.

**Rationale:**
- All failing tests already import `renderWithProviders` from `test/test-utils`
- Centralizing the mock here ensures it's available whenever tests use the helper
- Avoids needing to modify `vitest.config.js` or add a global setup file
- The mock is simple enough (no-op callback) to not warrant its own file

**Alternative considered:** Global setup file (`setupTests.js`) — rejected because it adds configuration overhead for a single mock.

### Decision 2: Rewrite tests to assert grid rendering

**Choice:** Replace Carousel navigation assertions with assertions that all cards render in the grid.

**Rationale:**
- CardGrid renders ALL items simultaneously (no navigation)
- Tests should verify: section title, subtitle, all project titles, all project images
- Remove `getByLabelText('Next')` / `getByLabelText('Previous')` assertions
- Keep the `content.json` count assertion (already passing)

**Alternative considered:** Keep navigation tests and skip them — rejected because it hides real regressions.

### Decision 3: IntersectionObserver mock behavior

**Choice:** Mock `IntersectionObserver` as a no-op class that does nothing.

**Rationale:**
- The scroll reveal animation is visual polish, not testable logic in jsdom
- Tests only need components to mount without crashing
- A no-op mock is sufficient — no need to simulate intersection events

**Alternative considered:** Full mock with `simulateIntersection` — rejected as over-engineering for test needs.

## Risks / Trade-offs

- **[Risk]** Mock may hide real IntersectionObserver bugs → **Mitigation:** The mock is scoped to test environment only; production code is unaffected. Visual behavior is verified manually or via E2E tests.

- **[Risk]** Tests may not fully validate CardGrid rendering → **Mitigation:** Tests assert that all items render with correct titles and images, which covers the core functionality.

- **[Trade-off]** Removing navigation tests reduces coverage of user interaction → **Mitigation:** Navigation was a Carousel feature that no longer exists; testing non-existent features provides no value.
