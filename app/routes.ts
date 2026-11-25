import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("servicios", "routes/services.tsx"),
  route("demos/retromaquinas", "routes/retromaquinas.tsx"),
  route("demos/forjapc", "routes/forjapc.tsx", [
    index("routes/forjapc.home.tsx"),
    route("servicios", "routes/forjapc.servicios.tsx"),
    route("nosotros", "routes/forjapc.nosotros.tsx"),
    route("builds", "routes/forjapc.builds.tsx"),
    route("contacto", "routes/forjapc.contacto.tsx"),
  ]),
  route("demos/pulso", "routes/pulso.tsx", [
    index("routes/pulso.home.tsx"),
    route("catalogo", "routes/pulso.catalog.tsx"),
    route("categoria/:slug", "routes/pulso.category.tsx"),
    route("producto/:slug", "routes/pulso.product.tsx"),
    route("buscar", "routes/pulso.search.tsx"),
    route("admin", "routes/pulso.admin.tsx"),
  ]),
] satisfies RouteConfig;
