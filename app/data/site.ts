export const profile = {
  name: "Víctor Efraín Armao Medina",
  shortName: "Víctor Armao",
  role: "Desarrollador Fullstack y DevOps",
  availability: "Disponible para nuevos proyectos",
  location: "Caracas, Venezuela",
  email: "victorarmao16@gmail.com",
  github: "https://github.com/tunombre",
  linkedin: "https://www.linkedin.com/in/tunombre",
  blurb:
    "Desarrollo aplicaciones de punta a punta y las despliego en producción. Me gusta escribir código limpio y mantener la infraestructura estable y observable.",
  about: [
    "Soy desarrollador fullstack con trabajo de la interfaz al servidor: React, SvelteKit y Next.js en el frontend; NestJS, Go y .NET en el backend, con PostgreSQL y MS SQL debajo. Diseño, construyo y despliego aplicaciones web desde cero, y me interesa el ciclo completo: modelado de datos, APIs, pruebas y puesta en producción.",
    "También administro la infraestructura que sostiene lo que construyo: servidores Linux (Ubuntu), contenedores con Docker y monitoreo con Grafana. Creo que un producto no está terminado cuando corre, sino cuando se puede observar y operar con confianza.",
  ],
};

export const projects = [
  {
    title: "Nombre del proyecto",
    description:
      "Describe el problema que resuelve y qué lo hace interesante. Una o dos frases con intención.",
    stack: ["React", "NestJS", "PostgreSQL"],
    demo: "https://ejemplo.dev",
    repo: "https://github.com/tunombre/proyecto",
  },
  {
    title: "Otro proyecto",
    description:
      "Qué construiste, para quién, y qué aprendiste. Muestra decisiones, no solo resultados.",
    stack: ["Go", "Docker", "Grafana"],
    demo: "https://ejemplo.dev",
    repo: "https://github.com/tunombre/proyecto",
  },
  {
    title: "Un experimento",
    description:
      "Un proyecto personal o de exploración. Aquí cabe lo raro, lo divertido o lo educativo.",
    stack: ["SvelteKit", "TypeScript", "Vite"],
    demo: "https://ejemplo.dev",
    repo: "https://github.com/tunombre/proyecto",
  },
  {
    title: "Herramienta interna",
    description:
      "Algo que hizo tu día a día (o el de tu equipo) más fácil. Los proyectos utilitarios también cuentan historias.",
    stack: ["Next.js", "MS SQL", "Power BI"],
    demo: "https://ejemplo.dev",
    repo: "https://github.com/tunombre/proyecto",
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
    items: ["PostgreSQL", "MS SQL"],
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