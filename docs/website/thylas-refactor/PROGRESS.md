# Thylas Page Refactor — Progress

**Rule:** this file describes the repository, not intentions.

Last updated: 2026-11-07 (SP-01 → SP-04 complete; SP-05 review pending).

| Item | Status | Evidence |
| --- | --- | --- |
| Repository inspection | Done | `Thylas/docs/{product,brand,development}` read; old page source read |
| Claim audit (8 claims) | Done | CONTENT-STRATEGY §3 — 2 retracted, 2 replaced, 2 added |
| Positioning + full revised copy | Done | CONTENT-STRATEGY §4 |
| Page structure (7 sections) | Done, 1 justified deviation | MASTER-PLAN §2 |
| Visual system + tokens (additive) | Done | VISUAL-DIRECTION §1; `tokens.css` `--th-*` |
| Hero composition | Done — A "The Room" (D2 default) | `src/pages/products/thylas.astro` `.board` |
| Section wireframes | Done | VISUAL-DIRECTION §5 |
| Lo-fi prototype | Done, validated | `prototypes/hero-lofi.html` |
| SP-03 interaction spec | Done | `subplans/SP-03-design-interaction.md` (D1–D5 recorded) |
| SP-04 implementation | Done | dedicated page, shared data + architecture updated |
| SP-05 review | **Pending** | checklist in `subplans/SP-05-review-polish.md` |

## Implementation evidence (SP-04)

| Check | Result |
| --- | --- |
| `npm run build` | 13 pages; `/products/thylas/` from the dedicated page |
| `astro check` | 0 errors · 0 warnings · 0 hints (29 files) |
| Overflow / h1 / empty links / alt / console, 4 widths × 13 pages | all clean |
| Internal links over `dist/` | 0 broken |
| Old claims (`Packaged WAM`, `knowledge and resource library`, `subscription`) | 0 matches in `dist/` |
| Visual review | hero 1440 + 390, all seven sections, homepage architecture block, homepage product row |

## Decisions resolved

D1 Application Layer · D2 hero A · D3 four labels (+`Active` on the timeline) · D4 straight to implementation · D5 full development table.

## Remaining (SP-05)

- Lighthouse on the page (target perf ≥95).
- Contrast table re-measure of the seven new tokens in situ.
- Voice grep over the page source (banned words / exclamation marks).
- Commit + founder push.

## Commits

`14e0014` docs at gate · `e2e1659` prototype evidence · SP-03/SP-04 + page implementation committed together after this file.
