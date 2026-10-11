import { experience } from "~/data/site";

export function Experience() {
  return (
    <section id="experiencia" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
        Experiencia
      </h2>

      {/* Línea de tiempo: el contenido sí es una secuencia,
          así que los marcadores numéricos están justificados. */}
      <ol className="mt-14 space-y-0">
        {experience.map((job, i) => (
          <li
            key={job.period}
            className="group relative grid gap-2 border-t border-line py-10 first:border-t-0 md:grid-cols-[120px_1fr] md:gap-10 md:py-12"
          >
            <span className="font-mono text-sm text-faint">
              {"0" + (i + 1)}
            </span>
            <div className="md:pl-10">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl font-medium tracking-tight text-fg">
                  {job.role}
                </h3>
                <span className="text-fg/70">{job.company}</span>
              </div>
              <p className="mt-1 font-mono text-sm text-faint">{job.period}</p>
              <p className="mt-5 max-w-prose leading-relaxed text-muted">
                {job.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}