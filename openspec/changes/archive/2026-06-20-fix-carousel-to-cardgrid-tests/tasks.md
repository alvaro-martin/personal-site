## 1. Test Environment Setup

- [x] 1.1 Add IntersectionObserver mock to `src/test/test-utils.jsx`
- [x] 1.2 Verify mock works by rendering a simple component that uses CardGrid

## 2. Awards.test.jsx Rewrite

- [x] 2.1 Remove navigation assertions (`getByLabelText('Next')`, `getByLabelText('Previous')`)
- [x] 2.2 Update "renders first project title" to assert all project titles render
- [x] 2.3 Update "renders project image" to assert all project images render with correct alt text
- [x] 2.4 Keep section title, subtitle, and count assertions (already correct)

## 3. Portfolio.test.jsx Rewrite

- [x] 3.1 Remove navigation assertions (`getByLabelText('Next')`, `getByLabelText('Previous')`)
- [x] 3.2 Update "renders first project title" to assert all project titles render
- [x] 3.3 Update "renders project image" to assert all project images render with correct alt text
- [x] 3.4 Keep section title, subtitle, and count assertions (already correct)

## 4. Research.test.jsx Rewrite

- [x] 4.1 Remove navigation assertions (`getByLabelText('Next')`, `getByLabelText('Previous')`)
- [x] 4.2 Update "renders first project title" to assert all project titles render
- [x] 4.3 Update "renders project image" to assert all project images render with correct alt text
- [x] 4.4 Keep section title, subtitle, and count assertions (already correct)

## 5. Verification

- [x] 5.1 Run `npx vitest run` and confirm all 81 tests pass
- [x] 5.2 Verify no regressions in previously passing tests
