import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useSearchParams } from "react-router";
import type { Route } from "./+types/forjapc.contacto";
import {
  brand,
  budgetOptions,
  contactReasons,
  faqs,
} from "~/demos/forjapc/content";
import { PageIntro } from "~/demos/forjapc/PageIntro";

export function meta({}: Route.MetaArgs) {
  const title = "Contacto — Forja PC";
  const description =
    "Cuéntanos qué PC necesitas, qué quieres actualizar o qué falla tiene tu equipo. Respondemos el mismo día hábil.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
  ];
}

const beforeWriting = [
  "Para qué la vas a usar: juego, edición, trabajo o estudio.",
  "Resolución y monitor que tienes o piensas comprar.",
  "Presupuesto aproximado para la PC completa o la pieza.",
  "Qué componentes tienes hoy, si vas a reaprovechar algo.",
];

export default function ForjaContacto() {
  const [searchParams] = useSearchParams();
  const buildParam = searchParams.get("build");
  const [reason, setReason] = useState("");
  const [buildInterest, setBuildInterest] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (buildParam) {
      setBuildInterest(buildParam);
      setReason("armar");
    }
  }, [buildParam]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  const messagePlaceholder =
    reason === "armar"
      ? "Cuéntanos el uso, la resolución y el presupuesto."
      : reason === "upgrade"
        ? "Cuéntanos qué PC tienes y qué quieres mejorar."
        : reason === "soporte"
          ? "Cuéntanos qué falla o qué necesitas revisar."
          : "Cuéntanos qué necesitas.";

  return (
    <>
      <PageIntro
        index="05"
        label="Contacto"
        title="Cuéntanos qué necesitas."
        description="No hace falta que sepas de componentes. Dinos para qué usas la PC, cuánto quieres invertir y qué tienes hoy; nosotros armamos la propuesta."
        aside={
          <p>
            {brand.hours}
            <br />
            Respondemos el mismo día hábil.
          </p>
        }
      />

      <section className="border-b border-[var(--fj-line)] py-14 md:py-20">
        <div className="fj-container grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <form
            onSubmit={handleSubmit}
            className="border border-[var(--fj-line)] bg-[var(--fj-surface)] p-6 md:p-8 lg:order-2"
            aria-label="Formulario de contacto de Forja PC"
          >
            <div className="flex items-center justify-between gap-4 border-b border-[var(--fj-line)] pb-4">
              <p className="fj-label text-[var(--fj-accent)]">Nueva consulta</p>
              <span className="fj-label text-[var(--fj-faint)]">Demo</span>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fj-name"
                  className="fj-label text-[var(--fj-faint)]"
                >
                  Nombre
                </label>
                <input
                  id="fj-name"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre"
                  className="fj-field mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="fj-contact"
                  className="fj-label text-[var(--fj-faint)]"
                >
                  Correo o WhatsApp
                </label>
                <input
                  id="fj-contact"
                  name="contacto"
                  type="text"
                  required
                  autoComplete="email"
                  placeholder="Para responderte"
                  className="fj-field mt-1"
                />
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fj-reason"
                  className="fj-label text-[var(--fj-faint)]"
                >
                  ¿Qué necesitas?
                </label>
                <select
                  id="fj-reason"
                  name="motivo"
                  required
                  value={reason}
                  onChange={(event) => setReason(event.target.value)}
                  className="fj-field mt-1"
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  {contactReasons.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="fj-budget"
                  className="fj-label text-[var(--fj-faint)]"
                >
                  Presupuesto aproximado
                </label>
                <select
                  id="fj-budget"
                  name="presupuesto"
                  className="fj-field mt-1"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona un rango
                  </option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="fj-build"
                className="fj-label text-[var(--fj-faint)]"
              >
                Build de interés (opcional)
              </label>
              <input
                id="fj-build"
                name="build"
                type="text"
                value={buildInterest}
                onChange={(event) => setBuildInterest(event.target.value)}
                placeholder="Ej. Forja 1440"
                className="fj-field mt-1"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="fj-message"
                className="fj-label text-[var(--fj-faint)]"
              >
                Cuéntanos un poco más
              </label>
              <textarea
                id="fj-message"
                name="mensaje"
                required
                rows={4}
                placeholder={messagePlaceholder}
                className="fj-field-box mt-1 min-h-28 w-full resize-y"
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="fj-btn-primary">
                Enviar consulta
              </button>
              <p className="text-xs leading-relaxed text-[var(--fj-faint)]">
                Demo: el formulario no envía datos.
              </p>
            </div>

            {sent && (
              <div
                role="status"
                className="mt-5 border border-[var(--fj-accent)] p-4 text-sm"
              >
                <p className="font-semibold text-[var(--fj-accent)]">
                  Consulta registrada.
                </p>
                <p className="mt-1 leading-relaxed text-[var(--fj-muted)]">
                  En la versión final, la consulta llegaría por correo o
                  WhatsApp. Esta es una demostración: no se envió nada.
                </p>
              </div>
            )}
          </form>

          <div className="lg:order-1">
            <p className="fj-label text-[var(--fj-accent)]">
              Antes de escribir
            </p>
            <h2 className="mt-3 text-2xl leading-tight md:text-3xl">
              Con estos datos, la propuesta sale mejor.
            </h2>
            <ul className="mt-6 space-y-3">
              {beforeWriting.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-[var(--fj-line)] pb-3 text-sm leading-relaxed text-[var(--fj-muted)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-[var(--fj-accent)]"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <dl className="mt-8 space-y-5">
              <div>
                <dt className="fj-label text-[var(--fj-faint)]">Correo</dt>
                <dd className="mt-1">
                  <a href={`mailto:${brand.email}`} className="fj-link text-sm">
                    {brand.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="fj-label text-[var(--fj-faint)]">Instagram</dt>
                <dd className="mt-1">
                  <a
                    href={brand.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="fj-link text-sm"
                  >
                    {brand.instagram}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="fj-label text-[var(--fj-faint)]">
                  Dónde estamos
                </dt>
                <dd className="mt-1 text-sm text-[var(--fj-muted)]">
                  {brand.location} · {brand.shipping}
                  <br />
                  {brand.hours}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="fj-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="fj-label text-[var(--fj-accent)]">Preguntas</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
              Antes de dejar tu PC.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--fj-muted)]">
              Lo que más nos preguntan sobre armado, garantía y componentes.
            </p>
          </div>

          <div className="border-t border-[var(--fj-line)]">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group border-b border-[var(--fj-line)] py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold leading-snug [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="text-xl leading-none text-[var(--fj-faint)] transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--fj-muted)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
