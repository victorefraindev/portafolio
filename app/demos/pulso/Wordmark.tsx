export function PulsoWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`pl-display inline-flex items-baseline gap-1.5 leading-none ${className}`}
      aria-hidden="true"
    >
      <span className="bg-gradient-to-b from-[var(--pl-flame)] via-[#14b8a6] to-[var(--pl-ember)] bg-clip-text text-transparent">
        Pulso
      </span>
      <span className="text-[0.48em] font-sans font-semibold tracking-[0.18em] opacity-60">
        GAMER
      </span>
    </span>
  );
}
