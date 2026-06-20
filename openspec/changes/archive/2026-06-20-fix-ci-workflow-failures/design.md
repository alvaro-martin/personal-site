## Context

The GitHub Actions CI pipeline (`.github/workflows/ci.yml`) runs on `ubuntu-latest` with Node.js 24. It currently fails at the `npm audit --audit-level=high` step due to a high-severity vulnerability in a transitive dependency. Additionally, the workflow produces a deprecation warning about being forced to run on Node.js 24.

Current state:
- `form-data@4.0.5` (transitive via `jsdom@25.0.1`) has GHSA-hmw2-7cc7-3qxx (CRLF injection)
- `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` env variable forces actions to Node.js 24, but this is now the runner default as of June 16, 2026

## Goals / Non-Goals

**Goals:**
- Resolve the `npm audit` failure so CI passes
- Remove the redundant `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24` env variable to eliminate the deprecation warning
- Commit the updated `package-lock.json` with the patched dependency

**Non-Goals:**
- Upgrading `jsdom` to a newer major version
- Migrating away from `jsdom` or `vitest`
- Changing the Node.js version used for builds
- Adding or modifying CI steps

## Decisions

**1. Use `npm audit fix` instead of manual dependency override**
- `npm audit fix` updates `form-data` from 4.0.5 to 4.0.6, which is a patch release within the same semver range
- No `package.json` changes required — only `package-lock.json` is updated
- Alternative considered: `overrides` in `package.json` — rejected because it adds maintenance burden and `npm audit fix` already provides the fix

**2. Remove `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24` entirely**
- GitHub Actions runners now default to Node.js 24 (since June 16, 2026)
- The env variable is redundant and causes a deprecation warning
- Alternative considered: Keeping it for explicitness — rejected because it produces warnings and will become meaningless once Node.js 20 is fully removed in fall 2026

## Risks / Trade-offs

- **[Risk]** `form-data@4.0.6` could introduce regressions → **Mitigation**: It's a patch version fixing a security issue; the changelog is minimal and backward-compatible
- **[Risk]** Removing the env variable could re-expose the workflow to Node.js 20 runtime issues → **Mitigation**: The runner already defaults to Node.js 24; this is confirmed by the GitHub changelog
