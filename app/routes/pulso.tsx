import { Outlet, useLocation } from "react-router";
import type { Route } from "./+types/pulso";
import { CatalogProvider, OrderProvider } from "~/demos/pulso/store";
import { SiteHeader } from "~/demos/pulso/SiteHeader";
import { SiteFooter } from "~/demos/pulso/SiteFooter";
import { OrderDrawer } from "~/demos/pulso/OrderDrawer";
import { CartBar } from "~/demos/pulso/CartBar";
import "~/demos/pulso/pulso.css";

export const links: Route.LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Oxanium:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700&display=swap",
  },
  {
    rel: "icon",
    href: "/pulso-favicon.svg",
    type: "image/svg+xml",
  },
];

function Storefront() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/demos/pulso/admin");

  if (isAdmin) return <Outlet />;

  return (
    <div className="pl-store min-h-screen">
      <SiteHeader />
      <main className="min-h-[55vh]">
        <Outlet />
      </main>
      <SiteFooter />
      <OrderDrawer />
      <CartBar />
    </div>
  );
}

export default function PulsoLayout() {
  return (
    <CatalogProvider>
      <OrderProvider>
        <Storefront />
      </OrderProvider>
    </CatalogProvider>
  );
}
