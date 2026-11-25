import { business } from "~/data/site";

export function ServicesDemos() {
  return (
    <section
      id="demos"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-faint">Demos</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          Cuatro sitios para probar antes de cotizar
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Cada plan tiene su demo en funcionamiento: landing, sitio
          institucional, catálogo y panel. Son datos de ejemplo, sin cobros ni
          envíos reales.
        </p>
      </div>

      <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
        {business.demos.map((demo) => (
          <a
            key={demo.name}
            href={demo.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col bg-bg/75 transition-colors duration-300 hover:bg-surface"
          >
            <div className="overflow-hidden border-b border-line bg-bg">
              <img
                src={demo.image.src}
                alt={demo.image.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[2/1] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="flex flex-1 items-start justify-between gap-4 p-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-faint">
                  {demo.kicker}
                </p>
                <p className="mt-2 font-display text-xl font-medium tracking-tight text-fg">
                  {demo.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {demo.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mt-1 font-mono text-sm text-faint transition-colors group-hover:text-violet"
              >
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
