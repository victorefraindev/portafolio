import { business } from "~/data/site";

export function ServicesProcess() {
  return (
    <section
      id="proceso"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-faint">Proceso</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          Cómo trabajo
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Sin enredos: sabes qué va a pasar, cuánto cuesta y cuándo se publica.
        </p>
      </div>

      <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
        {business.process.map((step, index) => (
          <li key={step.title} className="border-t border-line pt-6">
            <span className="font-mono text-sm text-faint">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-fg">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
