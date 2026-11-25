import { Link } from "react-router";
import type { Product } from "./content";
import { useCatalog } from "./store";
import { cn, formatPrice } from "./utils";
import { ProductArt } from "./ProductArt";

export function ProductCard({ product }: { product: Product }) {
  const { categories } = useCatalog();
  const category = categories.find((item) => item.id === product.categoryId);
  const soldOut = product.status === "agotado";

  return (
    <Link to={`/demos/pulso/producto/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-[var(--pl-bone)]">
        <div
          className={cn(
            "flex aspect-[4/5] items-center justify-center p-6 transition-transform duration-500 ease-out group-hover:scale-[1.03]",
            soldOut && "grayscale",
          )}
        >
          <ProductArt variant={product.art} className="h-full w-full" />
        </div>
        {soldOut ? (
          <span className="absolute left-3 top-3 bg-[var(--pl-ink)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--pl-paper)]">
            Agotado
          </span>
        ) : product.featured ? (
          <span className="absolute left-3 top-3 bg-[var(--pl-ember)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
            Destacado
          </span>
        ) : null}
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-3 border-t border-[var(--pl-ink)]/15 pt-2.5">
        <div className="min-w-0">
          <h3 className="truncate text-[15px] font-semibold leading-tight">
            {product.name}
          </h3>
          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--pl-smoke)]">
            {category?.name ?? "Catálogo"}
          </p>
        </div>
        <span className="shrink-0 text-[14px] font-semibold tabular-nums">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}
