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

The public site is a **single-view page** — one screen, no scrolling, at
`src/pages/index.astro`. It introduces the company, carries PodPDF as the
portfolio piece, and names the founder. Everything else is archived.

```
src/
  layouts/Base.astro        # HTML shell, fonts, SEO meta, Organization JSON-LD
  components/Logo.astro     # wordmark; tone="light" for dark grounds
  components/Nav.astro      # used only by archived pages
  components/Footer.astro   # used only by archived pages
  components/Icon.astro     # inline line-icon set
  pages/index.astro         # the live single-view page
  styles/global.css         # tailwind entry + design-system component classes
  content/blog/             # article route (/blog/<slug>), unlinked
public/                     # favicon, logo
docs/pdf-use-cases.md       # what we do and do not offer
tailwind.config.mjs         # brand palette (brand / slate / mist) + fonts
```

### Design system

- **Palette** — white and `mist` grounds, a light-blue `brand` scale for
  accents, a cool-grey `slate` scale for text and borders. Legacy `ink` /
  `accent` / `spark` tokens are kept only so the archived pages compile.
- **Type** — Source Serif 4 for headlines (`font-serif`, the `.h2` class),
  Inter for everything structural, JetBrains Mono for eyebrows and metadata.
- No scroll animations, by design.

### Keeping the page to one view

It fits exactly one viewport at both desktop and 375x812. If you add content,
re-check `document.documentElement.scrollHeight` against `window.innerHeight`
at both sizes. On phones the service chips and the standalone email link are
hidden (`hidden sm:flex` / `hidden sm:inline`) to buy the room — that is what
keeps it fitting, so removing those classes will reintroduce scrolling.

## Archived

Earlier versions of the site are kept but unrouted (Astro ignores
`src/pages/` files prefixed with `_`):

- `_legacy-pipelines.astro` / `_legacy-pipelines-about.astro` — the
  document-processing pipelines site (use cases, capabilities, architecture,
  pricing). The fullest version of the business written down.
- `_legacy-dryrun.astro` / `_legacy-about.astro` — the original simulation
  and games studio site.
- `src/components/diagrams/`, `src/components/GameCard.astro` — used by those.

To bring one back, rename it to `index.astro` (and `about.astro`).

## Contact

zameer@xadlabs.com
