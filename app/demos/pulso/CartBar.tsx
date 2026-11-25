import { useCatalog, useOrder } from "./store";
import { formatPrice } from "./utils";

export function CartBar() {
  const { products } = useCatalog();
  const { items, count, setOpen } = useOrder();

  if (count === 0) return null;

  const total = items.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);

  return (
    <div className="pl-order-bar fixed inset-x-0 bottom-0 z-30 border-t border-white/10 lg:hidden">
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--pl-paper)]/50">
            {count} {count === 1 ? "artículo" : "artículos"}
          </p>
          <p className="text-[15px] font-semibold tabular-nums">
            {formatPrice(total)}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="bg-[var(--pl-ember)] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
        >
          Ver pedido
        </button>
      </div>
    </div>
  );
}
