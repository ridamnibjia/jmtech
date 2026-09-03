import Seo from "../components/Seo";
import { CtaBand, Eyebrow, Lead, Section, Tags } from "../components/ui";
import { PROJECTS } from "../site";

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
    >
      {children}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </a>
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

      <div className="mx-auto max-w-6xl space-y-8 px-5 pb-20">
        {PROJECTS.map((p) => (
          <article
            key={p.slug}
            id={p.slug}
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid md:grid-cols-[1.1fr_1fr]"
          >
            {p.image ? (
              <div className="border-b border-slate-200 bg-white md:border-b-0 md:border-r">
                <img
                  src={p.image}
                  alt={`${p.name} website homepage`}
                  width="1280"
                  height="800"
                  loading="lazy"
                  className="w-full"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center border-b border-slate-200 bg-accent-soft p-10 md:border-b-0 md:border-r">
                <div className="text-center">
                  <p className="text-5xl font-semibold tracking-tight text-accent">
                    {p.name
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </p>
                  <p className="mt-2 text-sm text-accent-dark">{p.kind}</p>
                </div>
              </div>
            )}
            <div className="p-7 md:p-9">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {p.kind} &middot; {p.year}
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight">{p.name}</h2>
              <p className="mt-3 leading-relaxed text-slate-700">{p.summary}</p>
              <ul className="mt-5 space-y-2.5">
                {p.details.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <Tags items={p.stack} />
              <div className="mt-6 flex flex-wrap gap-5">
                {p.url && <ExternalLink href={p.url}>{p.url.replace(/^https?:\/\//, "").split("/")[0]}</ExternalLink>}
                {p.repo && <ExternalLink href={p.repo}>Source on GitHub</ExternalLink>}
              </div>
            </div>
          </article>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
