export const profile = {
  name: "Víctor Efraín Armao Medina",
  shortName: "Víctor Armao",
  role: "Desarrollador Fullstack y DevOps",
  availability: "Disponible para nuevos proyectos",
  location: "Caracas, Venezuela",
  email: "victorarmao16@gmail.com",
  github: "https://github.com/victorefraindev",
  avatar: "/profile.png",
  blurb:
    "Desarrollo aplicaciones de punta a punta y las despliego en producción. Me gusta escribir código limpio y mantener la infraestructura estable y observable.",
  about: [
    "Soy desarrollador fullstack con trabajo de la interfaz al servidor: React, SvelteKit y Next.js en el frontend; NestJS, Go y .NET en el backend, con PostgreSQL y MS SQL debajo. Diseño, construyo y despliego aplicaciones web desde cero, y me interesa el ciclo completo: modelado de datos, APIs, pruebas y puesta en producción.",
    "También administro la infraestructura que sostiene lo que construyo: servidores Linux (Ubuntu), contenedores con Docker y monitoreo con Grafana. Creo que un producto no está terminado cuando corre, sino cuando se puede observar y operar con confianza.",
  ],
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  visibility: "publico" | "confidencial" | "privado";
  year?: string;
  infra?: string;
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "scompras — Carga y validación de documentos fiscales",
    description:
      "Sistema desarrollado desde cero para cargar, validar y reportar documentos fiscales: facturas, retenciones de IVA e ISLR. El documento subido pasa por OCR en Power Automate, y luego Python con una IA (ChatGPT) ordena el texto extraído en campos estructurados dentro de la base de datos. Permite crear lotes, contrastar la información extraída contra la imagen del documento y generar reportes con montos, IVA, exento y productos. Desde una API se conecta con el ERP del cliente. Seguridad con JWT, HMAC y bcrypt.",
    stack: ["React", ".NET 10", "MS SQL 2021", "Python", "Power Automate", "OpenAI"],
    infra: "Despliegue en un servidor Ubuntu: base de datos y tablas configuradas, usuario de BD propio, Docker (con Dozzle para el estado de contenedores) y Vault para secretos. Observabilidad completa con Grafana, Prometheus (métricas) y Loki (logs), recolectados por Grafana Alloy. CI/CD con pruebas unitarias, integración por SSH con un usuario de permisos mínimos que solo ejecuta un script definido para montar y actualizar el sistema. Nginx para el frontend.",
    visibility: "confidencial",
    year: "2025 – 2026",
  },
  {
    title: "apprva — Aprobación y rechazo de documentos por flujos",
    description:
      "Web app para la aprobación y rechazo de documentos siguiendo tipos de flujos específicos. Se conecta vía API con scompras: cuando un documento necesita un proveedor en el ERP, extrae la información de la factura y la envía a apprva mediante un flujo de petición de creación de proveedor; también incluye un flujo para verificar si una factura tiene derecho a crédito fiscal. El panel de administrador permite invitar usuarios por Resend, asignar roles por flujo, y al primer inicio de sesión se registra un código QR en un autenticador para usar TOTP. Incluye sección de estadísticas con gráficos de documentos enviados, configuración de webhook para sistemas externos y documentación de la API. Seguridad con API key, HMAC, nonce y JWT.",
    stack: ["React", "NestJS", "PostgreSQL", "Resend", "TOTP", "Webhooks"],
    infra: "Misma infraestructura que el resto de los servicios: servidor Ubuntu, Docker, Vault, y observabilidad con Grafana, Prometheus y Loki vía Grafana Alloy. CI/CD con pruebas unitarias e integración por SSH con usuario de permisos mínimos. Nginx para el frontend.",
    visibility: "confidencial",
    year: "2026",
  },
  {
    title: "Yogures Cremosos — Tienda online de yogures artesanales",
    description:
      "E-commerce de yogures artesanales dividido en tienda para clientes, panel de administración y API. La tienda (Next.js), el panel (SvelteKit) y la API (Go con Gin) sobre Supabase: Auth para el login, Storage para imágenes y Postgres como base de datos. Autenticación JWT verificada contra JWKS, pedidos, productos, tasa BCV automática, rate limiting y headers de seguridad. Contrato OpenAPI documentado.",
    stack: ["Go (Gin)", "Next.js", "SvelteKit", "Supabase", "PostgreSQL"],
    visibility: "publico",
    year: "2025 – 2026",
    repo: "https://github.com/victorefraindev/yogures-backend",
  },
  {
    title: "Sistema de Almacenamiento — Inventario y ventas para bodegas",
    description:
      "App móvil (PWA) para gestionar el inventario y las ventas de bodegas pequeñas, con panel de administración de la plataforma. Mobile-first y offline: las ventas sin conexión se guardan en una cola local y se sincronizan al volver la señal. Multi-tenant por bodega con roles (admin/vendedor), catálogo con fotos, ventas con IVA, tasa BCV automática o manual, reportes y devoluciones que reponen stock. Backend NestJS con Prisma sobre Supabase: Postgres como base, Auth para las sesiones y Storage para las fotos de productos.",
    stack: ["React (Vite)", "NestJS", "Prisma", "Supabase", "PostgreSQL", "PWA"],
    visibility: "privado",
    year: "2025 – 2026",
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
  "¿Un proyecto, una vacante, o solo saludar? Mi bandeja está abierta. Escríbeme y te respondo en un par de días.";