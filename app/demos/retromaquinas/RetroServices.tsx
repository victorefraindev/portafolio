import { buyConditions } from "./content";

type RetroServicesProps = {
  onRepair: () => void;
  onSell: () => void;
};

export function RetroServices({ onRepair, onSell }: RetroServicesProps) {
  return (
    <section
      id="servicios"
      className="scroll-mt-24 border-b border-[var(--rm-line)] py-20 md:py-28"
    >
      <div className="rm-container">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="rm-label text-[var(--rm-accent)]">01 / Servicios</p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              Compra y taller.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-[var(--rm-muted)]">
              Dos formas de resolverlo: nos vendes la consola o la traes para
              que vuelva a encender.
            </p>
          </div>
          <p className="rm-label text-[var(--rm-faint)]">
            Caracas · envíos nacionales
          </p>
        </div>

        <div className="mt-10 grid border border-[var(--rm-line)] md:grid-cols-2">
          <article className="border-b border-[var(--rm-line)] bg-[var(--rm-navy)] p-7 text-[#f4f7fb] md:border-b-0 md:border-r md:p-9">
            <p className="rm-label text-[#7ea2ff]">01 / Compra</p>
            <h3 className="mt-4 text-3xl leading-none md:text-4xl">
              Compramos tu consola.
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-[#b8c6e4]">
              Funcione o no, con o sin accesorios. Te damos una oferta el mismo
              día y coordinamos la entrega.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {buyConditions.map((condition) => (
                <li
                  key={condition}
                  className="rm-label flex items-center gap-2 text-[#b8c6e4]"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 border border-[#7ea2ff]"
                  />
                  {condition}
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              onClick={onSell}
              className="mt-7 inline-flex items-center justify-center border border-[#f4f7fb] px-5 py-2.5 text-sm font-semibold text-[#f4f7fb] transition-colors hover:bg-[#f4f7fb] hover:text-[#071a33]"
            >
              Vender mi consola
            </a>
          </article>

          <article className="bg-[var(--rm-panel)] p-7 md:p-9">
            <p className="rm-label text-[var(--rm-accent)]">02 / Reparación</p>
            <h3 className="mt-4 text-3xl leading-none md:text-4xl">
              Reparamos la que no enciende.
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-[var(--rm-muted)]">
              Diagnóstico, limpieza, lectores, fuentes, puertos y baterías.
              Presupuesto antes de intervenir.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                "Diagnóstico completo",
                "Repuestos revisados",
                "Prueba de funcionamiento",
                "Garantía de 30 días",
              ].map((item) => (
                <li
                  key={item}
                  className="rm-label flex items-center gap-2 text-[var(--rm-muted)]"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-1.5 w-1.5 bg-[var(--rm-accent)]"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              onClick={onRepair}
              className="rm-btn-primary mt-7 text-sm"
            >
              Pedir diagnóstico
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
