import type { ReactNode } from "react";

type PageIntroProps = {
  index: string;
  label: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageIntro({
  index,
  label,
  title,
  description,
  aside,
}: PageIntroProps) {
  return (
    <section className="border-b border-[var(--fj-line)]">
      <div className="fj-container grid gap-8 py-14 md:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="fj-label text-[var(--fj-accent)]">
            {index} / {label}
          </p>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.95]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--fj-muted)]">
            {description}
          </p>
        </div>
        {aside && (
          <div className="max-w-xs text-sm leading-relaxed text-[var(--fj-faint)]">
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}
