import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, BRAND } from "../site";

// The last <Seo> rendered during a server render. prerender.mjs reads this
// after renderToString to fill in <head> for each static page.
let pending = null;
export function takeMeta() {
  const m = pending;
  pending = null;
  return m;
}

export function pageUrl(pathname) {
  return SITE_URL + (pathname === "/" ? "/" : pathname.replace(/\/$/, ""));
}

// Sets per-page title, description, canonical and Open Graph tags. On the
// server it records them for the prerender step; in the browser it updates
// the existing <head> elements on navigation.
// alternates: [{ hreflang, href }] for pages that exist in another language.
export default function Seo({ title, description, jsonLd, type = "website", image, lang = "en", alternates }) {
  const { pathname } = useLocation();
  const full = title ? `${title} | ${BRAND}` : BRAND;
  const url = pageUrl(pathname);
  pending = {
    title: full,
    description,
    url,
    type,
    image,
    lang,
    alternates: (alternates || []).map((a) => ({ ...a, href: pageUrl(a.href) })),
  };

  useEffect(() => {
    const set = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el && value) el.setAttribute(attr, value);
    };
    document.title = full;
    document.documentElement.lang = lang;
    set('meta[name="description"]', "content", description);
    set('meta[property="og:title"]', "content", full);
    set('meta[property="og:description"]', "content", description);
    set('meta[property="og:url"]', "content", url);
    set('meta[property="og:type"]', "content", type);
    set('meta[name="twitter:title"]', "content", full);
    set('meta[name="twitter:description"]', "content", description);
    set('link[rel="canonical"]', "href", url);
  }, [full, description, url, type, lang]);

  if (!jsonLd) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
