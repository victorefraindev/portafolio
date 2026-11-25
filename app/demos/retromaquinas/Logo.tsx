export function RetroLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          fill="var(--rm-navy)"
          stroke="var(--rm-accent)"
          strokeWidth="1.5"
        />
        <path
          d="M7 23V9h6.5a4.2 4.2 0 0 1 0 8.4H10"
          fill="none"
          stroke="#f4f7fb"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M11.5 17.4 16 23"
          fill="none"
          stroke="#f4f7fb"
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M20 23V9l4 9 4-9v14"
          fill="none"
          stroke="var(--rm-accent)"
          strokeWidth="2"
          strokeLinejoin="miter"
        />
      </svg>
      <span className="rm-display text-base leading-none tracking-[0.02em] sm:text-lg">
        RETROMAQUINAS
      </span>
    </span>
  );
}
