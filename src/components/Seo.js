import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, BRAND } from "../site";

// Sets per-page title, description, canonical and Open Graph tags on the
// existing <head> elements from public/index.html.
export default function Seo({ title, description }) {
  const { pathname } = useLocation();
  useEffect(() => {
    const full = title ? `${title} | ${BRAND}` : BRAND;
    const url = SITE_URL + (pathname === "/" ? "/" : pathname.replace(/\/$/, ""));
    const set = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    document.title = full;
    set('meta[name="description"]', "content", description);
    set('meta[property="og:title"]', "content", full);
    set('meta[property="og:description"]', "content", description);
    set('meta[property="og:url"]', "content", url);
    set('meta[name="twitter:title"]', "content", full);
    set('meta[name="twitter:description"]', "content", description);
    set('link[rel="canonical"]', "href", url);
  }, [title, description, pathname]);
  return null;
}
