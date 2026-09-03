// Turns the client build into static HTML, one file per route, so search
// engines and AI agents get full content without running JavaScript.
// Runs after `vite build` and the SSR build (see package.json "build").
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const OUT = "build";
const SITE_URL = "https://jm.ridamjain.com";
const template = readFileSync(join(OUT, "index.html"), "utf8");
const { render, routes } = await import("./build-ssr/entry-server.mjs");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function page(route) {
  const { html, meta } = render(route);
  let out = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  if (meta) {
    out = out
      .replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`)
      .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${meta.url}$2`)
      .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${meta.url}$2`)
      .replace(/(<meta property="og:type" content=")[^"]*(")/, `$1${meta.type}$2`)
      .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(meta.title)}$2`)
      .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`)
      .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(meta.title)}$2`)
      .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`);
    if (meta.image) {
      out = out
        .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${meta.image}$2`)
        .replace(/(<meta name="twitter:image" content=")[^"]*(")/, `$1${meta.image}$2`);
    }
  }
  return out;
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = [];
for (const route of routes) {
  // Cloudflare Pages serves build/about.html at /about (and /about.html redirects there).
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  mkdirSync(dirname(join(OUT, file)), { recursive: true });
  writeFileSync(join(OUT, file), page(route));
  sitemap.push(`  <url><loc>${SITE_URL}${route === "/" ? "/" : route}</loc><lastmod>${today}</lastmod></url>`);
}
// Unknown paths get the real 404 page with a 404 status.
writeFileSync(join(OUT, "404.html"), page("/this-page-does-not-exist"));
writeFileSync(
  join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.join("\n")}\n</urlset>\n`
);
rmSync("build-ssr", { recursive: true, force: true });
console.log(`prerendered ${routes.length} pages + 404.html, sitemap.xml`);
