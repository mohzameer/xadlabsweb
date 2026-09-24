# XAD Labs — Web

Marketing site for [XAD Labs](https://xadlabs.com) — an independent engineering
company building custom document processing pipelines for runs of ten thousand
to several million PDFs, and the team behind [PodPDF](https://podpdf.com).
Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## Develop

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Build

```bash
npm run build      # outputs to ./dist
npm run preview    # preview the production build locally
```

## Deploy (Vercel)

Vercel auto-detects Astro — no config needed. Build command `npm run build`,
output directory `dist`.

## Structure

```
src/
  layouts/Base.astro        # HTML shell, fonts, meta
  components/Nav.astro      # sticky nav; variant="overlay" for dark-hero pages
  components/Footer.astro   # site footer
  components/Logo.astro     # wordmark; tone="light" for dark grounds
  components/Icon.astro     # inline line-icon set
  pages/index.astro         # the landing page — all sections live here
  pages/about.astro         # longer company / founder page
  styles/global.css         # tailwind entry + design-system component classes
  content/blog/             # article route (/blog/<slug>), unlinked from nav
public/                     # favicon, logo
tailwind.config.mjs         # brand palette (brand / slate / mist) + fonts
```

### Design system

- **Palette** — white and `mist` grounds, a light-blue `brand` scale for
  accents, a cool-grey `slate` scale for text and borders. Legacy `ink` /
  `accent` / `spark` tokens are kept only so the archived pages still compile.
- **Type** — Source Serif 4 for headlines (`font-serif`, the `.h2` class),
  Inter for everything structural, JetBrains Mono for eyebrows and metadata.
- **Hero** — dark blue ground (`.hero-ground`) with the nav overlaid on top.
  Pages that open with it pass `variant="overlay"` to `Nav` and add `pt-16`
  to the hero section; the nav turns solid white once the page is scrolled.
- No scroll animations, by design.

## Editing content

Everything on the landing page is driven by arrays at the top of
`src/pages/index.astro`: `strip`, `runStages`, `useCases`,
`reportFindings`, `capabilities`, `principles`, `steps` and `pricing`. Edit those rather than
the markup.

What we do and do not offer is tracked in
[`docs/pdf-use-cases.md`](docs/pdf-use-cases.md) — keep the `capabilities`
array and that document in step.

**Placeholders to fill in:** bracketed values such as `[fixed fee]`,
`[quoted]`, `[turnaround]` and `[duration]` in the `pricing` and `steps`
arrays.

## Archived

The previous simulation/games site is kept but unrouted (Astro ignores
`src/pages/` files prefixed with `_`):

- `src/pages/_legacy-dryrun.astro` — the old Dry Run landing page
- `src/pages/_legacy-about.astro` — the old about page
- `src/components/diagrams/`, `src/components/GameCard.astro` — used by those

## Contact

zameer@xadlabs.com
