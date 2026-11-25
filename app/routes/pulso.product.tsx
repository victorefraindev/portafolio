import { useState } from "react";
import { Link, useParams } from "react-router";
import type { Route } from "./+types/pulso.product";
import { seedProducts } from "~/demos/pulso/content";
import { useCatalog, useOrder } from "~/demos/pulso/store";
import { colorHexFor, formatPrice } from "~/demos/pulso/utils";
import { ProductArt } from "~/demos/pulso/ProductArt";
import { ProductCard } from "~/demos/pulso/ProductCard";
import { MinusIcon, PlusIcon } from "~/demos/pulso/Icons";

export function meta({ params }: Route.MetaArgs) {
  const product = seedProducts.find((item) => item.slug === params.slug);
  const title = product ? `${product.name} — Pulso Gamer` : "Producto — Pulso Gamer";
  const description = product?.description ?? "Producto del catálogo Pulso Gamer.";
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "product" },
  ];
}

const views = [
  { label: "Frente", transform: undefined },
  {
    label: "Ángulo",
    transform: "perspective(900px) rotateY(-18deg) scale(0.92)",
  },
  { label: "Detalle", transform: "scale(1.35) translateY(4%)" },
];

export default function PulsoProduct() {
  const { slug } = useParams();
  const { products, categories } = useCatalog();
  const { add, setOpen } = useOrder();
  const product = products.find(
    (item) => item.slug === slug && item.status !== "oculto",
  );

  const [viewIndex, setViewIndex] = useState(0);
  const [color, setColor] = useState(product?.colors[0] ?? "Negro");
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="pl-container py-24 text-center">
        <p className="pl-eyebrow text-[var(--pl-ember)]">Error 404</p>
        <h1 className="pl-display mt-4 text-[clamp(38px,6vw,72px)]">
          Este producto no existe
        </h1>
        <p className="mt-3 text-[15px] text-[var(--pl-ink)]/60">
          El link puede estar viejo o el producto se retiró del catálogo.
        </p>
        <Link to="/demos/pulso/catalogo" className="pl-btn-ink mt-6">
          Ver el catálogo
        </Link>
      </div>
    );
  }

  const category = categories.find((item) => item.id === product.categoryId);
  const soldOut = product.status === "agotado";
  const related = products
    .filter(
      (item) =>
        item.categoryId === product.categoryId &&
        item.id !== product.id &&
        item.status !== "oculto",
    )
    .slice(0, 4);

  function addToOrder() {
    if (!product) return;
    add(product.id, color, qty);
    setOpen(true);
  }

  return (
    <div className="pl-container pb-16 pt-6">
      <nav className="text-[11px] uppercase tracking-[0.12em] text-[var(--pl-smoke)]" aria-label="Ruta">
        <Link to="/demos/pulso/catalogo" className="transition-colors hover:text-[var(--pl-ember)]">
          Catálogo
        </Link>
        <span className="mx-2 text-[var(--pl-ink)]/25">/</span>
        <Link
          to={`/demos/pulso/categoria/${category?.slug}`}
          className="transition-colors hover:text-[var(--pl-ember)]"
        >
          {category?.name ?? "Categoría"}
        </Link>
        <span className="mx-2 text-[var(--pl-ink)]/25">/</span>
        <span className="text-[var(--pl-ink)]/70">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[var(--pl-bone)] p-8">
            <div
              className="h-full w-full transition-transform duration-500"
              style={{
                transform: views[viewIndex]?.transform,
                transformOrigin: "center",
              }}
            >
              <ProductArt variant={product.art} className="h-full w-full" />
            </div>
            {soldOut ? (
              <span className="absolute left-4 top-4 bg-[var(--pl-ink)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--pl-paper)]">
                Agotado
              </span>
            ) : null}
          </div>

          <div className="mt-2 flex gap-2">
            {views.map((view, index) => (
              <button
                key={view.label}
                type="button"
                onClick={() => setViewIndex(index)}
                aria-pressed={index === viewIndex}
                className={`flex h-16 w-16 shrink-0 items-center justify-center border bg-[var(--pl-bone)] p-1 transition-opacity ${
                  index === viewIndex
                    ? "border-[var(--pl-ink)]"
                    : "border-[var(--pl-ink)]/15 opacity-65 hover:opacity-100"
                }`}
              >
                <ProductArt variant={product.art} className="h-full w-full" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:py-2">
          <p className="pl-eyebrow text-[var(--pl-ember)]">
            {category?.name ?? "Catálogo"}
          </p>
          <h1 className="pl-display mt-3 text-[clamp(36px,5vw,58px)]">
            {product.name}
          </h1>

          <div className="mt-4 flex items-baseline gap-3 border-b border-[var(--pl-ink)]/15 pb-5">
            <span className="text-[24px] font-semibold tabular-nums">
              {formatPrice(product.price)}
            </span>
            <span className="text-[12px] uppercase tracking-[0.1em] text-[var(--pl-smoke)]">
              USD
            </span>
          </div>

          <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-[var(--pl-ink)]/70">
            {product.description}
          </p>

          {soldOut ? (
            <div className="mt-8 border border-[var(--pl-ink)]/15 bg-[var(--pl-bone)]/60 px-4 py-4">
              <p className="text-[13px] leading-relaxed text-[var(--pl-ink)]/70">
                Este modelo está agotado. Escríbenos y te avisamos si vuelve a
                entrar.
              </p>
            </div>
          ) : (
            <>
              <div className="mt-7">
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--pl-smoke)]">
                    Color
                  </span>
                  <span className="text-[11px] text-[var(--pl-smoke)]">
                    {color}
                  </span>
                </div>
                <div className="mt-3 flex gap-2">
                  {product.colors.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setColor(option)}
                      aria-label={option}
                      aria-pressed={color === option}
                      title={option}
                      className={`size-9 border p-[3px] transition-colors ${
                        color === option
                          ? "border-[var(--pl-ink)]"
                          : "border-[var(--pl-ink)]/15 hover:border-[var(--pl-ink)]/50"
                      }`}
                    >
                      <span
                        className="block size-full"
                        style={{ backgroundColor: colorHexFor(option) }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--pl-smoke)]">
                  Cantidad
                </span>
                <div className="mt-3 flex items-center border border-[var(--pl-ink)]/20">
                  <button
                    type="button"
                    onClick={() => setQty((value) => Math.max(1, value - 1))}
                    className="grid size-10 place-items-center text-[var(--pl-ink)]/70 hover:bg-[var(--pl-ink)] hover:text-[var(--pl-paper)]"
                    aria-label="Quitar una unidad"
                  >
                    <MinusIcon size={14} />
                  </button>
                  <span className="w-10 text-center text-[14px] tabular-nums">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((value) => value + 1)}
                    className="grid size-10 place-items-center text-[var(--pl-ink)]/70 hover:bg-[var(--pl-ink)] hover:text-[var(--pl-paper)]"
                    aria-label="Agregar una unidad"
                  >
                    <PlusIcon size={14} />
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={addToOrder}
                  className="pl-btn-ink h-13 py-4"
                >
                  Agregar a tu pedido
                </button>
                <button
                  type="button"
                  onClick={addToOrder}
                  className="pl-btn-outline h-12"
                >
                  Pedir esta por WhatsApp
                </button>
              </div>
            </>
          )}

          <dl className="mt-8 divide-y divide-[var(--pl-ink)]/10 border-y border-[var(--pl-ink)]/15 text-[13px]">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between gap-6 py-3"
              >
                <dt className="text-[var(--pl-smoke)]">{spec.label}</dt>
                <dd className="text-right">{spec.value}</dd>
              </div>
            ))}
            <div className="flex justify-between gap-6 py-3">
              <dt className="text-[var(--pl-smoke)]">Envío</dt>
              <dd>A toda Venezuela</dd>
            </div>
          </dl>

          {product.tags.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/demos/pulso/buscar?q=${encodeURIComponent(tag)}`}
                  className="border border-[var(--pl-ink)]/15 px-2.5 py-1 text-[11px] text-[var(--pl-ink)]/55 transition-colors hover:border-[var(--pl-ember)] hover:text-[var(--pl-ember)]"
                >
                  {tag}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-20">
          <h2 className="pl-display border-b border-[var(--pl-ink)]/15 pb-3 text-[clamp(22px,3vw,32px)]">
            También te puede gustar
          </h2>
          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
