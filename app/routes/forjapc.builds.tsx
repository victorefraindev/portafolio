import { Link } from "react-router";
import type { Route } from "./+types/forjapc.builds";
import { builds } from "~/demos/forjapc/content";
import { PageIntro } from "~/demos/forjapc/PageIntro";
import { PartArt } from "~/demos/forjapc/PartArt";

export function meta({}: Route.MetaArgs) {
  const title = "Builds — Forja PC";
  const description =
    "Tres builds de referencia: gaming 1440p, edición/3D y oficina. Fichas técnicas, precios desde y opciones de personalización.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
}

export default function ForjaBuilds() {
  return (
    <>
      <PageIntro
        index="04"
        label="Builds"
        title="Tres formas de armar una PC."
        description="Puntos de partida, no recetas cerradas. Ajustamos componentes según tu uso, tu presupuesto y lo que ya tengas."
        aside={
          <p>
            Precios de referencia con armado incluido. Se ajustan según
            disponibilidad de componentes.
          </p>
        }
      />

      <section className="py-14 md:py-20">
        <div className="fj-container space-y-14 md:space-y-20">
          {builds.map((build, index) => {
            const alternate = index % 2 === 1;

            return (
              <article
                key={build.id}
                className="grid gap-8 border-t border-[var(--fj-line)] pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12"
              >
                <div
                  className={`fj-art-on-dark fj-on-dark bg-[var(--fj-graphite)] p-6 text-[var(--fj-graphite-ink)] ${
                    alternate ? "lg:order-2" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <span className="fj-label text-[var(--fj-graphite-muted)]">
                      Build / {build.id}
                    </span>
                    <span className="fj-tag">{build.profile}</span>
                  </div>
                  <div className="flex items-center justify-center py-4">
                    <PartArt
                      variant="tower"
                      detail={build.towerDetail}
                      className="h-56 w-auto md:h-64"
                    />
                  </div>
                  <p className="fj-label border-t border-white/10 pt-4 text-[var(--fj-graphite-muted)]">
                    {build.idealFor}
                  </p>
                </div>

                <div className={alternate ? "lg:order-1" : ""}>
                  <p className="fj-label text-[var(--fj-accent)]">
                    {build.profile}
                  </p>
                  <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
                    {build.name}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[var(--fj-muted)]">
                    {build.description}
                  </p>

                  <dl className="mt-6 border-t border-[var(--fj-line)]">
                    {build.specs.map((spec) => (
                      <div key={spec.label} className="fj-spec-row">
                        <dt className="fj-label text-[var(--fj-faint)]">
                          {spec.label}
                        </dt>
                        <dd className="text-right">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="fj-display text-2xl">
                      Desde {build.price}
                    </p>
                    <Link
                      to={`/demos/forjapc/contacto?build=${encodeURIComponent(build.name)}`}
                      className="fj-btn-primary text-sm"
                    >
                      Quiero algo así
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-[var(--fj-line)]">
        <div className="fj-container flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <p className="fj-label text-[var(--fj-accent)]">A medida</p>
            <h2 className="mt-2 max-w-2xl text-3xl leading-tight md:text-4xl">
              Si ninguna encaja, armamos una desde cero.
            </h2>
          </div>
          <Link
            to="/demos/forjapc/contacto"
            className="fj-btn-primary shrink-0"
          >
            Cuéntanos tu caso
          </Link>
        </div>
      </section>
    </>
  );
}
