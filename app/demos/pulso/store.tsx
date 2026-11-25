import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import type {
  ActivityAction,
  ActivityEntry,
  ArtVariant,
  Category,
  Product,
  ProductSpec,
  ProductStatus,
  SiteConfig,
} from "./content";
import {
  seedActivity,
  seedCategories,
  seedProducts,
  seedSiteConfig,
} from "./content";
import { uniqueSlug } from "./utils";

const PRODUCTS_KEY = "pulso-products-v1";
const CATEGORIES_KEY = "pulso-categories-v1";
const ORDER_KEY = "pulso-order-v1";
const SITE_KEY = "pulso-site-v1";
const ACTIVITY_KEY = "pulso-activity-v1";

export type ProductInput = {
  name: string;
  description: string;
  price: number;
  categoryId: string;
  status: ProductStatus;
  featured: boolean;
  colors: string[];
  tags: string[];
  art: ArtVariant;
  specs: ProductSpec[];
};

type CatalogContextValue = {
  products: Product[];
  categories: Category[];
  storeCategories: Category[];
  siteConfig: SiteConfig;
  activity: ActivityEntry[];
  addProduct: (input: ProductInput) => void;
  updateProduct: (id: string, input: ProductInput) => void;
  deleteProduct: (id: string) => void;
  setProductStatus: (id: string, status: ProductStatus) => void;
  toggleFeatured: (id: string) => void;
  addCategory: (name: string, description: string) => string | null;
  updateCategory: (
    id: string,
    name: string,
    description: string,
  ) => string | null;
  deleteCategory: (id: string) => string | null;
  updateSiteConfig: (patch: Partial<SiteConfig>) => void;
  logActivity: (
    action: ActivityAction,
    label: string,
    detail?: string,
  ) => void;
  clearActivity: () => void;
  resetCatalog: () => void;
};

const CatalogContext = createContext<CatalogContextValue | null>(null);

function readStored<T>(key: string): T | null {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(seedProducts);
  const [categories, setCategories] = useState<Category[]>(seedCategories);
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(seedSiteConfig);
  const [activity, setActivity] = useState<ActivityEntry[]>(seedActivity);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedProducts = readStored<Product[]>(PRODUCTS_KEY);
    const storedCategories = readStored<Category[]>(CATEGORIES_KEY);
    const storedSite = readStored<Partial<SiteConfig>>(SITE_KEY);
    const storedActivity = readStored<ActivityEntry[]>(ACTIVITY_KEY);

    if (Array.isArray(storedProducts) && storedProducts.length > 0) {
      setProducts(storedProducts);
    }
    if (Array.isArray(storedCategories) && storedCategories.length > 0) {
      setCategories(storedCategories);
    }
    if (storedSite) {
      setSiteConfig({ ...seedSiteConfig, ...storedSite });
    }
    if (Array.isArray(storedActivity)) {
      setActivity(storedActivity);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
      window.localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
      window.localStorage.setItem(SITE_KEY, JSON.stringify(siteConfig));
      window.localStorage.setItem(ACTIVITY_KEY, JSON.stringify(activity));
    } catch {
      /* demo sin persistencia si el navegador lo bloquea */
    }
  }, [products, categories, siteConfig, activity, hydrated]);

  const logActivity = useCallback(
    (action: ActivityAction, label: string, detail?: string) => {
      setActivity((current) =>
        [
          {
            id: `a-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
            at: new Date().toISOString(),
            action,
            label,
            ...(detail ? { detail } : {}),
          },
          ...current,
        ].slice(0, 60),
      );
    },
    [],
  );

  const addProduct = useCallback(
    (input: ProductInput) => {
      setProducts((current) => {
        const product: Product = {
          ...input,
          id: `p-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          slug: uniqueSlug(input.name, current.map((item) => item.slug)),
          createdAt: new Date().toISOString(),
        };
        return [product, ...current];
      });
      logActivity("product.created", `Producto creado: ${input.name}`);
    },
    [logActivity],
  );

  const updateProduct = useCallback(
    (id: string, input: ProductInput) => {
      const before = products.find((item) => item.id === id);
      setProducts((current) =>
        current.map((item) =>
          item.id === id ? { ...item, ...input, slug: item.slug } : item,
        ),
      );
      if (!before) return;
      if (before.price !== input.price) {
        logActivity(
          "product.price",
          `Precio de ${before.name} actualizado`,
          `$${before.price.toFixed(2)} → $${input.price.toFixed(2)}`,
        );
      } else if (before.status !== input.status) {
        logActivity(
          "product.status",
          `Estado de ${before.name}: ${before.status} → ${input.status}`,
        );
      } else {
        logActivity("product.updated", `Producto actualizado: ${input.name}`);
      }
    },
    [products, logActivity],
  );

  const deleteProduct = useCallback(
    (id: string) => {
      const before = products.find((item) => item.id === id);
      setProducts((current) => current.filter((item) => item.id !== id));
      if (before) {
        logActivity("product.deleted", `Producto eliminado: ${before.name}`);
      }
    },
    [products, logActivity],
  );

  const setProductStatus = useCallback(
    (id: string, status: ProductStatus) => {
      const before = products.find((item) => item.id === id);
      setProducts((current) =>
        current.map((item) => (item.id === id ? { ...item, status } : item)),
      );
      if (before && before.status !== status) {
        logActivity(
          "product.status",
          `Estado de ${before.name}: ${before.status} → ${status}`,
        );
      }
    },
    [products, logActivity],
  );

  const toggleFeatured = useCallback(
    (id: string) => {
      const before = products.find((item) => item.id === id);
      setProducts((current) =>
        current.map((item) =>
          item.id === id ? { ...item, featured: !item.featured } : item,
        ),
      );
      if (before) {
        logActivity(
          "product.featured",
          `${before.name} ${before.featured ? "quitado de" : "marcado como"} destacado`,
        );
      }
    },
    [products, logActivity],
  );

  const addCategory = useCallback(
    (name: string, description: string) => {
      const cleanName = name.trim();
      if (!cleanName) return "Escribe un nombre para la categoría.";
      if (
        categories.some(
          (category) =>
            category.name.toLowerCase() === cleanName.toLowerCase(),
        )
      ) {
        return "Ya existe una categoría con ese nombre.";
      }
      setCategories((current) => [
        ...current,
        {
          id: `cat-${Date.now()}`,
          name: cleanName,
          slug: uniqueSlug(cleanName, current.map((item) => item.slug)),
          description: description.trim(),
        },
      ]);
      logActivity("category.created", `Categoría creada: ${cleanName}`);
      return null;
    },
    [categories, logActivity],
  );

  const updateCategory = useCallback(
    (id: string, name: string, description: string) => {
      const cleanName = name.trim();
      if (!cleanName) return "Escribe un nombre para la categoría.";
      if (
        categories.some(
          (category) =>
            category.id !== id &&
            category.name.toLowerCase() === cleanName.toLowerCase(),
        )
      ) {
        return "Ya existe una categoría con ese nombre.";
      }
      setCategories((current) =>
        current.map((category) =>
          category.id === id
            ? { ...category, name: cleanName, description: description.trim() }
            : category,
        ),
      );
      logActivity("category.updated", `Categoría actualizada: ${cleanName}`);
      return null;
    },
    [categories, logActivity],
  );

  const deleteCategory = useCallback(
    (id: string) => {
      if (products.some((product) => product.categoryId === id)) {
        return "No puedes eliminar una categoría con productos. Muévelos primero.";
      }
      const before = categories.find((category) => category.id === id);
      setCategories((current) =>
        current.filter((category) => category.id !== id),
      );
      if (before) {
        logActivity("category.deleted", `Categoría eliminada: ${before.name}`);
      }
      return null;
    },
    [products, categories, logActivity],
  );

  const updateSiteConfig = useCallback(
    (patch: Partial<SiteConfig>) => {
      setSiteConfig((current) => ({ ...current, ...patch }));
      logActivity("site.updated", "Portada actualizada");
    },
    [logActivity],
  );

  const clearActivity = useCallback(() => {
    setActivity([]);
    try {
      window.localStorage.removeItem(ACTIVITY_KEY);
    } catch {
      /* noop */
    }
  }, []);

  const resetCatalog = useCallback(() => {
    setProducts(seedProducts);
    setCategories(seedCategories);
    setSiteConfig(seedSiteConfig);
    setActivity([
      {
        id: `a-reset-${Date.now()}`,
        at: new Date().toISOString(),
        action: "demo.reset",
        label: "Demo restablecido",
        detail: "Productos, categorías, portada y pedido volvieron al inicio",
      },
    ]);
    try {
      window.localStorage.removeItem(PRODUCTS_KEY);
      window.localStorage.removeItem(CATEGORIES_KEY);
      window.localStorage.removeItem(SITE_KEY);
      window.localStorage.removeItem(ACTIVITY_KEY);
    } catch {
      /* noop */
    }
  }, []);

  const storeCategories = useMemo(() => {
    const byId = new Map(categories.map((category) => [category.id, category]));
    const ordered = siteConfig.categoryOrder
      .map((id) => byId.get(id))
      .filter((category): category is Category => Boolean(category));
    const rest = categories.filter(
      (category) => !siteConfig.categoryOrder.includes(category.id),
    );
    return [...ordered, ...rest].filter(
      (category) => !siteConfig.hiddenCategoryIds.includes(category.id),
    );
  }, [categories, siteConfig.categoryOrder, siteConfig.hiddenCategoryIds]);

  const value = useMemo<CatalogContextValue>(
    () => ({
      products,
      categories,
      storeCategories,
      siteConfig,
      activity,
      addProduct,
      updateProduct,
      deleteProduct,
      setProductStatus,
      toggleFeatured,
      addCategory,
      updateCategory,
      deleteCategory,
      updateSiteConfig,
      logActivity,
      clearActivity,
      resetCatalog,
    }),
    [
      products,
      categories,
      storeCategories,
      siteConfig,
      activity,
      addProduct,
      updateProduct,
      deleteProduct,
      setProductStatus,
      toggleFeatured,
      addCategory,
      updateCategory,
      deleteCategory,
      updateSiteConfig,
      logActivity,
      clearActivity,
      resetCatalog,
    ],
  );

  return (
    <CatalogContext.Provider value={value}>
      {children}
    </CatalogContext.Provider>
  );
}

export function useCatalog() {
  const context = useContext(CatalogContext);
  if (!context) throw new Error("useCatalog debe usarse dentro de CatalogProvider");
  return context;
}

export type OrderItem = {
  productId: string;
  color: string;
  qty: number;
};

export type OrderLine = OrderItem & { key: string };

type OrderContextValue = {
  items: OrderLine[];
  destination: string;
  isOpen: boolean;
  count: number;
  add: (productId: string, color: string, qty?: number) => void;
  remove: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clear: () => void;
  setDestination: (value: string) => void;
  setOpen: (open: boolean) => void;
  resetOrder: () => void;
};

const OrderContext = createContext<OrderContextValue | null>(null);

function keyFor(productId: string, color: string) {
  return `${productId}::${color}`;
}

export function OrderProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<OrderLine[]>([]);
  const [destination, setDestinationState] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = readStored<{
      items?: OrderItem[];
      destination?: string;
    }>(ORDER_KEY);
    if (stored?.items) {
      setItems(
        stored.items.map((item) => ({
          ...item,
          key: keyFor(item.productId, item.color),
        })),
      );
    }
    if (stored?.destination) setDestinationState(stored.destination);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(
        ORDER_KEY,
        JSON.stringify({
          items: items.map(({ productId, color, qty }) => ({
            productId,
            color,
            qty,
          })),
          destination,
        }),
      );
    } catch {
      /* noop */
    }
  }, [items, destination, hydrated]);

  const add = useCallback(
    (productId: string, color: string, qty = 1) => {
      const key = keyFor(productId, color);
      setItems((current) => {
        const existing = current.find((item) => item.key === key);
        if (existing) {
          return current.map((item) =>
            item.key === key ? { ...item, qty: item.qty + qty } : item,
          );
        }
        return [...current, { key, productId, color, qty }];
      });
    },
    [],
  );

  const remove = useCallback((key: string) => {
    setItems((current) => current.filter((item) => item.key !== key));
  }, []);

  const setQty = useCallback((key: string, qty: number) => {
    setItems((current) =>
      qty <= 0
        ? current.filter((item) => item.key !== key)
        : current.map((item) => (item.key === key ? { ...item, qty } : item)),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const setDestination = useCallback((value: string) => {
    setDestinationState(value);
  }, []);

  const resetOrder = useCallback(() => {
    setItems([]);
    setDestinationState("");
    setOpen(false);
    try {
      window.localStorage.removeItem(ORDER_KEY);
    } catch {
      /* noop */
    }
  }, []);

  const count = items.reduce((sum, item) => sum + item.qty, 0);

  const value = useMemo<OrderContextValue>(
    () => ({
      items,
      destination,
      isOpen,
      count,
      add,
      remove,
      setQty,
      clear,
      setDestination,
      setOpen,
      resetOrder,
    }),
    [
      items,
      destination,
      isOpen,
      count,
      add,
      remove,
      setQty,
      clear,
      setDestination,
      resetOrder,
    ],
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrder debe usarse dentro de OrderProvider");
  return context;
}
