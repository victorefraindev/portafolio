import { useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/pulso.home";
import { useCatalog } from "~/demos/pulso/store";
import { formatPrice } from "~/demos/pulso/utils";
import { ProductCard } from "~/demos/pulso/ProductCard";
import { ProductArt } from "~/demos/pulso/ProductArt";
import { ArrowIcon } from "~/demos/pulso/Icons";

export function meta({}: Route.MetaArgs) {
  const title = "Pulso Gamer — Sillas, monitores y periféricos para tu setup";
  const description =
    "Catálogo de sillas, escritorios, monitores y periféricos para gamers. Armá tu setup y pedí por WhatsApp.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
}

const setupProfiles = [
  {
    id: "competitive",
    name: "Competitivo",
    note: "1080p / 180 Hz",
    description:
      "Monitor rápido, teclado compacto y mouse ligero. Menos distracción, más reflejos.",
    productIds: ["p-monitor-27", "p-teclado-k75", "p-mouse-m2"],
  },
  {
    id: "creator",
    name: "Creador",
    note: "1440p / edición",
    description:
      "Una base para jugar y editar sin cambiar de equipo: GPU con margen, 32 GB y escritorio grande.",
    productIds: ["p-pc-1440", "p-monitor-27", "p-escritorio-140"],
  },
  {
    id: "office",
    name: "Home office",
    note: "Trabajo / estudio",
    description:
      "Silencioso, ordenado y listo para videollamadas. Sin pagar de más por luces que no vas a usar.",
    productIds: ["p-pc-starter", "p-escritorio-120", "p-headset-h1"],
  },
] as const;

export default function PulsoHome() {
  const { products, categories, storeCategories, siteConfig } = useCatalog();
  const visible = products.filter((product) => product.status !== "oculto");
  const configuredFeatured = siteConfig.featuredIds
    .map((id) => visible.find((product) => product.id === id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));
  const featured = [
    ...configuredFeatured,
    ...visible.filter(
      (product) =>
        product.featured &&
        !configuredFeatured.some((item) => item.id === product.id),
    ),
    ...visible,
  ]
    .filter(
      (product, index, list) =>
        list.findIndex((item) => item.id === product.id) === index,
    )
    .slice(0, 3);
  const latest = [...visible]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 8);
  const [profileId, setProfileId] = useState<string>("competitive");
  const activeProfile =
    setupProfiles.find((profile) => profile.id === profileId) ??
    setupProfiles[0];
  const setupProducts = activeProfile.productIds
    .map((id) => visible.find((product) => product.id === id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));
  const setupTotal = setupProducts.reduce(
    (sum, product) => sum + product.price,
    0,
  );

  return (
    <>
      <section className="pl-dark-surface relative overflow-hidden bg-[var(--pl-ink)] text-[var(--pl-paper)]">
        <div
          aria-hidden="true"
          className="pl-hero-grid pointer-events-none absolute inset-0 opacity-70"
        />
        <div className="pl-gradient-line relative z-10" />

        <div className="pl-container relative z-10 pb-12 pt-8 md:pb-14 md:pt-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="pl-eyebrow text-[var(--pl-green-bright)]">
              {siteConfig.heroEyebrow}
            </p>
            <p className="pl-eyebrow text-[var(--pl-paper)]/40">
              Caracas / envíos nacionales
            </p>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
            <div>
              <h1 className="pl-display text-[clamp(46px,6.8vw,98px)] leading-[0.9]">
                {siteConfig.heroTitleStart}
                <span className="pl-text-gradient block w-fit">
                  {siteConfig.heroTitleAccent}
                </span>
                <span className="block">{siteConfig.heroTitleEnd}</span>
              </h1>

              <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-[var(--pl-paper)]/55">
                {siteConfig.heroDescription}
              </p>

              <form
                action="/demos/pulso/buscar"
                method="get"
                className="mt-7 flex max-w-[680px] border border-white/15 bg-white/5 focus-within:border-[var(--pl-green-bright)]"
              >
                <input
                  type="search"
                  name="q"
                  placeholder="Silla, monitor 165hz, teclado…"
                  aria-label="Buscar en el catálogo"
                  autoComplete="off"
                  className="h-12 min-w-0 flex-1 bg-transparent px-4 text-[15px] text-[var(--pl-paper)] placeholder:text-[var(--pl-paper)]/30 focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-12 bg-[var(--pl-ember)] px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#1c45c4]"
                >
                  Buscar
                </button>
              </form>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="pl-eyebrow text-[var(--pl-paper)]/30">
                  Se busca mucho
                </span>
                {["silla", "monitor 165hz", "escritorio", "teclado"].map(
                  (term) => (
                    <Link
                      key={term}
                      to={`/demos/pulso/buscar?q=${encodeURIComponent(term)}`}
                      className="border border-white/15 px-2.5 py-1 text-[11px] text-[var(--pl-paper)]/55 transition-colors hover:border-[var(--pl-green-bright)] hover:text-[var(--pl-green-bright)]"
                    >
                      {term}
                    </Link>
                  ),
                )}
              </div>
            </div>

            <aside className="border border-white/10 bg-white/5 p-4 sm:p-5">
              <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                <p className="pl-eyebrow text-[var(--pl-green-bright)]">
                  Categorías / {String(storeCategories.length).padStart(2, "0")}
                </p>
                <span className="text-[10px] uppercase tracking-[0.12em] text-[var(--pl-paper)]/30">
                  índice
                </span>
              </div>
              <ul className="divide-y divide-white/10">
                {storeCategories.map((category, index) => {
                  const count = visible.filter(
                    (product) => product.categoryId === category.id,
                  ).length;
                  return (
                    <li key={category.id}>
                      <Link
                        to={`/demos/pulso/categoria/${category.slug}`}
                        className="group flex items-center gap-3 py-2.5"
                      >
                        <span className="text-[10px] tabular-nums text-[var(--pl-paper)]/25">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[13px] font-medium text-[var(--pl-paper)]/80 transition-colors group-hover:text-[var(--pl-paper)]">
                          {category.name}
                        </span>
                        <span className="ml-auto text-[10px] tabular-nums text-[var(--pl-paper)]/30">
                          {count}
                        </span>
                        <ArrowIcon
                          size={13}
                          className="text-[var(--pl-paper)]/25 transition-all group-hover:translate-x-0.5 group-hover:text-[var(--pl-green-bright)]"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                to="/demos/pulso/catalogo"
                className="mt-4 inline-flex w-full items-center justify-center border border-white/20 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--pl-paper)] transition-colors hover:border-[var(--pl-green-bright)] hover:text-[var(--pl-green-bright)]"
              >
                Ver catálogo completo
              </Link>
            </aside>
          </div>

          <div className="mt-12">
            <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-2.5">
              <p className="pl-eyebrow text-[var(--pl-paper)]/40">
                Destacados / 03
              </p>
              <Link
                to="/demos/pulso/catalogo"
                className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--pl-paper)]/40 transition-colors hover:text-[var(--pl-green-bright)]"
              >
                Ver todo
              </Link>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {featured.map((product, index) => (
                <Link
                  key={product.id}
                  to={`/demos/pulso/producto/${product.slug}`}
                  className="group block bg-[var(--pl-paper)] p-3 text-[var(--pl-ink)] transition-colors hover:bg-white"
                >
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[var(--pl-bone)] p-4">
                    <ProductArt
                      variant={product.art}
                      className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-2 top-2 bg-[var(--pl-blue)] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
                      {index === 0 ? "Drop 01" : "Destacado"}
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-3 border-t border-[var(--pl-ink)]/15 pt-2.5">
                    <div className="min-w-0">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--pl-blue)]">
                        {categories.find((item) => item.id === product.categoryId)?.name}
                      </p>
                      <p className="truncate text-[14px] font-semibold">
                        {product.name}
                      </p>
                    </div>
                    <p className="shrink-0 text-[13px] font-semibold tabular-nums">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 sm:grid-cols-4">
            {[
              { value: String(products.length), label: "productos" },
              { value: String(storeCategories.length), label: "categorías" },
              { value: "12 m", label: "de garantía" },
              { value: "24 h", label: "respuesta" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="pl-display text-[26px] leading-none text-[var(--pl-paper)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[var(--pl-paper)]/35">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pl-container py-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="pl-eyebrow text-[var(--pl-blue)]">
              Setup builder
            </p>
            <h2 className="pl-display mt-3 text-[clamp(28px,4vw,46px)]">
              Elegí un perfil.
            </h2>
          </div>
          <p className="max-w-sm text-[13px] leading-relaxed text-[var(--pl-smoke)]">
            Tres puntos de partida según lo que hacés. Después ajustamos piezas
            contigo.
          </p>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="pl-dark-surface bg-[var(--pl-ink)] p-6 text-[var(--pl-paper)] md:p-8">
            <div className="flex items-baseline justify-between gap-3">
              <p className="pl-eyebrow text-[var(--pl-green-bright)]">
                Perfil activo
              </p>
              <span className="text-[10px] tabular-nums text-[var(--pl-paper)]/30">
                {String(
                  setupProfiles.findIndex((item) => item.id === activeProfile.id) + 1,
                ).padStart(2, "0")}
                / 03
              </span>
            </div>
            <h3 className="pl-display mt-4 text-[clamp(32px,4vw,48px)] text-[var(--pl-paper)]">
              {activeProfile.name}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[var(--pl-paper)]/55">
              {activeProfile.description}
            </p>

            <div className="mt-6 flex flex-col gap-2">
              {setupProfiles.map((profile) => (
                <button
                  key={profile.id}
                  type="button"
                  onClick={() => setProfileId(profile.id)}
                  aria-pressed={profile.id === activeProfile.id}
                  className={`flex items-center justify-between gap-3 border px-3 py-2.5 text-left text-[12px] font-medium transition-colors ${
                    profile.id === activeProfile.id
                      ? "border-[var(--pl-green-bright)] bg-white/10 text-[var(--pl-paper)]"
                      : "border-white/10 text-[var(--pl-paper)]/50 hover:border-white/25 hover:text-[var(--pl-paper)]/80"
                  }`}
                >
                  <span>{profile.name}</span>
                  <span className="text-[9px] uppercase tracking-[0.1em] text-[var(--pl-paper)]/35">
                    {profile.note}
                  </span>
                </button>
              ))}
            </div>

            <p className="mt-6 text-[10px] uppercase tracking-[0.12em] text-[var(--pl-paper)]/30">
              {setupProducts.length} piezas / desde {formatPrice(setupTotal)}
            </p>
          </div>

          <div className="border border-[var(--pl-line)] bg-[var(--pl-surface)] p-4 sm:p-6">
            <div className="flex items-baseline justify-between gap-3 border-b border-[var(--pl-ink)]/15 pb-3">
              <p className="pl-eyebrow text-[var(--pl-smoke)]">
                Productos del perfil
              </p>
              <p className="text-[11px] font-semibold tabular-nums">
                {formatPrice(setupTotal)}
              </p>
            </div>

            <ul className="divide-y divide-[var(--pl-ink)]/10">
              {setupProducts.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/demos/pulso/producto/${product.slug}`}
                    className="group flex items-center gap-4 py-4"
                  >
                    <div className="flex h-20 w-16 shrink-0 items-center justify-center bg-[var(--pl-bone)] p-1">
                      <ProductArt
                        variant={product.art}
                        className="h-full w-full transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--pl-blue)]">
                        {categories.find((item) => item.id === product.categoryId)?.name}
                      </p>
                      <p className="truncate text-[14px] font-semibold">
                        {product.name}
                      </p>
                      <p className="mt-1 text-[11px] text-[var(--pl-smoke)]">
                        {product.colors.slice(0, 3).join(" / ")}
                      </p>
                    </div>
                    <p className="shrink-0 text-[13px] font-semibold tabular-nums">
                      {formatPrice(product.price)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex items-center justify-between border-t border-[var(--pl-ink)]/15 pt-4">
              <p className="pl-eyebrow text-[var(--pl-smoke)]">Total</p>
              <p className="pl-display text-[30px] tabular-nums">
                {formatPrice(setupTotal)}
              </p>
            </div>

            <Link
              to="/demos/pulso/catalogo"
              className="pl-btn-ink mt-4 w-full"
            >
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--pl-line)] bg-[#fafafa] py-14">
        <div className="pl-container">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="pl-eyebrow text-[var(--pl-blue)]">
                Departamentos
              </p>
              <h2 className="pl-display mt-3 text-[clamp(28px,4vw,46px)]">
                Todo el setup, por partes.
              </h2>
            </div>
            <Link
              to="/demos/pulso/catalogo"
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--pl-ink)]/45 transition-colors hover:text-[var(--pl-ember)]"
            >
              Ver todo
            </Link>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {storeCategories.map((category, index) => {
              const categoryProducts = visible.filter(
                (product) => product.categoryId === category.id,
              );
              const art = categoryProducts[0]?.art ?? "pc";
              return (
                <Link
                  key={category.id}
                  to={`/demos/pulso/categoria/${category.slug}`}
                  className="group flex items-center justify-between gap-4 border border-[var(--pl-line)] bg-[var(--pl-surface)] p-5 transition-colors hover:border-[var(--pl-blue)]"
                >
                  <div className="min-w-0">
                    <p className="text-[10px] tabular-nums text-[var(--pl-smoke)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="pl-display mt-2 text-[clamp(24px,3vw,34px)] transition-colors group-hover:text-[var(--pl-blue)]">
                      {category.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-[var(--pl-smoke)]">
                      {category.description}
                    </p>
                    <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--pl-ink)]/40">
                      {categoryProducts.length}{" "}
                      {categoryProducts.length === 1 ? "producto" : "productos"}
                    </p>
                  </div>
                  <div className="flex h-24 w-20 shrink-0 items-center justify-center bg-[var(--pl-bone)] p-2">
                    <ProductArt
                      variant={art}
                      className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pl-container py-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="pl-eyebrow text-[var(--pl-blue)]">Nuevo</p>
            <h2 className="pl-display mt-3 text-[clamp(28px,4vw,46px)]">
              Recién llegados.
            </h2>
          </div>
          <Link
            to="/demos/pulso/catalogo"
            className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--pl-ink)]/45 transition-colors hover:text-[var(--pl-ember)]"
          >
            Ver catálogo <ArrowIcon size={14} />
          </Link>
        </div>

        <div className="pl-scrollbar-none mt-6 flex gap-4 overflow-x-auto pb-2">
          {latest.slice(0, 6).map((product) => (
            <div key={product.id} className="w-[210px] shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      <section className="pl-dark-surface bg-[var(--pl-ink)] text-[var(--pl-paper)]">
        <div className="pl-container grid gap-6 py-10 md:grid-cols-[1fr_auto] md:items-center md:py-12">
          <div>
            <p className="pl-eyebrow text-[var(--pl-green-bright)]">
              Asesoría / 01
            </p>
            <h2 className="pl-display mt-2 text-[clamp(28px,4vw,44px)]">
              ¿No sabés qué elegir?
            </h2>
            <p className="mt-2 max-w-[55ch] text-[13px] leading-relaxed text-[var(--pl-paper)]/50">
              Contanos qué jugás, qué monitor tenés y cuánto querés gastar. Te
              devolvemos una lista de piezas con sentido.
            </p>
          </div>
          <a
            href="mailto:hola@pulso.demo?subject=Quiero%20armar%20mi%20setup"
            className="pl-btn-ember shrink-0"
          >
            Pedir recomendación
          </a>
        </div>
      </section>
    </>
  );
}
