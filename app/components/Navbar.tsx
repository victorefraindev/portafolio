import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useTheme } from "~/hooks/useTheme";
import { profile } from "~/data/site";

type NavbarProps = {
  variant?: "personal" | "business";
};

const personalLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

const businessLinks = [
  { href: "#planes", label: "Planes" },
  { href: "#demos", label: "Demos" },
  { href: "#casos", label: "Casos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar({ variant = "personal" }: NavbarProps) {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isBusiness = variant === "business";
  const links = isBusiness ? businessLinks : personalLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-glass backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        {isBusiness ? (
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="font-display text-base font-semibold tracking-tight text-fg sm:text-lg"
          >
            {profile.name}
          </Link>
        ) : (
          <a
            href="#inicio"
            onClick={() => setOpen(false)}
            className="font-display text-base font-semibold tracking-tight text-fg sm:text-lg"
          >
            {profile.name}
          </a>
        )}

        <div className="hidden items-center gap-4 md:flex lg:gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          {!isBusiness && (
            <Link
              to="/servicios"
              className="flex items-center gap-2 text-sm font-medium text-violet transition-colors hover:text-fg"
            >
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rotate-45 bg-nova"
              />
              Negocios
            </Link>
          )}
          <ThemeButton theme={theme} toggle={toggle} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeButton theme={theme} toggle={toggle} />
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-line text-fg"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-200 ${
                  open ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6.5px] h-px w-4 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[13px] h-px w-4 bg-current transition-transform duration-200 ${
                  open ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-glass backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            ))}
            {isBusiness ? (
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="py-2 text-base text-muted transition-colors hover:text-fg"
              >
                Ver portafolio técnico
              </Link>
            ) : (
              <Link
                to="/servicios"
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-violet transition-colors hover:text-fg"
              >
                Para negocios
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function ThemeButton({
  theme,
  toggle,
}: {
  theme: "dark" | "light";
  toggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="flex h-10 w-10 items-center justify-center rounded-sm border border-line text-muted transition-colors hover:border-violet hover:text-violet"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}
