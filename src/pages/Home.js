import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { ButtonLink, CtaBand, Eyebrow, H2, Lead, Section } from "../components/ui";
import { CONTACT, PRINCIPLES, PROJECTS, SERVICES, TESTIMONIALS } from "../site";
import ridamImg from "../assets/ridam-jain.webp";

const FEATURED = ["avonplast", "rajasthani-store", "whatsapp-campaign-manager"];

const STATS = [
  ["3.5+", "years building production software"],
  ["160+", "restaurants supported on one POS network"],
  ["3,000+", "users on a platform built from zero"],
  ["3", "countries with active clients"],
];

export default function Home() {
  return (
    <>
      <Seo
        title="Web, App, Cloud & AI Development in Pali, Rajasthan"
        description="JM Technologies is run by Ridam Jain, a software engineer in Pali, Rajasthan. Websites, mobile apps, online stores, cloud hosting, WhatsApp automation and AI applications for businesses in India and worldwide."
      />

      {/* Hero */}
      <Section className="pb-10 pt-20 md:pb-16 md:pt-28">
        <Eyebrow>Software studio in Pali, Rajasthan. Clients worldwide.</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Software built the way an owner would build it.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
          I am Ridam Jain. I build websites, mobile apps, online stores and AI tools for businesses, set up the
          hosting they run on, and stay on after launch to keep them working.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={CONTACT.whatsapp}>Start a project</ButtonLink>
          <ButtonLink to="/work" variant="secondary">
            See the work
          </ButtonLink>
        </div>
        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 md:grid-cols-4">
          {STATS.map(([n, label]) => (
            <div key={label}>
              <dt className="text-3xl font-semibold tracking-tight">{n}</dt>
              <dd className="mt-1 text-sm text-slate-600">{label}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Services */}
      <div className="bg-white">
        <Section>
          <Eyebrow>Services</Eyebrow>
          <H2>What I can do for your business</H2>
          <Lead>
            One person who can take a project from the first conversation to a working product, and keep it
            running. No handoffs between departments.
          </Lead>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services#${s.slug}`}
                className="group rounded-xl border border-slate-200 bg-sand p-6 transition hover:border-ink"
              >
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
                <span className="mt-4 inline-block text-sm font-medium text-accent group-hover:underline">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </Section>
      </div>

      {/* Featured work */}
      <Section>
        <Eyebrow>Recent work</Eyebrow>
        <H2>Real businesses, real results</H2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {FEATURED.map((slug) => {
            const p = PROJECTS.find((x) => x.slug === slug);
            return (
              <article key={slug} className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.name} website homepage`}
                    width="1280"
                    height="800"
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                ) : (
                  <div className="grid aspect-[16/10] place-items-center bg-accent-soft text-accent">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4 1.7.7 2.3.8 3.1.7.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2l-.5-.3z" />
                    </svg>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{p.kind}</p>
                  <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.summary}</p>
                  <Link to={`/work#${p.slug}`} className="mt-4 text-sm font-medium text-accent hover:underline">
                    Read the case study
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-10">
          <ButtonLink to="/work" variant="secondary">
            All projects
          </ButtonLink>
        </div>
      </Section>

      {/* About teaser */}
      <div className="bg-white">
        <Section className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
          <img
            src={ridamImg}
            alt="Ridam Jain, founder of JM Technologies"
            width="460"
            height="600"
            className="w-56 rounded-xl object-cover md:w-full"
          />
          <div>
            <Eyebrow>About</Eyebrow>
            <H2>Hi, I am Ridam Jain</H2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              I am a software engineer from Pali, Rajasthan. I have spent the last few years running payments for a
              restaurant network in Ireland, building a visa platform from nothing to thousands of users, and
              shipping websites, stores and apps for small and mid-sized businesses.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              JM Technologies is named after my grandfather, Jethmal Jain, a headmaster everyone in Pali knew as
              Jethmal Master. The name is a reminder to do careful work that people can rely on.
            </p>
            <div className="mt-6">
              <ButtonLink to="/about" variant="secondary">
                More about me and the name
              </ButtonLink>
            </div>
          </div>
        </Section>
      </div>

      {/* Principles */}
      <Section>
        <Eyebrow>How I work</Eyebrow>
        <H2>Four things you can count on</H2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <div key={p.title} className="flex gap-4">
              <span className="mt-1 h-7 w-7 shrink-0 rounded-full bg-ink text-center text-sm font-semibold leading-7 text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <div className="bg-white">
        <Section>
          <Eyebrow>Clients</Eyebrow>
          <H2>What clients say</H2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="rounded-xl border border-slate-200 bg-sand p-6">
                <p className="leading-relaxed text-slate-700">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-4 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-slate-500"> &middot; {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>
      </div>

      <CtaBand />
    </>
  );
}
