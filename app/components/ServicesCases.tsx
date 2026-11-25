import { business } from "~/data/site";
import type { BusinessCase, BusinessImage } from "~/data/site";

function CaseGallery({ images }: { images: BusinessImage[] }) {
  const hasPortrait = images.some((image) => image.portrait);

  return (
    <div
      className={
        hasPortrait
          ? "grid grid-cols-1 gap-px border border-line bg-line sm:h-[360px] sm:grid-cols-[2fr_1fr] lg:h-[420px]"
          : `grid grid-cols-1 gap-px border border-line bg-line ${
              images.length > 1 ? "sm:grid-cols-2" : ""
            }`
      }
    >
      {images.map((image) => (
        <a
          key={image.src}
          href={image.src}
          target="_blank"
          rel="noreferrer"
          title={image.alt}
          aria-label={`Abrir captura: ${image.alt}`}
          className={`group/media flex items-center justify-center overflow-hidden bg-bg ${
            hasPortrait ? "sm:h-full" : ""
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            className={
              image.portrait
                ? "h-auto max-h-[480px] w-full object-contain p-4 sm:h-full sm:max-h-none"
                : hasPortrait
                  ? "aspect-[2/1] w-full object-cover object-top transition-transform duration-500 group-hover/media:scale-[1.02] sm:aspect-auto sm:h-full"
                  : "aspect-[2/1] w-full object-cover object-top transition-transform duration-500 group-hover/media:scale-[1.02]"
            }
          />
        </a>
      ))}
    </div>
  );
}

function CaseStudy({ item, index }: { item: BusinessCase; index: number }) {
  const alternate = index % 2 === 1;

  return (
    <article className="grid items-start gap-10 border-t border-line pt-12 md:grid-cols-2 md:gap-16">
      <div className={alternate ? "md:order-2" : ""}>
        <p className="font-mono text-sm text-faint">{item.kicker}</p>
        <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-fg md:text-3xl">
          {item.title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{item.description}</p>

        <ul className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-5">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2 text-sm text-muted">
              <span
                aria-hidden="true"
                className="inline-block h-1 w-1 shrink-0 rounded-full bg-nova"
              />
              {bullet}
            </li>
          ))}
        </ul>

        {(item.demo || item.admin) && (
          <div className="mt-6 flex flex-wrap gap-6">
            {item.demo && (
              <a
                href={item.demo}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:text-violet hover:decoration-violet"
              >
                Ver tienda
              </a>
            )}
            {item.admin && (
              <a
                href={item.admin}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:text-violet hover:decoration-violet"
              >
                Ver panel
              </a>
            )}
          </div>
        )}

        <p className="mt-4 font-mono text-xs leading-relaxed text-faint">
          {item.note}
        </p>
      </div>

      <div className={alternate ? "md:order-1" : ""}>
        <CaseGallery images={item.images} />
      </div>
    </article>
  );
}

export function ServicesCases() {
  return (
    <section
      id="casos"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
    >
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-faint">Casos</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          Ejemplos de lo que puedo construir
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Una tienda online y un sistema para comercio pequeño, con capturas y
          enlaces para verlos por dentro.
        </p>
      </div>

      <div className="mt-12 space-y-16 md:space-y-20">
        {business.cases.map((item, index) => (
          <CaseStudy key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
