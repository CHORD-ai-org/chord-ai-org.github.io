# CHORD Join Page — Content Specification

**Status:** content complete, for founder review. **Date:** 2026-11-09.
**Scope:** content and positioning only. No frontend code, no components, no new destinations.
**Source of truth for implementation:** this document. Copy marked `[REC]` goes on the page.
**Companions:** `src/data/site.ts`, `src/pages/index.astro`, `/about`, `/vision`, `/research`, `/developers`, `/contact`, `docs/website/thylas-refactor/CONTENT-STRATEGY.md`.

### Label legend

| Marker | Meaning |
| --- | --- |
| `[REC]` | Recommended copy. Ready to implement, word-for-word. |
| `[ALT]` | A viable alternative. Do not ship both. |
| `[ASSUMPTION]` | Inferred from the repository; re-check before publishing. |
| `[OPEN]` | Needs a human decision. Do not guess. |

---

## 1. Page purpose and positioning

**Purpose.** Answer one question: *"If I find the problems CHORD is working on interesting, how can I participate?"* The page names the work that is still open, shows the four ways in, and gives an honest next step.

**Not a hiring page.** No open roles, no application funnel, no "careers" vocabulary. `[ASSUMPTION]` Nothing in the repository establishes a hiring process, published positions, compensation, or a dedicated hiring intake. **Update 2026-11-09:** the founder supplied `zhaoceaseer@gmail.com`; it is published on `/contact` as a direct address for a first conversation. It is a channel, not an application route.

**Narrative hierarchy** (the order of weight, not the order of sections):

| Level | Statement | Where it is carried |
| --- | --- | --- |
| Primary · **Join an Exploration** | There is meaningful, unfinished technical work, and a person can take part in it | Hero, The Work, the technical questions |
| Secondary · **Join a Company** | CHORD is a real organization with products, a repository, and a public record — not a reading group | The "What exists today" strip, the GitHub link, the About/Vision links |
| Underlying · **Join a Movement** | A shared preference for precise questions, honest states, and building in the open | Tone, refusal of slogans, the closing line. Never stated as a slogan |

**What the page must not do:** promise employment, compensation, formal membership, resource access, mentorship, or a response time; imply that a role is waiting; treat research directions as shipped capabilities; invent an email address, form, or community that does not exist.

---

## 2. Target audience and intended visitor perception

| Reader | Arrives with | Must leave with |
| --- | --- | --- |
| An engineer who has read the homepage | "This is the interesting part. Is there a way in?" | Three concrete work areas and a way to start a conversation |
| A researcher | "Is this a serious question or a product pitch?" | Named technical questions; honest note that publications are empty |
| An open-source contributor | "Where is the code, and what is the contribution convention?" | `/developers`, GitHub org, "read the repo's guidance, then open an issue" |
| An independent thinker | "I have a question that is not on their list." | Permission to bring it, and a destination that accepts it |

**Intended perception:** *competent, unfinished, open.* Curiosity first (the questions are worth reading), agency second (I can start without being invited). Ambition and belonging are allowed only as side effects.

**Voice rules** (inherited from the site): short declaratives; no exclamation marks; no "mission", "rockstar", "revolutionary", "limitless", "paradigm-shifting", "change the future", "seamless", "supercharge"; a limitation is stated as what is missing; a question is a question, not a teaser.

---

## 3. Core narrative and messaging hierarchy

1. **The work is unfinished.** Not a weakness — the reason a visitor can matter.
2. **Here is what is actually being worked on.** Three areas, each with one real question.
3. **CHORD is a company building real things.** A short factual strip: four products with their status labels, a public repository.
4. **Participation is a relationship, not a role.** Four ways in, none of which is "apply for a job".
5. **Here is the next step.** One honest channel, clearly stated.

**Relationship to the homepage.** The homepage states the direction (*Expanding What Agents Can Do*, *From agents to operators. From operators to infrastructure.*). The Join page states the consequence: that direction is not complete, and the unfinished parts are where a person can work. **Do not restate the three commitments or the four-layer architecture diagram** — link to them instead. `[REC]` One short callback line: *"The homepage describes where CHORD is going. This page is about the parts that are still open."*

---

## 4. Hero copy alternatives and recommendation

Each direction is a complete hero: eyebrow / H1 / lede / CTA pair.

### Direction A — "There is more to be built" `[ALT]`

- Eyebrow: `CHORD · Join`
- H1: `There is more to be built.`
- Lede: `The parts of agent infrastructure that matter most are still unsolved. CHORD is working on them, and there is room to work alongside us.`
- CTAs: `See the work ↓` · `Ways to participate →`

### Direction B — "The next layer is yours to build" `[ALT]`

- Eyebrow: `CHORD · Join`
- H1: `The next layer is yours to build.`
- Lede: `CHORD has an application layer, an orchestration layer, a model layer, and an ecosystem. None of them is finished. Bring the part you want to work on.`
- CTAs: `See the work ↓` · `Ways to participate →`

### Direction C — "Build beyond the boundaries" `[ALT]`

- Eyebrow: `CHORD · Join`
- H1: `Build beyond the boundaries.`
- Lede: `We work on the tasks agents currently fail at, then on the next set after that. If that is the work you want, start here.`
- CTAs: `See the work ↓` · `Ways to participate →`

### Direction D — "The interesting parts are not finished" `[REC]`

- Eyebrow: `CHORD · Join`
- H1: `The interesting parts are not finished.`
- Lede: `CHORD is an AI infrastructure company building for agents that can sustain complex work. Most of that is still open: the questions, the abstractions, and the systems that would make them real. If a question here is yours too, there are several ways to start.`
- CTAs: `See the open work ↓` · `Ways to participate →`

### Evaluation

| Direction | Distinctiveness | Link to homepage | Clarity | Emotional impact | Verdict |
| --- | --- | --- | --- | --- | --- |
| A | Low — a common, interchangeable line | Weak; repeats "build" without adding a claim | Clear but generic | Mild curiosity | Reject |
| B | Medium — uses the layer model | Strong, but it re-explains the architecture the homepage already draws | Misleading: layers are not a queue of vacancies, and "yours" implies a handover that does not exist | Agency, but reads like a role ad | Reject |
| C | Low — "beyond boundaries" is close to the site's own tagline and to generic AI copy | Too close; the homepage already says "beyond conventional boundaries" | Clear | Slight grandeur; risks sounding theatrical | Reject |
| **D** | **High — an honest statement about unfinished work, not a recruitment claim** | **Strong: the homepage states the direction, this states its incompleteness** | **High; the lede names what is unfinished** | **Curiosity + agency, no hype** | **Recommended** |

**Why D.** It is the only direction that can carry all three narrative levels without a slogan. "Not finished" does the work of *Join an Exploration*; the lede's "AI infrastructure company" does *Join a Company*; the refusal to name a grand cause does *Join a Movement* by tone rather than declaration. It also matches the site's established honesty: the publications page says "No publications", the documentation page says "Nothing to read yet", the contact page states the limits of each channel. An unfinished-state hero is continuous with that voice.

**Risk and mitigation.** "Interesting" could read as self-congratulatory. Mitigation: the lede immediately replaces it with three concrete categories of unfinished work (questions, abstractions, systems). `[ALT]` If the founder prefers a question-led hero: `What would you work on here?` — slightly weaker on the "company" level.

---

## 5. The Work — complete copy `[REC]`

Section eyebrow: `01 · The open work`
Section title: `Three areas. None of them finished.`
Section lede: `These are the questions CHORD is organized around. They are directions and experiments, not completed capabilities. Start with the one you can already ask a better question about.`

### Area 1 · Sustained work

| Field | Copy |
| --- | --- |
| Index | `W/01` |
| Headline | `Agents that stay with a problem.` |
| Short description | `A paper, a product, a competition run — these do not fit inside one session. The hard failure is rarely a bad answer; it is a lost thread. WAM is built around shared context, plans revised against what actually happened, and execution that produces something checkable. Thylas is the workspace where that work sits.` |
| Technical question | `What should persist between two conversations about the same problem?` |
| Grounded in | WAM · Shared Context (`R/04`) · Dynamic Planning (`R/03`) · Agent Infrastructure (`R/01`) · Thylas · *Autonomous Research* and *Collaborative Development* (both `Research program`) |
| Status guard | WAM is the `Core framework`; Thylas is `UI MVP in progress`. Do not say the system sustains multi-week work today. |

### Area 2 · Reusable infrastructure

| Field | Copy |
| --- | --- |
| Index | `W/02` |
| Headline | `When something works once, make it usable again.` |
| Short description | `A successful trajectory contains structure: a step that can be named, bounded, checked, and run again. The Operator Paradigm — discover, abstract, compose, generalize — is our working concept for extracting it. It is a research direction. We do not claim a general operator library exists.` |
| Technical question | `When a complex operation succeeds once, what exactly can be reused?` |
| Grounded in | Operator Paradigm (homepage §06) · Reusable Operators (`R/06`) · Computational Cognition (`R/05`) · WAM's centralized scheduling core · *From operators to infrastructure* |
| Status guard | The Operator Paradigm is described on the site as "an ongoing technical direction" with no formal definition and no operator library. Keep that distance. |

### Area 3 · New computational approaches

| Field | Copy |
| --- | --- |
| Index | `W/03` |
| Headline | `Define the operation, then build the model for it.` |
| Short description | `Much of an agent's day is a small number of operations repeated. Rym asks whether a compact model built for one defined operation can perform it more precisely and cheaply than a general model invoked for everything. The boundary comes first; the model is built to satisfy it. Rym is a research direction, not a released model family.` |
| Technical question | `How small can a model be and still perform a specialized operation reliably?` |
| Grounded in | Rym · Small Language Models (`R/02`) · Computational Cognition (`R/05`) · WAM's operator boundaries |
| Status guard | No benchmark comparisons, parameter counts, or performance claims exist on this site. Do not add any here. |

**Strip after the three areas** `[REC]` — carries the "Join a Company" level without a boast:

> `What exists today: Thylas (UI MVP in progress) · WAM (core framework) · Rym (research direction) · Knock (in development). A public GitHub organization with repositories and issues. No publications yet.`
>
> `Links: About CHORD → /about · Research → /research · Developers → /developers`

`[ASSUMPTION]` Product status strings come from `src/data/site.ts` as of 2026-11-09. Re-check before publishing; if one has changed, change the string, not the sentence shape.

---

## 6. Ways to Participate — complete copy `[REC]`

**Distinctness analysis.** The four categories overlap if read as job titles. They are distinct when read as *relationships*, which is what the brief asks for:

| Category | Defining axis | Not the same as |
| --- | --- | --- |
| Core Builders | **Continuity** — staying with a system over time | A contributor who lands one patch |
| Research Collaborators | **A bounded question** — an investigation with an arguable answer | An open-ended conversation |
| Open-source Contributors | **A concrete public artifact** — code, test, doc, review | A long-term commitment |
| Independent Explorers | **No defined scope yet** — a question that may not fit our list | A research proposal |

Recommendation: **keep all four**. Coverage is complete along the axis *"how much is already defined"* (long-term system → bounded question → concrete artifact → nothing defined yet). Add one sentence so nobody reads them as mutually exclusive: `[REC]` *"These are ways of working with CHORD, not positions. The same person can enter through more than one."*

Section eyebrow: `02 · Ways to participate`
Section title: `Four ways in. None of them is a job application.`
Section lede: `Participation does not require a posted role, a title, or an invitation. It starts with a question, an artifact, or a conversation.`

### P/01 · Core Builders `[REC]`

| Field | Copy |
| --- | --- |
| For | `People who want to stay with one system long enough to be accountable for how it turns out.` |
| Might contribute | `Architecture decisions, an implementation of a layer, the discipline of keeping a system honest about its own state.` |
| What it could look like | `A sustained piece of work on WAM, Thylas, Rym, or the infrastructure underneath them — with the context that these are projects at different stages, not a finished platform.` |
| CTA | `Start with what exists → /developers` (secondary: `How to reach CHORD → /contact`) |
| Guard | No "we are hiring", no "open roles", no compensation language. `[REC]` A neutral line under this card: `We do not publish open positions on this page.` |

### P/02 · Research Collaborators `[REC]`

| Field | Copy |
| --- | --- |
| For | `People who want to investigate one question properly rather than join a broad programme.` |
| Might contribute | `A sharper question, a falsifiable experiment, a negative result, a careful reading of work already done.` |
| What it could look like | `A bounded collaboration on one of the six research directions, or on the Operator Paradigm. Results appear when they can be defended; the publications index is deliberately empty today.` |
| CTA | `Read the six questions → /research` (secondary: `Read the working concept → /#operators`) |
| Guard | No affiliation, funding, co-authorship, or access promises. |

### P/03 · Open-source Contributors `[REC]`

| Field | Copy |
| --- | --- |
| For | `People who prefer to start with something concrete and public.` |
| Might contribute | `Code, tests, documentation, a reproduction, a review, or a well-formed issue that makes a problem easier to see.` |
| What it could look like | `Work in the public GitHub organization's repositories. Read each repository's own guidance first; where a repository has none, open an issue describing what you intend to change and why. A short issue costs less than a large pull request that has to be redirected.` |
| CTA | `Developers → /developers` · `GitHub organization ↗ → https://github.com/CHORD-ai-org` |
| Guard | The GitHub link is the only external destination on this page, and it must be marked `↗ External`. `[OPEN]` Whether Discussions or Issues are enabled organization-wide is not verified — see §10. |

### P/04 · Independent Explorers `[REC]`

| Field | Copy |
| --- | --- |
| For | `People with a question, an idea, or a perspective that does not fit any of the categories above.` |
| Might contribute | `The question itself. A different framing of a problem we have been looking at from one side. A critique.` |
| What it could look like | `A first message that says what you are trying to do, what you have tried, and what a good outcome would look like. That is enough to start a conversation; it is not an application and we cannot promise a reply time.` |
| CTA | `How to reach CHORD → /contact` |
| Guard | `/contact` publishes the founder-supplied address and the GitHub organization. Use those two channels only; do not invent a third. |

---

## 7. CTA strategy and interaction destinations

**Principle.** One primary action per pathway, plus at most one secondary. No CTAs that open a form, calendar, email client, or chat widget — none exists.

| Destination | Exact URL | Status | Use |
| --- | --- | --- | --- |
| `/contact` | internal | Exists. Publishes the email address and the GitHub organization | Core Builders · Independent Explorers · closing |
| `mailto:zhaoceaseer@gmail.com` | email | Founder-supplied 2026-11-09; stored as `site.email` | P/04 secondary · closing |
| `/research` | internal | Exists. Six questions, honest status labels | Research Collaborators |
| `/#operators` | internal anchor | Exists on homepage | Research Collaborators (secondary) |
| `/developers` | internal | Exists. Names repos, issues, and contribution convention | Core Builders · Open-source Contributors |
| `https://github.com/CHORD-ai-org` | external | In `src/data/site.ts` | Open-source Contributors · closing |
| `/about`, `/vision`, `/products/*` | internal | Exist | Context links only, never primary CTAs |

**Forbidden destinations** `[REC — rule for the implementer]`: `/join/apply`, any form endpoint other than mail, Knock (`In development`), `/developers/documentation` (`In preparation`), `/research/publications` as an "apply" link (it is an empty index), any waitlist, any calendar. `mailto:` is allowed since 2026-11-09, using `site.email` only — never a second address. The only route in this document that does not exist before implementation is `/join/` itself.

**CTA labels.** Verb + object, sentence case, no terminal period: `See the open work`, `Ways to participate`, `Read the six questions`, `Start with what exists`, `How to reach CHORD`. External links carry `↗ External`.

**Honesty microcopy** `[REC]`, placed once near the bottom of the participation section:

> `There is no application form on this page. Email and the GitHub organization are the channels that reach us today.`

`[OPEN]` This sentence restates `/contact`. Confirm that duplication is acceptable before implementation; otherwise link to `/contact` and drop the second clause.

---

## 8. Footer or closing invitation `[REC]`

Section eyebrow: `03 · Closing`

> **Statement:** `The work is unfinished. That is the reason to start now.`
>
> **Line under it:** `Bring a question, an artifact, or a piece of work you want to stay with.`
>
> **Links:** `How to reach CHORD → /contact` · `Email → site.email` · `GitHub ↗ → https://github.com/CHORD-ai-org` · `Back to the homepage → /`

`[ALT]` Statement: `Start with the question you cannot stop thinking about.` — warmer, but it shifts the centre of gravity from the work to the visitor's feelings. Keep as an alternative only.

---

## 9. Full assembled page copy, in reading order

> Implementation note: section numbers `01 / 02 / 03` follow the site's editorial numbering (see homepage `02 · Why CHORD exists`). Section 00 is the hero. Monospace labels, index marks and status chips are site conventions — not new components.

**Meta**
- Title: `Join · CHORD` (i.e. `title="Join"` in `Base`)
- Description: `There is meaningful, unfinished technical work at CHORD. Three open areas, four ways to participate, and one honest channel to start a conversation.`

**00 · Hero**
- Eyebrow: `CHORD · Join`
- H1: `The interesting parts are not finished.`
- Lede: `CHORD is an AI infrastructure company building for agents that can sustain complex work. Most of that is still open: the questions, the abstractions, and the systems that would make them real. If a question here is yours too, there are several ways to start.`
- CTA 1: `See the open work ↓` → `#work`
- CTA 2: `Ways to participate →` → `#participate`
- Micro line (mono): `The homepage describes where CHORD is going. This page is about the parts that are still open.` → link `/` (or `/#products`)

**01 · The open work** (`id="work"`)
- Eyebrow: `01 · The open work`
- Title: `Three areas. None of them finished.`
- Lede: `These are the questions CHORD is organized around. They are directions and experiments, not completed capabilities. Start with the one you can already ask a better question about.`
- W/01 `Agents that stay with a problem.` — description from §5 — question: `What should persist between two conversations about the same problem?`
- W/02 `When something works once, make it usable again.` — description from §5 — question: `When a complex operation succeeds once, what exactly can be reused?`
- W/03 `Define the operation, then build the model for it.` — description from §5 — question: `How small can a model be and still perform a specialized operation reliably?`
- Status strip: `What exists today: Thylas (UI MVP in progress) · WAM (core framework) · Rym (research direction) · Knock (in development). A public GitHub organization with repositories and issues. No publications yet.`
- Links: `About CHORD` → `/about` · `Research` → `/research` · `Developers` → `/developers`

**02 · Ways to participate** (`id="participate"`)
- Eyebrow: `02 · Ways to participate`
- Title: `Four ways in. None of them is a job application.`
- Lede: `Participation does not require a posted role, a title, or an invitation. It starts with a question, an artifact, or a conversation.`
- Relationship line: `These are ways of working with CHORD, not positions. The same person can enter through more than one.`
- P/01 Core Builders — all four fields from §6 — CTA `Start with what exists` → `/developers`
- P/01 guard line: `We do not publish open positions on this page.`
- P/02 Research Collaborators — CTA `Read the six questions` → `/research`
- P/03 Open-source Contributors — CTA `Developers` → `/developers`, `GitHub organization ↗` → external
- P/04 Independent Explorers — CTA `How to reach CHORD` → `/contact` · `Email` → `mailto:` (`site.email`)
- Honesty line: `There is no application form on this page. Email and the GitHub organization are the channels that reach us today.`

**03 · Closing**
- Statement: `The work is unfinished. That is the reason to start now.`
- Line: `Bring a question, an artifact, or a piece of work you want to stay with.`
- Links: `How to reach CHORD` → `/contact` · `Email` → `site.email` · `GitHub ↗` → external · `Back to the homepage` → `/`

**Site footer** — unchanged; the Join page uses the shared footer. `[OPEN]` Whether to add a `Join` link to the footer's Company column or to the nav dropdown is a navigation decision, not a copy decision.

---

## 10. Open questions and decisions requiring human confirmation

| # | Question | Why it matters | Default if unanswered |
| --- | --- | --- | --- |
| O1 | Is there any intake channel besides the GitHub organization? | Every participation CTA ultimately lands there | **Resolved 2026-11-09:** founder supplied an email; see decisions below |
| O2 | Are Issues and Discussions enabled across the organization? | The contributor pathway says "open an issue" | `[ASSUMPTION]` The `/developers` page already says this; keep the wording, but verify before adding anything stronger |
| O3 | May the page say *"We do not publish open positions on this page"*? | It is honest, but it is also a statement about company policy | Include the line; remove if sensitive |
| O4 | Does the page need any compensation, location, or time-zone language? | Conventional hiring pages do; this one is not | No. Omit entirely |
| O5 | Keep four participation categories or merge P/02 and P/04? | They both begin with a question | Keep four; the distinction is bounded vs undefined scope |
| O6 | Where does `Join` sit in navigation? | A page with no entry point is invisible | Add to the Company dropdown and footer; confirm placement |
| O7 | Route name: `/join/` or `/join`? | Site uses directory-style routes | `/join/` with trailing-slash consistency |
| O8 | Should the page be added to `sitemap.xml` and the nav? | Both are generated/static today | Yes, at implementation time. Not a content change |
| O9 | Status strip date and strings | Product status changes faster than prose | Re-check `site.ts` on the day the page ships; do not hard-code "2026-11" in visible copy |
| O10 | Any Chinese-language version? | Site is English-only today | None |

### Decisions resolved at implementation (2026-11-09)

Founder delegated all open decisions to the implementer. The choices below are now binding; the table above is retained as the record of what was considered.

| # | Decision | Effect |
| --- | --- | --- |
| O1 | Email added after the spec was written | Founder supplied `zhaoceaseer@gmail.com` on 2026-11-09. Added to `site.ts`, `/contact` (Direct card), Join P/04 secondary and closing links. GitHub remains the public record. Still no hiring intake |
| O2 | Keep the `/developers` wording verbatim | Contributors read repo guidance, then open an issue. No claim about org-wide Discussions |
| O3 | Include the neutral line | `We do not publish open positions on this page.` appears under P/01 |
| O4 | Omit entirely | No compensation, location, or time-zone language |
| O5 | Keep four pathways | Distinguished by the "how much is already defined" axis; relationship line added |
| O6 | Company dropdown + mobile menu + footer Company column | `Nav` active state treats `/join` as Company. No sixth top-level nav item (avoids crowding at 1024) |
| O7 | `/join/` | Directory-style route matching the rest of the site |
| O8 | Add to sitemap | `public/sitemap.xml` gained `/join/` with `lastmod` 2026-11-09 |
| O9 | Re-checked `site.ts` on ship day | Status strip matches the four published strings; no hard-coded date in visible copy |
| O10 | English only | No locale work |

**Implementation deviations from the spec (recorded, not silent)**

1. The hero callback line links to `/` without an `↗` — it is internal, not external.
2. Each work row gained a short "status guard" mono line (drawn from §5's status guards) so a reader cannot mistake a research direction for a shipped capability.
3. The four pathways render as a 2×2 hairline grid rather than four stacked rows — same copy, better density at 1440.
4. All secondary mono labels use `--step--2` (11px) and `--ink-soft`, not 9px taupe — the site's small taupe fails contrast for body-adjacent text.
5. **Email supersedes the original "no direct address" assumption.** `/contact` lede and Enterprise paragraph were rewritten, the contact grid became three cards, and the Join honesty line was updated. `site.email` is the single source for the address.

## 11. Implementation constraints (inherited, restated for a future agent)

1. Reuse `SectionHead`, `Sigil`, `.btn`, `.link-arrow`, `.label`, `.mono-note`, and the site's section padding/inverted-section treatment. No new design system.
2. No new dependencies. No form, no client-side state, no JS interactions beyond in-page anchors.
3. Preserve global nav, footer, responsive behaviour, and the shared SEO/OG head. Add the Join page to the sitemap during implementation.
4. Every external link uses `target="_blank" rel="noopener"` and carries `↗ External`.
5. Never show a status verb without its label. Never turn a `Research direction` into a capability.
6. Do not copy the homepage's three commitments or architecture diagram onto this page.
7. Desktop 1440 / tablet 1024 / mobile 390: no overflow, one `h1`, all links labelled.

---

## 12. Quality review (performed, with revisions)

| Check | Verdict | Evidence / correction |
| --- | --- | --- |
| Does it feel like CHORD, not a generic AI startup? | Yes | Hero states an unfinished state; the site already does this on Publications, Documentation and Contact. No mission/vision adjectives |
| Does it show what people can actually participate in? | Yes | Three areas name a system, a question, and the projects they belong to; four pathways name a concrete first action |
| Does it invite experienced builders and independent thinkers? | Yes | P/01 and P/03 for builders, P/04 explicitly for a question that does not fit the list |
| Does it avoid unguaranteed promises? | Yes | No employment, compensation, membership, resource, affiliation, or response-time claims. Guard lines added to P/01 and P/04 |
| Does it complement rather than repeat the homepage? | Yes | One callback line, then new content. Architecture and commitments are linked, not reproduced |
| Can a visitor take a next step? | Yes | Four existing internal routes and one existing external link. No invented destination |
| Is there a recognizable voice without theatre? | Yes | Short declaratives, questions borrowed verbatim from `researchAreas`, no exclamation marks |

**Revisions made during this review**

| Draft had | Changed to | Why |
| --- | --- | --- |
| `Join the exploration` (hero) | `The interesting parts are not finished.` | "Join the" is recruitment vocabulary; the new line states a fact |
| `Bring us your ideas` | `Bring a question, an artifact, or a piece of work you want to stay with.` | Three concrete forms of participation instead of an open-ended appeal |
| `Work with us on cutting-edge agent research` | The three technical questions verbatim from `researchAreas` | Removes "cutting-edge" and replaces a claim with a question |
| `Apply as a core builder` | `Start with what exists` | Removes application framing entirely |
| A "community" CTA pointing to Knock | Removed | Knock is `In development`, with no community to join |
| A "see our papers" link | Removed | The publications index is deliberately empty |
| `We will get back to you` | `we cannot promise a reply time` | No response-time commitments exist on this site |
