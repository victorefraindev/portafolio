import { Link, NavLink } from "react-router";
import { useCatalog } from "./store";
import { useOrder } from "./store";
import { cn } from "./utils";
import { BagIcon, SearchIcon } from "./Icons";
import { PulsoWordmark } from "./Wordmark";

export function SiteHeader() {
  const { storeCategories: categories } = useCatalog();
  const { count, setOpen } = useOrder();

  return (
    <header className="pl-header sticky top-0 z-40">
      <div className="pl-container flex h-16 items-center gap-8">
        <Link to="/demos/pulso" className="shrink-0 py-1" aria-label="Pulso Gamer, inicio">
          <PulsoWordmark className="text-[20px] text-[var(--pl-paper)]" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Categorías">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={`/demos/pulso/categoria/${category.slug}`}
              className={({ isActive }) =>
                cn(
                  "text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors",
                  isActive
                    ? "text-[var(--pl-flame)]"
                    : "text-[var(--pl-paper)]/60 hover:text-[var(--pl-paper)]",
                )
              }
            >
              {category.name}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <Link
            to="/demos/pulso/buscar"
            aria-label="Buscar productos"
            className="grid size-10 place-items-center text-[var(--pl-paper)]/70 transition-colors hover:text-[var(--pl-paper)]"
          >
            <SearchIcon size={19} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 items-center gap-2 px-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--pl-paper)]/80 transition-colors hover:text-[var(--pl-paper)]"
            aria-label={`Abrir pedido, ${count} ${count === 1 ? "artículo" : "artículos"}`}
          >
            <BagIcon size={19} />
            <span className="hidden sm:inline">Pedido</span>
            <span
              className={cn(
                "grid size-5 place-items-center rounded-full text-[10px] font-bold tabular-nums",
                count > 0
                  ? "bg-[var(--pl-ember)] text-white"
                  : "bg-[var(--pl-paper)]/10 text-[var(--pl-paper)]/50",
              )}
            >
              {count}
            </span>
          </button>
        </div>
      </div>

      <nav
        className="pl-scrollbar-none flex gap-5 overflow-x-auto border-t border-white/10 px-5 py-2.5 md:hidden"
        aria-label="Categorías"
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/demos/pulso/categoria/${category.slug}`}
            className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--pl-paper)]/60 transition-colors hover:text-[var(--pl-flame)]"
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
