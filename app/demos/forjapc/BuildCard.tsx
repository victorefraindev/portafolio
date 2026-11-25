import { Link } from "react-router";
import type { Build } from "./content";
import { PartArt } from "./PartArt";

export function BuildCard({ build }: { build: Build }) {
  return (
    <article className="fj-card flex flex-col border border-[var(--fj-line)] bg-[var(--fj-surface)]">
      <div className="fj-art-on-dark relative flex h-56 items-center justify-center overflow-hidden bg-[var(--fj-graphite)] p-5">
        <span className="fj-label absolute left-5 top-5 text-[var(--fj-graphite-muted)]">
          Build / {build.id}
        </span>
        <span className="fj-tag absolute right-5 top-5">{build.profile}</span>
        <PartArt
          variant="tower"
          detail={build.towerDetail}
          className="relative h-44 w-auto"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-2xl">{build.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--fj-muted)]">
          {build.tagline}
        </p>

        <dl className="mt-5">
          {build.specs.slice(0, 3).map((spec) => (
            <div key={spec.label} className="fj-spec-row">
              <dt className="fj-mono text-[0.62rem] uppercase tracking-[0.08em] text-[var(--fj-faint)]">
                {spec.label}
              </dt>
              <dd className="text-right text-[0.8rem]">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-[var(--fj-line)] pt-4">
          <p className="fj-display text-2xl">Desde {build.price}</p>
          <Link
            to="/demos/forjapc/builds"
            className="fj-link text-sm font-semibold"
          >
            Ver ficha
          </Link>
        </div>
      </div>
    </article>
  );
}
