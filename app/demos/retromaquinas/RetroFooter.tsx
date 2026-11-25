import { brand, navLinks } from "./content";
import { RetroLogo } from "./Logo";

export function RetroFooter() {
  return (
    <footer className="py-12">
      <div className="rm-container">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr_0.75fr]">
          <div>
            <RetroLogo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--rm-muted)]">
              Compra y reparación de consolas. Diagnóstico claro, precio antes
              de intervenir y garantía de 30 días.
            </p>
            <p className="rm-label mt-4 text-[var(--rm-faint)]">
              {brand.location} / {brand.shipping}
            </p>
          </div>

          <div>
            <p className="rm-label text-[var(--rm-faint)]">Mapa</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="rm-link text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contacto" className="rm-link text-sm">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="rm-label text-[var(--rm-faint)]">Contacto</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={`mailto:${brand.email}`} className="rm-link text-sm">
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rm-link text-sm"
                >
                  {brand.instagram}
                </a>
              </li>
              <li>
                <a href="/servicios#planes" className="rm-link text-sm">
                  Ver el plan de landing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--rm-line)] pt-5 text-xs text-[var(--rm-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Retromaquinas. Proyecto de
            demostración.
          </p>
          <p>
            Diseñado y desarrollado por{" "}
            <a href="/" className="rm-link text-[var(--rm-muted)]">
              Víctor Armao
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
