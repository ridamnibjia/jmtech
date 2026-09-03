import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { takeMeta } from "./components/Seo";
import { POSTS } from "./blog";

// Every URL that gets its own static HTML file at build time.
export const routes = ["/", "/services", "/work", "/about", "/contact", "/blog", ...POSTS.map((p) => `/blog/${p.slug}`)];

export function render(url) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  return { html, meta: takeMeta() };
}
