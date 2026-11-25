export const brand = {
  name: "Retromaquinas",
  wordmark: "RETROMAQUINAS",
  claim: "Compra y reparación de consolas.",
  email: "hola@retromaquinas.demo",
  instagram: "@retromaquinas.demo",
  instagramUrl: "https://www.instagram.com/retromaquinas.demo/",
  location: "Caracas, Venezuela",
  shipping: "Envíos a todo el país",
  hours: "Lun a sáb · 10:00 a 18:00",
};

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#reparaciones", label: "Reparaciones" },
  { href: "#proceso", label: "Proceso" },
  { href: "#preguntas", label: "Preguntas" },
];

export type RepairGlyphName =
  | "diagnostic"
  | "lens"
  | "power"
  | "hdmi"
  | "battery"
  | "chip";

export type RepairItem = {
  id: string;
  name: string;
  description: string;
  price: number | null;
  priceLabel?: string;
  turnaround: string;
  glyph: RepairGlyphName;
};

export const repairs: RepairItem[] = [
  {
    id: "diagnostico",
    name: "Diagnóstico y limpieza",
    description:
      "Revisión completa, limpieza interna y prueba de funcionamiento.",
    price: 15,
    turnaround: "24–48 h",
    glyph: "diagnostic",
  },
  {
    id: "lector",
    name: "Cambio de lector",
    description:
      "Lente, mecanismo o lector completo para consolas de disco.",
    price: 35,
    turnaround: "48–72 h",
    glyph: "lens",
  },
  {
    id: "fuente",
    name: "Reparación de fuente",
    description:
      "Recapacitado, reguladores y protección contra cortes de corriente.",
    price: 40,
    turnaround: "3–5 días",
    glyph: "power",
  },
  {
    id: "hdmi",
    name: "Puerto HDMI / AV",
    description:
      "Reparación o reemplazo de puerto, con prueba de señal.",
    price: 30,
    turnaround: "48–72 h",
    glyph: "hdmi",
  },
  {
    id: "bateria",
    name: "Batería y carga",
    description:
      "Cambio de batería, conector de carga o circuito de carga.",
    price: 25,
    turnaround: "24–48 h",
    glyph: "battery",
  },
  {
    id: "modding",
    name: "Modding y región",
    description:
      "Región, chips, salidas de video y ajustes a medida.",
    price: null,
    priceLabel: "A cotizar",
    turnaround: "3–7 días",
    glyph: "chip",
  },
];

export const buyConditions = [
  "Cualquier generación",
  "Funcione o no",
  "Con o sin accesorios",
  "Pago Móvil / Binance",
];

export const buySteps = [
  {
    title: "Cuéntanos qué tienes",
    description: "Modelo, estado y un par de fotos. Funcione o no.",
  },
  {
    title: "Te damos una oferta",
    description:
      "Precio claro el mismo día, según estado y repuestos.",
  },
  {
    title: "Coordinas la entrega",
    description:
      "Caracas o envío; el pago se hace al recibir la consola.",
  },
];

export const repairSteps = [
  {
    title: "Recibimos",
    description:
      "Nos cuentas la falla y recibimos la consola en el taller.",
  },
  {
    title: "Diagnosticamos",
    description:
      "Revisión completa y presupuesto antes de tocar nada.",
  },
  {
    title: "Reparamos",
    description:
      "Repuestos revisados y prueba de funcionamiento.",
  },
  {
    title: "Entregamos",
    description: "Probada, limpia y con garantía de 30 días.",
  },
];

export const guarantees = [
  {
    title: "Diagnóstico honesto",
    description: "Si no tiene arreglo, te lo decimos.",
  },
  {
    title: "Precio antes de reparar",
    description: "Apruebas el presupuesto; no hay sorpresas.",
  },
  {
    title: "Repuestos revisados",
    description: "Probamos cada reparación antes de entregar.",
  },
  {
    title: "Garantía 30 días",
    description: "Cubre la reparación, no daños por uso.",
  },
];

export const faqs = [
  {
    question: "¿Cobran el diagnóstico?",
    answer:
      "Tiene un costo; si apruebas la reparación, se descuenta del total.",
  },
  {
    question: "¿Qué pasa si no tiene arreglo?",
    answer:
      "Te lo decimos y puedes venderla para repuestos; no cobramos la reparación.",
  },
  {
    question: "¿Cuánto tarda?",
    answer:
      "Depende del repuesto; te damos un plazo concreto al diagnosticar.",
  },
  {
    question: "¿Compran consolas rotas?",
    answer:
      "Sí, en cualquier estado. La oferta depende del modelo y de los repuestos.",
  },
  {
    question: "¿Reparan cualquier consola?",
    answer:
      "Trabajamos con varias generaciones. Si no tenemos el repuesto, te lo decimos antes de recibirla.",
  },
  {
    question: "¿Hacen envíos?",
    answer:
      "Sí, a todo el país, con embalaje reforzado. En Caracas coordinamos entrega.",
  },
];

export const formReasons = [
  { value: "reparar", label: "Quiero reparar una consola" },
  { value: "vender", label: "Quiero vender una consola" },
  { value: "otra", label: "Otra consulta" },
];
