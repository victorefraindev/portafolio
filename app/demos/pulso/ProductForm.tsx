import { useEffect, useState } from "react";
import type {
  ArtVariant,
  Category,
  Product,
  ProductStatus,
} from "./content";
import type { ProductInput } from "./store";
import { XIcon } from "./Icons";

const artOptions: Array<{ value: ArtVariant; label: string }> = [
  { value: "chair", label: "Silla" },
  { value: "desk", label: "Escritorio" },
  { value: "monitor", label: "Monitor" },
  { value: "keyboard", label: "Teclado" },
  { value: "mouse", label: "Mouse" },
  { value: "headset", label: "Headset" },
  { value: "mousepad", label: "Mousepad" },
  { value: "led", label: "Tira LED" },
  { value: "lamp", label: "Lámpara" },
  { value: "pc", label: "PC / torre" },
  { value: "setup", label: "Setup / combo" },
];

type ProductFormProps = {
  product: Product | null;
  categories: Category[];
  onSave: (input: ProductInput) => void;
  onClose: () => void;
};

export function ProductForm({
  product,
  categories,
  onSave,
  onClose,
}: ProductFormProps) {
  const [name, setName] = useState(product?.name ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [price, setPrice] = useState(product ? String(product.price) : "");
  const [categoryId, setCategoryId] = useState(
    product?.categoryId ?? categories[0]?.id ?? "",
  );
  const [status, setStatus] = useState<ProductStatus>(
    product?.status ?? "activo",
  );
  const [featured, setFeatured] = useState(product?.featured ?? false);
  const [colors, setColors] = useState(product?.colors.join(", ") ?? "Negro");
  const [tags, setTags] = useState(product?.tags.join(", ") ?? "");
  const [art, setArt] = useState<ArtVariant>(product?.art ?? "pc");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsedPrice = Number.parseFloat(price.replace(",", "."));
    if (!name.trim()) {
      setError("El nombre es obligatorio.");
      return;
    }
    if (!Number.isFinite(parsedPrice) || parsedPrice <= 0) {
      setError("El precio debe ser un número mayor a cero.");
      return;
    }
    if (!categoryId) {
      setError("Selecciona una categoría.");
      return;
    }

    onSave({
      name: name.trim(),
      description: description.trim(),
      price: parsedPrice,
      categoryId,
      status,
      featured,
      colors: colors
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      tags: tags
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      art,
      specs: product?.specs ?? [
        { label: "Garantía", value: "12 meses" },
        { label: "Envío", value: "A todo el país" },
      ],
    });
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={product ? "Editar producto" : "Nuevo producto"}
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto border border-[var(--pa-line)] bg-[var(--pa-surface)] shadow-xl"
      >
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--pa-line)] bg-[var(--pa-surface)] px-5 py-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--pa-accent)]">
              Catálogo
            </p>
            <h2 className="mt-0.5 text-[18px] font-semibold">
              {product ? "Editar producto" : "Nuevo producto"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="grid size-8 place-items-center text-[var(--pa-muted)] transition-colors hover:text-[var(--pa-ink)]"
          >
            <XIcon size={18} />
          </button>
        </header>

        <form onSubmit={handleSubmit} className="p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
                Nombre
              </span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="pl-admin-input"
                placeholder="Ej. Silla Pulso Pro"
                required
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
                Categoría
              </span>
              <select
                value={categoryId}
                onChange={(event) => setCategoryId(event.target.value)}
                className="pl-admin-select"
                required
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
                Precio (USD)
              </span>
              <input
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                type="number"
                min="0"
                step="0.01"
                className="pl-admin-input"
                placeholder="249"
                required
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
                Estado
              </span>
              <select
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value as ProductStatus)
                }
                className="pl-admin-select"
              >
                <option value="activo">Activo</option>
                <option value="agotado">Agotado</option>
                <option value="oculto">Oculto</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
                Ilustración
              </span>
              <select
                value={art}
                onChange={(event) => setArt(event.target.value as ArtVariant)}
                className="pl-admin-select"
              >
                {artOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
                Colores (separados por coma)
              </span>
              <input
                value={colors}
                onChange={(event) => setColors(event.target.value)}
                className="pl-admin-input"
                placeholder="Negro, Blanco"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
                Etiquetas (separadas por coma)
              </span>
              <input
                value={tags}
                onChange={(event) => setTags(event.target.value)}
                className="pl-admin-input"
                placeholder="silla, ergonomica, setup"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
                Descripción
              </span>
              <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows={4}
                className="pl-admin-input resize-y"
                placeholder="Qué es, para quién es y por qué vale la pena."
              />
            </label>

            <label className="flex items-center gap-2 text-[13px] sm:col-span-2">
              <input
                type="checkbox"
                checked={featured}
                onChange={(event) => setFeatured(event.target.checked)}
                className="size-4 accent-[var(--pa-accent)]"
              />
              Destacar en la tienda
            </label>
          </div>

          {error ? (
            <p className="mt-4 border border-[var(--pa-bad)]/30 bg-[var(--pa-bad-soft)] px-3 py-2 text-[12px] text-[var(--pa-bad)]">
              {error}
            </p>
          ) : null}

          <div className="mt-6 flex justify-end gap-2">
            <button type="button" onClick={onClose} className="pl-admin-btn">
              Cancelar
            </button>
            <button type="submit" className="pl-admin-btn-accent">
              Guardar producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
