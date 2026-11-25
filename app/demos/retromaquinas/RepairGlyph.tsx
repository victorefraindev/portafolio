import type { RepairGlyphName } from "./content";

export function RepairGlyph({
  name,
  className = "",
}: {
  name: RepairGlyphName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {name === "diagnostic" && (
        <>
          <circle cx="14" cy="14" r="7" />
          <path d="m19 19 7 7" />
          <rect x="10.5" y="10.5" width="7" height="7" />
        </>
      )}
      {name === "lens" && (
        <>
          <circle cx="16" cy="16" r="10" />
          <circle cx="16" cy="16" r="3" />
          <path d="M16 6v3M16 23v3M6 16h3M23 16h3" />
        </>
      )}
      {name === "power" && (
        <path d="M18 4 8 18h6l-1 10 11-15h-7l1-9Z" />
      )}
      {name === "hdmi" && (
        <>
          <path d="M4 12h24l-3 8H7l-3-8Z" />
          <path d="M10 16h2M15 16h2M20 16h2" />
        </>
      )}
      {name === "battery" && (
        <>
          <rect x="4" y="10" width="21" height="12" rx="2" />
          <path d="M25 14v4M11 16h5M13.5 13.5v5" />
        </>
      )}
      {name === "chip" && (
        <>
          <rect x="9" y="9" width="14" height="14" rx="1" />
          <path d="M13 9V5M19 9V5M13 27v-4M19 27v-4M9 13H5M9 19H5M27 13h-4M27 19h-4" />
        </>
      )}
    </svg>
  );
}
