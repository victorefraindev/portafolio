import { buySteps, repairSteps } from "./content";

type RetroProcessProps = {
  onRepair: () => void;
  onSell: () => void;
};

export function RetroProcess({ onRepair, onSell }: RetroProcessProps) {
  return (
    <section
      id="proceso"
      className="scroll-mt-24 border-b border-[var(--rm-line)] py-20 md:py-28"
    >
      <div className="rm-container">
        <div className="max-w-2xl">
          <p className="rm-label text-[var(--rm-accent)]">03 / Proceso</p>
          <h2 className="mt-4 text-4xl leading-none md:text-5xl">
            Cómo trabaja el taller.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-[var(--rm-muted)]">
            Sin diagnósticos a ciegas ni costos que aparecen al final. Apruebas
            el presupuesto antes de que abramos la consola.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <ol className="grid gap-px border border-[var(--rm-line)] bg-[var(--rm-line)] sm:grid-cols-2">
              {repairSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="bg-[var(--rm-panel)] p-6 md:p-7"
                >
                  <span className="rm-label text-[var(--rm-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl leading-tight md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--rm-muted)]">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>

            <a
              href="#contacto"
              onClick={onRepair}
              className="rm-btn-primary mt-6 text-sm"
            >
              Pedir diagnóstico
            </a>
          </div>

          <aside className="bg-[var(--rm-navy)] p-6 text-[#f4f7fb] md:p-8">
            <p className="rm-label text-[#7ea2ff]">Compra directa</p>
            <h3 className="mt-3 text-2xl leading-tight md:text-3xl">
              Vender es más simple.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#b8c6e4]">
              No hace falta que funcione. Cuéntanos qué tienes y te damos una
              oferta el mismo día.
            </p>

            <ol className="mt-6 space-y-4">
              {buySteps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[1.5rem_1fr] gap-3"
                >
                  <span className="rm-label text-[#7ea2ff]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{step.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#b8c6e4]">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <a
              href="#contacto"
              onClick={onSell}
              className="mt-7 inline-flex items-center justify-center border border-[#f4f7fb] px-5 py-2.5 text-sm font-semibold text-[#f4f7fb] transition-colors hover:bg-[#f4f7fb] hover:text-[#071a33]"
            >
              Vender mi consola
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
