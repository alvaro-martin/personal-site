## 1. Fix npm audit vulnerability

- [x] 1.1 Run `npm audit fix` to update `form-data` from 4.0.5 to 4.0.6
- [x] 1.2 Verify `npm audit --audit-level=high` passes with no vulnerabilities
- [x] 1.3 Verify `npm run build` still works

## 2. Clean up CI workflow

- [x] 2.1 Remove the `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` env block from `.github/workflows/ci.yml`
- [x] 2.2 Verify the workflow file is valid YAML

## 3. Verification

- [x] 3.1 Run `npm test` to confirm no regressions
- [x] 3.2 Verify the updated `package-lock.json` reflects `form-data@4.0.6`
