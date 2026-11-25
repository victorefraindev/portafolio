import { Link } from "react-router";
import type { Route } from "./+types/forjapc.nosotros";
import { brand, team, values } from "~/demos/forjapc/content";
import { PageIntro } from "~/demos/forjapc/PageIntro";

export function meta({}: Route.MetaArgs) {
  const title = "Nosotros — Forja PC";
  const description =
    "Forja PC arma PCs con criterio técnico: componentes compatibles, pruebas reales y garantía de 12 meses. Conoce cómo trabajamos.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
}

export default function ForjaNosotros() {
  return (
    <>
      <PageIntro
        index="03"
        label="Nosotros"
        title="Criterio antes que catálogo."
        description="No armamos la PC más llamativa ni la más cara. Armamos la que tiene sentido para lo que haces, con componentes que puedes mantener."
        aside={<p>{brand.location} / {brand.shipping}</p>}
      />

      <section className="border-b border-[var(--fj-line)] py-14 md:py-20">
        <div className="fj-container grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="fj-label text-[var(--fj-accent)]">La idea</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
              Una PC no se elige por luces.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--fj-muted)]">
              <p>
                Forja PC nació de una idea simple: una PC se elige por lo que
                necesitas, lo que es compatible y lo que puedes mantener. El
                resto es decoración.
              </p>
              <p>
                Armamos equipos para juego, edición, diseño y trabajo. Probamos
                cada build antes de entregarla y explicamos cada decisión para
                que sepas qué estás pagando y qué puedes actualizar después.
              </p>
            </div>
          </div>

          <aside className="bg-[var(--fj-graphite)] p-7 text-[var(--fj-graphite-ink)] md:p-9">
            <p className="fj-label text-[var(--fj-accent)]">Nuestro filtro</p>
            <p className="fj-display mt-4 text-2xl leading-tight md:text-3xl">
              Elegimos componentes como si fueran para nuestra propia PC.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--fj-graphite-muted)]">
              Si una pieza no aporta, no entra. Si hay una alternativa más
              barata que rinde igual, te la decimos.
            </p>
            <p className="fj-label mt-6 text-[var(--fj-graphite-muted)]">
              12 meses de garantía / soporte real
            </p>
          </aside>
        </div>
      </section>

      <section className="border-b border-[var(--fj-line)] py-14 md:py-20">
        <div className="fj-container">
          <p className="fj-label text-[var(--fj-accent)]">Lo que no negociamos</p>
          <h2 className="mt-3 max-w-2xl text-3xl leading-tight md:text-4xl">
            Tres cosas que siempre están.
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="border-t-2 border-[var(--fj-ink)] pt-5"
              >
                <span className="fj-label text-[var(--fj-accent)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl leading-tight">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fj-muted)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--fj-line)] py-14 md:py-20">
        <div className="fj-container">
          <p className="fj-label text-[var(--fj-accent)]">El equipo</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
            Quién arma y quién responde.
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.role}
                className="flex items-start gap-4 border border-[var(--fj-line)] bg-[var(--fj-surface)] p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[var(--fj-accent)] text-sm font-bold text-white">
                  {member.initials}
                </span>
                <div>
                  <h3 className="text-lg leading-tight">{member.role}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--fj-muted)]">
                    {member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-4 text-xs text-[var(--fj-faint)]">
            Equipo de demostración. Los nombres y roles se pueden personalizar.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--fj-line)] py-14 md:py-20">
        <div className="fj-container grid gap-8 sm:grid-cols-3">
          <div>
            <p className="fj-label text-[var(--fj-accent)]">Dónde estamos</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--fj-muted)]">
              {brand.location}
              <br />
              {brand.shipping}
            </p>
          </div>
          <div>
            <p className="fj-label text-[var(--fj-accent)]">Horario</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--fj-muted)]">
              {brand.hours}
              <br />
              Respondemos el mismo día hábil.
            </p>
          </div>
          <div>
            <p className="fj-label text-[var(--fj-accent)]">Garantía</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--fj-muted)]">
              12 meses sobre el armado.
              <br />
              Componentes con garantía del fabricante.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="fj-container flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <p className="fj-label text-[var(--fj-accent)]">Siguiente paso</p>
            <h2 className="mt-2 max-w-2xl text-3xl leading-tight md:text-4xl">
              Si tienes claro el uso, nosotros ponemos el criterio.
            </h2>
          </div>
          <Link
            to="/demos/forjapc/contacto"
            className="fj-btn-primary shrink-0"
          >
            Hablemos
          </Link>
        </div>
      </section>
    </>
  );
}
