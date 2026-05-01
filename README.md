# XAD Labs — Web

Landing site for [XAD Labs](https://xadlabs.com), built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

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
  layouts/Base.astro    # HTML shell, fonts, meta
  pages/index.astro     # the only page
  styles/global.css     # tailwind entry + base styles
public/                 # static assets (favicon, images)
```

## Contact

zameer@xadlabs.com
