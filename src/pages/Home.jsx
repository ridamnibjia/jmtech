import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { ButtonLink, CtaBand, Eyebrow, H2, Lead, Section } from "../components/ui";
import { AREAS, CONTACT, INITIATIVE, PRINCIPLES, PROJECTS, SERVICES } from "../site";
import { POSTS, formatDate } from "../blog";
import { ProjectCard } from "./Work";
import ridamImg from "../assets/ridam-jain.webp";

const FEATURED = ["avonplast", "rajasthani-store", "whatsapp-campaign-manager"];

export default function Home() {
  return (
    <>
      <Seo
        title="Web, App, Cloud & AI Development in Pali, Rajasthan"
        description="JM Technologies is run by Ridam Jain, a software engineer in Pali, Rajasthan. Websites, mobile apps, online stores, cloud hosting, WhatsApp automation and AI applications for businesses in Pali, Jodhpur, across India and worldwide."
        alternates={[
          { hreflang: "en", href: "/" },
          { hreflang: "hi", href: "/hi" },
          { hreflang: "x-default", href: "/" },
        ]}
      />

      {/* Hero */}
      <Section className="pb-16 pt-20 md:pb-24 md:pt-28">
        <Eyebrow>Software studio in Pali, Rajasthan. Clients worldwide.</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Software built the way an owner would build it.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
          I am Ridam Jain. I build websites, mobile apps, online stores and AI tools for businesses, set up the
          hosting they run on, and stay on after launch to keep them working.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href={CONTACT.booking}>Book a free call</ButtonLink>
          <ButtonLink to="/work" variant="secondary">
            See the work
          </ButtonLink>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 text-sm font-medium text-slate-600 hover:text-ink"
          >
            or message on WhatsApp
          </a>
        </div>
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
          {FEATURED.map((slug) => (
            <ProjectCard key={slug} p={PROJECTS.find((x) => x.slug === slug)} compact />
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink to="/work" variant="secondary">
            All projects and case studies
          </ButtonLink>
        </div>
      </Section>

      {/* About teaser */}
      <div className="bg-white">
        <Section className="grid items-center gap-12 md:grid-cols-[300px_1fr]">
          <img
            src={ridamImg}
            alt="Ridam Jain, founder of JM Technologies"
            width="800"
            height="1000"
            className="w-64 rounded-2xl object-cover md:w-full"
          />
          <div>
            <Eyebrow>About</Eyebrow>
            <H2>Hi, I am Ridam Jain</H2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              I am a software engineer from Pali, Rajasthan. Over the last few years I have built products across
              many industries. Most recently I built a visa platform from zero to thousands of users together with
              Priyesh Sharma (kenu73 on X), and helped a startup grow its brand and set up its operations. I build
              websites, mobile apps, online stores, cloud hosting and WhatsApp automation for small and mid-sized
              businesses.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              JM Technologies is named after my grandfather, Jethmal Jain, a headmaster from Jalore who built a
              textile business in Pali and was known to everyone as Jethmal Master.
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

      {/* Local */}
      <div className="bg-white">
        <Section>
          <div className="max-w-3xl">
            <Eyebrow>Local first</Eyebrow>
            <H2>{INITIATIVE.title}</H2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{INITIATIVE.text}</p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              I meet in person across {AREAS.join(", ")}. Everyone else, I work with online.
            </p>
            <div className="mt-6">
              <ButtonLink to="/contact" variant="secondary">
                Get in touch
              </ButtonLink>
            </div>
          </div>
        </Section>
      </div>

      {/* Blog */}
      <Section>
        <Eyebrow>Blog</Eyebrow>
        <H2>Notes for business owners</H2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {POSTS.slice(0, 3).map((p) => (
            <li key={p.slug}>
              <Link to={`/blog/${p.slug}`} className="block h-full rounded-xl border border-slate-200 bg-white p-6 transition hover:border-ink">
                <p className="text-xs text-slate-500">{formatDate(p.date)}</p>
                <h3 className="mt-2 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
