import { repairs } from "./content";
import type { RepairItem } from "./content";
import { RepairGlyph } from "./RepairGlyph";

type RetroRepairsProps = {
  onSelect: (name: string) => void;
  onRepair: () => void;
};

function priceLabel(item: RepairItem) {
  if (item.price === null) return item.priceLabel ?? "A cotizar";
  return `$${item.price}`;
}

export function RetroRepairs({ onSelect, onRepair }: RetroRepairsProps) {
  return (
    <section
      id="reparaciones"
      className="scroll-mt-24 border-b border-[var(--rm-line)] py-20 md:py-28"
    >
      <div className="rm-container">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="rm-label text-[var(--rm-accent)]">02 / Reparaciones</p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              Lo que pasa por el taller.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-[var(--rm-muted)]">
              Fallas comunes, con precio de partida y tiempo estimado. El
              diagnóstico define el trabajo final.
            </p>
          </div>
          <p className="rm-label max-w-[15rem] text-[var(--rm-faint)]">
            Precios desde · repuestos sujetos a disponibilidad
          </p>
        </div>

        <div className="mt-10 border-t border-[var(--rm-line)]">
          <div className="hidden grid-cols-[1.8fr_0.55fr_0.55fr_auto] gap-4 border-b border-[var(--rm-line)] py-3 md:grid">
            <span className="rm-label text-[var(--rm-faint)]">Servicio</span>
            <span className="rm-label text-[var(--rm-faint)]">Desde</span>
            <span className="rm-label text-[var(--rm-faint)]">Tiempo</span>
            <span aria-hidden="true" />
          </div>

          <ul>
            {repairs.map((item) => (
              <li
                key={item.id}
                className="group grid gap-4 border-b border-[var(--rm-line)] py-5 transition-colors hover:bg-[var(--rm-panel)] md:grid-cols-[1.8fr_0.55fr_0.55fr_auto] md:items-center"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--rm-line)] text-[var(--rm-accent)] transition-colors group-hover:border-[var(--rm-accent)]">
                    <RepairGlyph name={item.glyph} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg leading-tight">{item.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--rm-muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="rm-label text-[var(--rm-faint)] md:hidden">
                    Desde
                  </p>
                  <p className="mt-1 font-semibold md:mt-0">
                    {priceLabel(item)}
                    {item.price !== null && (
                      <span className="rm-label ml-1 text-[var(--rm-faint)]">
                        USD
                      </span>
                    )}
                  </p>
                </div>

                <div>
                  <p className="rm-label text-[var(--rm-faint)] md:hidden">
                    Tiempo
                  </p>
                  <p className="mt-1 text-sm md:mt-0">{item.turnaround}</p>
                </div>

                <a
                  href="#contacto"
                  onClick={() => onSelect(item.name)}
                  className="rm-link text-sm font-semibold md:justify-self-end"
                >
                  Consultar
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border border-[var(--rm-line)] p-5 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-relaxed text-[var(--rm-muted)]">
            Los precios son desde. El diagnóstico define el costo final y, si
            apruebas la reparación, se descuenta del total.
          </p>
          <a
            href="#contacto"
            onClick={onRepair}
            className="rm-btn-secondary shrink-0 text-sm"
          >
            No sé qué tiene
          </a>
        </div>
      </div>
    </section>
  );
}
