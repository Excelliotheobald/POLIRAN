<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# polilang

Minimal `create-next-app` scaffold: one App Router app, no monorepo, no test suite, no CI. Next 16.4.6 / React 19.3 / Tailwind 4 / TypeScript strict.

## Docs and managed blocks

- The docs in `node_modules/next/dist/docs/` are version-matched to the installed Next.js — trust them over training data for caching, routing, and config questions (a good index is the `ai-agents` guide there).
- `agentRules` (default on) produces the block above; `experimental.agentFeedback` is also enabled in `next.config.ts`. `next dev` may add/refresh a second `nextjs-agent-feedback` block and expect a feedback pass before the final response. Next.js only rewrites text between its markers, so keep custom content outside them.

## Commands

- Use **npm** (`package-lock.json`); the README's yarn/pnpm/bun lines are boilerplate.
- `npm run dev` — dev server at `localhost:3000`; also regenerates managed AGENTS.md blocks and `.next/types`.
- `npm run lint` — ESLint flat config (`eslint.config.mjs`).
- `npx tsc --noEmit` — typecheck; there is **no** `typecheck` script.
- `npm run build` / `npm run start` — production build/serve.
- No test runner or CI config exists; verify with lint + typecheck + build.

## Config quirks

- `next.config.ts` enables `cacheComponents: true` (Partial Prerendering is the default) and `partialPrefetching: true`. Under Cache Components, `dynamic`/`revalidate`/`fetchCache` segment exports error, runtime data must be cached with `use cache` or wrapped in `<Suspense>`, and synchronous IO (`Date.now()`, `Math.random()`, `crypto.randomUUID()`) during prerender fails the build. `export const instant = false` opts a segment out temporarily. See the bundled `migrating-to-cache-components` guide.
- Tailwind 4 is wired through top-level `turbopack.rules` in `next.config.ts` with the `@tailwindcss/turbopack` loader — there is **no** `postcss.config.*`. Theme tokens live in `app/globals.css` (`@import "tailwindcss"`, `@theme inline`).
- Route prop types (`PageProps<"/">`, `LayoutProps<"/">`) are generated into `.next/types` (included by `tsconfig.json`). Rerun `next dev` or `next build` after adding routes so new route types resolve.
- `@/*` maps to the repo root (`./*`), not `src/`.
- `.env*` is gitignored; any required env vars must be supplied locally.
