import { guarantees } from "./content";

export function RetroGuarantees() {
  return (
    <section id="garantia" className="rm-band scroll-mt-24 py-20 md:py-24">
      <div className="rm-container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="text-4xl leading-[0.94] md:text-5xl lg:text-6xl">
              Diagnóstico primero.
              <span className="rm-band-accent block">
                Precio antes de reparar.
              </span>
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-[var(--rm-band-muted)]">
              Si no tiene arreglo, te lo decimos. Si lo tiene, apruebas el
              presupuesto antes de que abramos la consola.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {guarantees.map((item) => (
              <div key={item.title} className="rm-band-rule border-t pt-4">
                <h3 className="text-base leading-tight">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--rm-band-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <span className="rm-stamp rm-band-accent-2">Garantía 30 días</span>
        </div>
      </div>
    </section>
  );
}
