export const profile = {
  name: "Víctor Efraín Armao Medina",
  shortName: "Víctor Armao",
  role: "Desarrollador Fullstack y DevOps",
  availability: "Disponible para nuevos proyectos",
  location: "Caracas, Venezuela",
  email: "victorefrain.dev@gmail.com",
  github: "https://github.com/victorefraindev",
  avatar: "/profile.jpeg",
  blurb:
    "Desarrollo aplicaciones de punta a punta y las despliego en producción. Me gusta bastante la programación y mantener la infraestructura estable y observable.",
  about: [
    "Soy desarrollador fullstack con trabajo de la interfaz al servidor: React, SvelteKit y Next.js en el frontend; NestJS, Go y .NET en el backend, con PostgreSQL y MS SQL debajo. Diseño, construyo y despliego aplicaciones web desde cero, y me interesa el ciclo completo: modelado de datos, APIs, pruebas y puesta en producción.",
    "También administro la infraestructura que sostiene lo que construyo: servidores Linux (Ubuntu), contenedores con Docker y monitoreo con Grafana.",
  ],
};

export type ProjectImage = {
  src: string;
  alt: string;
  portrait?: boolean;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  visibility: "publico" | "confidencial" | "privado";
  year?: string;
  infra?: string;
  demo?: string;
  admin?: string;
  repo?: string;
  images?: ProjectImage[];
};

export const projects: Project[] = [
  {
    title: "scompras — Carga y validación de documentos fiscales",
    description:
      "Plataforma para cargar, validar y reportar documentos fiscales: facturas, retenciones de IVA e ISLR. Diseñé y desarrollé el flujo completo: interfaz, API, extracción de datos con OCR e IA, contraste de la información contra la imagen original y generación de reportes con montos, IVA y productos. El sistema se integra con el ERP del cliente mediante una API.",
    stack: ["React", ".NET", "SQL Server", "Python", "OCR", "IA"],
    infra: "Me encargué de la infraestructura de punta a punta: preparación del servidor Ubuntu, despliegue con contenedores, automatización de CI/CD y monitoreo con métricas y logs. Detalles de arquitectura bajo solicitud.",
    visibility: "confidencial",
    year: "2025 – 2026",
  },
  {
    title: "Apprva — Aprobación y rechazo de documentos por flujos",
    description:
      "Web app para la aprobación y rechazo de documentos siguiendo flujos configurables. Diseñé y desarrollé la interfaz, la API y el modelo de permisos: creación de flujos, asignación de roles, invitación de usuarios, autenticación en dos pasos, estadísticas de documentos, webhooks para sistemas externos y documentación de la API. Se integra con un sistema de gestión documental para intercambiar información de facturas y proveedores.",
    stack: ["React", "NestJS", "PostgreSQL", "Webhooks"],
    infra: "Me encargué del despliegue y la operación: servidor Ubuntu, contenedores, CI/CD y monitoreo con métricas y logs. Detalles de arquitectura bajo solicitud.",
    visibility: "confidencial",
    year: "2026",
  },
  {
    title: "Yogures Cremosos — Tienda online de yogures artesanales",
    description:
      "E-commerce de yogures artesanales dividido en tienda para clientes, panel de administración y API. La tienda (Next.js), el panel (SvelteKit) y la API (Go con Gin) sobre Supabase: Auth para el login, Storage para imágenes y Postgres como base de datos. Autenticación JWT verificada contra JWKS, pedidos, productos, tasa BCV automática, rate limiting y headers de seguridad. Contrato OpenAPI documentado.",
    stack: ["Go (Gin)", "Next.js", "SvelteKit", "Supabase", "PostgreSQL"],
    visibility: "publico",
    year: "2026",
    demo: "https://yogures-frontend-clientes.vercel.app",
    admin: "https://yogures-frontend-admin.vercel.app/admin",
    repo: "https://github.com/victorefraindev/yogures-backend",
    images: [
      {
        src: "/proyecto-yogurt.webp",
        alt: "Tienda de Yogures Cremosos: portada con el yogur destacado y el precio.",
      },
      {
        src: "/yogures-frontend.admin.webp",
        alt: "Panel de administración de Yogures Cremosos con métricas de pedidos e ingresos.",
      },
    ],
  },
  {
    title: "Sistema de Inventario — Ventas y control de stock para bodegas",
    description:
      "App móvil (PWA) para gestionar el inventario y las ventas de bodegas pequeñas, con panel de administración de la plataforma. Mobile-first y offline: las ventas sin conexión se guardan en una cola local y se sincronizan al volver la señal. Multi-tenant por bodega con roles (admin/vendedor), catálogo con fotos, ventas con IVA, tasa BCV automática o manual, reportes y devoluciones que reponen stock. Backend NestJS con Prisma sobre Supabase: Postgres como base, Auth para las sesiones y Storage para las fotos de productos.",
    stack: ["React (Vite)", "NestJS", "Prisma", "Supabase", "PostgreSQL", "PWA"],
    visibility: "privado",
    year: "2026",
    images: [
      {
        src: "/sistema-inventario-desktop.webp",
        alt: "Panel de inventario en escritorio: ventas del día, tasa vigente, stock bajo y últimos movimientos.",
      },
      {
        src: "/sistema-inventario-phone.webp",
        alt: "Vista móvil del inventario: ventas del día, tasa vigente, stock bajo y movimientos.",
        portrait: true,
      },
    ],
  },
];

export const skills = [
  {
    group: "Lenguajes",
    items: ["JavaScript", "Python", "Go", "C#"],
  },
  {
    group: "Frontend",
    items: ["React", "SvelteKit", "Next.js"],
  },
  {
    group: "Backend",
    items: ["NestJS", "Go", ".NET"],
  },
  {
    group: "Bases de datos",
    items: ["PostgreSQL", "MS SQL", "Supabase Auth", "Supabase Storage", "Prisma"],
  },
  {
    group: "DevOps",
    items: ["Docker", "Linux", "Git", "Grafana"],
  },
  {
    group: "Datos",
    items: ["Excel", "Power BI"],
  },
];

export const experience = [
  {
    role: "Desarrollador Fullstack y DevOps",
    company: "Avatsis C.A — Altamira",
    period: "2025 – 2026",
    description:
      "Desarrollo de aplicaciones web End-to-End: interfaces, lógica de negocio, APIs y modelado de bases de datos relacionales. Gestión del ciclo de vida completo del software, desde el control de versiones con Git y las pruebas, hasta el despliegue en producción.",
  },
  {
    role: "Infraestructura y monitoreo",
    company: "Avatsis C.A",
    period: "En el mismo rol",
    description:
      "Administración de servidores Linux (Ubuntu), contenedorización con Docker y monitoreo con Grafana para visualizar métricas de rendimiento. Dashboards interactivos en Power BI para el seguimiento de métricas clave sobre PostgreSQL y MS SQL.",
  },
];

export const education = [
  {
    title: "TSU en Informática",
    institution: "Instituto Universitario de Mercadotecnia (ISUM) — Sabana Grande",
    period: "2024 – 2026",
  },
  {
    title: "Técnico medio en Electrónica",
    institution: "Escuela Técnica Gregorio Mac Gregor",
    period: "2018 – 2023",
  },
];

export const contactNote =
  "Mi bandeja está abierta para cualquier proyecto. Escríbeme y te respondo.";

/* ============================================================
   Contenido de /servicios — dirigido a negocios.
   Lenguaje de beneficios: evitar jerga técnica en esta sección.
   ============================================================ */

export type BusinessImage = {
  src: string;
  alt: string;
  portrait?: boolean;
};

export type BusinessCase = {
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
  images: BusinessImage[];
  demo?: string;
  admin?: string;
  note: string;
};

export type BusinessPanelTier = {
  price: number;
  label: string;
  includes: string[];
};

export type BusinessPlan = {
  name: string;
  description: string;
  price: number;
  priceMax?: number;
  timeline: string;
  includes: string[];
  panelTiers?: BusinessPanelTier[];
  base?: string;
  optional?: string;
  excludes?: string;
  demo?: string;
  admin?: string;
};

export type BusinessDemo = {
  kicker: string;
  name: string;
  description: string;
  href: string;
  image: BusinessImage;
};

export type BusinessMaintenance = {  name: string;
  price: number;
  includes: string[];
};

export const business = {
  meta: {
    title: "Páginas web y tiendas online para negocios",
    description:
      "Páginas web, catálogos y tiendas online para negocios desde $200. Diseño a medida, versión móvil y publicación incluidos. Desde Caracas, trabajo a distancia.",
  },
  hero: {
    eyebrow: "Para negocios",
    title: "Páginas web y tiendas online para tu negocio",
    description:
      "Diseño y desarrollo la web de tu negocio: catálogo, pedidos y un panel para que actualices productos y precios sin depender de nadie. Planes desde $200, con diseño a medida, versión móvil y publicación incluidos. Experiencia en sistemas corporativos y comercio pequeño.",
    primaryCta: "Cuéntame tu proyecto",
    secondaryCta: "Ver planes",
    location: "Caracas, Venezuela · Trabajo a distancia",
  },
  highlights: [
    "Planes desde $200",
    "Precios en USD",
    "Entrega desde 5 días",
    "Publicación incluida",
  ],
  plans: [
    {
      name: "Landing page",
      description:
        "Una sola página para presentar un negocio, un producto o una campaña.",
      price: 200,
      timeline: "5 a 7 días hábiles",
      includes: [
        "Diseño a medida, sin plantillas",
        "Adaptada a celular, tablet y escritorio",
        "Hasta 6 secciones",
        "Formulario de contacto",
        "Botón directo a WhatsApp",
        "SEO básico y vista previa al compartir",
        "Analítica configurada",
        "Dominio y hosting configurados",
        "2 rondas de ajustes",
      ],
      excludes:
        "No incluye: redacción de textos, fotos, logotipo ni correo corporativo.",
      demo: "/demos/retromaquinas",
    },
    {
      name: "Sitio institucional",
      description:
        "Para empresas que necesitan varias páginas y una estructura clara.",
      price: 300,
      timeline: "7 a 10 días hábiles",
      base: "Todo lo de la landing",
      includes: [
        "Hasta 5 páginas",
        "Navegación y pie de página completos",
        "Formulario con envío a correo",
        "SEO por página",
        "2 rondas de ajustes",
      ],
      optional: "Panel de contenido autogestionable (+$120).",
      demo: "/demos/forjapc",
    },
    {
      name: "Catálogo con panel de administración",
      description:
        "Para productos que cambian seguido: ropa, accesorios, repuestos, comida.",
      price: 350,
      priceMax: 400,
      timeline: "10 a 15 días hábiles",
      includes: [
        "Catálogo con categorías",
        "Buscador con tolerancia a errores y acentos",
        "Ficha con galería de hasta 15 fotos, precio, tallas y opciones",
        "Lista de pedido con un solo mensaje de WhatsApp",
        "Publicación y capacitación (1 hora)",
        "2 rondas de ajustes",
      ],
      panelTiers: [
        {
          price: 350,
          label: "Panel esencial",
          includes: [
            "Cargar, editar y pausar productos",
            "Categorías e imágenes",
            "Precio y disponibilidad por producto",
            "Un usuario administrador",
          ],
        },
        {
          price: 400,
          label: "Panel completo",
          includes: [
            "Todo lo del panel esencial",
            "Portada editable: título, destacados y orden de categorías",
            "Resumen con métricas y alertas de agotados",
            "Historial de cambios",
            "Estadísticas de búsquedas, vistas y clics a WhatsApp",
            "Usuarios con roles",
          ],
        },
      ],
      excludes:
        "No incluye: cobro con tarjeta, stock por variante ni facturación.",
      demo: "/demos/pulso",
      admin: "/demos/pulso/admin",
    },
    {
      name: "Tienda online con pagos",
      description: "Para vender y cobrar sin intervención manual.",
      price: 500,
      timeline: "20 a 30 días hábiles",
      base: "Todo lo del catálogo con panel completo",
      includes: [
        "Carrito y checkout con datos de envío",
        "Cobro con pasarela o pago móvil",
        "Pedidos guardados con estados",
        "Cálculo de envío por zona o retiro",
        "Correos automáticos de confirmación",
        "Panel de pedidos y reportes",
        "2 rondas de ajustes",
      ],
      excludes:
        "No incluye: comisiones de la pasarela ni trámites de cuenta comercial.",
      demo: "https://yogures-frontend-clientes.vercel.app",
      admin: "https://yogures-frontend-admin.vercel.app/admin/login",
    },
  ] as BusinessPlan[],
  demos: [
    {
      kicker: "Landing",
      name: "Retromaquinas",
      description:
        "Compra y reparación de consolas: servicio, precios y formulario de diagnóstico.",
      href: "/demos/retromaquinas",
      image: {
        src: "/demo-retromaquinas.webp",
        alt: "Portada de Retromaquinas con su titular y la foto de una PlayStation 1 en una ficha de taller.",
      },
    },
    {
      kicker: "Sitio institucional",
      name: "Forja PC",
      description:
        "Componentes y PCs armadas, con fichas de builds y seguimiento de cada pieza.",
      href: "/demos/forjapc",
      image: {
        src: "/demo-forjapc.webp",
        alt: "Portada de Forja PC con el titular centrado y la franja de la build destacada.",
      },
    },
    {
      kicker: "Catálogo",
      name: "Pulso Gamer",
      description:
        "Catálogo de sillas, monitores y periféricos con pedido en un solo mensaje.",
      href: "/demos/pulso",
      image: {
        src: "/demo-pulso.webp",
        alt: "Portada de Pulso Gamer con el titular, el buscador y el índice de categorías.",
      },
    },
    {
      kicker: "Panel",
      name: "Pulso / panel",
      description:
        "Resumen de la tienda, productos, portada editable, estadísticas e historial.",
      href: "/demos/pulso/admin",
      image: {
        src: "/demo-pulso-admin.webp",
        alt: "Panel de administración de Pulso con métricas, alertas y actividad reciente.",
      },
    },
  ] as BusinessDemo[],
  extras: [
    { label: "Página adicional", price: "$40" },
    {
      label: "Nueva característica después del mes de entrega",
      price: "A cotizar",
    },
  ],
  maintenance: [
    {
      name: "Básico",
      price: 20,
      includes: [
        "Hosting gestionado",
        "Certificado SSL",
        "Respaldos semanales",
        "Actualizaciones de seguridad",
      ],
    },
    {
      name: "Completo",
      price: 40,
      includes: [
        "Todo lo del plan básico",
        "Monitoreo con alertas",
        "Respaldos diarios",
        "Hasta 2 horas de cambios menores al mes",
      ],
    },
  ] as BusinessMaintenance[],
  process: [
    {
      title: "Conversamos",
      description:
        "Me cuentas qué vendes, cómo recibes pedidos hoy y qué necesitas resolver.",
    },
    {
      title: "Propuesta",
      description:
        "Te paso alcance, precio y plazo por escrito. Sin sorpresas.",
    },
    {
      title: "Diseño y desarrollo",
      description:
        "Construyo la web y te la muestro por etapas para ajustar antes de publicar.",
    },
    {
      title: "Lanzamiento y soporte",
      description:
        "Publicamos, te enseño a administrarla y quedo disponible para cambios y mantenimiento.",
    },
  ],
  cases: [
    {
      kicker: "Tienda online",
      title: "Yogures Cremosos",
      description:
        "Tienda para clientes, panel de administración y pedidos. Catálogo con fotos, tasa BCV automática y una experiencia pensada para el móvil.",
      bullets: [
        "Catálogo y pedidos",
        "Panel de administración",
        "Tasa BCV automática",
        "Diseño móvil",
      ],
      images: [
        {
          src: "/proyecto-yogurt.webp",
          alt: "Portada de la tienda de Yogures Cremosos con el producto destacado y su precio.",
        },
        {
          src: "/yogures-frontend.admin.webp",
          alt: "Panel de administración de Yogures Cremosos con métricas de pedidos e ingresos.",
        },
      ],
      demo: "https://yogures-frontend-clientes.vercel.app",
      admin: "https://yogures-frontend-admin.vercel.app/admin",
      note: "Proyecto de ejemplo. Puedes abrir la tienda y el panel de demostración.",
    },
    {
      kicker: "Comercio pequeño",
      title: "Sistema de inventario para bodegas",
      description:
        "Ventas, stock y reportes para negocios pequeños, con roles de usuario y funcionamiento sin conexión. Pensado para ordenar la operación diaria.",
      bullets: [
        "Ventas y stock",
        "Funciona sin conexión",
        "Roles de usuario",
        "Reportes",
      ],
      images: [
        {
          src: "/sistema-inventario-desktop.webp",
          alt: "Panel de inventario en escritorio con ventas del día, tasa vigente y stock bajo.",
        },
        {
          src: "/sistema-inventario-phone.webp",
          alt: "Vista móvil del inventario con ventas del día y movimientos.",
          portrait: true,
        },
      ],
      note: "Proyecto privado. Las capturas muestran la interfaz; puedo mostrar más en una conversación.",
    },
  ] satisfies BusinessCase[],
  conditions: [
    {
      label: "Pago",
      value:
        "50% al aprobar y 50% contra entrega. Proyectos grandes por hitos.",
    },
    {
      label: "Formas de pago",
      value:
        "Pago Móvil o Binance. Los montos en bolívares se calculan a la tasa USDT del día.",
    },
    {
      label: "Dominio y hosting",
      value: "A nombre del cliente, pagados por él ($15–60 al año).",
    },
    {
      label: "Contenido",
      value: "Textos, fotos y logo los entrega el cliente.",
    },
    {
      label: "Ajustes",
      value:
        "2 rondas incluidas y un mes de acompañamiento. Después, las características nuevas se cotizan.",
    },
    {
      label: "Tiempos",
      value: "Cuentan desde el anticipo y la entrega del contenido.",
    },
    {
      label: "Validez",
      value: "30 días desde la fecha de esta propuesta.",
    },
    {
      label: "Propiedad",
      value: "Al saldo final, el código y los accesos quedan a tu nombre.",
    },
    {
      label: "Portafolio",
      value:
        "El proyecto puede mostrarse en mi portafolio y redes como referencia. Si prefieres mantenerlo privado, se acuerda por escrito.",
    },
  ],
  quoteChecklist: [
    "Qué hace el negocio y qué quieres que haga la página.",
    "Cuántas secciones o páginas, aproximadamente.",
    "Si tienes logo, fotos y textos, o hay que producirlos.",
    "Si ya tienes dominio y hosting, o los buscamos.",
    "La fecha en la que te gustaría tenerlo listo.",
  ],
  faqNote:
    "Si no sabes qué plan elegir, cuéntame qué necesitas y te ayudo a decidir. Sin compromiso.",
  faq: [
    {
      question: "¿Los precios son fijos?",
      answer:
        'Los precios son "desde" y en USD. Cada plan parte de un alcance estándar; si necesitas más, te lo cotizo antes de empezar. Nunca hay costos sorpresa al final.',
    },
    {
      question: "¿Podré administrar la web yo mismo?",
      answer:
        "Sí, en los planes que incluyen panel. La landing no lo incluye; el sitio institucional puede añadirlo por +$120; el catálogo lo incluye desde $350 (esencial) o $400 (completo); la tienda lo incluye, con una capacitación de 1 hora.",
    },
    {
      question: "¿Trabajas solo en Caracas?",
      answer:
        "Estoy en Caracas y trabajo a distancia con negocios de otras ciudades. Todo el proceso se puede hacer por videollamada y mensajes.",
    },
    {
      question: "¿Y si necesito cambios después?",
      answer:
        "Incluyo 2 rondas de ajustes y un mes de acompañamiento. Después puedes contratar mantenimiento ($20 o $40 al mes) o cotizar cambios puntuales.",
    },
  ],
  pricingNote:
    "Precios en USD, válidos por 30 días. Dominio y hosting se pagan aparte y quedan a tu nombre. Cada plan parte de un alcance estándar; si el proyecto necesita más, se cotiza antes de empezar.",
  contact: {
    title: "Hablemos de tu proyecto",
    note: "Cuéntame qué necesitas y te respondo con una propuesta clara. Sin compromiso.",
    emailSubject: "Quiero una web para mi negocio",
    nextSteps: [
      "Me escribes y me cuentas qué necesitas.",
      "Te hago las preguntas necesarias para entender tu negocio.",
      "Te envío una propuesta con alcance, precio y plazo.",
    ],
  },
};