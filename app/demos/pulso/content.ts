export const brand = {
  name: "Pulso Gamer",
  wordmark: "Pulso",
  tagline: "Equipo para tu setup.",
  email: "hola@pulso.demo",
  instagram: "@pulso.demo",
  location: "Caracas, Venezuela",
  shipping: "Envíos a todo el país",
  hours: "Lun a sáb · 10:00 a 18:00",
};

export type ProductStatus = "activo" | "agotado" | "oculto";

export type ArtVariant =
  | "chair"
  | "desk"
  | "monitor"
  | "keyboard"
  | "mouse"
  | "headset"
  | "mousepad"
  | "led"
  | "lamp"
  | "pc"
  | "setup";

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  categoryId: string;
  status: ProductStatus;
  featured: boolean;
  colors: string[];
  tags: string[];
  art: ArtVariant;
  specs: ProductSpec[];
  createdAt: string;
};

export const seedCategories: Category[] = [
  {
    id: "cat-sillas",
    name: "Sillas",
    slug: "sillas",
    description: "Ergonomía para sesiones largas.",
  },
  {
    id: "cat-escritorios",
    name: "Escritorios",
    slug: "escritorios",
    description: "Espacio, estabilidad y cable management.",
  },
  {
    id: "cat-monitores",
    name: "Monitores",
    slug: "monitores",
    description: "Más Hz, más claridad, menos fatiga.",
  },
  {
    id: "cat-perifericos",
    name: "Periféricos",
    slug: "perifericos",
    description: "Teclado, mouse y audio para jugar.",
  },
  {
    id: "cat-iluminacion",
    name: "Iluminación",
    slug: "iluminacion",
    description: "Luz para el setup, no para deslumbrarte.",
  },
  {
    id: "cat-pcs",
    name: "PCs",
    slug: "pcs",
    description: "Equipos armados y combos de setup.",
  },
];

const specs = {
  chair: [
    { label: "Ergonomía", value: "Soporte lumbar ajustable" },
    { label: "Reclinación", value: "Hasta 180°" },
    { label: "Peso máximo", value: "150 kg" },
    { label: "Garantía", value: "12 meses" },
  ],
  desk: [
    { label: "Medidas", value: "140 × 70 cm" },
    { label: "Estructura", value: "Acero con niveladores" },
    { label: "Gestión de cables", value: "Bandeja inferior" },
    { label: "Garantía", value: "12 meses" },
  ],
  monitor: [
    { label: "Panel", value: "IPS QHD" },
    { label: "Refresco", value: "165 Hz" },
    { label: "Respuesta", value: "1 ms MPRT" },
    { label: "Entradas", value: "HDMI 2.1 / DisplayPort" },
  ],
  keyboard: [
    { label: "Formato", value: "75%" },
    { label: "Switches", value: "Hot-swap lineales" },
    { label: "Conexión", value: "USB-C / 2.4 GHz / Bluetooth" },
    { label: "Iluminación", value: "RGB por tecla" },
  ],
  mouse: [
    { label: "Sensor", value: "26K DPI" },
    { label: "Peso", value: "58 g" },
    { label: "Conexión", value: "Inalámbrica 2.4 GHz" },
    { label: "Batería", value: "Hasta 70 h" },
  ],
  headset: [
    { label: "Audio", value: "Estéreo 50 mm" },
    { label: "Micrófono", value: "Desmontable con cancelación" },
    { label: "Conexión", value: "USB / 3.5 mm" },
    { label: "Almohadillas", value: "Espuma viscoelástica" },
  ],
  mousepad: [
    { label: "Medidas", value: "90 × 40 cm" },
    { label: "Superficie", value: "Tela microtexturizada" },
    { label: "Base", value: "Goma antideslizante" },
    { label: "Bordes", value: "Costura reforzada" },
  ],
  led: [
    { label: "Largo", value: "3 metros" },
    { label: "Control", value: "App / mando" },
    { label: "Colores", value: "RGB" },
    { label: "Instalación", value: "Adhesivo 3M" },
  ],
  lamp: [
    { label: "Luz", value: "LED regulable" },
    { label: "Temperatura", value: "Cálida a fría" },
    { label: "Montaje", value: "Pinza de escritorio" },
    { label: "Alimentación", value: "USB-C" },
  ],
  pc: [
    { label: "Procesador", value: "Ryzen 7 7700" },
    { label: "Gráfica", value: "RTX 4070 12 GB" },
    { label: "Memoria", value: "32 GB DDR5" },
    { label: "Almacenamiento", value: "1 TB NVMe" },
  ],
  setup: [
    { label: "Incluye", value: "Silla, escritorio y mousepad" },
    { label: "Escritorio", value: "140 × 70 cm" },
    { label: "Silla", value: "Pulso Lite" },
    { label: "Garantía", value: "12 meses" },
  ],
};

export const seedProducts: Product[] = [
  {
    id: "p-silla-pro",
    name: "Silla Pulso Pro",
    slug: "silla-pulso-pro",
    description:
      "Silla ergonómica con soporte lumbar, reclinación de 180° y base reforzada. Pensada para sesiones largas sin sacrificar la espalda.",
    price: 249,
    categoryId: "cat-sillas",
    status: "activo",
    featured: true,
    colors: ["Negro", "Gris"],
    tags: ["silla", "ergonomica", "reclinable", "lumbar"],
    art: "chair",
    specs: specs.chair,
    createdAt: "2026-11-20T10:00:00.000Z",
  },
  {
    id: "p-silla-lite",
    name: "Silla Pulso Lite",
    slug: "silla-pulso-lite",
    description:
      "La base para un setup cómodo. Estructura firme, apoyabrazos ajustables y tapizado fácil de limpiar.",
    price: 159,
    categoryId: "cat-sillas",
    status: "activo",
    featured: false,
    colors: ["Negro"],
    tags: ["silla", "economica", "setup"],
    art: "chair",
    specs: specs.chair,
    createdAt: "2026-11-18T10:00:00.000Z",
  },
  {
    id: "p-escritorio-140",
    name: "Escritorio Pulso 140",
    slug: "escritorio-pulso-140",
    description:
      "Escritorio de 140 cm con estructura de acero, bandeja para cables y superficie resistente. Espacio para monitor, torre y periféricos.",
    price: 189,
    categoryId: "cat-escritorios",
    status: "activo",
    featured: false,
    colors: ["Negro", "Nogal"],
    tags: ["escritorio", "140", "cable management", "setup"],
    art: "desk",
    specs: specs.desk,
    createdAt: "2026-11-19T10:00:00.000Z",
  },
  {
    id: "p-escritorio-120",
    name: "Escritorio Pulso 120",
    slug: "escritorio-pulso-120",
    description:
      "La versión compacta del escritorio Pulso. Ideal para espacios ajustados sin perder estabilidad.",
    price: 149,
    categoryId: "cat-escritorios",
    status: "activo",
    featured: false,
    colors: ["Negro"],
    tags: ["escritorio", "120", "compacto"],
    art: "desk",
    specs: specs.desk,
    createdAt: "2026-11-17T10:00:00.000Z",
  },
  {
    id: "p-monitor-27",
    name: "Monitor Pulso 27 QHD",
    slug: "monitor-pulso-27-qhd",
    description:
      "27 pulgadas, 165 Hz y panel IPS. El punto dulce entre nitidez, velocidad y color para jugar y trabajar.",
    price: 299,
    categoryId: "cat-monitores",
    status: "activo",
    featured: true,
    colors: ["Negro"],
    tags: ["monitor", "165hz", "qhd", "ips", "27"],
    art: "monitor",
    specs: specs.monitor,
    createdAt: "2026-11-21T10:00:00.000Z",
  },
  {
    id: "p-monitor-24",
    name: "Monitor Pulso 24 180Hz",
    slug: "monitor-pulso-24-180hz",
    description:
      "24 pulgadas Full HD y 180 Hz para competitivo. Rápido, liviano y con soporte ajustable.",
    price: 179,
    categoryId: "cat-monitores",
    status: "agotado",
    featured: false,
    colors: ["Negro"],
    tags: ["monitor", "180hz", "fullhd", "24"],
    art: "monitor",
    specs: specs.monitor,
    createdAt: "2026-11-16T10:00:00.000Z",
  },
  {
    id: "p-teclado-k75",
    name: "Teclado Pulso K75",
    slug: "teclado-pulso-k75",
    description:
      "Teclado 75% con switches lineales hot-swap, triple conexión y RGB por tecla. Compacto donde importa, completo donde hace falta.",
    price: 89,
    categoryId: "cat-perifericos",
    status: "activo",
    featured: false,
    colors: ["Negro", "Blanco"],
    tags: ["teclado", "mecanico", "75", "rgb", "hot swap"],
    art: "keyboard",
    specs: specs.keyboard,
    createdAt: "2026-11-22T10:00:00.000Z",
  },
  {
    id: "p-mouse-m2",
    name: "Mouse Pulso M2",
    slug: "mouse-pulso-m2",
    description:
      "Mouse inalámbrico de 58 g con sensor de 26K DPI y batería para una semana de uso intenso.",
    price: 45,
    categoryId: "cat-perifericos",
    status: "activo",
    featured: false,
    colors: ["Negro", "Blanco"],
    tags: ["mouse", "inalambrico", "ligero", "gaming"],
    art: "mouse",
    specs: specs.mouse,
    createdAt: "2026-11-15T10:00:00.000Z",
  },
  {
    id: "p-headset-h1",
    name: "Headset Pulso H1",
    slug: "headset-pulso-h1",
    description:
      "Audio estéreo con micrófono desmontable y almohadillas cómodas para partidas largas.",
    price: 69,
    categoryId: "cat-perifericos",
    status: "activo",
    featured: false,
    colors: ["Negro", "Blanco"],
    tags: ["audio", "headset", "microfono", "gaming"],
    art: "headset",
    specs: specs.headset,
    createdAt: "2026-11-14T10:00:00.000Z",
  },
  {
    id: "p-mousepad-xxl",
    name: "Mousepad Pulso XXL",
    slug: "mousepad-pulso-xxl",
    description:
      "Superficie de 90 × 40 cm con bordes cosidos. Cubre teclado y mouse sin que se muevan.",
    price: 29,
    categoryId: "cat-perifericos",
    status: "activo",
    featured: false,
    colors: ["Negro"],
    tags: ["mousepad", "xxl", "tela", "setup"],
    art: "mousepad",
    specs: specs.mousepad,
    createdAt: "2026-11-13T10:00:00.000Z",
  },
  {
    id: "p-led-glow",
    name: "Tira LED Pulso Glow",
    slug: "tira-led-pulso-glow",
    description:
      "Tres metros de luz RGB para el borde del escritorio o detrás del monitor. Control por app o mando.",
    price: 25,
    categoryId: "cat-iluminacion",
    status: "activo",
    featured: false,
    colors: ["RGB"],
    tags: ["led", "rgb", "ambiente", "setup"],
    art: "led",
    specs: specs.led,
    createdAt: "2026-11-12T10:00:00.000Z",
  },
  {
    id: "p-lampara-beam",
    name: "Lámpara Pulso Beam",
    slug: "lampara-pulso-beam",
    description:
      "Lámpara de escritorio con temperatura regulable y pinza. Ilumina el setup sin reflejos en pantalla.",
    price: 39,
    categoryId: "cat-iluminacion",
    status: "oculto",
    featured: false,
    colors: ["Negro", "Blanco"],
    tags: ["lampara", "escritorio", "luz", "usb-c"],
    art: "lamp",
    specs: specs.lamp,
    createdAt: "2026-11-11T10:00:00.000Z",
  },
  {
    id: "p-pc-1440",
    name: "PC Pulso 1440",
    slug: "pc-pulso-1440",
    description:
      "Equipo armado para 1440p con margen: Ryzen 7, RTX 4070, 32 GB DDR5 y 1 TB NVMe. Probado antes de entregar.",
    price: 1499,
    categoryId: "cat-pcs",
    status: "activo",
    featured: true,
    colors: ["Negro"],
    tags: ["pc", "rtx 4070", "ryzen", "1440p", "gaming"],
    art: "pc",
    specs: specs.pc,
    createdAt: "2026-11-22T12:00:00.000Z",
  },
  {
    id: "p-pc-starter",
    name: "PC Pulso Starter",
    slug: "pc-pulso-starter",
    description:
      "PC de entrada para 1080p y estudio. Componentes actuales y espacio para mejorar después.",
    price: 899,
    categoryId: "cat-pcs",
    status: "activo",
    featured: false,
    colors: ["Negro"],
    tags: ["pc", "rtx 4060", "ryzen", "1080p", "entrada"],
    art: "pc",
    specs: specs.pc,
    createdAt: "2026-11-10T10:00:00.000Z",
  },
  {
    id: "p-combo-setup",
    name: "Combo Setup Pulso",
    slug: "combo-setup-pulso",
    description:
      "Silla Pulso Lite, escritorio Pulso 140 y mousepad XXL. El paquete base para armar el setup de una vez.",
    price: 349,
    categoryId: "cat-pcs",
    status: "activo",
    featured: false,
    colors: ["Negro"],
    tags: ["combo", "setup", "silla", "escritorio", "mousepad"],
    art: "setup",
    specs: specs.setup,
    createdAt: "2026-11-09T10:00:00.000Z",
  },
];

export const popularSearches = [
  "silla",
  "monitor 165hz",
  "escritorio",
  "teclado",
  "pc 1440",
];

export type SiteConfig = {
  heroEyebrow: string;
  heroTitleStart: string;
  heroTitleAccent: string;
  heroTitleEnd: string;
  heroDescription: string;
  featuredIds: string[];
  categoryOrder: string[];
  hiddenCategoryIds: string[];
};

export const seedSiteConfig: SiteConfig = {
  heroEyebrow: "Pulso / setup system 01",
  heroTitleStart: "Armá tu",
  heroTitleAccent: "próximo",
  heroTitleEnd: "setup.",
  heroDescription:
    "Elegí las piezas que sí importan: silla, monitor, escritorio y periféricos. Probamos compatibilidad y armamos un solo pedido para WhatsApp.",
  featuredIds: ["p-silla-pro", "p-monitor-27", "p-pc-1440"],
  categoryOrder: seedCategories.map((category) => category.id),
  hiddenCategoryIds: [],
};

export type ActivityAction =
  | "product.created"
  | "product.updated"
  | "product.price"
  | "product.status"
  | "product.featured"
  | "product.deleted"
  | "category.created"
  | "category.updated"
  | "category.deleted"
  | "site.updated"
  | "demo.reset";

export type ActivityEntry = {
  id: string;
  at: string;
  action: ActivityAction;
  label: string;
  detail?: string;
};

export const seedActivity: ActivityEntry[] = [
  {
    id: "a-seed-1",
    at: "2026-11-22T12:00:00.000Z",
    action: "product.created",
    label: "PC Pulso 1440 agregada al catálogo",
    detail: "Producto destacado en la portada",
  },
  {
    id: "a-seed-2",
    at: "2026-11-22T11:20:00.000Z",
    action: "product.featured",
    label: "Silla Pulso Pro marcada como destacada",
  },
  {
    id: "a-seed-3",
    at: "2026-11-21T16:40:00.000Z",
    action: "site.updated",
    label: "Portada actualizada",
    detail: "Título, descripción y destacados",
  },
  {
    id: "a-seed-4",
    at: "2026-11-21T10:05:00.000Z",
    action: "product.status",
    label: "Monitor Pulso 24 180Hz marcado como agotado",
  },
];

export type DemoUser = {
  id: string;
  name: string;
  email: string;
  role: "owner" | "editor";
  active: boolean;
};

export const seedUsers: DemoUser[] = [
  {
    id: "u-owner",
    name: "Dueño Pulso",
    email: "dueno@pulso.demo",
    role: "owner",
    active: true,
  },
  {
    id: "u-editor",
    name: "Editor de catálogo",
    email: "editor@pulso.demo",
    role: "editor",
    active: true,
  },
];

export const seedStats = {
  searches: 438,
  views: 1842,
  clicks: 112,
  topTerms: [
    { term: "silla", count: 84 },
    { term: "monitor 165hz", count: 61 },
    { term: "escritorio", count: 47 },
    { term: "teclado", count: 39 },
    { term: "setup", count: 31 },
  ],
  withoutResults: [
    { term: "silla blanca", count: 14 },
    { term: "monitor 4k", count: 9 },
    { term: "escritorio elevable", count: 7 },
  ],
};

export const colorHex: Record<string, string> = {
  Negro: "#141414",
  Gris: "#6f6f6f",
  Blanco: "#eee9df",
  Nogal: "#8a5a36",
  RGB: "#ff4a00",
  Naranja: "#ff4a00",
};
