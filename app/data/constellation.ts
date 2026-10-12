/**
 * Las Pléyades (M45) — asterismo de las "Siete Hermanas".
 * Coordenadas relativas dentro de un lienzo de 120×120.
 * `r` = radio (brillo relativo). `bright` = estrella principal.
 */
export type PleiadStar = {
  id: string;
  name: string;
  x: number;
  y: number;
  r: number;
  bright?: boolean;
};

export const PLEIADES_VIEWBOX = "0 0 120 120";

export const pleiadesStars: PleiadStar[] = [
  { id: "alcyone", name: "Alcyone", x: 66, y: 54, r: 3.4, bright: true },
  { id: "atlas", name: "Atlas", x: 20, y: 42, r: 2.6 },
  { id: "pleione", name: "Pleione", x: 33, y: 33, r: 1.7 },
  { id: "electra", name: "Electra", x: 45, y: 20, r: 2.2 },
  { id: "maia", name: "Maia", x: 60, y: 28, r: 2.4 },
  { id: "merope", name: "Merope", x: 92, y: 50, r: 1.9 },
  { id: "taygeta", name: "Taygeta", x: 74, y: 74, r: 2.4 },
  { id: "celaeno", name: "Celaeno", x: 40, y: 60, r: 1.7 },
  { id: "sterope", name: "Sterope", x: 52, y: 46, r: 1.5 },
];

/** Líneas que unen las estrellas del asterismo. */
export const pleiadesEdges: [string, string][] = [
  ["atlas", "pleione"],
  ["pleione", "electra"],
  ["electra", "maia"],
  ["maia", "alcyone"],
  ["alcyone", "merope"],
  ["alcyone", "taygeta"],
  ["taygeta", "merope"],
  ["celaeno", "atlas"],
  ["celaeno", "alcyone"],
  ["sterope", "alcyone"],
  ["sterope", "maia"],
];

export const pleiadesById = Object.fromEntries(
  pleiadesStars.map((s) => [s.id, s]),
);