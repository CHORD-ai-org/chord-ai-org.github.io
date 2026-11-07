# Thylas Page — Visual Direction

**Status:** executed (SP-02). Awaiting founder review (gate before SP-03).
**Parent brand:** CHORD site system (Archivo / JetBrains Mono, ivory-ink-taupe-terracotta) + Thylas `branding-desk.md` ("Quiet Computationalism").
**The tension, resolved up front [C]:** the Thylas brand forbids ambient motion *inside the product* ("nothing moves before the user acts"). This page is a **CHORD website surface**, not the product UI, so it keeps the site's motion language (one ambient hero, reveal-on-scroll). What it imports from Thylas is the **visual grammar**: continuous hairlines, 4px rhythm, one accent for state, mono readouts, no glass, no gradient.

---

## 1. Tokens — additive extension to `src/styles/tokens.css`

```css
/* Thylas product-surface tones (from Thylas design/tokens.css) */
--surface:      #FBF9F4;  /* raised panels, schematic "screens" */
--paper:        #F7F2E9;  /* whiteboard ground */
--line:         #E6DED1;  /* hairline on raised surfaces */
--paper-grid:   rgba(73, 54, 38, 0.14); /* 16px dot grid — the only pattern, whiteboard only */
```

Rules: these appear **only** inside Thylas-page components in SP-04; other pages are untouched. `--accent` budget per viewport: ≤ 4 elements (P1 of the product desk, relaxed for a long page, not per 400px crop).

## 2. Typography on this page

Site fonts stay (Archivo/JetBrains Mono). Thylas's IBM Plex is a product-UI voice, not a website voice; importing it would fork the site identity. The page borrows Thylas's **type behaviour** instead:

- Mono uppercase index labels with a 6px tick (`WORKSPACE · 02`) — the product's "index mark", adopted as the page's section device.
- Numbers, ids and states always mono: `run #12`, `queued`, `N1`.
- Body max-width 62ch; display steps: hero clamp(2.6rem→5.5rem), section 2.25rem.

## 3. The page visual system — three object types

Everything drawn on this page is one of three constructions, all in ink/taupe lines on ivory/surface:

| Object | Construction | Used for |
| --- | --- | --- |
| **Screen schematic** | A `--surface` rectangle, 1px `--line` border, internal hairline regions, mono labels, one state dot | Capabilities (§2) — what the product's areas look like, abstracted |
| **Board schematic** | `--paper` rectangle with the 16px dot grid, 2px-radius cards, an edge line, a `run #12` provenance tag | Whiteboard block; hero candidate A |
| **Boundary diagram** | Two columns of owned-state items separated by a strong vertical rule with a 1px gap the intent line crosses | Architecture (§4); hero candidate B |

Forbidden: gradients, blur, rounded card grids, icon soup, illustration, anything resembling a real screenshot with fake content.

## 4. Hero — three compositions

**A · "The Room" (recommended [P → D2]).**
A wide board schematic: dot-grid ground, four authored cards (a file tile `PDF`, a note `[[wikilinks]]`, a section label, a live card with a terracotta edge + `run #12` tag), one intent line entering from the left edge, labelled `intent →`, crossing the board's left rule. The headline sits left of it on ivory. Reads as "a room with stuff in it" in three seconds; is specific to Thylas (no other CHORD product could use it); static, cheap, honest.
Variant: the live card's state dot pulses (600ms ×2 then still) — the one permitted product-brand motion, used once.

**B · "State ownership".**
Two columns (YOU/THYLAS | WAM) with the boundary rule between; the intent line crosses left→right and an artifact line returns right→left labelled `produced by run #12`. Strong conceptually, but it is §4's diagram — using it twice wastes it, and as a hero it explains before it orientates.

**C · "τ orbit".**
Particle sphere + τ sigil, kin to the homepage hero. Cheapest, most brand-consistent, and the most generic — it could sit on any CHORD page. Rejected as primary; the τ sigil still appears in the hero eyebrow.

## 5. Section wireframes

```
01 HERO (100vh-ish, rule-bottom)
┌──────────────────────────────────────────────────────────┐
│ CHORD ─ τ ─ APPLICATION LAYER            [status mono]   │
│ A computational workspace            ┌─────────────────┐ │
│ for human-AI collaboration.          │ board schematic │ │
│ lede 42ch                            │ (option A)      │ │
│ [What it does today] [How it fits →] └─────────────────┘ │
└──────────────────────────────────────────────────────────┘

02 THE WORKSPACE — 6 capability rows (index / name+status / schematic / copy)
   each row: hairline top; schematic column alternates left/right
   honesty strip after row 6: mono, rules above+below

03 BEYOND — 3 "not this" rows: refuted product / because / instead
   closing provenance line, mono

04 ARCHITECTURE — boundary diagram full-width, ownership table under it,
   rule pull-quote ("collects / decides / reports"), mono footnote for WAM/Rym/Knock

05 DESIGN PHILOSOPHY — dark section (--ink-deep) mirroring the homepage
   Operator Paradigm: 3 principles, pull-quote, one accent

06 DEVELOPMENT — ivory. 4 stage rows (Working today / In development /
   Not started / Deferred) with mono item lists; N1/N2/N5 footnote

07 CLOSING — large statement, 4 links, no newsletter, no fake CTA
```

## 6. Motion spec (preview of SP-03)

| Element | Behaviour |
| --- | --- |
| Hero board schematic | Static; optional single 600ms×2 state-dot pulse |
| Scroll reveal | Site-wide `data-reveal`, 780ms, once |
| Capability schematics | Static; hover raises border tone only (`--line` → `--line-strong`), no lift, no shadow |
| Reduced motion | Everything static; pulse off |

## 7. Lo-fi prototype

`prototypes/hero-lofi.html` — single static file, site tokens inline, all seven sections at skeleton fidelity with the real copy from CONTENT-STRATEGY §4. Purpose: let the founder judge positioning and layout in the browser without any build step. Not production code; SP-04 rebuilds in Astro components.

## 8. Acceptance (SP-02)

- [x] Tokens additive, palette unchanged.
- [x] Hero options distinct, each justifiable; recommendation stated.
- [x] Wireframes fit the approved copy without truncation.
- [x] No fake screenshots anywhere in the system.
- [ ] Founder picks D2 (hero) and D4 (prototype → SP-03 or refine).
