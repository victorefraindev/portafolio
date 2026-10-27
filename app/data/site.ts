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
        src: "/proyecto-yogurt.png",
        alt: "Tienda de Yogures Cremosos: portada con el yogur destacado y el precio.",
      },
      {
        src: "/yogures-frontend.admin.png",
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
        src: "/sistema-inventario-desktop.png",
        alt: "Panel de inventario en escritorio: ventas del día, tasa vigente, stock bajo y últimos movimientos.",
      },
      {
        src: "/sistema-inventario-phone.png",
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