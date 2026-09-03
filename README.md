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

## Analytics

Two options, pick one:

1. **Cloudflare Web Analytics** (free, no cookies, no code). In the Cloudflare dashboard open
   Workers & Pages, then the `jmtech` project, then Settings, then Metrics, and click Enable. Cloudflare
   injects the script itself.
2. **Google Analytics 4.** Paste the GA4 snippet from Google into `index.html` just before `</head>`.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in build/
npm run deploy     # build and upload to Cloudflare Pages (needs `wrangler login`)
```

Pushing to `main` on GitHub also triggers a Cloudflare Pages build (Node 22, see `.node-version`).
