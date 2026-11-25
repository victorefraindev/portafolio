export function ForjaLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="shrink-0"
      >
        <polygon points="16,2.5 29,9.8 16,17.1 3,9.8" fill="var(--fj-accent)" />
        <polygon points="3,9.8 16,17.1 16,29.5 3,22.2" fill="var(--fj-ink)" />
        <polygon
          points="29,9.8 16,17.1 16,29.5 29,22.2"
          fill="var(--fj-ink)"
          fillOpacity="0.45"
        />
      </svg>
      <span className="fj-display text-lg leading-none tracking-[-0.03em]">
        FORJA
        <span className="fj-mono ml-1.5 align-baseline text-[0.62em] tracking-[0.18em] text-[var(--fj-accent)]">
          PC
        </span>
      </span>
    </span>
  );
}
