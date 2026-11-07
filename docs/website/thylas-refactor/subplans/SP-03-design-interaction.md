# SP-03 — Design & Interaction Spec

**Status:** Blocked — founder review gate (D2/D4). Outline fixed; details written after approval.
**Depends on:** SP-01 copy (done), SP-02 direction (done).

## Will specify

1. **Responsive behaviour** per section: hero composition collapse (<900px board schematic moves under headline, full-width), capability rows → stacked cards-order (schematic after name, status inline), boundary diagram → vertical (Thylas above, WAM below, rule horizontal).
2. **Interaction inventory**: every link, anchor, hover state; hover = border-tone change only; focus-visible ring (site standard 2px terracotta).
3. **Motion spec final**: reveal delays per section, the single state-dot pulse, `prefers-reduced-motion` matrix.
4. **Type ramp**: exact sizes/line-heights per breakpoint for hero, section heads, blocks, mono labels.
5. **Component contract**: which shared components are reused (`SectionHead`, `Sigil`, `link-arrow`) vs page-local (`Schematic.astro`, `BoardSchematic.astro`, `BoundaryDiagram.astro`, `StatusChip.astro`).
6. **Accessibility pass targets**: heading order, aria-labels for schematics, contrast table for every new pair (surface/line/taupe per Thylas desk §4 measurements).

## Acceptance criteria

- A developer can implement SP-04 without asking a design question.
- Every interactive element has hover/focus/disabled-or-absent defined.
- Zero new dependencies.

## Validation

- Spec reviewed against `branding-desk.md` §13 checklist item-by-item.
