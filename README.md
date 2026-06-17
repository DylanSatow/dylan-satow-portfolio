# dylansatow.com

Personal portfolio, rebuilt from the ground up. Styled as a focused window in a
tiling window manager — Catppuccin Mocha, JetBrains Mono, sharp corners.

## Stack

- **SvelteKit (Svelte 5 runes)** — fully prerendered to static HTML, zero VDOM
- **Tailwind CSS v4** — design tokens in `src/app.css`
- **mdsvex** — Markdown blog posts (`src/lib/posts/*.md`)
- **adapter-vercel** — static output served from the CDN

## Design goals

- **Fast** — every route is static HTML; ~48 KB gzipped JS (framework + router),
  one preloaded subset font (~31 KB), no render-blocking requests.
- **Mobile-first** — `100dvh`, full-bleed window on phones, 44px+ touch targets,
  touch-aware status bar.
- **Cross-platform UX** — scroll/tap/click everywhere; vim keys (`h/l/j/k`, `?`)
  are an additive enhancement, never required. Full keyboard (Tab/Enter) support.
- **Accessible** — semantic landmarks, skip link, `:focus-visible`, WCAG-AA
  contrast, `prefers-reduced-motion` honored.

## Develop

```sh
pnpm install
pnpm dev          # local dev server
pnpm build        # production build (prerenders every route)
pnpm preview      # serve the production build
pnpm check        # svelte-check (types + a11y)
```

## Content

All content lives in `src/lib/data.ts`; sections/nav in `src/lib/nav.ts`; blog
posts are Markdown in `src/lib/posts/`.

## Assets

Icons and the social card are generated from source SVG:

```sh
node scripts/raster-icons.mjs   # favicon.svg -> favicon.png + apple-touch-icon.png
node scripts/gen-og.mjs         # -> static/og.png (1200x630 site social card)
node scripts/gen-blog-og.mjs    # -> static/og/<slug>.png (per-post social cards)
```

Run `gen-blog-og.mjs` after adding or renaming a blog post so its social card exists.
