import { Link, useSearchParams } from "react-router";
import type { Route } from "./+types/pulso.admin";
import { useCatalog, useOrder } from "~/demos/pulso/store";
import { DashboardPanel } from "~/demos/pulso/DashboardPanel";
import { ProductsPanel } from "~/demos/pulso/ProductsPanel";
import { PortadaPanel } from "~/demos/pulso/PortadaPanel";
import { CategoriesPanel } from "~/demos/pulso/CategoriesPanel";
import { StatsPanel } from "~/demos/pulso/StatsPanel";
import { ActivityPanel } from "~/demos/pulso/ActivityPanel";
import { UsersPanel } from "~/demos/pulso/UsersPanel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Panel — Pulso Gamer" },
    {
      name: "description",
      content: "Panel de administración de catálogo Pulso Gamer.",
    },
    { name: "robots", content: "noindex" },
  ];
}

type Tab =
  | "resumen"
  | "productos"
  | "portada"
  | "categorias"
  | "estadisticas"
  | "actividad"
  | "usuarios";

const tabs: Array<{ id: Tab; label: string }> = [
  { id: "resumen", label: "Resumen" },
  { id: "productos", label: "Productos" },
  { id: "portada", label: "Portada" },
  { id: "categorias", label: "Categorías" },
  { id: "estadisticas", label: "Estadísticas" },
  { id: "actividad", label: "Actividad" },
  { id: "usuarios", label: "Usuarios" },
];

export default function PulsoAdmin() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get("tab");
  const tab: Tab = tabs.some((item) => item.id === requested)
    ? (requested as Tab)
    : "resumen";
  const { products, resetCatalog } = useCatalog();
  const { resetOrder } = useOrder();

  function setTab(next: Tab) {
    setSearchParams(next === "resumen" ? {} : { tab: next }, { replace: true });
  }

  function resetDemo() {
    if (
      window.confirm(
        "¿Restablecer productos, categorías, portada, historial y pedido a los datos de ejemplo?",
      )
    ) {
      resetCatalog();
      resetOrder();
      setTab("resumen");
    }
  }

  return (
    <div className="pl-admin flex min-h-screen flex-col lg:flex-row">
      <aside className="pl-admin-sidebar flex shrink-0 flex-col lg:min-h-screen lg:w-60">
        <div className="border-b border-[var(--pa-sidebar-line)] px-5 py-4">
          <p className="pl-admin-display text-[24px] text-white">
            Pulso
            <span className="text-[#5cf2c0]"> / panel</span>
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/40">
            Catálogo demo
          </p>
        </div>

        <nav
          className="flex gap-1 overflow-x-auto px-2 py-2 lg:flex-col lg:gap-0 lg:px-0 lg:py-3"
          aria-label="Panel"
        >
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              data-active={tab === item.id}
              className="pl-admin-navlink whitespace-nowrap text-left"
            >
              {item.label}
              {item.id === "productos" ? (
                <span className="ml-auto rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] tabular-nums text-white/60">
                  {products.length}
                </span>
              ) : null}
            </button>
          ))}
        </nav>

        <div className="mt-auto hidden border-t border-[var(--pa-sidebar-line)] p-4 lg:block">
          <button
            type="button"
            onClick={resetDemo}
            className="flex items-center gap-2 text-left text-[12px] text-white/40 transition-colors hover:text-[#5cf2c0]"
          >
            Restablecer demo
          </button>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="flex flex-col gap-3 border-b border-[var(--pa-line)] bg-[var(--pa-surface)] px-5 py-3 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-[var(--pa-accent)]"
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--pa-muted)]">
              Tienda en línea
            </p>
            <span className="pl-badge bg-[var(--pa-accent-soft)] text-[var(--pa-accent)]">
              Demo
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/demos/pulso" className="pl-admin-btn-accent">
              Ver tienda
            </Link>
            <button
              type="button"
              onClick={resetDemo}
              className="pl-admin-btn lg:hidden"
            >
              Restablecer
            </button>
          </div>
        </header>

        <main className="px-5 py-6 lg:px-8">
          {tab === "resumen" ? (
            <DashboardPanel onNavigate={setTab} />
          ) : null}
          {tab === "productos" ? <ProductsPanel /> : null}
          {tab === "portada" ? <PortadaPanel /> : null}
          {tab === "categorias" ? <CategoriesPanel /> : null}
          {tab === "estadisticas" ? <StatsPanel /> : null}
          {tab === "actividad" ? <ActivityPanel /> : null}
          {tab === "usuarios" ? <UsersPanel /> : null}
        </main>
      </div>
    </div>
  );
}
