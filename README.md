# Manish's Portfolio

A Next.js portfolio site configured for **free static deployment on Netlify**.

## Tech stack

- Next.js 13 (App Router)
- React 18
- Tailwind CSS
- Three.js star background
- Framer Motion animations

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

The static site is exported to the `out/` directory.

## Deploy to Netlify (free tier)

This project uses **static export** (`output: "export"`), which works well on Netlify's free plan:

- No serverless functions required
- Fast CDN delivery
- Simple build pipeline

### Option 1: Connect GitHub (recommended)

1. Push this repo to GitHub.
2. In [Netlify](https://app.netlify.com/), click **Add new site → Import an existing project**.
3. Select your repository.
4. Netlify reads settings from `netlify.toml` automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
   - **Node version:** 18
5. Click **Deploy site**.

### Option 2: Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=out
```

### Custom domain

In Netlify: **Site settings → Domain management → Add custom domain**. Netlify provides free HTTPS.

## Project structure

```
app/                  # Next.js App Router pages
components/           # UI and section components
constants/            # Skills, social links, project cards
data/                 # Project detail JSON (used by project pages)
lib/                  # Shared types and utilities
public/               # Static assets (images, icons)
netlify.toml          # Netlify build and cache headers
```

## Notes

- Images use `unoptimized: true` because static export does not include Next.js Image Optimization.
- Project pages import JSON at build time, so all routes are pre-rendered as static HTML.
