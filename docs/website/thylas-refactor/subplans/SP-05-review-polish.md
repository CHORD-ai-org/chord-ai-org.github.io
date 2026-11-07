# SP-05 — Review & Polish

**Status:** Blocked — SP-04.

## Review passes

| Pass | Checks | Tool |
| --- | --- | --- |
| Content truth | Every status label re-verified against `Thylas/docs/development/ui-mvp/PROGRESS.md` as of ship date; retracted claims absent | Manual + grep |
| Voice | No exclamation marks; banned words absent ("seamless", "magic", "AI-powered", "supercharge"); limitations stated as missing things | grep |
| Visual consistency | Tokens only (no raw hex in components); one accent budget respected; hairlines continuous; radius set unchanged | grep + screenshots |
| Accessibility | Heading order h1→h2→h3; schematic `role="img"` + aria-labels; contrast ≥4.5 text / ≥3 marks (pairs measured in Thylas desk §4); keyboard path through all links; reduced-motion static | axe + manual |
| Responsiveness | 1440/1024/768/390 screenshots; no overflow; schematics legible at 390 (labels ≥10px, or hidden with mono fallback) | CDP screenshot suite |
| Performance | No new JS beyond one small inline script (if any); images none; Lighthouse perf ≥95 on the page | Lighthouse CI |
| Consistency | Nav/footer/routing untouched; other product pages unchanged | `git diff` review |

## Deliverable

Review report appended to PROGRESS.md; defects fixed or filed with owners.

## Validation

- All gates green → propose commit + deploy (push remains founder-side).
- Any gate red → defect table in PROGRESS.md before commit.
