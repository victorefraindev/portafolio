import { projects } from "~/data/site";
import type { Project } from "~/data/site";

function ProjectCard({ project }: { project: Project }) {
  const confidential = project.visibility === "confidencial";
  return (
    <article className="group relative flex flex-col bg-bg p-8 transition-colors duration-300 hover:bg-surface md:p-10">
      <span
        aria-hidden="true"
        className={`absolute right-6 top-6 inline-block h-2 w-2 rotate-45 border transition-opacity duration-300 ${
          confidential
            ? "border-ocean opacity-70 group-hover:opacity-100"
            : "border-nova opacity-40 group-hover:opacity-100"
        }`}
      />
      <h3 className="font-display text-2xl font-medium tracking-tight text-fg">
        {project.title}
      </h3>
      <p className="mt-4 font-mono text-sm text-faint">
        {project.stack.join(", ")}
      </p>
      {project.year && (
        <p className="mt-1 font-mono text-sm text-faint">{project.year}</p>
      )}
      <p className="mt-5 flex-1 leading-relaxed text-muted">
        {project.description}
      </p>

      {project.infra && (
        <div className="mt-6">
          <p className="font-mono text-sm text-faint">Infraestructura</p>
          <p className="mt-2 leading-relaxed text-muted">{project.infra}</p>
        </div>
      )}

      {confidential ? (
        <div className="mt-8">
          <p className="flex items-center gap-2 font-mono text-sm text-faint">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rotate-45 bg-ocean" />
            Trabajo de empresa · confidencial
          </p>
          <p className="mt-3 text-sm text-faint">
            Detalles protegidos por NDA.
          </p>
        </div>
      ) : (
        <div className="mt-8 flex flex-wrap gap-6">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:text-violet hover:decoration-violet"
          >
            Demo
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:text-violet hover:decoration-violet"
          >
            Código
          </a>
        </div>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
        Proyectos
      </h2>
      <p className="mt-5 max-w-prose text-lg text-muted">
        Una selección de trabajos, en orden inverso. Cada uno con su historia y
        sus decisiones. Algunos son de empresa y se muestran sin detalles
        sensibles.
      </p>

      <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}