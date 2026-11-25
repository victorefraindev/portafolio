import { business } from "~/data/site";

export function ServicesFaq() {
  return (
    <section
      id="preguntas"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
    >
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <p className="font-mono text-sm text-faint">Preguntas frecuentes</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
            Antes de escribirme
          </h2>
          <p className="mt-5 leading-relaxed text-muted">{business.faqNote}</p>
          <a
            href="#contacto"
            className="mt-6 inline-block font-mono text-sm text-violet underline decoration-violet/40 underline-offset-4 transition-colors hover:text-fg"
          >
            Hablemos de tu proyecto
          </a>
        </div>

        <div className="border-t border-line">
          {business.faq.map((item) => (
            <details key={item.question} className="group border-b border-line py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg text-fg [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-faint transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-prose leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
