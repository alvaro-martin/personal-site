## Why

The GitHub Actions CI pipeline fails on `npm audit --audit-level=high` due to a high-severity CRLF injection vulnerability in `form-data@4.0.5` (GHSA-hmw2-7cc7-3qxx), a transitive dependency of `jsdom@25.0.1`. Additionally, the workflow produces a deprecation warning because it forces GitHub Actions to run on Node.js 24 via `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true`, which is now redundant since GitHub runners defaulted to Node.js 24 on June 16, 2026.

## What Changes

- Run `npm audit fix` to update `form-data` from 4.0.5 to 4.0.6, resolving the CRLF injection vulnerability
- Commit the updated `package-lock.json` with the patched dependency
- Remove the `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` env variable from `.github/workflows/ci.yml` since it is no longer needed

## Capabilities

### New Capabilities

### Modified Capabilities

## Impact

- `.github/workflows/ci.yml`: Remove the `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24` env block
- `package-lock.json`: Updated with `form-data@4.0.6` (transitive dependency of `jsdom`)
- No changes to `package.json` (no direct dependency updates)
