import { business } from "~/data/site";

export function ServicesConditions() {
  return (
    <section
      id="condiciones"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-faint">Condiciones</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          Todo claro desde el principio
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Pagos, tiempos, contenido y propiedad. Sin letra pequeña.
        </p>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <dl className="border-t border-line">
          {business.conditions.map((condition) => (
            <div
              key={condition.label}
              className="grid gap-2 border-b border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
            >
              <dt className="font-mono text-sm text-faint">{condition.label}</dt>
              <dd className="text-sm leading-relaxed text-muted">
                {condition.value}
              </dd>
            </div>
          ))}
        </dl>

        <div>
          <p className="font-mono text-sm text-faint">Para cotizar necesito</p>
          <ol className="mt-5 space-y-4">
            {business.quoteChecklist.map((item, index) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-muted"
              >
                <span className="font-mono text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <a
            href="#contacto"
            className="mt-8 inline-flex items-center justify-center border border-violet px-5 py-2.5 text-sm font-medium text-violet transition-colors hover:bg-violet hover:text-bg"
          >
            Cuéntame tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
