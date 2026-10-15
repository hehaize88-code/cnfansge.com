import type { Product } from "./site-data";

export function filterProducts(products: Product[], query: string, category: string, under20: boolean, sort: string, categoryLabels: Record<string, string>) {
  const needle = query.trim().toLocaleLowerCase();
  const result = products.filter((product) => (category === "all" || product.category === category)
    && (!under20 || product.priceUsd < 20)
    && (!needle || `${product.name} ${product.categoryLabel} ${categoryLabels[product.category] ?? ""} ${product.note}`.toLocaleLowerCase().includes(needle)));
  if (sort === "low") result.sort((a, b) => a.priceUsd - b.priceUsd);
  if (sort === "high") result.sort((a, b) => b.priceUsd - a.priceUsd);
  return result;
}

export function planWeight(inputs: string[], rule: string) {
  if (inputs.length !== 4 || inputs.some((value) => !value.trim() || !Number.isFinite(Number(value)) || Number(value) < 0)) return null;
  if (!["5000", "6000", "actual"].includes(rule)) return null;
  const [actual, length, width, height] = inputs.map(Number);
  const volumetric = rule === "actual" ? null : length * width * height / Number(rule);
  const chargeable = volumetric === null ? actual : Math.max(actual, volumetric);
  return Number.isFinite(chargeable) ? { volumetric, chargeable } : null;
}
