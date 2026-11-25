import { Link } from "react-router";
import { business } from "~/data/site";

export function ServicesHero() {
  return (
    <section
      id="inicio"
      className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-36"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="flex items-center gap-2 font-mono text-sm text-faint">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rotate-45 bg-nova"
            />
            {business.hero.eyebrow}
          </p>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {business.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {business.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#contacto"
              className="border border-violet px-6 py-3 text-base font-medium text-violet transition-colors hover:bg-violet hover:text-bg"
            >
              {business.hero.primaryCta}
            </a>
            <a
              href="#planes"
              className="group inline-flex items-center gap-2 text-base font-medium text-fg"
            >
              <span className="border-b border-violet pb-0.5 transition-colors group-hover:border-transparent">
                {business.hero.secondaryCta}
              </span>
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rotate-45 bg-nova"
              />
            </a>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-6 sm:flex sm:flex-wrap sm:gap-x-8">
            {business.highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 font-mono text-xs text-faint"
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-1 w-1 rounded-full bg-nova"
                />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 font-mono text-xs text-faint">
            {business.hero.location}
          </p>
          <Link
            to="/"
            className="mt-4 inline-block font-mono text-xs text-faint underline decoration-line underline-offset-4 transition-colors hover:text-violet"
          >
            Ver portafolio técnico
          </Link>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 scale-105 rounded-[2rem] blur-2xl"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 45%, color-mix(in oklab, var(--violet) 22%, transparent) 0%, transparent 75%)",
            }}
          />

          <figure className="relative overflow-hidden rounded-sm border border-line bg-surface p-2">
            <div className="flex items-center gap-1.5 border-b border-line px-2 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-faint/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-faint/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-faint/20" />
              <span className="ml-2 truncate font-mono text-[10px] text-faint">
                ejemplo · tienda online
              </span>
            </div>
            <img
              src="/proyecto-yogurt.webp"
              alt="Ejemplo de tienda online: portada de Yogures Cremosos con un producto destacado y su precio."
              width={1888}
              height={946}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="aspect-[2/1] w-full object-cover object-top"
            />
          </figure>

          <p className="mt-3 text-right font-mono text-xs text-faint">
            Ejemplo: tienda online con panel de administración
          </p>
        </div>
      </div>
    </section>
  );
}
