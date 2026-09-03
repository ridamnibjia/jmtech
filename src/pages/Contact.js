import Seo from "../components/Seo";
import { ButtonLink, Eyebrow, Lead, Section } from "../components/ui";
import { CONTACT } from "../site";

const ASK = [
  "What your business does and who your customers are",
  "What you need built or fixed, in a few lines",
  "Links to anything that already exists (site, store, app, hosting)",
  "A rough timeline and budget, if you have one",
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Ridam Jain"
        description="Contact JM Technologies in Pali, Rajasthan for website development, apps, online stores, cloud hosting, AI and WhatsApp automation. WhatsApp, email or phone. Replies within one working day."
      />
      <Section className="grid gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Let us talk about your project</h1>
          <Lead>
            WhatsApp is fastest. Email works too. I reply within one working day, usually sooner, from Pali,
            Rajasthan (IST).
          </Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={CONTACT.whatsapp}>Message on WhatsApp</ButtonLink>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-ink transition hover:border-ink"
            >
              {CONTACT.email}
            </a>
          </div>
          <dl className="mt-10 space-y-4 text-slate-700">
            <div>
              <dt className="text-sm font-semibold text-slate-500">Phone</dt>
              <dd>
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:underline">
                  {CONTACT.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-slate-500">Address</dt>
              <dd>{CONTACT.address}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-slate-500">Elsewhere</dt>
              <dd className="flex gap-4">
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  LinkedIn
                </a>
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  GitHub
                </a>
                <a href={CONTACT.upwork} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Upwork
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-lg font-semibold">What to include in your first message</h2>
          <ul className="mt-4 space-y-3">
            {ASK.map((a) => (
              <li key={a} className="flex gap-3 text-slate-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-slate-500">
            You do not need a full brief. A few honest lines about the problem are enough to start. I will come
            back with questions, a rough plan and a quote.
          </p>
        </div>
      </Section>
    </>
  );
}
