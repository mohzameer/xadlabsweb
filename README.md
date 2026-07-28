# XAD Labs — Web

Marketing site for [XAD Labs](https://xadlabs.com) — an educational gaming &
simulation studio building serious games for corporate, workforce, and field
learning. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

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

1. Push this repo to GitHub.
2. Import the repo into Vercel.
3. Vercel auto-detects Astro — no config needed. The build command is `npm run build` and the output directory is `dist`.

## Structure

```
src/
  layouts/Base.astro       # HTML shell, fonts, meta, scroll-reveal
  components/Nav.astro      # sticky top navigation
  components/Footer.astro   # site footer
  pages/index.astro         # single-page landing (hero, approach, games, research, about, contact)
  styles/global.css         # tailwind entry, design-system component classes
  content/blog/             # optional article route (/blog/<slug>), unlinked from nav
public/                     # static assets (favicon, game cover images)
tailwind.config.mjs         # brand palette (ink / accent / spark) + fonts
```

## Adding a real game to the portfolio

Games are defined in the `games` array at the top of `src/pages/index.astro`.
To feature a live title: drop a 16:9 cover image in `/public`, then set the
card's `href` (play/store link), `status: 'live'`, and copy. In-development
slots use `status: 'dev'` and link to `#contact`.

## Contact

zameer@xadlabs.com
