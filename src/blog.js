import { marked } from "marked";

// Posts are markdown files in src/posts/. Front matter at the top:
// ---
// title: ...
// description: ...
// date: 2026-09-03
// ---
const files = import.meta.glob("./posts/*.md", { query: "?raw", import: "default", eager: true });

function parse(path, raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  const meta = {};
  for (const line of (m ? m[1] : "").split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return {
    slug: path.replace(/^.*\/(.+)\.md$/, "$1"),
    title: meta.title || "",
    description: meta.description || "",
    date: meta.date || "",
    html: marked.parse(m ? m[2] : raw),
  };
}

export const POSTS = Object.entries(files)
  .map(([path, raw]) => parse(path, raw))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function formatDate(iso) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
