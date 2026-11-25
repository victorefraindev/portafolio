import { seedStats } from "./content";
import { useCatalog } from "./store";
import { ActivityList } from "./ActivityList";
import { ArrowIcon, PlusIcon } from "./Icons";

type DashboardTab =
  | "productos"
  | "portada"
  | "categorias"
  | "estadisticas"
  | "actividad";

const days = ["L", "M", "X", "J", "V", "S", "D"];
const series = [32, 48, 41, 66, 58, 72, 84];
const maxSeries = Math.max(...series);

export function DashboardPanel({
  onNavigate,
}: {
  onNavigate: (tab: DashboardTab) => void;
}) {
  const { products, categories, activity } = useCatalog();
  const active = products.filter((product) => product.status === "activo");
  const soldOut = products.filter((product) => product.status === "agotado");
  const hidden = products.filter((product) => product.status === "oculto");
  const missingDescription = active.filter(
    (product) => !product.description.trim(),
  );
  const emptyCategories = categories.filter(
    (category) =>
      !products.some((product) => product.categoryId === category.id),
  );
  const conversion = seedStats.views
    ? (seedStats.clicks / seedStats.views) * 100
    : 0;

  return (
    <div>
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <h1 className="pl-admin-display text-[26px]">Resumen</h1>
          <p className="mt-1 text-[13px] text-[var(--pa-muted)]">
            Lo que está pasando en la tienda y lo que necesita tu atención.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onNavigate("productos")}
            className="pl-admin-btn"
          >
            <PlusIcon size={14} /> Productos
          </button>
          <button
            type="button"
            onClick={() => onNavigate("portada")}
            className="pl-admin-btn"
          >
            Editar portada
          </button>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {[
          { label: "Productos activos", value: active.length, note: `${soldOut.length} agotados` },
          { label: "Búsquedas", value: seedStats.searches, note: "Últimos 7 días" },
          { label: "Vistas", value: seedStats.views, note: "Fichas de producto" },
          { label: "Clics WhatsApp", value: seedStats.clicks, note: "Intención de compra" },
        ].map((stat) => (
          <div key={stat.label} className="pl-admin-card p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
              {stat.label}
            </p>
            <p className="mt-2 text-[26px] font-semibold tabular-nums">
              {stat.value}
            </p>
            <p className="mt-1 text-[11px] text-[var(--pa-muted)]">
              {stat.note}
            </p>
          </div>
        ))}
        <div className="border border-[var(--pa-sidebar)] bg-[var(--pa-sidebar)] p-4 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/45">
            Conversión
          </p>
          <p className="mt-2 text-[26px] font-semibold tabular-nums text-[#5cf2c0]">
            {conversion.toFixed(1)}%
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-[11px] text-white/45">
            <span className="size-1.5 rounded-full bg-[#5cf2c0]" />
            Tienda en línea
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="pl-admin-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-semibold">Búsquedas por día</h2>
            <span className="pl-badge pl-badge-muted">Ejemplo</span>
          </div>
          <div className="mt-6 flex h-36 items-end gap-3 border-b border-[var(--pa-line)] pb-2">
            {series.map((value, index) => (
              <div
                key={days[index]}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div
                  className={
                    index === series.length - 1
                      ? "w-full bg-[var(--pa-accent)]"
                      : "w-full bg-[#a9bbf0]"
                  }
                  style={{ height: `${(value / maxSeries) * 110}px` }}
                  title={`${value} búsquedas`}
                />
                <span className="text-[10px] text-[var(--pa-muted)]">
                  {days[index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pl-admin-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-semibold">Requiere atención</h2>
            <button
              type="button"
              onClick={() => onNavigate("productos")}
              className="text-[11px] font-semibold text-[var(--pa-accent)] hover:underline"
            >
              Revisar
            </button>
          </div>
          <ul className="mt-3 divide-y divide-[var(--pa-line)]">
            <li className="flex items-center justify-between gap-3 py-2.5 text-[12px]">
              <span>Agotados</span>
              <span className={soldOut.length ? "pl-badge pl-badge-warn" : "pl-badge pl-badge-muted"}>
                {soldOut.length}
              </span>
            </li>
            <li className="flex items-center justify-between gap-3 py-2.5 text-[12px]">
              <span>Ocultos</span>
              <span className="pl-badge pl-badge-muted">{hidden.length}</span>
            </li>
            <li className="flex items-center justify-between gap-3 py-2.5 text-[12px]">
              <span>Categorías vacías</span>
              <span className={emptyCategories.length ? "pl-badge pl-badge-warn" : "pl-badge pl-badge-muted"}>
                {emptyCategories.length}
              </span>
            </li>
            <li className="flex items-center justify-between gap-3 py-2.5 text-[12px]">
              <span>Sin descripción</span>
              <span className={missingDescription.length ? "pl-badge pl-badge-warn" : "pl-badge pl-badge-muted"}>
                {missingDescription.length}
              </span>
            </li>
          </ul>
          {soldOut.length > 0 ? (
            <p className="mt-2 text-[11px] leading-relaxed text-[var(--pa-muted)]">
              {soldOut.map((product) => product.name).join(", ")}
            </p>
          ) : (
            <p className="mt-2 text-[11px] text-[var(--pa-muted)]">
              Todo el catálogo está disponible.
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="pl-admin-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-semibold">Actividad reciente</h2>
            <button
              type="button"
              onClick={() => onNavigate("actividad")}
              className="text-[11px] font-semibold text-[var(--pa-accent)] hover:underline"
            >
              Ver todo
            </button>
          </div>
          <div className="mt-1">
            <ActivityList
              entries={activity.slice(0, 5)}
              empty="Todavía no hay cambios registrados."
            />
          </div>
        </div>

        <div className="pl-admin-card p-4">
          <h2 className="text-[15px] font-semibold">Accesos rápidos</h2>
          <div className="mt-3 grid gap-2">
            <button
              type="button"
              onClick={() => onNavigate("portada")}
              className="flex items-center justify-between border border-[var(--pa-line)] px-3 py-3 text-left text-[12px] transition-colors hover:border-[var(--pa-accent)]"
            >
              Editar título, destacados y categorías
              <ArrowIcon size={13} />
            </button>
            <button
              type="button"
              onClick={() => onNavigate("categorias")}
              className="flex items-center justify-between border border-[var(--pa-line)] px-3 py-3 text-left text-[12px] transition-colors hover:border-[var(--pa-accent)]"
            >
              Gestionar categorías
              <ArrowIcon size={13} />
            </button>
            <button
              type="button"
              onClick={() => onNavigate("estadisticas")}
              className="flex items-center justify-between border border-[var(--pa-line)] px-3 py-3 text-left text-[12px] transition-colors hover:border-[var(--pa-accent)]"
            >
              Ver estadísticas completas
              <ArrowIcon size={13} />
            </button>
          </div>
          <p className="mt-3 border-t border-[var(--pa-line)] pt-3 text-[11px] leading-relaxed text-[var(--pa-muted)]">
            Los cambios del panel se guardan en este navegador y se reflejan en
            la tienda demo.
          </p>
        </div>
      </div>
    </div>
  );
}
