import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { BRAND, CONTACT, NAV, OWNER } from "../site";

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-2 font-semibold text-ink" aria-label={`${BRAND} home`}>
      <span className="grid h-8 w-8 place-items-center rounded-md bg-ink text-xs font-bold tracking-wide text-white">
        JM
      </span>
      <span className="text-base">JM Technologies</span>
    </Link>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = ({ isActive }) =>
    `block rounded-md px-3 py-2 text-sm font-medium transition ${
      isActive ? "text-ink" : "text-slate-600 hover:text-ink"
    }`;
  const hindi = pathname === "/hi";
  const langLink = (
    <Link
      to={hindi ? "/" : "/hi"}
      lang={hindi ? "en" : "hi"}
      className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:text-ink"
    >
      {hindi ? "English" : "हिन्दी"}
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Wordmark />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} className={linkClass}>
              {label}
            </NavLink>
          ))}
          {langLink}
          <a
            href={CONTACT.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-md bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Book a call
          </a>
        </nav>
        <button
          type="button"
          className="rounded-md p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-slate-200 bg-white px-5 pb-4 pt-2 md:hidden" aria-label="Mobile">
          {NAV.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} className={linkClass}>
              {label}
            </NavLink>
          ))}
          {langLink}
          <a
            href={CONTACT.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-md bg-ink px-4 py-2 text-center text-sm font-medium text-white"
          >
            Book a call
          </a>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
            Web, app, cloud and AI development by {OWNER}. Based in {CONTACT.city}, India.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink">Pages</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {NAV.map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-ink">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink">Contact</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-ink">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-ink">
                {CONTACT.phone}
              </a>
            </li>
            <li>{CONTACT.address}</li>
            <li className="flex gap-4 pt-1">
              <a href={CONTACT.booking} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                Book a call
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                LinkedIn
              </a>
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} {BRAND}. Named after Jethmal Jain, known as Jethmal Master.
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="flex min-h-screen flex-col bg-sand text-ink">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4 1.7.7 2.3.8 3.1.7.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2l-.5-.3z" />
        </svg>
      </a>
    </div>
  );
}
