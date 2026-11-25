import { useState } from "react";
import { useCatalog } from "./store";
import { ProductArt } from "./ProductArt";
import { ArrowIcon } from "./Icons";

export function PortadaPanel() {
  const { products, categories, siteConfig, updateSiteConfig } = useCatalog();
  const [eyebrow, setEyebrow] = useState(siteConfig.heroEyebrow);
  const [titleStart, setTitleStart] = useState(siteConfig.heroTitleStart);
  const [titleAccent, setTitleAccent] = useState(siteConfig.heroTitleAccent);
  const [titleEnd, setTitleEnd] = useState(siteConfig.heroTitleEnd);
  const [description, setDescription] = useState(siteConfig.heroDescription);
  const [featuredIds, setFeaturedIds] = useState<string[]>([
    siteConfig.featuredIds[0] ?? "",
    siteConfig.featuredIds[1] ?? "",
    siteConfig.featuredIds[2] ?? "",
  ]);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const orderedCategories = [
    ...siteConfig.categoryOrder
      .map((id) => categories.find((category) => category.id === id))
      .filter((category): category is NonNullable<typeof category> => Boolean(category)),
    ...categories.filter(
      (category) => !siteConfig.categoryOrder.includes(category.id),
    ),
  ];
  const visibleCategories = orderedCategories.filter(
    (category) => !siteConfig.hiddenCategoryIds.includes(category.id),
  );
  const featuredProducts = featuredIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));
  const productOptions = products.filter(
    (product) => product.status !== "oculto",
  );

  function touch() {
    setSaved(false);
  }

  function setFeaturedAt(index: number, value: string) {
    setFeaturedIds((current) =>
      current.map((item, itemIndex) => (itemIndex === index ? value : item)),
    );
    touch();
  }

  function save() {
    if (
      !eyebrow.trim() ||
      !titleStart.trim() ||
      !titleAccent.trim() ||
      !titleEnd.trim()
    ) {
      setError("Completa el texto del hero antes de guardar.");
      return;
    }
    setError(null);
    updateSiteConfig({
      heroEyebrow: eyebrow.trim(),
      heroTitleStart: titleStart.trim(),
      heroTitleAccent: titleAccent.trim(),
      heroTitleEnd: titleEnd.trim(),
      heroDescription: description.trim(),
      featuredIds: featuredIds.filter(Boolean),
    });
    setSaved(true);
  }

  function moveCategory(id: string, direction: -1 | 1) {
    const ids = orderedCategories.map((category) => category.id);
    const index = ids.indexOf(id);
    const nextIndex = index + direction;
    if (index < 0 || nextIndex < 0 || nextIndex >= ids.length) return;
    [ids[index], ids[nextIndex]] = [ids[nextIndex], ids[index]];
    updateSiteConfig({ categoryOrder: ids });
    touch();
  }

  function toggleCategory(id: string) {
    const hidden = siteConfig.hiddenCategoryIds;
    updateSiteConfig({
      hiddenCategoryIds: hidden.includes(id)
        ? hidden.filter((item) => item !== id)
        : [...hidden, id],
    });
    touch();
  }

  return (
    <div>
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <h1 className="pl-admin-display text-[26px]">Portada</h1>
          <p className="mt-1 text-[13px] text-[var(--pa-muted)]">
            Cambia el hero, los destacados y el orden de las categorías. La
            tienda demo usa estos valores.
          </p>
        </div>
        <button type="button" onClick={save} className="pl-admin-btn-accent">
          Guardar portada
        </button>
      </div>

      {error ? (
        <p className="mt-3 border border-[var(--pa-bad)]/30 bg-[var(--pa-bad-soft)] px-3 py-2 text-[12px] text-[var(--pa-bad)]">
          {error}
        </p>
      ) : null}
      {saved ? (
        <p className="mt-3 border border-[var(--pa-accent)]/25 bg-[var(--pa-accent-soft)] px-3 py-2 text-[12px] text-[var(--pa-accent)]">
          Portada guardada. Ya se ve en la tienda.
        </p>
      ) : null}

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-4">
          <div className="pl-admin-card p-4">
            <h2 className="text-[15px] font-semibold">Hero</h2>
            <div className="mt-3 grid gap-3">
              <label className="block">
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
                  Etiqueta superior
                </span>
                <input
                  value={eyebrow}
                  onChange={(event) => {
                    setEyebrow(event.target.value);
                    touch();
                  }}
                  className="pl-admin-input"
                  placeholder="Pulso / setup system 01"
                />
              </label>

              <div className="grid gap-3 sm:grid-cols-3">
                <label className="block">
                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
                    Línea 1
                  </span>
                  <input
                    value={titleStart}
                    onChange={(event) => {
                      setTitleStart(event.target.value);
                      touch();
                    }}
                    className="pl-admin-input"
                    placeholder="Armá tu"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
                    Palabra destacada
                  </span>
                  <input
                    value={titleAccent}
                    onChange={(event) => {
                      setTitleAccent(event.target.value);
                      touch();
                    }}
                    className="pl-admin-input"
                    placeholder="próximo"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
                    Línea final
                  </span>
                  <input
                    value={titleEnd}
                    onChange={(event) => {
                      setTitleEnd(event.target.value);
                      touch();
                    }}
                    className="pl-admin-input"
                    placeholder="setup."
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
                  Descripción
                </span>
                <textarea
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                    touch();
                  }}
                  rows={3}
                  className="pl-admin-input resize-y"
                />
              </label>
            </div>
          </div>

          <div className="pl-admin-card p-4">
            <h2 className="text-[15px] font-semibold">Destacados del hero</h2>
            <p className="mt-1 text-[12px] text-[var(--pa-muted)]">
              Hasta 3 productos en el rail principal.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {[0, 1, 2].map((index) => (
                <label key={index} className="block">
                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
                    Destacado {index + 1}
                  </span>
                  <select
                    value={featuredIds[index]}
                    onChange={(event) =>
                      setFeaturedAt(index, event.target.value)
                    }
                    className="pl-admin-select"
                  >
                    <option value="">—</option>
                    {productOptions.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
          </div>

          <div className="pl-admin-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[15px] font-semibold">Categorías</h2>
                <p className="mt-1 text-[12px] text-[var(--pa-muted)]">
                  Orden y visibilidad en la tienda.
                </p>
              </div>
              <span className="pl-badge pl-badge-muted">
                {visibleCategories.length} visibles
              </span>
            </div>
            <ul className="mt-3 divide-y divide-[var(--pa-line)]">
              {orderedCategories.map((category, index) => {
                const hidden = siteConfig.hiddenCategoryIds.includes(category.id);
                const count = products.filter(
                  (product) => product.categoryId === category.id,
                ).length;
                return (
                  <li
                    key={category.id}
                    className="flex items-center gap-2 py-2.5"
                  >
                    <span className="w-5 text-[10px] tabular-nums text-[var(--pa-muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`min-w-0 flex-1 truncate text-[13px] ${
                        hidden ? "text-[var(--pa-muted)] line-through" : ""
                      }`}
                    >
                      {category.name}
                    </span>
                    <span className="text-[10px] text-[var(--pa-muted)]">
                      {count}
                    </span>
                    <button
                      type="button"
                      onClick={() => moveCategory(category.id, -1)}
                      disabled={index === 0}
                      aria-label={`Subir ${category.name}`}
                      className="pl-admin-btn !px-1.5 !py-1.5 disabled:opacity-30"
                    >
                      <ArrowIcon size={13} className="-rotate-90" />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveCategory(category.id, 1)}
                      disabled={index === orderedCategories.length - 1}
                      aria-label={`Bajar ${category.name}`}
                      className="pl-admin-btn !px-1.5 !py-1.5 disabled:opacity-30"
                    >
                      <ArrowIcon size={13} className="rotate-90" />
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      className={`pl-admin-btn !px-2 !py-1 text-[10px] ${
                        hidden ? "text-[var(--pa-accent)]" : "text-[var(--pa-muted)]"
                      }`}
                    >
                      {hidden ? "Mostrar" : "Ocultar"}
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="mt-2 text-[11px] leading-relaxed text-[var(--pa-muted)]">
              Ocultar una categoría la quita de la navegación y del inicio, pero
              sus productos siguen existiendo en el catálogo.
            </p>
          </div>
        </div>

        <div className="xl:sticky xl:top-4 xl:self-start">
          <div className="pl-hero-preview pl-dark-surface pl-hero-grid relative overflow-hidden bg-[var(--pl-ink)] p-5 text-[var(--pl-paper)]">
            <div className="pl-gradient-line absolute inset-x-0 top-0" />
            <p className="pl-eyebrow text-[var(--pl-green-bright)]">
              {eyebrow || "Etiqueta superior"}
            </p>
            <p className="pl-display mt-4 text-[clamp(30px,3.4vw,44px)] leading-[0.92]">
              {titleStart || "Línea 1"}
              <span className="pl-text-gradient block w-fit">
                {titleAccent || "destacada"}
              </span>
              <span className="block">{titleEnd || "final"}</span>
            </p>
            <p className="mt-3 text-[11px] leading-relaxed text-[var(--pl-paper)]/55">
              {description || "Descripción del hero."}
            </p>
            <div className="mt-4 flex h-9 items-center border border-white/15 bg-white/5 px-3 text-[10px] text-[var(--pl-paper)]/30">
              Buscar en el catálogo…
            </div>

            <div className="mt-4 border-t border-white/10 pt-3">
              <p className="pl-eyebrow text-[var(--pl-paper)]/35">
                Categorías visibles
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {visibleCategories.map((category) => (
                  <span
                    key={category.id}
                    className="border border-white/15 px-2 py-1 text-[9px] text-[var(--pl-paper)]/55"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((index) => {
                const product = products.find(
                  (item) => item.id === featuredIds[index],
                );
                return (
                  <div
                    key={index}
                    className="bg-[var(--pl-paper)] p-1.5 text-[var(--pl-ink)]"
                  >
                    <div className="flex aspect-square items-center justify-center bg-[var(--pl-bone)] p-1">
                      {product ? (
                        <ProductArt
                          variant={product.art}
                          className="h-full w-full"
                        />
                      ) : (
                        <span className="text-[9px] text-[var(--pl-smoke)]">
                          —
                        </span>
                      )}
                    </div>
                    <p className="mt-1 truncate text-[9px] font-semibold">
                      {product?.name ?? "Sin elegir"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="mt-2 text-right text-[10px] uppercase tracking-[0.1em] text-[var(--pa-muted)]">
            Vista previa en vivo
          </p>
        </div>
      </div>
    </div>
  );
}
