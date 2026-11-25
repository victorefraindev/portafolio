import { Link, useParams } from "react-router";
import type { Route } from "./+types/pulso.category";
import { seedCategories } from "~/demos/pulso/content";
import { useCatalog } from "~/demos/pulso/store";
import { ProductCard } from "~/demos/pulso/ProductCard";

export function meta({ params }: Route.MetaArgs) {
  const category = seedCategories.find((item) => item.slug === params.slug);
  const title = category
    ? `${category.name} — Pulso Gamer`
    : "Categoría — Pulso Gamer";
  const description = category
    ? `${category.name} para tu setup. ${category.description}`
    : "Categoría del catálogo Pulso Gamer.";
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
}

export default function PulsoCategory() {
  const { slug } = useParams();
  const { products, categories } = useCatalog();
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return (
      <div className="pl-container py-24 text-center">
        <p className="pl-eyebrow text-[var(--pl-ember)]">Error 404</p>
        <h1 className="pl-display mt-4 text-[clamp(38px,6vw,72px)]">
          Esta categoría no existe
        </h1>
        <Link to="/demos/pulso/catalogo" className="pl-btn-ink mt-6">
          Ver el catálogo
        </Link>
      </div>
    );
  }

  const visible = products.filter(
    (product) =>
      product.categoryId === category.id && product.status !== "oculto",
  );

  return (
    <div className="pl-container pb-16 pt-10">
      <nav className="text-[11px] uppercase tracking-[0.12em] text-[var(--pl-smoke)]" aria-label="Ruta">
        <Link to="/demos/pulso" className="transition-colors hover:text-[var(--pl-ember)]">
          Inicio
        </Link>
        <span className="mx-2 text-[var(--pl-ink)]/25">/</span>
        <Link to="/demos/pulso/catalogo" className="transition-colors hover:text-[var(--pl-ember)]">
          Catálogo
        </Link>
        <span className="mx-2 text-[var(--pl-ink)]/25">/</span>
        <span className="text-[var(--pl-ink)]/70">{category.name}</span>
      </nav>

      <header className="mt-5 border-b border-[var(--pl-ink)]/15 pb-6">
        <h1 className="pl-display text-[clamp(42px,7vw,84px)]">
          {category.name}
        </h1>
        <div className="mt-3 flex flex-wrap items-baseline justify-between gap-3">
          <p className="max-w-[52ch] text-[15px] leading-relaxed text-[var(--pl-ink)]/60">
            {category.description}
          </p>
          <span className="text-[11px] uppercase tracking-[0.12em] text-[var(--pl-smoke)]">
            {visible.length} {visible.length === 1 ? "modelo" : "modelos"}
          </span>
        </div>
      </header>

      {visible.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-[15px] text-[var(--pl-ink)]/60">
            Todavía no hay productos en esta categoría.
          </p>
          <Link to="/demos/pulso/catalogo" className="pl-btn-ink mt-5">
            Ver el catálogo
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
