import { Link } from "react-router";
import type { Route } from "./+types/forjapc.servicios";
import { processSteps, services } from "~/demos/forjapc/content";
import { PageIntro } from "~/demos/forjapc/PageIntro";

export function meta({}: Route.MetaArgs) {
  const title = "Servicios — Forja PC";
  const description =
    "Armado a medida, upgrades y diagnóstico de PCs. Mano de obra desde, componentes aparte, pruebas antes de entregar.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
}

const beforeBuild = [
  "Compatibilidad de CPU, placa y memoria",
  "Consumo y calidad de la fuente",
  "Espacio, airflow y ruido",
  "Presupuesto y margen de upgrade",
];

const beforeDelivery = [
  "Montaje, cableado y orden interno",
  "BIOS, drivers y configuración base",
  "Stress test de CPU y GPU",
  "Temperaturas y estabilidad",
];

export default function ForjaServicios() {
  return (
    <>
      <PageIntro
        index="02"
        label="Servicios"
        title="Armado, upgrade y diagnóstico."
        description="Desde una PC completa hasta el cambio de una sola pieza. Elegimos componentes compatibles, probamos el equipo y te explicamos qué estás pagando."
        aside={
          <p>
            Mano de obra desde. Los componentes se cotizan aparte según
            disponibilidad.
          </p>
        }
      />

      <section className="border-b border-[var(--fj-line)] py-14 md:py-20">
        <div className="fj-container">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.name}
                className="flex flex-col border-t-2 border-[var(--fj-ink)] pt-5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="fj-label text-[var(--fj-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="fj-display text-2xl">Desde {service.price}</p>
                </div>
                <h2 className="mt-4 text-2xl leading-tight md:text-3xl">
                  {service.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fj-muted)]">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-[var(--fj-line)] pt-4">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--fj-muted)]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-[var(--fj-accent)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/demos/forjapc/contacto"
                  className="fj-link mt-6 inline-block text-sm font-semibold"
                >
                  Consultar este servicio
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--fj-line)] py-14 md:py-20">
        <div className="fj-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="fj-label text-[var(--fj-accent)]">Proceso</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
              Cómo trabajamos.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--fj-muted)]">
              Sin listas de componentes interminables ni sorpresas al final.
              Apruebas la propuesta antes de comprar.
            </p>
          </div>

          <ol className="grid gap-px border border-[var(--fj-line)] bg-[var(--fj-line)] sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="bg-[var(--fj-surface)] p-6 md:p-7"
              >
                <span className="fj-label text-[var(--fj-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl leading-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fj-muted)]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-[var(--fj-line)] py-14 md:py-20">
        <div className="fj-container grid gap-10 md:grid-cols-2">
          <div>
            <p className="fj-label text-[var(--fj-accent)]">Antes de armar</p>
            <h2 className="mt-3 text-2xl leading-tight md:text-3xl">
              Revisamos que todo encaje.
            </h2>
            <ul className="mt-6 space-y-3">
              {beforeBuild.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-[var(--fj-line)] pb-3 text-sm text-[var(--fj-muted)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-block h-2 w-2 shrink-0 border border-[var(--fj-accent)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="fj-label text-[var(--fj-accent)]">
              Antes de entregar
            </p>
            <h2 className="mt-3 text-2xl leading-tight md:text-3xl">
              Probamos que todo rinda.
            </h2>
            <ul className="mt-6 space-y-3">
              {beforeDelivery.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-[var(--fj-line)] pb-3 text-sm text-[var(--fj-muted)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-block h-2 w-2 shrink-0 bg-[var(--fj-accent)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="fj-container flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <p className="fj-label text-[var(--fj-accent)]">Siguiente paso</p>
            <h2 className="mt-2 max-w-2xl text-3xl leading-tight md:text-4xl">
              Cuéntanos qué uso le vas a dar y armamos la propuesta.
            </h2>
          </div>
          <Link
            to="/demos/forjapc/contacto"
            className="fj-btn-primary shrink-0"
          >
            Pedir propuesta
          </Link>
        </div>
      </section>
    </>
  );
}
