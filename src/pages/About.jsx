import Seo from "../components/Seo";
import { CtaBand, Eyebrow, H2, Section } from "../components/ui";
import * as si from "simple-icons";
import { CONTACT, PRINCIPLES } from "../site";
import ridamImg from "../assets/ridam-jain.webp";
import dadajiImg from "../assets/jethmal-jain.webp";

const EXPERIENCE = [
  {
    role: "Founder",
    org: "JM Technologies, Pali",
    period: "2024 to now",
    text: "Websites, stores, apps, hosting and AI tools for businesses in India and abroad. Recent clients include Avonplast (B2B manufacturer, Bengaluru) and Rajasthani Store (e-commerce).",
  },
  {
    role: "Founding Engineer and Technical Partner",
    org: "Viszapp, visa consultation platform",
    period: "2024 to 2026",
    text: "Owned all engineering in a two-person venture. Grew the platform to 3,000+ verified users and 1,100+ paid orders. Node.js and Spring Boot backends, React front end, PostgreSQL and Redis, Razorpay and Cashfree payments, LLM document generation on Cloudflare Workers AI, Google Calendar automation, Docker on DigitalOcean.",
  },
  {
    role: "Software Engineer",
    org: "Postree POS (Abmiro Solutions), Ireland",
    period: "2023 to 2024",
    text: "Point-of-sale software used daily by 160+ restaurants in Ireland and the EU. Integrated the Viva Payments terminal API end to end, made the slowest reports over 50% faster, built an offline voucher system and QR e-invoicing, and handled live production support by remoting into client machines.",
  }
];

// Brand logos from simple-icons. Names with no entry render as a plain tag.
const LOGOS = {
  JavaScript: si.siJavascript,
  TypeScript: si.siTypescript,
  Python: si.siPython,
  PHP: si.siPhp,
  "Node.js": si.siNodedotjs,
  Express: si.siExpress,
  "Spring Boot": si.siSpringboot,
  FastAPI: si.siFastapi,
  Prisma: si.siPrisma,
  TypeORM: si.siTypeorm,
  React: si.siReact,
  "React Native": si.siReact,
  "Android (Java, Kotlin)": si.siAndroid,
  "Tailwind CSS": si.siTailwindcss,
  Vite: si.siVite,
  WordPress: si.siWordpress,
  WooCommerce: si.siWoocommerce,
  Shopify: si.siShopify,
  Elementor: si.siElementor,
  cPanel: si.siCpanel,
  PostgreSQL: si.siPostgresql,
  MySQL: si.siMysql,
  MongoDB: si.siMongodb,
  Redis: si.siRedis,
  SQLite: si.siSqlite,
  Cloudflare: si.siCloudflare,
  DigitalOcean: si.siDigitalocean,
  Render: si.siRender,
  Docker: si.siDocker,
  Linux: si.siLinux,
  Firebase: si.siFirebase,
  Gemini: si.siGooglegemini,
  Claude: si.siClaude,
  "Cloudflare Workers AI": si.siCloudflare,
  LiveKit: { ...si.siLivekit, hex: "0F172A" }, // brand colour is white
  Deepgram: si.siDeepgram,
  Razorpay: si.siRazorpay,
  "Viva Payments": si.siVivawallet,
  PayPal: si.siPaypal,
  "WhatsApp Cloud API": si.siWhatsapp,
  "Google Calendar API": si.siGooglecalendar,
};

function TechTags({ items }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((t) => {
        const icon = LOGOS[t];
        return (
          <li
            key={t}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"
          >
            {icon && (
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path d={icon.path} fill={`#${icon.hex}`} />
              </svg>
            )}
            {t}
          </li>
        );
      })}
    </ul>
  );
}

const SKILLS = [
  ["Languages", ["JavaScript", "TypeScript", "Java", "Python", "PHP", "SQL"]],
  ["Backend", ["Node.js", "Express", "Spring Boot", "FastAPI", "REST", "WebSockets", "Prisma", "TypeORM"]],
  ["Frontend and mobile", ["React", "React Native", "Android (Java, Kotlin)", "Tailwind CSS", "Vite"]],
  ["Web platforms", ["WordPress", "WooCommerce", "Shopify", "Elementor", "cPanel"]],
  ["Data", ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"]],
  ["Cloud and DevOps", ["AWS", "Cloudflare", "DigitalOcean", "Render", "Docker", "Linux", "CI/CD", "Firebase"]],
  ["AI", ["OpenAI", "Gemini", "Claude", "Cloudflare Workers AI", "LiveKit", "Deepgram", "prompt caching"]],
  ["Payments and integrations", ["Razorpay", "Cashfree", "Viva Payments", "PayPal", "WhatsApp Cloud API", "Google Calendar API"]],
];

const LIFE = [
  ["1932", "Born on 1 February in Kalandri, Rajasthan. Adopted by a family in Jalore as a child."],
  ["Jalore", "Teacher and librarian in government schools, later headmaster. The town called him Jethmal Master."],
  ["1965", "Moved to Pali and started a textile business in Mahaveer Udhyog Nagar."],
  ["Pali", "President of the Rajasthan Textile Association for many years. Helped the industry grow and spoke early about its effect on the environment."],
  ["1995", "Stepped back to part-time and gave most of his time to religious communities and organisations."],
  ["2025", "Passed away on 16 June, aged 93."],
];

export default function About() {
  return (
    <>
      <Seo
        title="About Ridam Jain and the JM Technologies Name"
        description="Ridam Jain is a software engineer from Pali, Rajasthan with 3.5+ years building production systems: payments, e-commerce, Android apps and AI features. JM Technologies is named after his grandfather Jethmal Jain, known as Jethmal Master."
      />

      <Section className="grid items-start gap-12 md:grid-cols-[320px_1fr]">
        <img
          src={ridamImg}
          alt="Ridam Jain, software engineer and founder of JM Technologies"
          width="800"
          height="1000"
          className="w-64 rounded-2xl object-cover md:w-full"
        />
        <div>
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Ridam Jain</h1>
          <p className="mt-2 text-lg text-slate-500">Software engineer. Founder, JM Technologies. {CONTACT.city}, India.</p>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700">
            <p>
              I have spent over three years building software that businesses use every day. I handled payments
              and live support for a restaurant network in Ireland, and I co-built a visa platform from nothing
              to thousands of paying users. I looked after everything, from the database to the customer call
              when something broke.
            </p>
            <p>
              That is why I work the way I do. I do not hand off to a designer, a developer or an ops team. I
              take care of the whole thing: the website, the store, the app, the server it runs on and the
              WhatsApp number your customers message. Once it is live, I stay on it.
            </p>
            <p>
              I work from Pali, Rajasthan. I want businesses in Pali, Jodhpur and the towns around us to have
              software as good as anything in a big city. JM Technologies is my way of growing the tech scene in
              Pali and helping businesses here get the software they need to grow.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium">
            <a href={CONTACT.booking} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Book a call
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              LinkedIn
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </Section>

      <div className="bg-white">
        <Section>
          <Eyebrow>How I work</Eyebrow>
          <H2>Own it, reason from first principles, be precise</H2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="rounded-xl border border-slate-200 bg-sand p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{p.text}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <Eyebrow>Experience</Eyebrow>
        <H2>Where I have worked</H2>
        <ol className="mt-12 space-y-10 border-l border-slate-200 pl-6">
          {EXPERIENCE.map((e) => (
            <li key={e.org} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
              <p className="text-sm text-slate-500">{e.period}</p>
              <h3 className="mt-1 text-lg font-semibold">
                {e.role} <span className="font-normal text-slate-600">&middot; {e.org}</span>
              </h3>
              <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">{e.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm text-slate-500">
          Education: B.C.A., GLS University, 2018 to 2021, CGPA 8.8 / 10.
        </p>
      </Section>

      <div className="bg-white">
        <Section>
          <Eyebrow>Technologies</Eyebrow>
          <H2>What I build with</H2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {SKILLS.map(([label, items]) => (
              <div key={label}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{label}</h3>
                <TechTags items={items} />
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section id="the-name">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_340px]">
          <div>
            <Eyebrow>The name</Eyebrow>
            <H2>Why JM: Jethmal Master</H2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700">
              <p>
                JM stands for Jethmal Master. My grandfather, Jethmal Jain, was born in Kalandri, Rajasthan, in
                1932 and adopted by a family in Jalore as a child. He was a teacher and librarian in Jalore and
                rose to headmaster. Nobody called him by his full name. To his students, their parents and the generations after them, he was Jethmal Master.
              </p>
              <p>
                In 1965, in his thirties, he left teaching and moved to Pali to start a textile business in
                Mahaveer Udhyog Nagar. He served as President of the Rajasthan Textile Association for many years
                and did a lot to help the industry grow. Even then he thought ahead about the harm it could do to
                the environment. In 1995 he stepped back to part-time and gave the rest of his life to religious
                communities and organisations.
              </p>
              <p>
                He was active, forward-thinking and welcoming to everyone. He talked to people of every generation
                in his own style, and anyone who had a conversation with him remembered it. He held himself to
                high standards, both in business and as a person.
              </p>
              <p>
                To me he was a best friend. He was the person I could tell my secrets to. He played tricks on me
                as a kid, and I do not remember him ever raising his voice at any of us. He passed away on
                16 June 2025, aged 93.
              </p>
              <p>
                I wanted this company to carry his name. A name earned by working hard, helping others and being
                trusted for decades is worth continuing. It is also the standard I hold myself to: do the best,
                be the best, and be someone people can rely on.
              </p>
            </div>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {LIFE.map(([when, what]) => (
                <li key={when} className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-accent">{when}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{what}</p>
                </li>
              ))}
            </ol>
          </div>
          <figure className="md:sticky md:top-24">
            <img
              src={dadajiImg}
              alt="Jethmal Jain, known as Jethmal Master, headmaster and grandfather of Ridam Jain"
              width="700"
              height="1050"
              className="w-64 md:w-full"
            />
            <figcaption className="mt-3 text-sm text-slate-500">
              Jethmal Jain, 1 February 1932 to 16 June 2025. Headmaster in Jalore, Businessman in Pali.
            </figcaption>
          </figure>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
