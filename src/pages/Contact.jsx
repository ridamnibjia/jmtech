import Seo from "../components/Seo";
import { ButtonLink, Eyebrow, Lead, Section } from "../components/ui";
import { AREAS, CONTACT, FAQ } from "../site";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Ridam Jain: Book a Call"
        description="Book a free 30-minute call with JM Technologies in Pali, Rajasthan, or reach Ridam Jain on WhatsApp, email or phone for website development, apps, online stores, cloud hosting, AI and WhatsApp automation."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }}
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
              <dt className="text-sm font-semibold text-slate-500">In person</dt>
              <dd>{AREAS.join(", ")}. Everywhere else, online.</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-lg font-semibold">Questions I get asked</h2>
          <dl className="mt-5 space-y-5">
            {FAQ.map(([q, a]) => (
              <div key={q}>
                <dt className="font-semibold text-ink">{q}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate-600">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </>
  );
}
