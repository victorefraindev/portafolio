import { Link } from "react-router";
import type { Route } from "./+types/forjapc.home";
import { builds, categories, services, stats } from "~/demos/forjapc/content";
import { BuildCard } from "~/demos/forjapc/BuildCard";
import { PartArt } from "~/demos/forjapc/PartArt";

export function meta({}: Route.MetaArgs) {
  const title = "Forja PC — Componentes y PCs armadas con criterio";
  const description =
    "Componentes elegidos por compatibilidad y rendimiento. Armamos tu PC, la probamos y te explicamos cada decisión. Caracas y envíos a todo el país.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
}

export default function ForjaHome() {
  const heroBuild = builds[0];

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--fj-line)]">
        <div aria-hidden="true" className="fj-hero-glow" />

        <div className="fj-container relative">
          <div className="flex flex-col gap-2 border-b border-[var(--fj-line)] py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="fj-label text-[var(--fj-accent)]">
              Componentes / armado / soporte
            </p>
            <p className="fj-label text-[var(--fj-faint)]">
              Caracas · envíos a todo el país
            </p>
          </div>

          <div className="mx-auto max-w-3xl py-14 text-center md:py-20">
            <h1 className="text-[clamp(2.8rem,7.2vw,5.8rem)] leading-[0.9]">
              Hardware que rinde.
              <span className="block text-[var(--fj-accent)]">Sin humo.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--fj-muted)]">
              Elegimos componentes por compatibilidad, rendimiento y garantía.
              Armamos tu PC, la probamos y te explicamos qué estás pagando.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/demos/forjapc/contacto" className="fj-btn-primary">
                Armar mi PC
              </Link>
              <Link to="/demos/forjapc/builds" className="fj-btn-secondary">
                Ver builds
              </Link>
            </div>
          </div>
        </div>

        <div className="fj-art-on-dark fj-on-dark border-y border-white/10 bg-[var(--fj-graphite)] text-[var(--fj-graphite-ink)]">
          <div className="fj-container grid gap-6 py-7 lg:grid-cols-[minmax(0,15rem)_1fr_auto] lg:items-center lg:gap-10">
            <div className="flex items-center gap-4">
              <PartArt
                variant="tower"
                detail={heroBuild.towerDetail}
                className="h-28 w-auto shrink-0"
              />
              <div className="min-w-0">
                <p className="fj-label text-[var(--fj-graphite-muted)]">
                  Build / 001
                </p>
                <p className="fj-display mt-1 text-2xl leading-none">
                  {heroBuild.name}
                </p>
                <span className="fj-tag mt-2">{heroBuild.profile}</span>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {heroBuild.specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="fj-label text-[var(--fj-graphite-muted)]">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 text-sm">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-4 lg:flex-col lg:items-end lg:border-0 lg:pt-0">
              <p className="fj-display text-2xl">Desde {heroBuild.price}</p>
              <Link
                to="/demos/forjapc/builds"
                className="fj-btn-dark text-sm"
              >
                Ver ficha
              </Link>
            </div>
          </div>
        </div>

        <div className="fj-container flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3">
          {[
            "12 meses de garantía",
            "Componentes verificados",
            "Asesoría 1:1",
          ].map((item) => (
            <span
              key={item}
              className="fj-label flex items-center gap-2 text-[var(--fj-faint)]"
            >
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 bg-[var(--fj-accent)]"
              />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="border-b border-[var(--fj-line)] py-14 md:py-20">
        <div className="fj-container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="fj-label text-[var(--fj-accent)]">Componentes</p>
              <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
                Lo que entra en una build.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--fj-muted)]">
              Trabajamos con componentes de distintas gamas. La elección depende
              del uso, el presupuesto y lo que ya tengas.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 border-t border-[var(--fj-line)] sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <li
                key={category.name}
                className="border-b border-[var(--fj-line)] py-5 lg:border-b-0"
              >
                <PartArt
                  variant={category.part}
                  className="h-14 w-20"
                />
                <p className="mt-3 font-semibold">{category.name}</p>
                <p className="mt-1 text-xs text-[var(--fj-faint)]">
                  {category.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-[var(--fj-line)] py-14 md:py-20">
        <div className="fj-container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="fj-label text-[var(--fj-accent)]">Builds</p>
              <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
                Tres puntos de partida.
              </h2>
            </div>
            <Link
              to="/demos/forjapc/builds"
              className="fj-link text-sm font-semibold"
            >
              Ver todas las fichas
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {builds.map((build) => (
              <BuildCard key={build.id} build={build} />
            ))}
          </div>

          <p className="mt-4 text-xs text-[var(--fj-faint)]">
            Precios de referencia con armado incluido. Se ajustan según
            disponibilidad y componentes.
          </p>
        </div>
      </section>

      <section className="bg-[var(--fj-graphite)] py-14 text-[var(--fj-graphite-ink)] md:py-20">
        <div className="fj-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="fj-label text-[var(--fj-accent)]">Servicios</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
              Armado, upgrade y diagnóstico.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--fj-graphite-muted)]">
              Mano de obra desde; los componentes se cotizan aparte según lo que
              necesites.
            </p>
            <Link
              to="/demos/forjapc/servicios"
              className="fj-btn-dark mt-6 text-sm"
            >
              Ver servicios
            </Link>
          </div>

          <div className="border-t border-white/10">
            {services.map((service, index) => (
              <Link
                key={service.name}
                to="/demos/forjapc/servicios"
                className="grid gap-3 border-b border-white/10 py-5 transition-colors hover:bg-white/5 sm:grid-cols-[2rem_1fr_auto] sm:items-baseline"
              >
                <span className="fj-label text-[var(--fj-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl">{service.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--fj-graphite-muted)]">
                    {service.description}
                  </p>
                </div>
                <p className="fj-display text-xl">Desde {service.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--fj-line)] py-14 md:py-20">
        <div className="fj-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="fj-label text-[var(--fj-accent)]">Por qué Forja</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
              Menos ruido, mejores decisiones.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--fj-muted)]">
              No vendemos la build más cara ni la más llamativa. Vendemos la que
              tiene sentido para tu uso, con margen para crecer.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t-2 border-[var(--fj-ink)] pt-4"
              >
                <p className="fj-display text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-[var(--fj-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="fj-container flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <p className="fj-label text-[var(--fj-accent)]">Siguiente paso</p>
            <h2 className="mt-2 max-w-2xl text-3xl leading-tight md:text-4xl">
              Cuéntanos qué necesitas. Te proponemos una build.
            </h2>
          </div>
          <Link
            to="/demos/forjapc/contacto"
            className="fj-btn-primary shrink-0"
          >
            Hablar con Forja
          </Link>
        </div>
      </section>
    </>
  );
}
