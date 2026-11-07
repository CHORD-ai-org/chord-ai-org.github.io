# Thylas Product Page — Master Plan

**Status:** active. SP-01 and SP-02 executed; **stopped for founder review** before SP-03.
**Date:** 2026-11-07
**Scope:** `/products/thylas/` only. Other pages are touched only where shared data forces it (see §7).
**Sources of truth, in order:**

| # | Document | Owns |
| --- | --- | --- |
| 1 | `Thylas/docs/product/definition.md` | what Thylas is, state ownership, capability matrix |
| 2 | `Thylas/docs/development/ui-mvp/PROGRESS.md` | what actually exists in the repo (repo, not intentions) |
| 3 | `Thylas/docs/brand/branding-desk.md` | brand voice, principles, tokens |
| 4 | `Thylas/docs/development/ui-mvp/DECISIONS.md` | D-006 (DeepSeek path), WAM deferral |
| 5 | This repo: `src/data/site.ts`, `src/data/productContent.ts` | current published claims |

Labels: **[C]** confirmed by a source above · **[P]** proposed, needs sign-off · **[?]** open · **[A]** assumption.

---

## 1. Why this refactor exists

The published Thylas page describes a platform that does not exist:

| Published claim | Reality (PROGRESS.md, 2026-11-07) | Verdict |
| --- | --- | --- |
| "Packaged WAM experience" | WAM integration is **deferred**; transport unresolved (N1). Processes are a labelled simulator | Retract |
| "CHORD's knowledge and resource library" | No such library. What exists is Notes/Documents (Markdown-first, in development) and a Whiteboard (in development) | Replace |
| "Personal workspaces" | Workspace **is** the central object [C], but the build holds sample data only | Keep concept, relabel state |
| "Enterprise subscription infrastructure" | Billing is deferred; Account is thin, no billing | Retract |
| "Platform layer" (category) | Founder direction: Thylas is the **application layer** | Replace |

The page also misses everything that makes Thylas specific: the state-ownership boundary with WAM, the second class of object (delegated work with a lifecycle), provenance, and the design philosophy.

**New positioning [C — founder brief]:** *Thylas — A Computational Workspace for Human-AI Collaboration.* CHORD's application layer: an organized, persistent environment for knowledge, resources, and computational work.

---

## 2. Page structure (seven sections)

| # | Section | Job | Status labels used |
| --- | --- | --- | --- |
| 1 | Hero | Identity, positioning, one honest status line | — |
| 2 | The Workspace | The five capabilities, each with a truth label | In the build · In development · Planned · Deferred |
| 3 | Beyond a Conventional Workspace | What Thylas is not, and the object class that makes it different | — |
| 4 | Architecture | State ownership: what Thylas holds, what WAM holds, where Rym sits | — |
| 5 | Design Philosophy | Continuity · Structure · Agency | — |
| 6 | Development | The repo, staged honestly, dated 2026-11 | Working today · In development · Not started · Deferred |
| 7 | Closing | One statement, four links | — |

**Justified deviation from the brief:** the brief's "The Workspace — visual demonstrations" is satisfied with **schematic abstractions drawn in the site's own visual language**, not screenshots — the build contains sample data, so any screenshot would be a fake product screenshot, which the quality rules forbid. Section 6 exists because PROGRESS.md is the most credible asset CHORD has for this page.

---

## 3. Subplans and gates

| SP | File | Deliverable | Gate |
| --- | --- | --- | --- |
| SP-01 | `subplans/SP-01-content-positioning.md` | Claim audit, messaging hierarchy, full revised copy | ✅ Done |
| SP-02 | `subplans/SP-02-visual-direction.md` | Visual system extension, hero compositions, section wireframes, lo-fi prototype | ✅ Done — **founder review gate** |
| SP-03 | `subplans/SP-03-design-interaction.md` | Interaction spec, responsive behaviour, motion spec | Blocked on review |
| SP-04 | `subplans/SP-04-implementation.md` | The page, implemented | Blocked on SP-03 |
| SP-05 | `subplans/SP-05-review-polish.md` | Visual/a11y/perf/consistency review | Blocked on SP-04 |

**Stop point:** after SP-02. No implementation before founder sign-off on positioning (SP-01) and visual direction (SP-02).

---

## 4. Decisions the founder must make at the review gate

| # | Decision | Options | Default if silent |
| --- | --- | --- | --- |
| D1 | Product `category` string | "Application Layer" / "Computational Workspace" / keep "Cloud Infrastructure" | "Application Layer" |
| D2 | Hero composition | A "The Room" / B "State ownership" / C "τ orbit" | A |
| D3 | Status vocabulary on a marketing page | `In the build · In development · Planned · Deferred` / plainer prose | The four labels |
| D4 | Lo-fi prototype fidelity | approve direction → straight to SP-03, or refine prototype first | straight to SP-03 |
| D5 | Depth of the Development section | full table incl. unknowns N1/N2/N5, or three-line summary | full table |

---

## 5. Non-goals

- No rewrite of WAM/Rym/Knock pages beyond what shared data forces.
- No new dependencies (no animation library, no chart lib).
- No fake screenshots, no fabricated metrics, no "coming soon" waitlists.
- No dark mode, no i18n on this page.

---

## 6. Risks

| Risk | Mitigation |
| --- | --- |
| Page drifts from repo reality as the MVP advances | Section 6 reads from a dated snapshot (2026-11-07); SP-05 adds a re-check against PROGRESS.md |
| Marketing page tone clashes with product brand voice | Voice rules imported from `branding-desk.md` §9; enforced in SP-05 checklist |
| Shared-data edits leak into other pages | D1 change is one string in `site.ts`; verified against nav, footer, hero index in SP-04 |
