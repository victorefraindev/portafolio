import { projects } from "~/data/site";
import type { Project } from "~/data/site";
import { Pleiades } from "~/components/Pleiades";

function projectFlags(project: Project) {
  const confidential = project.visibility === "confidencial";
  const privado = project.visibility === "privado";

  return {
    confidential,
    privado,
    hasLinks: !confidential && !privado,
    diamondColor: confidential
      ? "border-ocean opacity-70 group-hover:opacity-100"
      : privado
        ? "border-violet opacity-70 group-hover:opacity-100"
        : "border-nova opacity-40 group-hover:opacity-100",
  };
}

function ProjectStatus({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const { confidential, privado } = projectFlags(project);

  if (!confidential && !privado) return null;

  return (
    <div className={className}>
      {confidential && (
        <>
          <p className="flex items-center gap-2 font-mono text-sm text-faint">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rotate-45 bg-ocean"
            />
            Trabajo de empresa · confidencial
          </p>
          <p className="mt-3 text-sm text-faint">
            Detalles internos bajo solicitud.
          </p>
        </>
      )}

      {privado && (
        <>
          <p className="flex items-center gap-2 font-mono text-sm text-faint">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rotate-45 bg-violet"
            />
            Proyecto personal
          </p>
          <p className="mt-3 text-sm text-faint">
            Código en repositorio privado.
          </p>
        </>
      )}
    </div>
  );
}

function ProjectLinks({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const { hasLinks } = projectFlags(project);

  if (!hasLinks || (!project.demo && !project.admin && !project.repo)) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-6 ${className}`}>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:text-violet hover:decoration-violet"
        >
          Demo
        </a>
      )}
      {project.admin && (
        <a
          href={project.admin}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:text-violet hover:decoration-violet"
        >
          Admin
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:text-violet hover:decoration-violet"
        >
          Código
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { diamondColor } = projectFlags(project);

  return (
    <article className="group relative flex flex-col bg-bg/75 p-8 backdrop-blur-md transition-colors duration-300 hover:bg-surface md:p-10">
      <span
        aria-hidden="true"
        className={`absolute right-6 top-6 inline-block h-2 w-2 rotate-45 border transition-opacity duration-300 ${diamondColor}`}
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

      <ProjectStatus project={project} className="mt-8" />
      <ProjectLinks project={project} className="mt-8" />
    </article>
  );
}

function ProjectGallery({ project }: { project: Project }) {
  if (!project.images || project.images.length === 0) return null;

  return (
    <div className="mt-16 border-t border-line pt-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-sm text-faint">Capturas del proyecto</p>
          <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-fg md:text-3xl">
            {project.title}
          </h3>
        </div>
        <ProjectLinks project={project} />
      </div>

      {project.images.some((image) => image.portrait) ? (
        <div className="mt-6 grid grid-cols-1 gap-px border border-line bg-line sm:h-[340px] sm:grid-cols-[2fr_1fr] lg:h-[420px]">
          {project.images.map((image) => (
            <a
              key={image.src}
              href={image.src}
              target="_blank"
              rel="noreferrer"
              title={image.alt}
              aria-label={`Abrir captura: ${image.alt}`}
              className="group/media flex items-center justify-center overflow-hidden bg-bg sm:h-full"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="h-auto max-h-[520px] w-full object-contain transition-transform duration-500 group-hover/media:scale-[1.02] sm:h-full sm:max-h-none"
              />
            </a>
          ))}
        </div>
      ) : (
        <div
          className={`mt-6 grid grid-cols-1 gap-px border border-line bg-line ${
            project.images.length > 1 ? "sm:grid-cols-2" : ""
          }`}
        >
          {project.images.map((image) => (
            <a
              key={image.src}
              href={image.src}
              target="_blank"
              rel="noreferrer"
              title={image.alt}
              aria-label={`Abrir captura: ${image.alt}`}
              className="group/media block overflow-hidden bg-bg"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[2/1] w-full object-cover object-top transition-transform duration-500 group-hover/media:scale-[1.02]"
              />
            </a>
          ))}
        </div>
      )}
      <p className="mt-2 font-mono text-xs text-faint">Clic para ampliar</p>
    </div>
  );
}

export function Projects() {
  const galleries = projects.filter((project) => project.images?.length);

  return (
    <section id="proyectos" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <div className="flex items-start justify-between gap-8">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
            Proyectos
          </h2>
          <p className="mt-5 max-w-prose text-lg text-muted">
            Una selección de trabajos, en orden inverso. Cada uno con su historia
            y sus decisiones. Algunos son de empresa y se muestran sin detalles
            sensibles.
          </p>
        </div>

        <div className="hidden shrink-0 md:block" aria-hidden="true">
          <Pleiades
            variant="ornament"
            trigger="view"
            className="h-32 w-32 text-fg"
          />
          <p className="mt-2 text-right font-mono text-xs text-faint">
            M45 · Pléyades
          </p>
        </div>
      </div>

      <div className="relative mt-14">
        {/* Constelación de fondo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible"
        >
          <Pleiades
            variant="background"
            trigger="view"
            className="h-auto w-[88%] max-w-[720px] opacity-80"
          />
        </div>

        <div className="relative grid gap-px border border-line bg-line sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>

      {galleries.map((project) => (
        <ProjectGallery key={project.title} project={project} />
      ))}
    </section>
  );
}
