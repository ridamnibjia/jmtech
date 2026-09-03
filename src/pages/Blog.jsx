import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { CtaBand, Eyebrow, Lead, Section } from "../components/ui";
import { POSTS, formatDate } from "../blog";
import { CONTACT, OWNER, SITE_URL } from "../site";
import NotFound from "./NotFound";

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog: Websites, Apps and Getting Found Online in Rajasthan"
        description="Plain-language guides from JM Technologies on websites, online stores, WhatsApp Business API, Google listings and hosting for businesses in Pali, Jodhpur and across India."
      />
      <Section className="pb-8">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Notes for business owners</h1>
        <Lead>
          Short, practical guides on the questions I get asked most: what a website should cost, how to show up
          on Google, and how to use WhatsApp properly for a business.
        </Lead>
      </Section>
      <div className="mx-auto max-w-6xl px-5 pb-20">
        <ul className="grid gap-6 md:grid-cols-2">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`} className="block h-full rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-ink">
                <p className="text-xs text-slate-500">{formatDate(p.date)}</p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight">{p.title}</h2>
                <p className="mt-2 leading-relaxed text-slate-600">{p.description}</p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">Read</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <CtaBand />
    </>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return <NotFound />;
  const url = `${SITE_URL}/blog/${post.slug}`;
  return (
    <>
      <Seo
        title={post.title}
        description={post.description}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          url,
          mainEntityOfPage: url,
          author: { "@type": "Person", name: OWNER, url: `${SITE_URL}/about` },
          publisher: { "@id": `${SITE_URL}/#business` },
          inLanguage: "en",
        }}
      />
      <article className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <Link to="/blog" className="text-sm font-medium text-accent hover:underline">
          Blog
        </Link>
        <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-sm text-slate-500">
          {OWNER} &middot; {formatDate(post.date)} &middot; {CONTACT.city}
        </p>
        <div className="post mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <CtaBand />
    </>
  );
}
