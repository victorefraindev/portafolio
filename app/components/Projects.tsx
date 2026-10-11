import { projects } from "~/data/site";

export function Projects() {
  return (
    <section id="proyectos" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
        Proyectos
      </h2>
      <p className="mt-5 max-w-prose text-lg text-muted">
        Una selección de trabajos, en orden inverso. Cada uno con su historia y
        sus decisiones.
      </p>

      <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative flex flex-col bg-bg p-8 transition-colors duration-300 hover:bg-surface md:p-10"
          >
            <span
              aria-hidden="true"
              className="absolute right-6 top-6 inline-block h-2 w-2 rotate-45 border border-nova opacity-40 transition-opacity duration-300 group-hover:opacity-100"
            />
            <h3 className="font-display text-2xl font-medium tracking-tight text-fg">
              {p.title}
            </h3>
            <p className="mt-4 font-mono text-sm text-faint">
              {p.stack.join(", ")}
            </p>
            <p className="mt-5 flex-1 leading-relaxed text-muted">
              {p.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:text-nova hover:decoration-nova"
              >
                Demo
              </a>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:text-nova hover:decoration-nova"
              >
                Código
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}