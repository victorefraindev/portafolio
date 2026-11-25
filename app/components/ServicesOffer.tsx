import { business } from "~/data/site";

export function ServicesOffer() {
  return (
    <section
      id="planes"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:px-10 md:py-28"
    >
      <div className="max-w-3xl">
        <p className="font-mono text-sm text-faint">Planes y precios</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          Precios claros, sin sorpresas
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Elige el punto de partida. Todos los planes incluyen diseño a medida,
          versión para celular y publicación en producción.
        </p>
        <p className="mt-3 font-mono text-xs leading-relaxed text-faint">
          {business.pricingNote}
        </p>
      </div>

      <div className="mt-14 grid gap-px border border-line bg-line lg:grid-cols-2">
        {business.plans.map((plan) => (
          <article
            key={plan.name}
            className="flex flex-col bg-bg/75 p-8 backdrop-blur-md transition-colors duration-300 hover:bg-surface md:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-medium tracking-tight text-fg md:text-2xl">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {plan.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mt-2 inline-block h-2 w-2 shrink-0 rotate-45 border border-nova/70"
              />
            </div>

            <p className="mt-6 font-display text-3xl font-semibold tracking-tight text-fg md:text-4xl">
              {plan.priceMax
                ? `De $${plan.price} a $${plan.priceMax}`
                : `Desde $${plan.price}`}{" "}
              <span className="font-mono text-sm font-normal text-faint">
                USD
              </span>
            </p>
            <p className="mt-1 font-mono text-xs text-faint">
              Entrega estimada · {plan.timeline}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center border border-violet px-4 py-2.5 text-sm font-medium text-violet transition-colors hover:bg-violet hover:text-bg"
              >
                Cotizar este plan
              </a>
              {plan.demo && (
                <a
                  href={plan.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:text-violet hover:decoration-violet"
                >
                  Ver ejemplo
                </a>
              )}
              {plan.admin && (
                <a
                  href={plan.admin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:text-violet hover:decoration-violet"
                >
                  Ver panel
                </a>
              )}
            </div>

            <ul className="mt-6 space-y-2 border-t border-line pt-5">
              {plan.base && (
                <li className="flex items-start gap-2 text-sm font-medium text-fg">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-violet"
                  />
                  {plan.base}
                </li>
              )}
              {plan.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-nova/80"
                  />
                  {item}
                </li>
              ))}
            </ul>

            {plan.panelTiers && (
              <div className="mt-5 border border-line">
                <p className="border-b border-line px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                  Panel de administración · dos niveles
                </p>
                <div className="grid gap-px bg-line sm:grid-cols-2">
                  {plan.panelTiers.map((tier) => (
                    <div key={tier.label} className="bg-bg p-4">
                      <p className="font-display text-xl font-semibold text-fg">
                        ${tier.price}{" "}
                        <span className="font-mono text-[11px] font-normal text-faint">
                          USD
                        </span>
                      </p>
                      <p className="mt-0.5 text-xs text-muted">{tier.label}</p>
                      <ul className="mt-3 space-y-1.5">
                        {tier.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs leading-relaxed text-muted"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-nova/70"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {plan.optional && (
              <p className="mt-4 border-t border-line pt-4 font-mono text-xs leading-relaxed text-faint">
                Opcional: {plan.optional}
              </p>
            )}
            {plan.excludes && (
              <p className="mt-4 font-mono text-xs leading-relaxed text-faint">
                {plan.excludes}
              </p>
            )}
          </article>
        ))}
      </div>

      <div
        id="extras"
        className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-2 md:gap-16"
      >
        <div>
          <p className="font-mono text-sm text-faint">Extras</p>
          <ul className="mt-5">
            {business.extras.map((extra) => (
              <li
                key={extra.label}
                className="flex items-baseline justify-between gap-6 border-b border-line py-4"
              >
                <span className="text-sm leading-relaxed text-muted">
                  {extra.label}
                </span>
                <span className="shrink-0 font-mono text-sm text-fg">
                  {extra.price}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-sm text-faint">Mantenimiento mensual</p>
          <div className="mt-5 grid gap-px border border-line bg-line sm:grid-cols-2">
            {business.maintenance.map((plan) => (
              <div key={plan.name} className="bg-bg/75 p-6">
                <p className="font-display text-lg font-medium text-fg">
                  {plan.name}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-fg">
                  ${plan.price}{" "}
                  <span className="font-mono text-xs font-normal text-faint">
                    / mes
                  </span>
                </p>
                <ul className="mt-4 space-y-1.5">
                  {plan.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1 inline-block h-1 w-1 shrink-0 rounded-full bg-violet/70"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
