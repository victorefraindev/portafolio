import { useState } from "react";
import { useCatalog } from "./store";
import { ActivityList } from "./ActivityList";

type Filter = "todas" | "producto" | "categoria" | "portada" | "demo";

export function ActivityPanel() {
  const { activity, clearActivity } = useCatalog();
  const [filter, setFilter] = useState<Filter>("todas");
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();
  const filtered = activity.filter((entry) => {
    const matchesFilter =
      filter === "todas" ||
      (filter === "producto" && entry.action.startsWith("product")) ||
      (filter === "categoria" && entry.action.startsWith("category")) ||
      (filter === "portada" && entry.action === "site.updated") ||
      (filter === "demo" && entry.action === "demo.reset");
    const matchesSearch =
      !term ||
      entry.label.toLowerCase().includes(term) ||
      (entry.detail ?? "").toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });

  const productCount = activity.filter((entry) =>
    entry.action.startsWith("product"),
  ).length;
  const categoryCount = activity.filter((entry) =>
    entry.action.startsWith("category"),
  ).length;
  const siteCount = activity.filter(
    (entry) => entry.action === "site.updated",
  ).length;

  return (
    <div>
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <h1 className="pl-admin-display text-[26px]">Actividad</h1>
          <p className="mt-1 text-[13px] text-[var(--pa-muted)]">
            Historial de cambios del catálogo y la portada.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            if (window.confirm("¿Limpiar todo el historial de actividad?")) {
              clearActivity();
            }
          }}
          className="pl-admin-btn text-[var(--pa-bad)]"
        >
          Limpiar historial
        </button>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-4">
        <div className="pl-admin-card p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
            Eventos
          </p>
          <p className="mt-2 text-[24px] font-semibold tabular-nums">
            {activity.length}
          </p>
        </div>
        <div className="pl-admin-card p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
            Productos
          </p>
          <p className="mt-2 text-[24px] font-semibold tabular-nums">
            {productCount}
          </p>
        </div>
        <div className="pl-admin-card p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
            Categorías
          </p>
          <p className="mt-2 text-[24px] font-semibold tabular-nums">
            {categoryCount}
          </p>
        </div>
        <div className="pl-admin-card p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
            Portada
          </p>
          <p className="mt-2 text-[24px] font-semibold tabular-nums">
            {siteCount}
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-2 border border-[var(--pa-line)] bg-[var(--pa-surface)] p-3 sm:grid-cols-[1fr_auto]">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar en el historial…"
          className="pl-admin-input"
          aria-label="Buscar en el historial"
        />
        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value as Filter)}
          className="pl-admin-select sm:w-48"
          aria-label="Filtrar historial"
        >
          <option value="todas">Todo</option>
          <option value="producto">Productos</option>
          <option value="categoria">Categorías</option>
          <option value="portada">Portada</option>
          <option value="demo">Demo</option>
        </select>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.45fr_0.55fr]">
        <div className="pl-admin-card px-4">
          <ActivityList
            entries={filtered}
            empty="No hay eventos con ese filtro."
          />
        </div>

        <div className="pl-admin-card h-fit p-4">
          <h2 className="text-[15px] font-semibold">Qué se registra</h2>
          <ul className="mt-3 space-y-2.5 text-[12px] leading-relaxed text-[var(--pa-muted)]">
            <li>Productos: creación, edición, precio, estado y destacados.</li>
            <li>Categorías: creación, edición y borrado.</li>
            <li>Portada: hero, destacados y orden de categorías.</li>
            <li>Demo: restablecer los datos de ejemplo.</li>
          </ul>
          <p className="mt-3 border-t border-[var(--pa-line)] pt-3 text-[11px] leading-relaxed text-[var(--pa-muted)]">
            El historial vive en este navegador y guarda los últimos 60
            eventos. Se borra al restablecer la demo.
          </p>
        </div>
      </div>
    </div>
  );
}
