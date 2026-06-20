# Test IntersectionObserver Mock

## Purpose

Provides a global IntersectionObserver mock for the jsdom test environment, enabling components that use `useScrollReveal()` to mount without errors.

## Requirements

### Requirement: IntersectionObserver mock in test environment
The test setup SHALL provide a global `IntersectionObserver` mock class that prevents `ReferenceError` when components using `useScrollReveal()` mount in jsdom.

#### Scenario: Component with useScrollReveal mounts successfully
- **WHEN** a test renders a component that uses `useScrollReveal()` (e.g., CardGrid)
- **THEN** the component mounts without throwing `ReferenceError: IntersectionObserver is not defined`

#### Scenario: Mock does not affect production code
- **WHEN** the application runs in a browser (not test environment)
- **THEN** the real `IntersectionObserver` API is used, not the mock

### Requirement: Mock is available via renderWithProviders
The `IntersectionObserver` mock SHALL be registered before any component renders when using `renderWithProviders` from `test/test-utils`.

#### Scenario: Test using renderWithProviders has mock available
- **WHEN** a test imports `renderWithProviders` from `test/test-utils`
- **THEN** `IntersectionObserver` is defined in the global scope for that test
