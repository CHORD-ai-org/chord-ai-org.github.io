# SP-03 — Design & Interaction Spec

**Status:** Completed 2026-11-07 (founder instruction: proceed). Decisions D1–D5 taken at their defaults.
**Depends on:** SP-01 copy, SP-02 direction.

## Decisions taken

| # | Decision | Taken |
| --- | --- | --- |
| D1 | Product category string | **Application Layer** (site data + page eyebrow + homepage architecture tier) |
| D2 | Hero composition | **A — "The Room"** (board schematic) |
| D3 | Status vocabulary | `In the build · In development · Active · Planned · Deferred` (`Active` used only on the development timeline) |
| D4 | Prototype depth | straight to implementation; prototype kept as reference only |
| D5 | Development depth | full table incl. N1/N2/N5 |

## Specification as implemented

### Responsive
| Range | Behaviour |
| --- | --- |
| ≥1081 | Hero 1.08fr / 1fr; capability rows 3 columns (index / name+chip / copy); refusals 3 columns; ownership 2 cards + 1px rule |
| 921–1080 | capability name column narrows; everything else unchanged |
| ≤920 | hero stacks (schematic under copy); caps → `index + head` row then body; refusals single column, "instead" cell becomes a top-ruled block; ownership stacks with the rule turning horizontal; principles and stages stack |
| ≤640 | section header drops its index column; board becomes 1:1.08 with repositioned cards; cards shrink; caption stacks |

### Interaction inventory
- Two anchor CTAs (`#workspace`, `#architecture`) using the site's `.btn`.
- Four closing `.link-arrow` links (underline to terracotta on hover, arrow translate 3px).
- No hover states on cards, rows or chips — the schematic is a diagram, not a control (P8: no fictional control).
- Focus: site-wide `:focus-visible` 2px terracotta ring, offset 3px.
- Nav dropdowns and mobile menu unchanged (shared components).

### Motion
| Element | Behaviour |
| --- | --- |
| Board schematic | Static. No pulse — a marketing diagram is not a live run |
| Section furniture | No reveal animation on this page (copy-dense; reveals added nothing and delayed reading) |
| Reduced motion | Nothing to disable; the page has no motion of its own |

### Type ramp
- H1 `clamp(2.4rem, 1rem + 4.4vw, 4.4rem)` / .98 / -.045em / max 18ch
- Section H2 `clamp(1.9rem, 1.2rem + 2.4vw, 2.9rem)` / 1.02 / -.04em
- Block H3 `clamp(1.0625rem → 1.5rem)`; body .9375rem/1.66; mono labels .5625rem–.625rem
- Closing H2 `clamp(1.9rem, 1.1rem + 2.8vw, 3.25rem)`

### Component contract
| Reused | Page-local |
| --- | --- |
| `Base`, `Sigil`, `.btn`, `.link-arrow`, `.label`, `.section--invert` | `.board` + `.scard` (schematic), `.chip`, `.cap`, `.refusal`, `.own`, `.principle`, `.stage` |

New tokens (additive): `--th-surface --th-paper --th-line --th-line-strong --th-dot --th-ink-2 --th-accent-strong`, plus global `--terracotta-on-dark`.

### Accessibility targets
- One h1; h2 per section; h3 for blocks; ids `#workspace`, `#architecture` for the anchor CTAs.
- Schematic is `role="img"` with a full-sentence `aria-label`; the card text inside is decorative.
- Contrast: `--terracotta-on-dark` (#D19A7A) on `--ink-deep` = 6.7:1 for the dark section's small mono labels; body on ivory 9.6:1; mono footnote on ivory ≥4.6:1.

## Acceptance

- [x] Implementation required no design decision beyond the recorded ones.
- [x] Every interactive element has a defined hover/focus state; no fictional controls.
- [x] Zero new dependencies.
