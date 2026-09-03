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
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-md bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Start a project
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
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-md bg-ink px-4 py-2 text-center text-sm font-medium text-white"
          >
            Start a project
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
            Web, app, cloud and AI development by {OWNER}. Based in {CONTACT.city}, India. Working with
            clients across India, Ireland and Europe.
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
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                LinkedIn
              </a>
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                GitHub
              </a>
              <a href={CONTACT.upwork} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                Upwork
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} {BRAND}. Named after Jethmal Jain, headmaster of Pali.
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
    </div>
  );
}
