import { skills } from "~/data/site";

export function Skills() {
  return (
    <section id="habilidades" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
        Habilidades
      </h2>
      <p className="mt-5 max-w-prose text-lg text-muted">
        Herramientas con las que trabajo a diario y me siento cómodo.
      </p>

      <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-3">
        {skills.map((group) => (
          <div key={group.group} className="bg-bg p-8 transition-colors duration-300 hover:bg-surface">
            <h3 className="font-display text-lg font-medium tracking-tight text-fg">
              {group.group}
            </h3>
            <ul className="mt-6 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-baseline gap-3 text-muted">
                  <span aria-hidden="true" className="h-1 w-3 shrink-0 translate-y-[-2px] bg-nova/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}