import Seo from "../components/Seo";
import { Bullets, CtaBand, ExternalLink, Eyebrow, Lead, Section, Tags } from "../components/ui";
import { PROJECTS } from "../site";

export function ProjectCard({ p, compact = false }) {
  return (
    <article
      id={p.slug}
      className="flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
    >
      <a
        href={p.url || p.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-b border-slate-200 bg-slate-100"
        aria-label={`Open ${p.name}`}
      >
        <img
          src={p.image}
          alt={p.imageAlt}
          width="1280"
          height="800"
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top"
        />
      </a>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {p.kind} &middot; {p.year}
        </p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight">{p.name}</h2>
        <p className="mt-2 leading-relaxed text-slate-700">{p.summary}</p>
        {!compact && (
          <>
            <Bullets items={p.details} className="mt-4" />
            <Tags items={p.stack} />
          </>
        )}
        <div className="mt-5 flex flex-wrap gap-5 pt-1 md:mt-auto md:pt-5">
          {p.url && <ExternalLink href={p.url}>{p.url.replace(/^https?:\/\//, "").split("/")[0]}</ExternalLink>}
          {p.repo && <ExternalLink href={p.repo}>Source on GitHub</ExternalLink>}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <>
      <Seo
        title="Work: Websites, Stores, Apps and Tools I Have Built"
        description="Case studies from JM Technologies: the Avonplast manufacturer website, the Rajasthani Store e-commerce rescue, an open source WhatsApp campaign manager, and Android apps on Google Play."
      />
      <Section className="pb-8">
        <Eyebrow>Work</Eyebrow>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Projects and case studies</h1>
        <Lead>
          What was wrong, what I did, and what it runs on. Live links where the client site is public, and
          source code where the project is open source.
        </Lead>
      </Section>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-20 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>

      <CtaBand />
    </>
  );
}
