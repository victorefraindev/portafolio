import { profile } from "~/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mx-auto max-w-6xl px-6 pb-10 pt-4 md:px-10">
      <div className="flex flex-col gap-2 border-t border-line py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-faint">
          © {year} {profile.name}
        </p>
        <p className="font-mono text-xs text-faint">
          Hecho con React Router, Vite y Tailwind
        </p>
      </div>
    </footer>
  );
}