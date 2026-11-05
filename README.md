# chord-ai-org.github.io

Official website of CHORD — AI infrastructure for autonomous agents.

Live: https://chord-ai-org.github.io/

## Stack

- [Astro](https://astro.build) 5, static output, zero client framework
- TypeScript, plain CSS with design tokens (`src/styles/tokens.css`)
- No database, no server — the build produces static HTML
- Deployed to GitHub Pages via `.github/workflows/deploy.yml`

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # preview the built site
npm run check    # type + template checks
```

## Structure

```
src/
  components/     Nav, Footer, Hero, Sigil, ProductFigure, Architecture, …
  data/           site.ts (products, navigation, research areas)
                  productContent.ts (per-product page copy)
  layouts/        Base.astro (head, meta, reveal observer)
  pages/          index, about, vision, contact, 404
                  products/[slug], research/*, developers/*
  scripts/        sphere.ts (hero canvas sculpture)
  styles/         tokens.css, global.css
public/           favicon.svg
```

## Brand system

| Token | Value | Use |
| --- | --- | --- |
| `--ivory` | `#f1ebdd` | page background |
| `--ink` | `#493626` | primary type |
| `--taupe` | `#927b65` | secondary type, labels |
| `--terracotta` | `#b56f50` | accent, marks |
| `--ink-deep` | `#2a1d13` | inverted sections, footer |

Type: Archivo (display + body) and JetBrains Mono (labels, numerals), loaded from Google Fonts.

The four product marks (τ ω γ κ) are drawn as SVG construction geometry in
`src/components/Sigil.astro` — stroke-based, same 100×100 grid, same weight system.
They are not typeset characters.

## Motion

- `src/scripts/sphere.ts` — particle shell, two construction rings, two solid satellites.
  Particles form once on load, then rotate. Renders a single static frame when
  `prefers-reduced-motion: reduce` is set, pauses when off-screen or the tab is hidden.
- Scroll reveals are opt-in (`data-reveal`) and disabled under reduced motion.

## Deployment

Push to `main` → GitHub Actions builds and deploys. Repository Pages settings must use
**GitHub Actions** as the source.

## Deployment note

This site is served from the organization root domain, so `base` is `/`. If it is ever
served from a project subpath, set `base` in `astro.config.mjs` accordingly.

## License

GPL-3.0 — see [LICENSE](./LICENSE).
