import { Link } from "react-router";
import { brand } from "./content";
import { useCatalog } from "./store";
import { PulsoWordmark } from "./Wordmark";

export function SiteFooter() {
  const { storeCategories: categories } = useCatalog();

  return (
    <footer className="pl-dark-surface bg-[var(--pl-ink)] text-[var(--pl-paper)]">
      <div className="pl-container grid gap-10 py-12 md:grid-cols-[1.2fr_0.6fr_0.6fr_0.8fr]">
        <div>
          <Link to="/demos/pulso" aria-label="Pulso Gamer, inicio">
            <PulsoWordmark className="text-[26px]" />
          </Link>
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-[var(--pl-paper)]/55">
            Sillas, escritorios, monitores y periféricos para armar un setup que
            aguante tus partidas y tu espalda.
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-[var(--pl-paper)]/35">
            {brand.location} / {brand.shipping}
          </p>
        </div>

        <div>
          <p className="pl-eyebrow text-[var(--pl-paper)]/40">Categorías</p>
          <ul className="mt-4 space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/demos/pulso/categoria/${category.slug}`}
                  className="text-[13px] text-[var(--pl-paper)]/65 transition-colors hover:text-[var(--pl-flame)]"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="pl-eyebrow text-[var(--pl-paper)]/40">Tienda</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                to="/demos/pulso/catalogo"
                className="text-[13px] text-[var(--pl-paper)]/65 transition-colors hover:text-[var(--pl-flame)]"
              >
                Catálogo completo
              </Link>
            </li>
            <li>
              <Link
                to="/demos/pulso/buscar"
                className="text-[13px] text-[var(--pl-paper)]/65 transition-colors hover:text-[var(--pl-flame)]"
              >
                Buscar
              </Link>
            </li>
            <li>
              <Link
                to="/demos/pulso/admin"
                className="text-[13px] text-[var(--pl-paper)]/65 transition-colors hover:text-[var(--pl-flame)]"
              >
                Panel demo
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="pl-eyebrow text-[var(--pl-paper)]/40">Contacto</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={`mailto:${brand.email}`}
                className="text-[13px] text-[var(--pl-paper)]/65 transition-colors hover:text-[var(--pl-flame)]"
              >
                {brand.email}
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${brand.instagram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-[var(--pl-paper)]/65 transition-colors hover:text-[var(--pl-flame)]"
              >
                {brand.instagram}
              </a>
            </li>
            <li>
              <Link
                to="/servicios#planes"
                className="text-[13px] text-[var(--pl-paper)]/65 transition-colors hover:text-[var(--pl-flame)]"
              >
                Ver el plan de catálogo
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="pl-container flex flex-col gap-3 border-t border-white/10 py-5 text-[11px] text-[var(--pl-paper)]/35 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Pulso Gamer. Proyecto de demostración.</p>
        <p>
          Diseñado y desarrollado por{" "}
          <a href="/" className="text-[var(--pl-paper)]/70 hover:underline">
            Víctor Armao
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
