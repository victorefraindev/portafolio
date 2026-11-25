import { Link } from "react-router";
import type { Route } from "./+types/pulso.catalog";
import { useCatalog } from "~/demos/pulso/store";
import { ProductCard } from "~/demos/pulso/ProductCard";

export function meta({}: Route.MetaArgs) {
  const title = "Catálogo — Pulso Gamer";
  const description =
    "Sillas, escritorios, monitores, periféricos e iluminación para armar tu setup gamer.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
}

export default function PulsoCatalog() {
  const { products, categories, storeCategories } = useCatalog();
  const visible = products.filter((product) => product.status !== "oculto");

  return (
    <div className="pl-container pb-16 pt-10">
      <nav className="text-[11px] uppercase tracking-[0.12em] text-[var(--pl-smoke)]" aria-label="Ruta">
        <Link to="/demos/pulso" className="transition-colors hover:text-[var(--pl-ember)]">
          Inicio
        </Link>
        <span className="mx-2 text-[var(--pl-ink)]/25">/</span>
        <span className="text-[var(--pl-ink)]/70">Catálogo</span>
      </nav>

      <header className="mt-5 border-b border-[var(--pl-ink)]/15 pb-6">
        <h1 className="pl-display text-[clamp(42px,7vw,84px)]">Catálogo</h1>
        <div className="mt-3 flex flex-wrap items-baseline justify-between gap-3">
          <p className="max-w-[52ch] text-[15px] leading-relaxed text-[var(--pl-ink)]/60">
            Todo lo que tenemos para el escritorio, la silla y la partida. Los
            precios están en USD y el envío se cotiza por WhatsApp.
          </p>
          <span className="text-[11px] uppercase tracking-[0.12em] text-[var(--pl-smoke)]">
            {visible.length} productos
          </span>
        </div>
      </header>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="border border-[var(--pl-ink)] bg-[var(--pl-ink)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--pl-paper)]">
          Todos
        </span>
        {storeCategories.map((category) => (
          <Link
            key={category.id}
            to={`/demos/pulso/categoria/${category.slug}`}
            className="border border-[var(--pl-ink)]/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--pl-ink)]/65 transition-colors hover:border-[var(--pl-ember)] hover:text-[var(--pl-ember)]"
          >
            {category.name}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
