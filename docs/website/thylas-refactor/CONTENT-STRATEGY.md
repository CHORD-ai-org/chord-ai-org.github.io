# Thylas Page — Content Strategy

**Status:** executed (SP-01). Copy below is production-ready, pending founder review.
**Voice authority:** `Thylas/docs/brand/branding-desk.md` §9 — a competent colleague writing a lab note. Short declaratives. No exclamation marks. No "AI-powered", "magic", "seamless", "supercharge". A limitation is stated as what is missing.

---

## 1. Audience and jobs

| Reader | What they need from this page |
| --- | --- |
| A researcher/analyst (the principal, U1) | What is this, what does it do today, can I trust it with long work |
| A developer evaluating CHORD | Where Thylas sits relative to WAM and Rym, what is real |
| A founder-adjacent visitor | That CHORD ships, not just talks |

One page, three jobs, in that order.

## 2. Messaging hierarchy

1. Thylas is a **computational workspace** — the room where material, your work on it, and delegated work sit together.
2. It is CHORD's **application layer**: it owns your working state; WAM owns the reasoning state.
3. What it does **today** is narrower than the vision, and the page says which is which.
4. The design is an instrument: quiet, warm, continuous, honest about state.

## 3. Claim ledger (SP-01 audit)

Every claim on the old page, its source, and its replacement:

| # | Old claim | Source checked | Verdict | New claim |
| --- | --- | --- | --- | --- |
| 1 | "Packaged WAM: WAM is usable through Thylas without integrating the framework yourself" | `PROGRESS.md`: processes are a labelled simulator; `DECISIONS.md` D-006, WAM deferred | **Retract** | "WAM — future integration. Processes today are a labelled simulator; the run view is built to be fed by WAM when the transport exists (N1)." |
| 2 | "Knowledge and resource library: CHORD's accumulated references" | No such library in repo or docs | **Replace** | "Notes & Documents — Markdown-first, `[[wikilinks]]`, backlinks. Obsidian-inspired. In development." |
| 3 | "Personal workspaces: a persistent place for a person's work" | `definition.md` §3: workspace is the central object [C]; build = shell + sample data | **Keep concept, relabel** | "Workspace — the central object. Files, notes, boards and runs share one scope. Shell is in the build; data is sample data." |
| 4 | "Subscription and service infrastructure" | `definition.md` §11: billing not in first release | **Retract** | Not claimed. Account described as thin, under Development. |
| 5 | "Whiteboard" (absent) | `PROGRESS.md` SP-06 not started; exists as mock surface | **Add** | "Whiteboard — spatial boards: cards, sections, edges. Heptabase-inspired. In development." |
| 6 | "AI" (absent) | `DECISIONS.md` D-006: DeepSeek via server-side `/api/ai`, labelled | **Add** | "AI — one honest capability first: a question answered through a server-side endpoint, labelled as such." |
| 7 | "Platform available to build on" (status) | — | **Replace** | "UI MVP in progress · 2026-11" |
| 8 | Figure caption "Three platform layers…" | — | **Replace** | State-ownership schematic (see SP-02) |

---

## 4. Revised copy (production strings)

Status labels used across the page: **In the build · In development · Planned · Deferred** [P — D3].

### 01 Hero

- Eyebrow: `CHORD · τ · Application layer`
- H1: `A computational workspace for human-AI collaboration.`
- Lede:
  > Thylas is where your material, the work you do on it, and the work you hand to the system sit in the same room. It is CHORD's application layer: an organized, persistent environment for knowledge, resources, and computational work.
- Status line (mono): `UI MVP in progress · shell live, data sample · 2026-11`
- CTAs: `What it does today ↓` · `How it fits CHORD →`

### 02 The Workspace

Section lede:
> Five areas, because there are five things a person does here: orient, organise, think, delegate, administer. Each is labelled with what it is today — not with what it is meant to become.

| Block | Status | Copy |
| --- | --- | --- |
| Workspace & Files | In the build | The central object. Everything you open — a file, a note, a board, a run — lives inside a workspace scope, and the scope survives tabs, sessions and switching. File tree, table and preview are navigable; upload is not connected yet. |
| Notes & Documents | In development | Markdown-first knowledge management: `[[wikilinks]]`, backlinks, autosave, conflict handling. Obsidian-inspired, minus the plugin market. |
| Whiteboard | In development | Spatial boards for thinking in parallel: cards, sections, edges, zoom to pointer, undo. Heptabase-inspired. A card can be authored (yours, editable) or live (owned by a run, read-only). |
| Processes | In the build | The interface for delegated work: five states — `queued · running · needs you · done · failed` — filters, and a run detail view. Today it runs on a labelled simulator; the view is built to be fed by WAM. |
| AI | In development | One capability, done honestly: a question answered by DeepSeek through a server-side endpoint, labelled `DeepSeek · dev endpoint`. It answers; it never pretends to start a process. |
| WAM | Deferred | Deep integration is the point of the architecture, not part of the current build. The transport is the open problem, and it is named as one. |

Honesty strip (mono, full-width rule above and below):
> The shell is real. The data is sample data. Nothing on this page is a screenshot.

### 03 Beyond a conventional workspace

Section lede:
> Thylas is built against three products it refuses to be. Each refusal decides something concrete about the interface.

| Not this | Because | What you get instead |
| --- | --- | --- |
| Not a productivity workspace | In Notion or Heptabase, every object was made by a person. Thylas has a second class: work delegated elsewhere, with a lifecycle nobody controls — it can change while you are not looking. | State is a first-class element. A running job is never visually indistinguishable from a finished note. |
| Not a chat product | Chat orders everything by time and dies with the session. The conversation is a good input method and a bad organising principle. | Intent is taken as text, then filed as an object. The record is the plan and the artifacts, not the transcript. |
| Not a cloud console | A console reports on the provider's resources. Thylas answers a different question: did your work move forward, and what needs you. | Overview orients; cost lives in Account, one click away. |

Closing line:
> And one thing none of them have: provenance. Every artifact carries which run produced it. Removing a file breaks the things that reference it — and the interface says so.

### 04 Architecture

Section lede:
> The distinction is not "UI versus backend". It is which state each component is the authority for.

| Thylas owns (working state) | WAM owns (reasoning state) |
| --- | --- |
| Which workspace, what is open | What the intent means |
| Where a note lives, what a board looks like | What the plan is, and its revisions |
| What you named things, what you have seen | Which agent is running, what is shared across sessions |
| Files, notes, boards, preferences, open tabs | Run state, scheduling, retry, model choice |

Rule (pull quote):
> If a Thylas screen has to decide something about your work, the screen is wrong. Thylas collects the instruction, WAM decides, Thylas reports.

Position within CHORD (mono footnote):
> WAM is the orchestration layer and Thylas's future counterpart — not connected yet. Rym, the model layer, is called by WAM, never by Thylas. Knock is the community, out of scope by decision, linked at most.

### 05 Design philosophy

Section lede:
> The product is built as an instrument, not a dashboard. Three principles carry most of that weight.

| Principle | What it means | Where you see it |
| --- | --- | --- |
| Continuity | Every boundary is a 1px line that runs the full length of its region. Raised surfaces are lighter; recessed are darker. Never the reverse. | Panels, tables, the reading column — no line stops mid-air |
| Structure | A 4px grid, seven type steps, one accent reserved for state. Hue never encodes structure: remove all colour and the layout still reads. | Numbers align; ids are monospaced; nothing is coloured for decoration |
| Agency | The material is yours. Authored objects are editable; delegated objects are read-only until they land. The interface reports state instead of making decisions. | `produced by run #12`; disabled controls that state their reason |

Pull quote:
> The one-sentence test: cover the logo. If the surface could be mistaken for project-management SaaS, something on it is generic.

### 06 Development

Section lede:
> The state of the repository, dated 2026-11-07. Stated as the repo states it — if this table and the build disagree, the build wins.

| Stage | Items |
| --- | --- |
| Working today | Application shell: rail, typed tabs with persistence, context panel, `⌘K` palette, workspace switching. Nine screens render. 25 unit assertions, 55 end-to-end assertions. |
| In development | Notes editor (Markdown, wikilinks, backlinks, conflict handling). Whiteboard rebuild: cards, sections, edges, pointer-anchored zoom. DeepSeek endpoint behind a server-side path. Process states and filters. |
| Not started | File upload and storage. Authentication and organisation membership — the authorization model is an open question (N2). |
| Deferred | WAM integration — transport unresolved (N1). Billing, quotas, invoicing. Real-time collaboration. Mobile. |

Footnote (mono):
> Open before implementation: N1 WAM transport · N2 who owns authentication · N5 whether the browser can reach WAM directly. They block screens, not documents.

### 07 Closing

- Statement: `The workspace is the product. The rest of CHORD is what makes it computable.`
- Links: WAM → `/products/wam` · Research → `/research` · GitHub ↗ · Contact → `/contact`

---

## 5. Validation (SP-01 acceptance)

- [x] Every old claim traced to a source; two retracted, two replaced, two added (ledger §3).
- [x] No capability described as completed that PROGRESS.md marks otherwise.
- [x] Voice check: no exclamation marks, no banned words, limitations stated as what is missing.
- [x] Copy lengths fit the wireframes in VISUAL-DIRECTION §4 (longest block ≈ 55 words).
- [ ] Founder sign-off on D1 (category string) and D3 (status labels).
