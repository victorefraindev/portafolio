import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useCatalog, useOrder } from "./store";
import { formatMessage, formatPrice } from "./utils";
import { ProductArt } from "./ProductArt";
import { MinusIcon, PlusIcon, XIcon } from "./Icons";

export function OrderDrawer() {
  const { products } = useCatalog();
  const {
    items,
    destination,
    isOpen,
    count,
    remove,
    setQty,
    setDestination,
    setOpen,
  } = useOrder();
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const lines = items
    .map((item) => {
      const product = products.find((entry) => entry.id === item.productId);
      return product ? { ...item, product } : null;
    })
    .filter((line): line is NonNullable<typeof line> => line !== null);

  const total = lines.reduce(
    (sum, line) => sum + line.product.price * line.qty,
    0,
  );

  useEffect(() => {
    if (!isOpen) {
      setMessage("");
      setCopied(false);
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, setOpen]);

  if (!isOpen) return null;

  function generateMessage() {
    setMessage(
      formatMessage(
        lines.map((line) => ({
          name: line.product.name,
          color: line.color,
          qty: line.qty,
          price: line.product.price,
        })),
        destination,
      ),
    );
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex justify-end"
        role="dialog"
        aria-modal="true"
        aria-label="Tu pedido"
      >
        <button
          type="button"
          aria-label="Cerrar pedido"
          onClick={() => setOpen(false)}
          className="pl-overlay absolute inset-0"
        />

        <aside className="pl-drawer relative flex h-full w-full max-w-[420px] flex-col">
          <header className="flex items-center justify-between border-b border-[var(--pl-ink)]/15 px-5 py-4">
            <div>
              <h2 className="pl-display text-[24px]">Tu pedido</h2>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-[var(--pl-smoke)]">
                {count} {count === 1 ? "artículo" : "artículos"}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-9 place-items-center text-[var(--pl-ink)]/60 transition-colors hover:text-[var(--pl-ink)]"
              aria-label="Cerrar"
            >
              <XIcon size={20} />
            </button>
          </header>

          {lines.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
              <p className="text-[15px] text-[var(--pl-ink)]/60">
                Todavía no elegiste nada para tu setup.
              </p>
              <Link
                to="/demos/pulso/catalogo"
                onClick={() => setOpen(false)}
                className="pl-btn-ink"
              >
                Ver el catálogo
              </Link>
            </div>
          ) : (
            <>
              <ul className="flex-1 divide-y divide-[var(--pl-ink)]/10 overflow-y-auto px-5">
                {lines.map((line) => (
                  <li key={line.key} className="flex gap-4 py-4">
                    <div className="flex h-[100px] w-20 shrink-0 items-center justify-center bg-[var(--pl-bone)] p-2">
                      <ProductArt
                        variant={line.product.art}
                        className="h-full w-full"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="truncate text-[14px] font-semibold">
                            {line.product.name}
                          </p>
                          <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--pl-smoke)]">
                            {line.color}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => remove(line.key)}
                          className="text-[var(--pl-ink)]/40 transition-colors hover:text-[var(--pl-ember)]"
                          aria-label={`Quitar ${line.product.name}`}
                        >
                          <XIcon size={15} />
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-[var(--pl-ink)]/20">
                          <button
                            type="button"
                            onClick={() => setQty(line.key, line.qty - 1)}
                            className="grid size-7 place-items-center text-[var(--pl-ink)]/70 hover:bg-[var(--pl-ink)] hover:text-[var(--pl-paper)]"
                            aria-label="Quitar una unidad"
                          >
                            <MinusIcon size={13} />
                          </button>
                          <span className="w-7 text-center text-[13px] tabular-nums">
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(line.key, line.qty + 1)}
                            className="grid size-7 place-items-center text-[var(--pl-ink)]/70 hover:bg-[var(--pl-ink)] hover:text-[var(--pl-paper)]"
                            aria-label="Agregar una unidad"
                          >
                            <PlusIcon size={13} />
                          </button>
                        </div>
                        <span className="text-[14px] font-semibold tabular-nums">
                          {formatPrice(line.product.price * line.qty)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <footer className="border-t border-[var(--pl-ink)]/15 px-5 py-5">
                <label className="block">
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--pl-smoke)]">
                      ¿A dónde lo enviamos?
                    </span>
                    <span className="text-[10px] text-[var(--pl-smoke)]">
                      Opcional
                    </span>
                  </span>
                  <input
                    value={destination}
                    onChange={(event) => setDestination(event.target.value)}
                    placeholder="Ciudad o estado. Ej: Caracas, Distrito Capital"
                    className="pl-field mt-2"
                  />
                </label>
                {!destination.trim() ? (
                  <p className="mt-1.5 text-[11px] text-[var(--pl-ember)]">
                    Pon tu ciudad para que te cotizemos el envío.
                  </p>
                ) : null}

                <div className="mt-4 flex items-baseline justify-between">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--pl-smoke)]">
                    Subtotal
                  </span>
                  <span className="pl-display text-[26px] tabular-nums">
                    {formatPrice(total)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={generateMessage}
                  className="pl-btn-ember mt-4 h-13 w-full py-4"
                >
                  Generar pedido por WhatsApp
                </button>
                <p className="mt-3 text-center text-[11px] text-[var(--pl-smoke)]">
                  Demo: aquí se armaría el mensaje único para la tienda.
                </p>
              </footer>
            </>
          )}
        </aside>
      </div>

      {message ? (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/55 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mensaje de WhatsApp"
            className="w-full max-w-md bg-[var(--pl-paper)] p-5 text-[var(--pl-ink)]"
          >
            <p className="pl-display text-[24px]">Pedido listo</p>
            <p className="mt-1 text-[13px] text-[var(--pl-ink)]/60">
              Así se vería el único mensaje de WhatsApp con todo el pedido.
            </p>
            <pre className="mt-4 max-h-64 overflow-auto whitespace-pre-wrap border border-[var(--pl-ink)]/15 bg-[var(--pl-bone)]/50 p-3 text-[12px] leading-relaxed">
              {message}
            </pre>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => void copyMessage()}
                className="pl-btn-ink"
              >
                {copied ? "Copiado" : "Copiar mensaje"}
              </button>
              <button
                type="button"
                onClick={() => setMessage("")}
                className="pl-btn-outline"
              >
                Cerrar
              </button>
            </div>
            <p className="mt-3 text-[11px] text-[var(--pl-smoke)]">
              En la versión real, este mensaje abre WhatsApp con el número de la
              tienda.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
