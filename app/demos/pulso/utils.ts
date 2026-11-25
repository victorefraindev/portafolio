import type { Category, Product } from "./content";
import { colorHex } from "./content";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

export function slugify(value: string) {
  return normalize(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function uniqueSlug(base: string, existing: string[]) {
  const root = slugify(base) || "item";
  if (!existing.includes(root)) return root;
  let index = 2;
  while (existing.includes(`${root}-${index}`)) index += 1;
  return `${root}-${index}`;
}

export function colorHexFor(name: string) {
  return colorHex[name] ?? "#8a7f72";
}

function levenshtein(a: string, b: string) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  const current = new Array<number>(b.length + 1);

  for (let i = 1; i <= a.length; i += 1) {
    current[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + cost,
      );
    }
    for (let j = 0; j <= b.length; j += 1) previous[j] = current[j];
  }

  return previous[b.length];
}

function tokenMatches(word: string, token: string) {
  if (word.includes(token)) return true;
  const tolerance = token.length >= 6 ? 2 : 1;
  return (
    Math.abs(word.length - token.length) <= tolerance &&
    levenshtein(word, token) <= tolerance
  );
}

export function searchProducts(
  products: Product[],
  categories: Category[],
  query: string,
) {
  const term = normalize(query);
  if (!term) return [];

  const tokens = term.split(" ").filter(Boolean);
  const categoryById = new Map(categories.map((category) => [category.id, category]));

  return products
    .filter((product) => product.status !== "oculto")
    .map((product) => {
      const category = categoryById.get(product.categoryId);
      const fields = [
        normalize(product.name),
        normalize(category?.name ?? ""),
        ...product.tags.map(normalize),
      ];
      const words = fields.flatMap((field) => field.split(" ").filter(Boolean));
      const matches = tokens.every((token) =>
        words.some((word) => tokenMatches(word, token)),
      );
      const name = normalize(product.name);
      const score =
        (name === term ? 40 : name.startsWith(term) ? 24 : name.includes(term) ? 12 : 0) +
        (product.featured ? 3 : 0);
      return { product, matches, score };
    })
    .filter((entry) => entry.matches)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.product);
}

export function formatMessage(
  items: Array<{
    name: string;
    color: string;
    qty: number;
    price: number;
  }>,
  destination: string,
) {
  const lines = items.map(
    (item) =>
      `- ${item.name} (${item.color}) x${item.qty} — ${formatPrice(item.price * item.qty)}`,
  );
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = destination.trim()
    ? `\nEnvío a: ${destination.trim()}`
    : "";
  return `Hola, me interesa:\n${lines.join("\n")}${shipping}\nTotal: ${formatPrice(total)} + envío`;
}
