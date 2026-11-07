# SP-04 — Implementation

**Status:** Completed 2026-11-07.

## Result

| Item | Where |
| --- | --- |
| Page | `src/pages/products/thylas.astro` (7 sections, page-local components) |
| Removed from shared template | `src/data/productContent.ts` (entry + slug union) — `[slug].astro` now emits wam/rym/knock only |
| Shared data updated | `src/data/site.ts` — Thylas `category: 'Application Layer'`, new `summary`/`oneliner`, `status: 'UI MVP in progress'` |
| Shared chrome updated | `src/components/Architecture.astro` — Thylas tier `Platform → Application`, detail line rewritten |
| Tokens | `src/styles/tokens.css` — 7 `th-*` tokens + `--terracotta-on-dark` |
| Global fix | `global.css` — `.section--invert .section-head__index` now uses the light accent (also fixes the homepage dark section) |

## Verification

- `npm run build` → 13 pages; `/products/thylas/` served from the dedicated page, no route conflict.
- `astro check` → 0 errors / 0 warnings / 0 hints (29 files).
- Full-site audit at 1440/1024/768/390: no horizontal overflow, exactly one h1 per page, no empty links, no missing alt, no console errors.
- Internal link check over `dist/`: 0 broken.
- Old claims grep (`Packaged WAM`, `knowledge and resource library`, `subscription`) → 0 matches in `dist/`.
- Rendered review: hero, capabilities, refusals, ownership, philosophy, development, closing, mobile 390, homepage architecture block, homepage product row.

## Deviations from plan

| Planned | Done | Why |
| --- | --- | --- |
| Separate `Schematic`/`BoundaryDiagram` components | Markup + scoped styles inside the page | Single consumer; a component layer would add indirection without reuse |
| Reveal animation on sections | None | Reading page; motion added nothing |
| Hero state-dot pulse | Static | Product rule P7; a marketing diagram is not a live run |


## Route strategy

`/products/thylas/` becomes a **dedicated page**: new `src/pages/products/thylas.astro`; `thylas` removed from `productContent.ts` and from `getStaticPaths()` in `[slug].astro`. WAM/Rym/Knock keep the shared template. Navigation, footer, hero index keep reading `site.ts`.

## Shared-data impact (the only cross-page touch)

- `site.ts` `products[]`: Thylas `category` → founder decision D1 (default "Application Layer"), `summary`/`oneliner` updated to the new positioning, `status` → "UI MVP in progress".
- Verify propagations: nav dropdown meta, footer sigil band + product list, homepage hero index strip, homepage product row (§04). No structural edits to those pages.

## Tasks

- [ ] Extend `tokens.css` (4 new tokens, additive).
- [ ] Build page-local components: `Schematic`, `BoardSchematic`, `BoundaryDiagram`, `StatusChip`.
- [ ] Implement 7 sections from the approved wireframes and copy.
- [ ] Remove Thylas from the shared template data; update `site.ts`.
- [ ] Update `ProductFigure` — the old τ platform-layers figure is retired from the Thylas page (figure code kept for the other three products' template).
- [ ] SEO: page title/description updated; `og:image` unchanged.
- [ ] `npm run build` + `astro check` clean; link check over `dist/`.

## Acceptance criteria

- Copy matches CONTENT-STRATEGY §4 verbatim (no drift, no embellishment).
- Desktop 1440/1024, tablet 768, mobile 390: no overflow, no truncation.
- Other three product pages byte-identical in rendered content except shared `site.ts` strings.
- No new dependencies; global nav/routing untouched.

## Validation

- Full-site audit script (overflow / h1 / empty links / alt / console) green at 4 widths.
- Diff review: only `site.ts` shared strings + new files + `[slug].astro` path change.
