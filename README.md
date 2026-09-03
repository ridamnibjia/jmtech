# JM Technologies website

Company site for JM Technologies (Ridam Jain, Pali, Rajasthan). Live at https://jmtech.pages.dev.

React (Create React App) + Tailwind CSS, hosted on Cloudflare Pages.

## Edit content

Every fact on the site lives in `src/site.js`: contact details, services, projects, testimonials and the
"how I work" principles. Edit that file, not the pages. Images go in `src/assets/` (project screenshots,
portraits).

Page-specific copy: `src/pages/Home.js`, `Services.js`, `Work.js`, `About.js`, `Contact.js`.

SEO: per-page title and description are set at the top of each page with `<Seo />`. Site-wide tags,
Open Graph and JSON-LD structured data are in `public/index.html`. When a page is added, also add it to
`public/sitemap.xml`. Change `SITE_URL` in `src/site.js` and the URLs in `public/index.html`,
`public/robots.txt` and `public/sitemap.xml` if the domain changes.

## Run

```bash
npm install
npm start          # http://localhost:3000
npm run build      # production build in build/
npm run deploy     # build and upload to Cloudflare Pages (needs `wrangler login`)
```

Pushing to `main` on GitHub also triggers a Cloudflare Pages build.
