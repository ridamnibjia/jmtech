// Single place for every fact shown on the site. Edit here, not in the pages.
import avonplastImg from "./assets/avonplast.webp";
import rajasthaniImg from "./assets/rajasthani-store.webp";
import whatsappImg from "./assets/whatsapp-campaign.webp";
import justLectureImg from "./assets/just-lecture.webp";
import aashirwadImg from "./assets/aashirwad.webp";
import earlyEarnlyImg from "./assets/early-earnly.webp";

export const SITE_URL = "https://jm.ridamjain.com";
export const BRAND = "JM Technologies";
export const OWNER = "Ridam Jain";

export const CONTACT = {
  email: "work@ridamjain.com",
  phone: "+91 79762 41042",
  phoneRaw: "+917976241042",
  whatsapp:
    "https://wa.me/917976241042?text=Hi%20Ridam%2C%20I%20want%20to%20talk%20about%20a%20project.",
  booking: "https://calendar.app.google/6efxcH454YBBknCz6",
  address: "23, Mahaveer Udhyog Nagar, Pali, Rajasthan 306401, India",
  city: "Pali, Rajasthan",
  linkedin: "https://www.linkedin.com/in/ridam-jain-backend/",
  github: "https://github.com/ridamnibjia",
  portfolio: "https://ridamjain.com",
};

export const NAV = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/work", "Work"],
  ["/about", "About"],
  ["/blog", "Blog"],
  ["/contact", "Contact"],
];

// Towns where in-person meetings are easy. Everything else is remote.
export const AREAS = ["Pali", "Jodhpur", "Jalore", "Sirohi", "Balotra"];

export const INITIATIVE = {
  title: "An initiative for Pali and the region, not a metro agency",
  text: "I am not chasing big clients in Mumbai, Bengaluru or Delhi. I have worked for companies abroad and I know what good software looks like. I want businesses in Pali, Jodhpur and the surrounding towns to have the same standard, at a price that makes sense here. A shop, a factory, a clinic or a school here should be as easy to find online as any business in a metro. That is the point of JM Technologies. A business website goes live within one week.",
};

export const FAQ = [
  [
    "Do you only work with businesses in Pali?",
    "No. I am based in Pali and meet in person across Pali, Jodhpur, Jalore, Sirohi and Balotra. Most of my work is remote, including clients in Ireland and Europe, so location is not a limit.",
  ],
  [
    "How much does a website or store cost?",
    "I quote a fixed price after a free 30-minute call, based on the number of pages, whether you need to edit content yourself, and whether there is a catalogue, store or app involved. You get the scope and price in writing before any work starts.",
  ],
  [
    "How long does it take?",
    "A business website takes one week at most, from the call to going live. An online store with payments, shipping and Cash on Delivery takes longer because every step is tested with real orders. Apps depend on scope, and I give a timeline with the quote.",
  ],
  [
    "Can you fix a website or store someone else built?",
    "Yes. Rescues are a large part of my work: stores losing orders at checkout, sites that never show up on Google, emails going missing. I audit first, then fix, and you get a written list of what changed.",
  ],
  [
    "What happens after launch?",
    "I stay on. Hosting, domain renewals, updates, bugs and small changes are covered by a monthly retainer or pay as you go. You also get plain-English documentation so you are never stuck.",
  ],
  [
    "Do you help with Google listing, domain and business email?",
    "Yes. Google Business Profile, Search Console, domain and DNS, and business email on Google Workspace or Zoho are part of getting a business online properly, and I set them up with the site.",
  ],
];

export const SERVICES = [
  {
    slug: "web-development",
    title: "Web Development",
    short: "Fast, search-friendly websites for businesses that need to be found and trusted.",
    body:
      "Company sites, product catalogues, dealer directories and landing pages. I pick the simplest stack that fits your hosting, so the site is quick to load and easy to edit later.",
    bullets: [
      "Mobile-first, responsive layouts tested on real phones",
      "SEO done properly: titles, structured data, sitemaps, fast Core Web Vitals",
      "Contact and enquiry forms with spam protection that actually reach your inbox",
      "Admin panels so your team can update content without calling a developer",
    ],
    tech: ["React", "Next.js", "PHP", "Tailwind CSS", "Cloudflare", "cPanel"],
  },
  {
    slug: "app-development",
    title: "App Development",
    short: "Native Android and cross-platform apps, published and maintained on the Play Store.",
    body:
      "From a working prototype to a listing on Google Play. I have shipped apps for rewards, study tools and jewellery shops, and I handle the store listing, releases and crash fixes after launch.",
    bullets: [
      "Native Android in Java and Kotlin, or React Native when one codebase makes sense",
      "Offline-first data, sign-in, push notifications, PDF and WhatsApp sharing",
      "Play Store listing, screenshots, review process and updates",
      "Backend APIs built alongside the app so nothing is left half-done",
    ],
    tech: ["Android", "Java", "React Native", "Firebase", "Room", "Node.js"],
  },
  {
    slug: "ecommerce",
    title: "Online Stores",
    short: "Shopify and WooCommerce stores set up, fixed and tuned to actually sell.",
    body:
      "New store builds and rescues of stores that are losing orders. Payments, Cash on Delivery, shipping rules, order emails, coupons, speed and security all checked and working before you spend on ads.",
    bullets: [
      "Shopify and WooCommerce setup, theme work and custom snippets",
      "Razorpay, Cashfree, PayPal and COD checkout that does not lose orders",
      "Shipping engines, courier integrations and order tracking pages",
      "Speed, caching, security hardening and email deliverability",
    ],
    tech: ["WooCommerce", "Shopify", "WordPress", "Razorpay", "LiteSpeed", "Elementor"],
  },
  {
    slug: "cloud-and-deployment",
    title: "Cloud & Deployment",
    short: "Hosting, DNS, deployment pipelines and the boring parts that keep a product online.",
    body:
      "I set up and manage hosting on AWS, Cloudflare, DigitalOcean, Render and plain cPanel servers. Docker where it helps, zero-downtime deploys, backups, monitoring and a runbook your team can follow.",
    bullets: [
      "Domain, DNS, SSL and business email (Google Workspace or Zoho) set up correctly",
      "Docker containers, CI/CD pipelines and staging environments",
      "Migrations from shared hosting to cloud without downtime",
      "Cost review so you stop paying for servers you do not use",
    ],
    tech: ["AWS", "Cloudflare", "DigitalOcean", "Docker", "Linux", "PostgreSQL", "Redis"],
  },
  {
    slug: "ai-applications",
    title: "AI Applications",
    short: "Practical AI features inside real products, with the cost and reliability handled.",
    body:
      "Document generation, voice agents, chat assistants and data extraction built on large language models. I have run these in production for paying users, with prompt caching, retries and guardrails so they stay accurate and affordable.",
    bullets: [
      "LLM features inside your existing app: drafting, summarising, classifying",
      "Voice agents that answer calls and book appointments",
      "Structured extraction from messy documents and forms",
      "Cost control through caching, batching and model selection",
    ],
    tech: ["OpenAI", "Gemini", "Claude", "Cloudflare Workers AI", "LiveKit", "Deepgram", "FastAPI"],
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp & Business Automation",
    short: "Official WhatsApp Business API setup, bulk campaigns, bots and payment integrations.",
    body:
      "I get businesses onto the official Meta WhatsApp Cloud API and build the tooling around it: approved templates, bulk campaigns with opt-outs, two-way inbox, order bots and alerts. I also connect payments, calendars and CRMs so work flows without manual steps.",
    bullets: [
      "Meta Business verification, phone number and template approval",
      "Bulk campaign manager with delivery reports (open source, see Work)",
      "Order-taking and support bots on WhatsApp",
      "Payment gateway, Google Calendar and webhook integrations",
    ],
    tech: ["WhatsApp Cloud API", "Node.js", "Express", "SQLite", "Webhooks", "Razorpay"],
  },
];

export const PROJECTS = [
  {
    slug: "avonplast",
    name: "Avonplast",
    kind: "B2B manufacturer website",
    year: "2026",
    url: "https://avonplast.in",
    image: avonplastImg,
    imageAlt: "Avonplast website homepage with product hero and navigation",
    summary:
      "Full rebuild of the website for Avonplast PVC (Bangalore) Pvt. Ltd., a maker of PVC conduit pipes, fittings and wires since 1965.",
    details: [
      "Replaced a dated three-page brochure site with a multi-page catalogue covering wires, conduit pipes, fittings, quality standards and a dealer directory.",
      "Built a small admin panel so the company manages hero banners, dealers and catalogue PDFs themselves.",
      "Dealership enquiry form with Cloudflare Turnstile and honeypot protection, emailing three inboxes over SMTP.",
      "Hand-coded PHP and vanilla JavaScript to fit their existing cPanel hosting. Lighthouse scores of 100 across performance, accessibility, best practices and SEO.",
      "Handled DNS, Google Analytics, image optimisation of 30 client photos, and the move from staging to live.",
    ],
    stack: ["PHP", "HTML", "CSS", "JavaScript", "cPanel", "Cloudflare Turnstile", "GA4"],
  },
  {
    slug: "rajasthani-store",
    name: "Rajasthani Store",
    kind: "E-commerce rescue and rebuild",
    year: "2026",
    url: "https://rajasthanistore.in",
    image: rajasthaniImg,
    imageAlt: "Rajasthani Store homepage with camel illustration banner",
    summary:
      "A WooCommerce store selling Rajasthani snacks and sweets that was losing more than half its orders at checkout.",
    details: [
      "Audited the live store first, then fixed 27 issues in one pass: free shipping that never applied, a coupon advertised for months that did not exist, and order emails going to a mailbox that did not exist.",
      "Added Cash on Delivery, a weight-based shipping engine with a courier fallback, and a working order tracking page.",
      "Security hardening: login limits, admin username exposure closed, XML-RPC disabled, security headers, spam accounts removed.",
      "Server response time cut from about 1.6 seconds to 0.2 seconds with LiteSpeed caching, with cart pages correctly excluded.",
      "Rebuilt the homepage, category pages, product pages and the customer account area on desktop and mobile.",
    ],
    stack: ["WooCommerce", "WordPress", "PHP", "Elementor", "LiteSpeed", "Shipmozo"],
  },
  {
    slug: "whatsapp-campaign-manager",
    name: "WhatsApp Campaign Manager",
    kind: "Open source tool",
    year: "2026",
    repo: "https://github.com/ridamnibjia/meta-wa-campaign",
    image: whatsappImg,
    imageAlt: "Illustration of the WhatsApp Campaign Manager dashboard with a running campaign and delivery status",
    summary:
      "A self-hosted bulk messaging and inbox tool on Meta's official WhatsApp Cloud API. Free and open source.",
    details: [
      "Compose and submit message templates to Meta with local validation that catches the common rejection reasons.",
      "Send campaigns from a CSV at a controlled pace, with live per-message status over WebSocket and a downloadable report.",
      "Warm-up ladder for new numbers, night-time quiet hours, and a retry schedule that respects Meta's limits.",
      "One-tap opt-out, two-way inbox with attachments, and a queue in SQLite that survives restarts without double-sending.",
      "Password-gated app and HMAC-signed webhooks. Ships with a setup guide that walks through Meta Business verification.",
    ],
    stack: ["Node.js", "Express", "Socket.io", "SQLite", "React", "Meta Cloud API", "Docker"],
  },
  {
    slug: "aashirwad",
    name: "Aashirwad - Jewellery Estimation App",
    kind: "Android app on Google Play",
    year: "2025",
    url: "https://play.google.com/store/apps/details?id=com.ridamnibjia.aashirwad",
    image: aashirwadImg,
    imageAlt: "Aashirwad app welcome screen: estimates in seconds, and it's free",
    summary:
      "A gold and silver jewellery estimate app built for the shop counter. Free on the Play Store.",
    details: [
      "Calculates metal value at the day's rate, wastage, making charges, stones and tax, then deducts exchanged jewellery and advances.",
      "Exports the estimate as a PDF or image and sends it over WhatsApp in one tap.",
      "Native Android in Java with Room storing estimates and customers on the device, so it works offline.",
    ],
    stack: ["Android", "Java", "Room", "SQLite", "Firebase Auth"],
  },
  {
    slug: "just-lecture",
    name: "Just Lecture",
    kind: "Android app on Google Play",
    year: "2025",
    url: "https://play.google.com/store/apps/details?id=com.ridamnibjia.studious",
    image: justLectureImg,
    imageAlt: "Just Lecture player with chapters panel",
    summary:
      "A distraction-free study app that curates short lectures into clean, ad-free playlists.",
    details: [
      "No recommendations, no comments, no algorithm pulling students off track. Browse by search and category, sign in, and focus.",
      "Native Android in Java with a TypeScript API on PostgreSQL and Prisma for playlists and sign-in.",
      "Published and maintained on the Play Store.",
    ],
    stack: ["Android", "Java", "TypeScript", "PostgreSQL", "Prisma"],
  },
  {
    slug: "early-earnly",
    name: "EarlyEarnly",
    kind: "Android app on Google Play",
    year: "2024",
    url: "https://play.google.com/store/apps/details?id=com.earlyearnly.earlyearnlyapp",
    image: earlyEarnlyImg,
    imageAlt: "EarlyEarnly listing on Google Play",
    summary:
      "A native Android app that lets users earn cash rewards by playing simple games and completing tasks.",
    details: [
      "Native Android app with a Node.js backend for tasks, rewards and payouts.",
      "Migrated the existing infrastructure to the cloud and handled the Play Store release.",
    ],
    stack: ["Android", "Node.js", "AWS"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Rhythm",
    role: "Founder, EarlyEarnly",
    text: "The cloud transition was seamless and the support is top-notch. He also built our Android app, which was a great success.",
  },
];

export const PRINCIPLES = [
  {
    title: "I work as if I own the product",
    text: "I do not stop at the ticket. If a fix exposes a bigger problem, I tell you and fix it properly. I have run my own products with paying users, so I know what it costs when something breaks.",
  },
  {
    title: "First principles, not templates",
    text: "Before building anything I ask what the business actually needs the software to do. Often the answer is smaller and simpler than the first brief, and that saves money.",
  },
  {
    title: "Precision over guesswork",
    text: "Every change is tested on the live site or a staging copy before I call it done. I keep a written log of what changed and why, so you are never dependent on memory.",
  },
  {
    title: "I stay after launch",
    text: "A website or app is not finished on launch day. I handle hosting, updates, bugs and the small requests that come later, and I write documentation so your team is not stuck if I am unavailable.",
  },
];
