import { useCatalog } from "./store";
import { seedStats } from "./content";

const days = ["L", "M", "X", "J", "V", "S", "D"];
const series = [32, 48, 41, 66, 58, 72, 84];
const maxSeries = Math.max(...series);

export function StatsPanel() {
  const { products } = useCatalog();
  const visible = products.filter((product) => product.status !== "oculto");
  const soldOut = products.filter((product) => product.status === "agotado");
  const hidden = products.filter((product) => product.status === "oculto");
  const conversion = seedStats.views
    ? (seedStats.clicks / seedStats.views) * 100
    : 0;

  const topProducts = products.slice(0, 5).map((product, index) => {
    const views = 60 + (products.length - index) * 19;
    const clicks = Math.max(2, Math.round(views * 0.07));
    return { product, views, clicks };
  });
  const maxViews = Math.max(...topProducts.map((item) => item.views), 1);
  const maxTerm = Math.max(...seedStats.topTerms.map((item) => item.count), 1);

  return (
    <div>
      <div>
        <h1 className="pl-admin-display text-[26px]">Estadísticas</h1>
        <p className="mt-1 text-[13px] text-[var(--pa-muted)]">
          Últimos 7 días. Datos de ejemplo para el demo.
        </p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        <div className="pl-admin-card p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
            Productos
          </p>
          <p className="mt-2 text-[26px] font-semibold tabular-nums">
            {visible.length}
          </p>
          <p className="mt-1 text-[11px] text-[var(--pa-muted)]">
            {soldOut.length} agotados · {hidden.length} ocultos
          </p>
        </div>
        <div className="pl-admin-card p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
            Búsquedas
          </p>
          <p className="mt-2 text-[26px] font-semibold tabular-nums">
            {seedStats.searches}
          </p>
          <p className="mt-1 text-[11px] text-[var(--pa-muted)]">
            {seedStats.withoutResults.length} sin resultados
          </p>
        </div>
        <div className="pl-admin-card p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
            Vistas
          </p>
          <p className="mt-2 text-[26px] font-semibold tabular-nums">
            {seedStats.views}
          </p>
          <p className="mt-1 text-[11px] text-[var(--pa-muted)]">
            Fichas de producto
          </p>
        </div>
        <div className="pl-admin-card p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
            Clics WhatsApp
          </p>
          <p className="mt-2 text-[26px] font-semibold tabular-nums">
            {seedStats.clicks}
          </p>
          <p className="mt-1 text-[11px] text-[var(--pa-muted)]">
            Intención de compra
          </p>
        </div>
        <div className="pl-admin-card p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
            Conversión
          </p>
          <p className="mt-2 text-[26px] font-semibold tabular-nums text-[var(--pa-accent)]">
            {conversion.toFixed(1)}%
          </p>
          <p className="mt-1 text-[11px] text-[var(--pa-muted)]">
            Clics / vistas
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="pl-admin-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-semibold">Búsquedas por día</h2>
            <span className="pl-badge pl-badge-good">Ejemplo</span>
          </div>
          <div className="mt-6 flex h-40 items-end gap-3 border-b border-[var(--pa-line)] pb-2">
            {series.map((value, index) => (
              <div key={days[index]} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className={
                    index === series.length - 1
                      ? "w-full bg-[var(--pa-accent)]"
                      : "w-full bg-[#a9bbf0]"
                  }
                  style={{ height: `${(value / maxSeries) * 120}px` }}
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
          <h2 className="text-[15px] font-semibold">Términos más buscados</h2>
          <ul className="mt-4 space-y-3">
            {seedStats.topTerms.map((item) => (
              <li key={item.term}>
                <div className="flex items-baseline justify-between text-[12px]">
                  <span>{item.term}</span>
                  <span className="tabular-nums text-[var(--pa-muted)]">
                    {item.count}
                  </span>
                </div>
                <div className="mt-1 h-1.5 bg-[var(--pa-canvas)]">
                  <div
                    className="h-full bg-[var(--pa-accent)]"
                    style={{ width: `${(item.count / maxTerm) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="pl-admin-card overflow-x-auto">
          <div className="border-b border-[var(--pa-line)] px-4 py-3">
            <h2 className="text-[15px] font-semibold">Productos con más vistas</h2>
          </div>
          <table className="pl-admin-table min-w-[560px]">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Vistas</th>
                <th>Clics</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((item) => (
                <tr key={item.product.id}>
                  <td>
                    <p className="font-semibold">{item.product.name}</p>
                    <div className="mt-1 h-1 w-full max-w-[180px] bg-[var(--pa-canvas)]">
                      <div
                        className="h-full bg-[#2457e6]"
                        style={{ width: `${(item.views / maxViews) * 100}%` }}
                      />
                    </div>
                  </td>
                  <td className="tabular-nums">{item.views}</td>
                  <td className="tabular-nums">{item.clicks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pl-admin-card p-4">
          <h2 className="text-[15px] font-semibold">Sin resultados</h2>
          <p className="mt-1 text-[12px] text-[var(--pa-muted)]">
            Lo que buscan y todavía no existe en el catálogo.
          </p>
          <ul className="mt-4 divide-y divide-[var(--pa-line)]">
            {seedStats.withoutResults.map((item) => (
              <li
                key={item.term}
                className="flex items-baseline justify-between gap-3 py-3 text-[13px]"
              >
                <span>{item.term}</span>
                <span className="tabular-nums text-[var(--pa-muted)]">
                  {item.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
