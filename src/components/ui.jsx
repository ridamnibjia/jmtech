import { Link } from "react-router-dom";
import { CONTACT } from "../site";

export function Section({ children, className = "", ...rest }) {
  return (
    <section className={`mx-auto max-w-6xl px-5 py-16 md:py-24 ${className}`} {...rest}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }) {
  return <p className="text-xs font-semibold uppercase tracking-widest text-accent">{children}</p>;
}

export function H2({ children, className = "" }) {
  return <h2 className={`mt-2 text-3xl font-semibold tracking-tight md:text-4xl ${className}`}>{children}</h2>;
}

export function Lead({ children }) {
  return <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{children}</p>;
}

export function Tags({ items }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Bullets({ items, className = "" }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((b) => (
        <li key={b} className="flex gap-3 text-sm leading-relaxed text-slate-600">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export function ExternalLink({ href, children }) {
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

export function ButtonLink({ to, href, children, variant = "primary", className = "" }) {
  const base = "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-ink text-white hover:bg-slate-800"
      : "border border-slate-300 bg-white text-ink hover:border-ink";
  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Have a project in mind?</h2>
          <p className="mt-2 max-w-xl text-slate-300">
            Book a free 30-minute call, or send a short message about what you need. I reply within a day with
            questions, a rough plan and a fixed quote where possible.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={CONTACT.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white px-5 py-3 text-sm font-medium text-ink hover:bg-slate-100"
          >
            Book a call
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-500 px-5 py-3 text-sm font-medium text-white hover:border-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
