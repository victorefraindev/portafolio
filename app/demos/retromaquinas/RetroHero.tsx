import { ConsoleShot } from "./ConsoleShot";

const specs = ["Diagnóstico honesto", "Precio antes de reparar", "Garantía 30 días"];

type RetroHeroProps = {
  onRepair: () => void;
  onSell: () => void;
};

export function RetroHero({ onRepair, onSell }: RetroHeroProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[var(--rm-line)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="rm-grid absolute inset-0 opacity-35" />
        <div className="rm-glow absolute -right-24 -top-24 h-[560px] w-[560px]" />
      </div>

      <div className="rm-container relative pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <p className="rm-label text-[var(--rm-accent)]">
              Taller / compra / reparación
            </p>

            <h1 className="mt-5 text-[clamp(2.45rem,6vw,4.7rem)] leading-[0.88]">
              <span className="block">No está muerta.</span>
              <span className="block">Está esperando</span>
              <span className="block text-[var(--rm-accent)]">
                diagnóstico.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--rm-muted)]">
              Compramos consolas en cualquier estado y reparamos las que
              dejaron de funcionar. Diagnóstico honesto y precio antes de tocar
              nada.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                onClick={onRepair}
                className="rm-btn-primary"
              >
                Necesito una reparación
              </a>
              <a href="#contacto" onClick={onSell} className="rm-btn-secondary">
                Quiero vender mi consola
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--rm-line)] pt-5">
              {specs.map((spec) => (
                <span
                  key={spec}
                  className="rm-label flex items-center gap-2 text-[var(--rm-faint)]"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 bg-[var(--rm-accent)]"
                  />
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="rm-figure">
              <div className="flex items-center justify-between gap-4 border-b border-[var(--rm-line)] px-4 py-3">
                <span className="rm-label text-[var(--rm-faint)]">
                  Orden #0042
                </span>
                <span className="rm-label flex items-center gap-2 text-[var(--rm-accent)]">
                  <span
                    aria-hidden="true"
                    className="rm-pulse inline-block h-1.5 w-1.5 rounded-full bg-[var(--rm-alert)]"
                  />
                  En taller
                </span>
              </div>

              <ConsoleShot className="w-full" />

              <dl className="grid grid-cols-2 border-t border-[var(--rm-line)]">
                <div className="border-r border-[var(--rm-line)] px-4 py-3">
                  <dt className="rm-label text-[var(--rm-faint)]">Equipo</dt>
                  <dd className="mt-1 text-sm">PlayStation 1</dd>
                </div>
                <div className="px-4 py-3">
                  <dt className="rm-label text-[var(--rm-faint)]">Falla</dt>
                  <dd className="mt-1 text-sm">No enciende</dd>
                </div>
              </dl>
            </div>

            <p className="rm-label mt-3 text-right text-[var(--rm-faint)]">
              Caracas · envíos nacionales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
