import { useState } from "react";
import type { Product, ProductStatus } from "./content";
import { useCatalog } from "./store";
import { formatPrice } from "./utils";
import { ProductArt } from "./ProductArt";
import { ProductForm } from "./ProductForm";
import { PlusIcon } from "./Icons";

const statusClass: Record<ProductStatus, string> = {
  activo: "pl-badge pl-badge-good",
  agotado: "pl-badge pl-badge-warn",
  oculto: "pl-badge pl-badge-muted",
};

export function ProductsPanel() {
  const {
    products,
    categories,
    addProduct,
    updateProduct,
    deleteProduct,
    setProductStatus,
    toggleFeatured,
  } = useCatalog();
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);

  const categoryById = new Map(categories.map((category) => [category.id, category]));
  const term = search.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesSearch =
      !term ||
      product.name.toLowerCase().includes(term) ||
      product.tags.some((tag) => tag.toLowerCase().includes(term));
    const matchesCategory =
      !categoryFilter || product.categoryId === categoryFilter;
    const matchesStatus = !statusFilter || product.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  function openNew() {
    setEditing(null);
    setFormOpen(true);
  }

  function openEdit(product: Product) {
    setEditing(product);
    setFormOpen(true);
  }

  return (
    <div>
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="pl-admin-display text-[26px]">Productos</h1>
          <p className="mt-1 text-[13px] text-[var(--pa-muted)]">
            {products.length} productos en el catálogo. Los cambios se reflejan
            en la tienda.
          </p>
        </div>
        <button type="button" onClick={openNew} className="pl-admin-btn-accent">
          <PlusIcon size={14} />
          Nuevo producto
        </button>
      </div>

      <div className="mt-5 grid gap-2 border border-[var(--pa-line)] bg-[var(--pa-surface)] p-3 sm:grid-cols-[1fr_auto_auto]">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar por nombre o etiqueta…"
          className="pl-admin-input"
          aria-label="Buscar productos"
        />
        <select
          value={categoryFilter}
          onChange={(event) => setCategoryFilter(event.target.value)}
          className="pl-admin-select"
          aria-label="Filtrar por categoría"
        >
          <option value="">Todas las categorías</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
          className="pl-admin-select"
          aria-label="Filtrar por estado"
        >
          <option value="">Todos los estados</option>
          <option value="activo">Activos</option>
          <option value="agotado">Agotados</option>
          <option value="oculto">Ocultos</option>
        </select>
      </div>

      <div className="mt-4 overflow-x-auto border border-[var(--pa-line)] bg-[var(--pa-surface)]">
        <table className="pl-admin-table min-w-[860px]">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Destacado</th>
              <th className="text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-10 shrink-0 items-center justify-center bg-[var(--pl-bone)] p-1">
                      <ProductArt variant={product.art} className="h-full w-full" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-semibold">{product.name}</p>
                      <p className="text-[11px] text-[var(--pa-muted)]">
                        /{product.slug}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-[var(--pa-muted)]">
                  {categoryById.get(product.categoryId)?.name ?? "—"}
                </td>
                <td className="whitespace-nowrap font-semibold tabular-nums">
                  {formatPrice(product.price)}
                </td>
                <td>
                  <span className={statusClass[product.status]}>
                    {product.status}
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => toggleFeatured(product.id)}
                    className={
                      product.featured
                        ? "text-[var(--pa-accent)]"
                        : "text-[var(--pa-muted)] hover:text-[var(--pa-ink)]"
                    }
                    aria-label={
                      product.featured
                        ? `Quitar destacado a ${product.name}`
                        : `Destacar ${product.name}`
                    }
                  >
                    {product.featured ? "★ Sí" : "☆ No"}
                  </button>
                </td>
                <td>
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => openEdit(product)}
                      className="pl-admin-btn"
                    >
                      Editar
                    </button>
                    <select
                      value={product.status}
                      onChange={(event) =>
                        setProductStatus(
                          product.id,
                          event.target.value as ProductStatus,
                        )
                      }
                      className="pl-admin-select !w-auto !py-1.5 text-[12px]"
                      aria-label={`Estado de ${product.name}`}
                    >
                      <option value="activo">Activo</option>
                      <option value="agotado">Agotado</option>
                      <option value="oculto">Oculto</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => {
                        if (
                          window.confirm(
                            `¿Eliminar "${product.name}" del catálogo?`,
                          )
                        ) {
                          deleteProduct(product.id);
                        }
                      }}
                      className="pl-admin-btn text-[var(--pa-bad)]"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 ? (
          <p className="p-6 text-center text-[13px] text-[var(--pa-muted)]">
            No hay productos con esos filtros.
          </p>
        ) : null}
      </div>

      {formOpen ? (
        <ProductForm
          product={editing}
          categories={categories}
          onClose={() => setFormOpen(false)}
          onSave={(input) => {
            if (editing) {
              updateProduct(editing.id, input);
            } else {
              addProduct(input);
            }
            setFormOpen(false);
          }}
        />
      ) : null}
    </div>
  );
}
