# JM Technologies website

Company site for JM Technologies (Ridam Jain, Pali, Rajasthan). Live at https://jm.ridamjain.com.
The old address https://jmtech.pages.dev forwards there.

React + Vite + Tailwind CSS, hosted on Cloudflare Pages (project `jmtech`).

## Edit content

Every fact on the site lives in `src/site.js`: contact details, booking link, services, projects,
testimonials and the "how I work" principles. Edit that file, not the pages. Images go in `src/assets/`
(project screenshots, portraits).

Page-specific copy: `src/pages/Home.jsx`, `Services.jsx`, `Work.jsx`, `About.jsx`, `Contact.jsx`.

SEO: per-page title and description are set at the top of each page with `<Seo />`. Site-wide tags,
Open Graph and JSON-LD structured data are in `index.html`. When a page is added, also add it to
`public/sitemap.xml`. If the domain changes, update `SITE_URL` in `src/site.js` and the URLs in
`index.html`, `public/robots.txt` and `public/sitemap.xml`.

## Write a blog post

Add a markdown file to `src/posts/`. The file name becomes the URL (`my-post.md` is `/blog/my-post`).
Start it with:

```
---
title: The title shown on the page and in Google
description: One or two sentences. Used for the search snippet and the card.
date: 2026-09-10
---
```

Then write in plain markdown. Build and deploy; the post, sitemap entry and schema are generated.

## How the build works

`npm run build` runs Vite for the browser bundle, again for a server bundle, then `prerender.mjs`
renders every route to a static HTML file (`build/about.html`, `build/blog/<slug>.html`, `404.html`) and
writes `sitemap.xml`. Cloudflare Pages serves `about.html` at `/about`. Search engines and AI agents
therefore get full content without JavaScript; React then hydrates for client-side navigation.

## Analytics

Cloudflare Web Analytics is wired in `index.html` (beacon script before `</body>`). View it in the
Cloudflare dashboard under Analytics & Logs, then Web Analytics.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in build/
npm run deploy     # build and upload to Cloudflare Pages (needs `wrangler login`)
```

Pushing to `main` on GitHub also triggers a Cloudflare Pages build (Node 22, see `.node-version`).
