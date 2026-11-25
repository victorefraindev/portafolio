export function ConsoleShot({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-4 border-b border-[var(--rm-line)] px-4 py-3 sm:px-5">
        <span className="rm-label text-[var(--rm-faint)]">
          Fig. 01 / unidad real
        </span>
        <span className="rm-label text-[var(--rm-faint)]">Escala 1:2</span>
      </div>

      <div className="px-4 pb-5 pt-4 sm:px-5">
        <div className="border border-[var(--rm-line)] bg-[var(--rm-panel-2)] p-2.5">
          <img
            src="/playstation-1.webp"
            alt="PlayStation 1 original gris con su control"
            width={474}
            height={283}
            decoding="async"
            className="block w-full border border-[var(--rm-line)] bg-white"
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-4">
          <span className="rm-label text-[var(--rm-faint)]">
            Unidad recibida
          </span>
          <span className="rm-label text-[var(--rm-faint)]">PS1 · 1995</span>
        </div>
      </div>
    </div>
  );
}
