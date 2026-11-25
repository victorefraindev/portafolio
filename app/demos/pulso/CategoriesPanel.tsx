import { useState } from "react";
import { useCatalog } from "./store";

export function CategoriesPanel() {
  const {
    categories,
    products,
    addCategory,
    updateCategory,
    deleteCategory,
  } = useCatalog();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  function resetForm() {
    setName("");
    setDescription("");
    setEditingId(null);
  }

  function startEdit(id: string) {
    const category = categories.find((item) => item.id === id);
    if (!category) return;
    setEditingId(id);
    setName(category.name);
    setDescription(category.description);
    setError(null);
    setNotice(null);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setNotice(null);
    const message = editingId
      ? updateCategory(editingId, name, description)
      : addCategory(name, description);
    if (message) {
      setError(message);
      return;
    }
    setNotice(editingId ? "Categoría actualizada." : "Categoría creada.");
    resetForm();
  }

  return (
    <div>
      <div>
        <h1 className="pl-admin-display text-[26px]">Categorías</h1>
        <p className="mt-1 text-[13px] text-[var(--pa-muted)]">
          Las categorías ordenan el catálogo y la navegación de la tienda.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-5 border border-[var(--pa-line)] bg-[var(--pa-surface)] p-4"
      >
        <div className="grid gap-3 sm:grid-cols-[1fr_1.4fr_auto]">
          <label className="block">
            <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
              Nombre
            </span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="pl-admin-input"
              placeholder="Ej. Audio"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--pa-muted)]">
              Descripción
            </span>
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="pl-admin-input"
              placeholder="Qué agrupa esta categoría."
            />
          </label>
          <div className="flex items-end gap-2">
            <button type="submit" className="pl-admin-btn-accent">
              {editingId ? "Guardar" : "Crear"}
            </button>
            {editingId ? (
              <button type="button" onClick={resetForm} className="pl-admin-btn">
                Cancelar
              </button>
            ) : null}
          </div>
        </div>
        {error ? (
          <p className="mt-3 border border-[var(--pa-bad)]/30 bg-[var(--pa-bad-soft)] px-3 py-2 text-[12px] text-[var(--pa-bad)]">
            {error}
          </p>
        ) : null}
        {notice ? (
          <p className="mt-3 border border-[var(--pa-accent)]/25 bg-[var(--pa-accent-soft)] px-3 py-2 text-[12px] text-[var(--pa-accent)]">
            {notice}
          </p>
        ) : null}
      </form>

      <div className="mt-4 overflow-x-auto border border-[var(--pa-line)] bg-[var(--pa-surface)]">
        <table className="pl-admin-table min-w-[640px]">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Productos</th>
              <th className="text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => {
              const count = products.filter(
                (product) => product.categoryId === category.id,
              ).length;
              return (
                <tr key={category.id}>
                  <td>
                    <p className="font-semibold">{category.name}</p>
                    <p className="text-[11px] text-[var(--pa-muted)]">
                      /{category.slug}
                    </p>
                  </td>
                  <td className="text-[var(--pa-muted)]">
                    {category.description || "—"}
                  </td>
                  <td>{count}</td>
                  <td>
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => startEdit(category.id)}
                        className="pl-admin-btn"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (
                            window.confirm(
                              `¿Eliminar la categoría "${category.name}"?`,
                            )
                          ) {
                            const message = deleteCategory(category.id);
                            if (message) {
                              setError(message);
                              setNotice(null);
                            }
                          }
                        }}
                        className="pl-admin-btn text-[var(--pa-bad)]"
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
