import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router";
import type { Route } from "./+types/pulso.search";
import { popularSearches } from "~/demos/pulso/content";
import { useCatalog } from "~/demos/pulso/store";
import { searchProducts } from "~/demos/pulso/utils";
import { ProductCard } from "~/demos/pulso/ProductCard";
import { SearchIcon, XIcon } from "~/demos/pulso/Icons";

export function meta({}: Route.MetaArgs) {
  const title = "Buscar — Pulso Gamer";
  const description =
    "Buscá sillas, monitores, escritorios y periféricos en el catálogo de Pulso Gamer.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
}

export default function PulsoSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const { products, categories, storeCategories } = useCatalog();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSearchParams(query.trim() ? { q: query.trim() } : {}, {
        replace: true,
      });
    }, 250);
    return () => window.clearTimeout(timer);
  }, [query, setSearchParams]);

  const term = query.trim();
  const results = term ? searchProducts(products, categories, term) : [];

  return (
    <div className="pl-container pb-16 pt-10">
      <h1 className="pl-display text-[clamp(38px,6vw,72px)]">Buscar</h1>

      <div className="mt-6 flex max-w-[760px] items-center border-b-2 border-[var(--pl-ink)] pb-2 focus-within:border-[var(--pl-ember)]">
        <SearchIcon size={20} className="shrink-0 text-[var(--pl-ink)]/40" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Silla, monitor 165hz, teclado…"
          aria-label="Buscar en el catálogo"
          className="h-12 w-full bg-transparent px-3 text-[18px] placeholder:text-[var(--pl-ink)]/30 focus:outline-none"
        />
        {term ? (
          <div className="flex shrink-0 items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.1em] text-[var(--pl-smoke)]">
              {results.length} {results.length === 1 ? "resultado" : "resultados"}
            </span>
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Limpiar búsqueda"
              className="text-[var(--pl-ink)]/40 transition-colors hover:text-[var(--pl-ink)]"
            >
              <XIcon size={16} />
            </button>
          </div>
        ) : null}
      </div>

      {!term ? (
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="pl-eyebrow text-[var(--pl-smoke)]">Se busca mucho</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {popularSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setQuery(item)}
                  className="border border-[var(--pl-ink)]/20 px-3 py-1.5 text-[12px] text-[var(--pl-ink)]/70 transition-colors hover:border-[var(--pl-ember)] hover:text-[var(--pl-ember)]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="pl-eyebrow text-[var(--pl-smoke)]">Por categoría</h2>
            <ul className="mt-4 divide-y divide-[var(--pl-ink)]/10">
              {storeCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/demos/pulso/categoria/${category.slug}`}
                    className="flex items-baseline justify-between gap-4 py-3 transition-colors hover:text-[var(--pl-ember)]"
                  >
                    <span className="text-[16px] font-semibold">
                      {category.name}
                    </span>
                    <span className="text-right text-[12px] text-[var(--pl-smoke)]">
                      {category.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : results.length === 0 ? (
        <div className="mt-12 border-t border-[var(--pl-ink)]/15 pt-10">
          <p className="pl-display text-[clamp(26px,4vw,40px)]">
            No encontramos «{term}»
          </p>
          <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-[var(--pl-ink)]/60">
            Probá con otra palabra o mirá una categoría. El stock cambia
            seguido.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {storeCategories.map((category) => (
              <Link
                key={category.id}
                to={`/demos/pulso/categoria/${category.slug}`}
                className="border border-[var(--pl-ink)]/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pl-ink)]/60 transition-colors hover:border-[var(--pl-ember)] hover:text-[var(--pl-ember)]"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
