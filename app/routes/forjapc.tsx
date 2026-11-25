import { Outlet } from "react-router";
import type { Route } from "./+types/forjapc";
import { useTheme } from "~/hooks/useTheme";
import { ForjaHeader } from "~/demos/forjapc/ForjaHeader";
import { ForjaFooter } from "~/demos/forjapc/ForjaFooter";
import "~/demos/forjapc/forjapc.css";

export const links: Route.LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap",
  },
  {
    rel: "icon",
    href: "/forjapc-favicon.svg",
    type: "image/svg+xml",
  },
];

export default function ForjaLayout() {
  const { theme, toggle } = useTheme();

  return (
    <div className="fj-root">
      <ForjaHeader theme={theme} onToggleTheme={toggle} />
      <main>
        <Outlet />
      </main>
      <ForjaFooter />
    </div>
  );
}
