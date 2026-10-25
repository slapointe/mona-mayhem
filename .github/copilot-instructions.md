# Copilot instructions for Mona Mayhem

## Project overview

This repository is a workshop template for building a retro arcade-themed GitHub contribution battle arena with Astro. It is intentionally a starter project with several incomplete pieces, so do not assume the app is fully implemented.

The important runtime surface is small and centered around Astro:

- `src/pages/index.astro` is the app entry page and is currently a stub.
- `src/pages/api/contributions/[username].ts` is the planned API route for fetching GitHub contribution data; it currently returns a `501` and is the main implementation target for the contribution graph backend.
- `docs/` and `workshop/` are the published workshop material and the GitHub Pages content, not the main app runtime.
- `scripts/localization_sync.py` manages the README/workshop localization sync for `es`, `pt_BR`, and `ko`.

## Build, test, and lint commands

This repo does not currently define lint or test scripts in `package.json`.

Use these commands from the repository root:

- Install dependencies: `npm install`
- Start the dev server: `npm run dev`
- Production build: `npm run build`
- Preview the built app: `npm run preview`
- Astro CLI: `npm run astro ...`

Validation guidance:

- The main project validation command is `npm run build`.
- There is no test suite or linter configured right now, so there is no single test command to run in this repo as-is.
- If tests are added later, prefer running the specific file or a single test name instead of the entire suite.

## High-level architecture

This project mixes two different concerns that should stay separate in your head:

1. The Astro application under `src/`
2. The static workshop/docs site under `docs/` and `workshop/`

The current Astro configuration in `astro.config.mjs` uses server output with `@astrojs/node`:

- `output: 'server'`
- `adapter: node({ mode: 'standalone' })`

That means the app is built as a Node server, not as a static Pages site by default. The repository’s GitHub Pages workflow, however, publishes the static `docs/` and `workshop/` content rather than the Astro app output.

The repo is structured around the workshop flow described in `README.md` and `workshop/*.md`, which is the source of intent for the app’s features and UX. Treat those workshop files as product guidance, not generic docs.

## Key conventions and repo-specific patterns

- This is a workshop starter, not a mature production app. TODOs and stubs are expected.
- Keep page and API work in `src/pages/` and keep educational/static content in `docs/` and `workshop/`.
- When implementing the contribution API, make the change in `src/pages/api/contributions/[username].ts`; do not add a separate ad hoc API layer unless the workshop explicitly calls for it.
- Keep the app behavior aligned with the workshop vision: retro arcade theme, GitHub contribution comparison, and a small Node/Astro app.
- When editing docs or workshop content, keep localized versions in sync. README translations live in `README.es.md`, `README.ko.md`, and `README.pt_BR.md`; workshop translations live under `workshop/<locale>/`.
- The localization sync script enforces specific canonical source mappings. Avoid adding unrelated locale folders or changing the mapping logic unless the task explicitly requires it.
- Do not confuse the GitHub Pages deployment with the Astro app deployment. The static workflow under `.github/workflows/deploy.yml` copies `docs/` and `workshop/` into `_site`; it does not build the Astro app by default.
- If the task is to make the Astro app deployable to GitHub Pages, that is a deliberate deployment change: set `output` to `static`, remove the Node adapter, and update the workflow to publish `dist/` instead of the static workshop files.

## Working style for this repository

- Prefer surgical edits in the relevant file instead of broad refactors.
- Use the README and workshop steps as the source of truth for intended behavior.
- Keep static site assets and app code separated; do not mix workshop instructional content into the Astro app unless the task is clearly about the workshop itself.
- Preserve the repo’s localization conventions and the existing docs/workshop structure when making copy changes.
