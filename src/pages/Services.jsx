import Seo from "../components/Seo";
import { Bullets, CtaBand, Eyebrow, H2, Lead, Section, Tags } from "../components/ui";
import { SERVICES } from "../site";

const PROCESS = [
  ["Call", "A free 30-minute conversation about your business, what the software must do, and what you already have."],
  ["Scope and quote", "A written scope with a fixed price where the work is clear, or a day rate where it is not. No surprises later."],
  ["Build in the open", "You get a staging link within days and see progress as it happens, not at the end. A business website is live within one week."],
  ["Launch and handover", "Deployment, DNS, analytics, and a plain-English document explaining how everything works."],
  ["Support", "Bugs, updates and small changes after launch. Monthly retainer or pay as you go."],
];

export default function Services() {
  return (
    <>
      <Seo
        title="Services: Web, App, E-commerce, Cloud, AI and WhatsApp Automation"
        description="Website development, Android and React Native apps, Shopify and WooCommerce stores, cloud hosting and deployment, AI applications and WhatsApp Business API automation. One engineer, end to end."
      />
      <Section className="pb-8">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Everything a business needs to run online</h1>
        <Lead>
          Most clients come with one problem and find the rest is connected: the website needs hosting, the store
          needs payments, the app needs a backend. I cover the whole chain so nothing falls between vendors.
        </Lead>
      </Section>

      <div className="mx-auto max-w-6xl divide-y divide-slate-200 px-5">
        {SERVICES.map((s) => (
          <section key={s.slug} id={s.slug} className="grid scroll-mt-24 gap-8 py-14 md:grid-cols-[1fr_1.4fr] md:py-20">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{s.title}</h2>
              <p className="mt-3 text-slate-600">{s.short}</p>
              <Tags items={s.tech} />
            </div>
            <div>
              <p className="leading-relaxed text-slate-700">{s.body}</p>
              <Bullets items={s.bullets} className="mt-6" />
            </div>
          </section>
        ))}
      </div>

      <div className="bg-white">
        <Section>
          <Eyebrow>Process</Eyebrow>
          <H2>How a project runs</H2>
          <ol className="mt-12 grid gap-8 md:grid-cols-5">
            {PROCESS.map(([title, text], i) => (
              <li key={title}>
                <span className="text-sm font-semibold text-accent">0{i + 1}</span>
                <h3 className="mt-1 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
        </Section>
      </div>

      <CtaBand />
    </>
  );
}
