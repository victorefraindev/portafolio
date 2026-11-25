import { useState } from "react";
import { useTheme } from "~/hooks/useTheme";
import { navLinks } from "./content";
import { RetroLogo } from "./Logo";
import { RetroThemeToggle } from "./ThemeToggle";

type RetroNavbarProps = {
  onRepair: () => void;
  onSell: () => void;
};

export function RetroNavbar({ onRepair, onSell }: RetroNavbarProps) {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="rm-nav sticky top-0 z-50 border-b border-[var(--rm-line)]">
      <div className="rm-container flex h-16 items-center justify-between gap-4">
        <a
          href="#inicio"
          aria-label="Retromaquinas, volver al inicio"
          onClick={() => setOpen(false)}
        >
          <RetroLogo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--rm-muted)] transition-colors hover:text-[var(--rm-ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <RetroThemeToggle theme={theme} onToggle={toggle} />
          <a
            href="#contacto"
            onClick={onRepair}
            className="rm-btn-primary text-sm"
          >
            Pedir diagnóstico
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <RetroThemeToggle theme={theme} onToggle={toggle} />
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--rm-line)] text-[var(--rm-ink)]"
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
        <div className="border-t border-[var(--rm-line)] bg-[var(--rm-bg)] lg:hidden">
          <div className="rm-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-[var(--rm-muted)] transition-colors hover:text-[var(--rm-ink)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => {
                onRepair();
                setOpen(false);
              }}
              className="rm-btn-primary mt-3 text-sm"
            >
              Pedir diagnóstico
            </a>
            <a
              href="#contacto"
              onClick={() => {
                onSell();
                setOpen(false);
              }}
              className="rm-btn-secondary mt-2 text-sm"
            >
              Vender mi consola
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
