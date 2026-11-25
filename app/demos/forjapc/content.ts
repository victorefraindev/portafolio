export const brand = {
  name: "Forja PC",
  wordmark: "FORJA/PC",
  claim: "Componentes y PCs armadas con criterio.",
  email: "hola@forjapc.demo",
  instagram: "@forjapc.demo",
  instagramUrl: "https://www.instagram.com/forjapc.demo/",
  location: "Caracas, Venezuela",
  shipping: "Envíos a todo el país",
  hours: "Lun a sáb · 10:00 a 18:00",
};

export const nav = [
  { to: "/demos/forjapc", label: "Inicio", end: true },
  { to: "/demos/forjapc/servicios", label: "Servicios" },
  { to: "/demos/forjapc/nosotros", label: "Nosotros" },
  { to: "/demos/forjapc/builds", label: "Builds" },
  { to: "/demos/forjapc/contacto", label: "Contacto" },
];

export type PartVariant =
  | "gpu"
  | "cpu"
  | "ram"
  | "ssd"
  | "psu"
  | "cooler"
  | "tower";

export type Category = {
  name: string;
  note: string;
  part: PartVariant;
};

export const categories: Category[] = [
  { name: "Procesadores", note: "AMD e Intel", part: "cpu" },
  { name: "Gráficas", note: "NVIDIA y AMD", part: "gpu" },
  { name: "Memoria", note: "DDR4 y DDR5", part: "ram" },
  { name: "Almacenamiento", note: "NVMe y SATA", part: "ssd" },
  { name: "Fuentes", note: "80 Plus", part: "psu" },
  { name: "Refrigeración", note: "Aire y líquida", part: "cooler" },
];

export type BuildSpec = {
  label: string;
  value: string;
};

export type TowerDetail = "gaming" | "studio" | "office";

export type Build = {
  id: string;
  name: string;
  profile: string;
  price: string;
  tagline: string;
  description: string;
  specs: BuildSpec[];
  idealFor: string;
  towerDetail: TowerDetail;
};

export const builds: Build[] = [
  {
    id: "1440",
    name: "Forja 1440",
    profile: "Gaming 1440p",
    price: "$1,150",
    tagline: "Para jugar en 1440p con margen de FPS.",
    description:
      "Una build equilibrada para 1440p, streaming ligero y multitarea. Prioriza la GPU y una base DDR5 que aguanta upgrades.",
    specs: [
      { label: "Procesador", value: "Ryzen 7 7700" },
      { label: "Gráfica", value: "RTX 4070 12 GB" },
      { label: "Memoria", value: "32 GB DDR5 6000" },
      { label: "Almacenamiento", value: "1 TB NVMe" },
      { label: "Fuente", value: "750 W 80+ Gold" },
      { label: "Gabinete", value: "Mesh con 3 ventiladores" },
    ],
    idealFor: "1440p en alto, creación ligera y multitarea.",
    towerDetail: "gaming",
  },
  {
    id: "studio",
    name: "Forja Studio",
    profile: "Edición / 3D",
    price: "$1,850",
    tagline: "Para editar, renderizar y trabajar con varias apps abiertas.",
    description:
      "Más núcleos, más memoria y una GPU con margen para color, 3D y video. Pensada para jornadas largas sin cuellos de botella.",
    specs: [
      { label: "Procesador", value: "Ryzen 9 7900X" },
      { label: "Gráfica", value: "RTX 4070 Ti Super 16 GB" },
      { label: "Memoria", value: "64 GB DDR5" },
      { label: "Almacenamiento", value: "2 TB NVMe" },
      { label: "Fuente", value: "850 W 80+ Gold" },
      { label: "Gabinete", value: "Silencioso con filtro" },
    ],
    idealFor: "Edición 4K, 3D, diseño y multitarea pesada.",
    towerDetail: "studio",
  },
  {
    id: "oficina",
    name: "Forja Oficina",
    profile: "Trabajo / estudio",
    price: "$650",
    tagline: "Para trabajar, estudiar y resolver sin gastar de más.",
    description:
      "Gráficos integrados, bajo consumo y una plataforma actual para durar. Una PC silenciosa para el día a día.",
    specs: [
      { label: "Procesador", value: "Ryzen 5 8600G" },
      { label: "Gráfica", value: "Radeon 760M integrada" },
      { label: "Memoria", value: "16 GB DDR5" },
      { label: "Almacenamiento", value: "500 GB NVMe" },
      { label: "Fuente", value: "550 W 80+ Bronze" },
      { label: "Gabinete", value: "Compacto y silencioso" },
    ],
    idealFor: "Oficina, estudio, multimedia y uso diario.",
    towerDetail: "office",
  },
];

export type Service = {
  name: string;
  price: string;
  description: string;
  includes: string[];
};

export const services: Service[] = [
  {
    name: "Armado a medida",
    price: "$60",
    description:
      "Elegimos componentes compatibles, armamos, cableamos y probamos la PC antes de entregarla.",
    includes: [
      "Selección y compatibilidad",
      "Montaje y cableado",
      "BIOS, drivers y stress test",
    ],
  },
  {
    name: "Upgrade",
    price: "$30",
    description:
      "Cambia la pieza que te está limitando, sin rehacer toda la PC.",
    includes: [
      "Diagnóstico de cuello de botella",
      "GPU, SSD, RAM o fuente",
      "Pruebas de estabilidad",
    ],
  },
  {
    name: "Diagnóstico y optimización",
    price: "$20",
    description:
      "Encontramos el problema y dejamos el equipo estable y silencioso.",
    includes: [
      "Temperaturas y consumo",
      "Drivers y configuración",
      "Limpieza y recomendaciones",
    ],
  },
];

export const processSteps = [
  {
    title: "Cuéntanos el uso",
    description: "Juego, edición, trabajo; resolución y presupuesto.",
  },
  {
    title: "Propuesta",
    description: "Lista de componentes, alternativas y precio.",
  },
  {
    title: "Armado y pruebas",
    description: "Montaje, cableado, BIOS y stress test.",
  },
  {
    title: "Entrega",
    description: "Explicación de la build, garantía y soporte.",
  },
];

export const values = [
  {
    title: "Criterio técnico",
    description: "Elegimos por rendimiento y compatibilidad, no por moda.",
  },
  {
    title: "Transparencia",
    description: "Te decimos qué necesitas y qué es un gasto innecesario.",
  },
  {
    title: "Garantía real",
    description: "12 meses de armado y acompañamiento.",
  },
];

export const team = [
  {
    initials: "DT",
    role: "Dirección técnica",
    description: "Selección de componentes y compatibilidad.",
  },
  {
    initials: "QA",
    role: "Armado y QA",
    description: "Montaje, cableado y pruebas de estabilidad.",
  },
  {
    initials: "AT",
    role: "Atención y postventa",
    description: "Seguimiento, garantía y upgrades.",
  },
];

export const stats = [
  { value: "12", label: "meses de garantía" },
  { value: "48 h", label: "para diagnóstico" },
  { value: "100%", label: "equipos probados" },
];

export const faqs = [
  {
    question: "¿Puedo llevar mis componentes?",
    answer:
      "Sí. Revisamos compatibilidad y estado antes de armar; si algo no encaja, te proponemos alternativas.",
  },
  {
    question: "¿Cuánto tarda un armado?",
    answer:
      "Entre 3 y 5 días hábiles, según disponibilidad de componentes.",
  },
  {
    question: "¿Qué garantía tiene?",
    answer:
      "12 meses sobre el armado. Los componentes mantienen la garantía del fabricante.",
  },
  {
    question: "¿Hacen envíos?",
    answer:
      "Sí, a todo el país, con embalaje reforzado. En Caracas coordinamos entrega.",
  },
  {
    question: "¿Puedo actualizar mi PC actual?",
    answer:
      "Sí. Revisamos cuello de botella y compatibilidad antes de cambiar piezas.",
  },
  {
    question: "¿Cómo se paga?",
    answer: "Pago Móvil, transferencia o Binance.",
  },
];

export const contactReasons = [
  { value: "armar", label: "Armar una PC" },
  { value: "upgrade", label: "Upgrade o componente" },
  { value: "soporte", label: "Diagnóstico o soporte" },
  { value: "otra", label: "Otra consulta" },
];

export const budgetOptions = [
  "Menos de $600",
  "$600 – $1,000",
  "$1,000 – $1,500",
  "Más de $1,500",
  "No lo sé todavía",
];
