import { faqs } from "./content";

export function RetroFaq() {
  return (
    <section
      id="preguntas"
      className="scroll-mt-24 border-b border-[var(--rm-line)] py-20 md:py-28"
    >
      <div className="rm-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="rm-label text-[var(--rm-accent)]">04 / Preguntas</p>
          <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
            Preguntas de taller.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-[var(--rm-muted)]">
            Lo que suelen preguntarnos antes de dejar una consola o venderla.
          </p>
          <a
            href="#contacto"
            className="rm-link mt-6 inline-block text-sm font-semibold"
          >
            Hacer una consulta
          </a>
        </div>

        <div className="border-t border-[var(--rm-line)]">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group border-b border-[var(--rm-line)] py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold leading-snug [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-[var(--rm-muted)] transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--rm-muted)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
