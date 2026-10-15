export function calculateShippingWeight({ length, width, height, weight, divisor }) {
  const values = [length, width, height, weight, divisor].map(Number);
  if (!values.every(value => Number.isFinite(value) && value > 0)) return null;
  const [l, w, h, actual, factor] = values;
  const volume = l * w * h / factor;
  if (!Number.isFinite(volume)) return null;
  return { volume, comparison: Math.max(actual, volume) };
}
