import { useState } from "react";
import { Link, NavLink } from "react-router";
import { brand, nav } from "./content";
import { ForjaLogo } from "./Logo";
import { ForjaThemeToggle } from "./ThemeToggle";

type ForjaHeaderProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export function ForjaHeader({ theme, onToggleTheme }: ForjaHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fj-utility hidden md:block">
        <div className="fj-container flex h-8 items-center justify-between gap-6">
          <p className="fj-label text-[var(--fj-graphite-muted)]">
            {brand.location} / {brand.shipping}
          </p>
          <div className="flex items-center gap-6">
            <span className="fj-label text-[var(--fj-graphite-muted)]">
              {brand.hours}
            </span>
            <a
              href={`mailto:${brand.email}`}
              className="fj-label text-[var(--fj-graphite-ink)] transition-opacity hover:opacity-70"
            >
              {brand.email}
            </a>
          </div>
        </div>
      </div>

      <header className="fj-header sticky top-0 z-50 border-b border-[var(--fj-line)]">
        <div className="fj-container flex h-16 items-center justify-between gap-4">
          <Link
            to="/demos/forjapc"
            aria-label="Forja PC, ir al inicio"
            onClick={() => setOpen(false)}
          >
            <ForjaLogo />
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Principal"
          >
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className="fj-nav-link"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ForjaThemeToggle theme={theme} onToggle={onToggleTheme} />
            <Link
              to="/demos/forjapc/contacto"
              className="fj-btn-primary text-sm"
            >
              Armar mi PC
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ForjaThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              type="button"
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((value) => !value)}
              className="flex h-9 w-9 items-center justify-center border border-[var(--fj-line)] text-[var(--fj-ink)]"
            >
              {open ? (
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M5 5l14 14M19 5 5 19" />
                </svg>
              ) : (
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-[var(--fj-line)] bg-[var(--fj-bg)] lg:hidden">
            <div className="fj-container flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className="fj-nav-link py-2"
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/demos/forjapc/contacto"
                onClick={() => setOpen(false)}
                className="fj-btn-primary mt-3 text-sm"
              >
                Armar mi PC
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
