import { Link } from "react-router";
import { brand, nav } from "./content";
import { ForjaLogo } from "./Logo";

const footerLink =
  "text-sm text-[var(--fj-graphite-muted)] transition-colors hover:text-[var(--fj-graphite-ink)]";

export function ForjaFooter() {
  return (
    <footer className="fj-footer">
      <div className="fj-container py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.6fr_0.6fr_0.8fr]">
          <div>
            <ForjaLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--fj-graphite-muted)]">
              Componentes elegidos por compatibilidad y rendimiento. PCs
              armadas, probadas y explicadas.
            </p>
            <p className="fj-label mt-4 text-[var(--fj-graphite-muted)]">
              {brand.location} / {brand.shipping}
            </p>
          </div>

          <div>
            <p className="fj-label text-[var(--fj-graphite-muted)]">Páginas</p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="fj-label text-[var(--fj-graphite-muted)]">Servicios</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/demos/forjapc/servicios" className={footerLink}>
                  Armado a medida
                </Link>
              </li>
              <li>
                <Link to="/demos/forjapc/servicios" className={footerLink}>
                  Upgrades
                </Link>
              </li>
              <li>
                <Link to="/demos/forjapc/servicios" className={footerLink}>
                  Diagnóstico
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="fj-label text-[var(--fj-graphite-muted)]">Contacto</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={`mailto:${brand.email}`} className={footerLink}>
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={footerLink}
                >
                  {brand.instagram}
                </a>
              </li>
              <li>
                <span className="text-sm text-[var(--fj-graphite-muted)]">
                  {brand.hours}
                </span>
              </li>
              <li>
                <Link to="/servicios#planes" className={footerLink}>
                  Ver el plan de sitio institucional
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-[var(--fj-graphite-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Forja PC. Proyecto de demostración.
          </p>
          <p>
            Diseñado y desarrollado por{" "}
            <a href="/" className="text-[var(--fj-graphite-ink)] hover:underline">
              Víctor Armao
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
