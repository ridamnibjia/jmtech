import Seo from "../components/Seo";
import { Bullets, ButtonLink, Eyebrow, Lead, Section } from "../components/ui";
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
        title="Contact Ridam Jain: Book a Call"
        description="Book a free 30-minute call with JM Technologies in Pali, Rajasthan, or reach Ridam Jain on WhatsApp, email or phone for website development, apps, online stores, cloud hosting, AI and WhatsApp automation."
      />
      <Section className="grid gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Let us talk about your project</h1>
          <Lead>
            Pick a time that suits you and I will call. Or send a message on WhatsApp or email. I reply within
            one working day, usually sooner, from Pali, Rajasthan (IST).
          </Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={CONTACT.booking}>Book a free 30-minute call</ButtonLink>
            <ButtonLink href={CONTACT.whatsapp} variant="secondary">
              WhatsApp
            </ButtonLink>
          </div>
          <dl className="mt-10 space-y-4 text-slate-700">
            <div>
              <dt className="text-sm font-semibold text-slate-500">Email</dt>
              <dd>
                <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-slate-500">Phone and WhatsApp</dt>
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
                <a href={CONTACT.portfolio} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  ridamjain.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-lg font-semibold">What to include in your first message</h2>
          <Bullets items={ASK} className="mt-4" />
          <p className="mt-6 text-sm leading-relaxed text-slate-500">
            You do not need a full brief. A few honest lines about the problem are enough to start. I will come
            back with questions, a rough plan and a quote.
          </p>
        </div>
      </Section>
    </>
  );
}
