import type { ActivityAction, ActivityEntry } from "./content";

const tones: Record<string, string> = {
  product: "bg-[var(--pa-accent)]",
  category: "bg-[#6ea8ff]",
  site: "bg-[#64748b]",
  demo: "bg-[var(--pa-muted)]",
};

function toneFor(action: ActivityAction) {
  if (action.startsWith("product")) return tones.product;
  if (action.startsWith("category")) return tones.category;
  if (action.startsWith("site")) return tones.site;
  return tones.demo;
}

export function formatActivityTime(at: string) {
  const [date, time] = at.split("T");
  const parts = date.split("-");
  return `${parts[2]}/${parts[1]} ${time.slice(0, 5)}`;
}

export function ActivityList({
  entries,
  empty = "Sin actividad todavía.",
}: {
  entries: ActivityEntry[];
  empty?: string;
}) {
  if (entries.length === 0) {
    return (
      <p className="py-8 text-center text-[13px] text-[var(--pa-muted)]">
        {empty}
      </p>
    );
  }

  return (
    <ul className="divide-y divide-[var(--pa-line)]">
      {entries.map((entry) => (
        <li key={entry.id} className="flex gap-3 py-3">
          <span
            aria-hidden="true"
            className={`mt-1.5 size-2 shrink-0 rounded-full ${toneFor(entry.action)}`}
          />
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium leading-snug">
              {entry.label}
            </p>
            {entry.detail ? (
              <p className="mt-0.5 text-[11px] leading-relaxed text-[var(--pa-muted)]">
                {entry.detail}
              </p>
            ) : null}
            <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-[var(--pa-muted)]">
              {formatActivityTime(entry.at)}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
