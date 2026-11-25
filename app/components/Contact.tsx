import { useState } from "react";
import { business, contactNote, profile } from "~/data/site";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

type ContactVariant = "personal" | "business";

type Channel = {
  label: string;
  href: string;
  value: string;
  download?: boolean;
};

const personalChannels: Channel[] = [
  {
    label: "Currículum",
    href: "/curriculum.pdf",
    value: "Descargar CV (PDF)",
    download: true,
  },
  {
    label: "GitHub",
    href: profile.github,
    value: profile.github.replace("https://", ""),
  },
  {
    label: "Correo",
    href: `mailto:${profile.email}`,
    value: profile.email,
  },
];

const businessChannels: Channel[] = [
  {
    label: "Correo",
    href: `mailto:${profile.email}?subject=${encodeURIComponent(business.contact.emailSubject)}`,
    value: profile.email,
  },
];

const SECTION_CLASS =
  "relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32";

type Status = "idle" | "sending" | "success" | "error";

export function Contact({
  variant = "personal",
}: {
  variant?: ContactVariant;
}) {
  const isBusiness = variant === "business";
  const channels = isBusiness ? businessChannels : personalChannels;
  const title = isBusiness ? business.contact.title : "Contacto";
  const note = isBusiness ? business.contact.note : contactNote;
  const [status, setStatus] = useState<Status>("idle");

  if (!FORMSPREE_ID) {
    // Sin configuración: mostramos solo los canales, sin formulario.
    return (
      <section id="contacto" className={SECTION_CLASS}>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          {title}
        </h2>
        <p className="mt-5 max-w-prose text-lg text-muted">{note}</p>
        <div className="mt-12 max-w-2xl">
          <Channels channels={channels} />
        </div>
      </section>
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className={SECTION_CLASS}>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
        {title}
      </h2>
      <p className="mt-5 max-w-prose text-lg text-muted">{note}</p>

      <div className="mt-14 grid items-start gap-12 md:grid-cols-2 md:gap-16">
        {/* Columna izquierda: formulario */}
        <div>
          <h3 className="font-display text-lg font-medium tracking-tight text-fg">
            {isBusiness ? "Cuéntame de tu proyecto" : "Envíame un mensaje"}
          </h3>

          <form
            onSubmit={handleSubmit}
            className="mt-6 border border-line bg-surface p-8"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="font-mono text-sm text-faint">
                  Nombre
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full border-b border-line bg-transparent px-0 py-2 text-fg placeholder-faint outline-none transition-colors focus:border-violet"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="font-mono text-sm text-faint">
                  Correo
                </label>
                <input
                  id="contact-email"
                  name="_replyto"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full border-b border-line bg-transparent px-0 py-2 text-fg placeholder-faint outline-none transition-colors focus:border-violet"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>

              {isBusiness && (
                <div>
                  <label htmlFor="contact-type" className="font-mono text-sm text-faint">
                    ¿Qué necesitas?
                  </label>
                  <select
                    id="contact-type"
                    name="tipo"
                    required
                    defaultValue=""
                    className="mt-2 w-full border-b border-line bg-transparent px-0 py-2 text-fg outline-none transition-colors focus:border-violet"
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option>Landing page</option>
                    <option>Sitio institucional</option>
                    <option>Catálogo con panel</option>
                    <option>Tienda online con pagos</option>
                    <option>Mantenimiento</option>
                    <option>No estoy seguro</option>
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="contact-message" className="font-mono text-sm text-faint">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full resize-y border border-line bg-transparent px-3 py-2 text-fg placeholder-faint outline-none transition-colors focus:border-violet"
                  placeholder={
                    isBusiness
                      ? "Cuéntame qué vende tu negocio y qué necesitas…"
                      : "Cuéntame de tu proyecto o propuesta…"
                  }
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="border border-violet px-6 py-3 text-base font-medium text-violet transition-colors hover:bg-violet hover:text-bg disabled:opacity-50"
              >
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
              </button>

              {status === "success" && (
                <p className="text-sm text-fg" role="status">
                  {isBusiness
                    ? "✓ Mensaje enviado. Te respondo con una propuesta."
                    : "✓ Mensaje enviado. Te respondo en un par de días."}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-danger" role="alert">
                  No se pudo enviar. Inténtalo de nuevo o escríbeme por correo.
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Columna derecha: canales */}
        <div>
          <h3 className="font-display text-lg font-medium tracking-tight text-fg">
            {isBusiness ? "Escríbeme directo" : "Canales directos"}
          </h3>
          <Channels channels={channels} />

          {isBusiness && (
            <div className="mt-10 border-t border-line pt-6">
              <p className="font-mono text-sm text-faint">Qué pasa después</p>
              <ol className="mt-4 space-y-3">
                {business.contact.nextSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="font-mono text-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Channels({ channels }: { channels: Channel[] }) {
  return (
    <ul className="mt-6">
      {channels.map((c) => (
        <li key={c.label} className="border-t border-line first:border-t-0">
          <a
            href={c.href}
            download={c.download ? "" : undefined}
            target={c.href.startsWith("mailto:") || c.download ? undefined : "_blank"}
            rel={c.href.startsWith("mailto:") || c.download ? undefined : "noreferrer"}
            className="group flex flex-col gap-1 py-5 transition-colors"
          >
            <span className="font-mono text-sm text-faint">{c.label}</span>
            <span className="text-lg text-fg underline decoration-line underline-offset-4 transition-colors group-hover:text-violet group-hover:decoration-violet">
              {c.value}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
