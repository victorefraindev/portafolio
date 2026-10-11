import type { Config } from "@react-router/dev/config";

export default {
  // SSR activo por defecto
  ssr: true,
  // SSG: prerenderiza la ruta raíz como HTML estático
  prerender: ["/"],
} satisfies Config;