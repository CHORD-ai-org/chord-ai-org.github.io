# SP-04 — Implementation

**Status:** Blocked — SP-03. Implementation plan fixed.

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
