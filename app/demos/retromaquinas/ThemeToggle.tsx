type RetroThemeToggleProps = {
  theme: "dark" | "light";
  onToggle: () => void;
  className?: string;
};

export function RetroThemeToggle({
  theme,
  onToggle,
  className = "",
}: RetroThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={
        theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
      }
      className={`flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--rm-line)] text-[var(--rm-muted)] transition-colors hover:border-[var(--rm-accent)] hover:text-[var(--rm-accent)] ${className}`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}
