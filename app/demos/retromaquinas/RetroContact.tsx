import { useState } from "react";
import type { FormEvent } from "react";
import { brand, formReasons } from "./content";

type RetroContactProps = {
  reason: string;
  service: string;
  onReasonChange: (value: string) => void;
  onServiceChange: (value: string) => void;
};

export function RetroContact({
  reason,
  service,
  onReasonChange,
  onServiceChange,
}: RetroContactProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  const isSelling = reason === "vender";
  const messagePlaceholder = isSelling
    ? "Cuéntanos el modelo, el estado y los accesorios."
    : reason === "reparar"
      ? "Cuéntanos el modelo, la falla y si enciende."
      : "Cuéntanos qué necesitas.";

  return (
    <section
      id="contacto"
      className="scroll-mt-24 border-b border-[var(--rm-line)] bg-[var(--rm-bg-soft)] py-20 md:py-28"
    >
      <div className="rm-container">
        <div className="max-w-2xl">
          <p className="rm-label text-[var(--rm-accent)]">05 / Contacto</p>
          <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
            Cuéntanos qué tienes.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-[var(--rm-muted)]">
            Si es una reparación, dinos el modelo y la falla. Si quieres
            venderla, cuéntanos el estado. No hace falta que encienda.
          </p>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <form
            onSubmit={handleSubmit}
            className="rm-ticket p-6 md:p-8 lg:order-2"
            aria-label="Formulario de servicio de Retromaquinas"
          >
            <div className="flex items-center justify-between gap-4 border-b border-[var(--rm-line)] pb-4">
              <p className="rm-label text-[var(--rm-accent)]">
                Orden de servicio
              </p>
              <span className="rm-label text-[var(--rm-faint)]">Demo</span>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="rm-name"
                  className="rm-label text-[var(--rm-faint)]"
                >
                  Nombre
                </label>
                <input
                  id="rm-name"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre"
                  className="rm-field mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="rm-contact"
                  className="rm-label text-[var(--rm-faint)]"
                >
                  Correo o WhatsApp
                </label>
                <input
                  id="rm-contact"
                  name="contacto"
                  type="text"
                  required
                  autoComplete="email"
                  placeholder="Para responderte"
                  className="rm-field mt-1"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="rm-reason"
                className="rm-label text-[var(--rm-faint)]"
              >
                ¿Qué necesitas?
              </label>
              <select
                id="rm-reason"
                name="motivo"
                required
                value={reason}
                onChange={(event) => onReasonChange(event.target.value)}
                className="rm-field mt-1"
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {formReasons.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label
                htmlFor="rm-model"
                className="rm-label text-[var(--rm-faint)]"
              >
                Consola / modelo
              </label>
              <input
                id="rm-model"
                name="modelo"
                type="text"
                placeholder="Ej. PlayStation 1, Game Boy Color"
                className="rm-field mt-1"
              />
            </div>

            {!isSelling && (
              <div className="mt-5">
                <label
                  htmlFor="rm-service"
                  className="rm-label text-[var(--rm-faint)]"
                >
                  Servicio de interés
                </label>
                <input
                  id="rm-service"
                  name="servicio"
                  type="text"
                  value={service}
                  onChange={(event) => onServiceChange(event.target.value)}
                  placeholder="Ej. cambio de lector"
                  className="rm-field mt-1"
                />
              </div>
            )}

            <div className="mt-5">
              <label
                htmlFor="rm-message"
                className="rm-label text-[var(--rm-faint)]"
              >
                {isSelling ? "Estado y accesorios" : "Falla o consulta"}
              </label>
              <textarea
                id="rm-message"
                name="mensaje"
                required
                rows={4}
                placeholder={messagePlaceholder}
                className="rm-field-box mt-1 min-h-28 w-full resize-y"
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="rm-btn-primary">
                Enviar orden
              </button>
              <p className="text-xs leading-relaxed text-[var(--rm-faint)]">
                Demo: el formulario no envía datos.
              </p>
            </div>

            {sent && (
              <div
                role="status"
                className="mt-5 border border-[var(--rm-accent)] p-4 text-sm"
              >
                <p className="font-semibold text-[var(--rm-accent)]">
                  Orden registrada.
                </p>
                <p className="mt-1 leading-relaxed text-[var(--rm-muted)]">
                  En la versión final, la orden llegaría por correo o WhatsApp.
                  Esta es una demostración: no se envió nada.
                </p>
              </div>
            )}
          </form>

          <div className="lg:order-1">
            <dl className="space-y-5">
              <div>
                <dt className="rm-label text-[var(--rm-faint)]">Correo</dt>
                <dd className="mt-1">
                  <a href={`mailto:${brand.email}`} className="rm-link text-sm">
                    {brand.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="rm-label text-[var(--rm-faint)]">Instagram</dt>
                <dd className="mt-1">
                  <a
                    href={brand.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rm-link text-sm"
                  >
                    {brand.instagram}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="rm-label text-[var(--rm-faint)]">
                  Dónde estamos
                </dt>
                <dd className="mt-1 text-sm text-[var(--rm-muted)]">
                  {brand.location} · {brand.shipping}
                  <br />
                  {brand.hours}
                </dd>
              </div>
            </dl>

            <p className="mt-8 max-w-sm text-sm leading-relaxed text-[var(--rm-faint)]">
              Respondemos el mismo día hábil. Si la consola necesita un
              repuesto, te damos el plazo antes de recibirla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
