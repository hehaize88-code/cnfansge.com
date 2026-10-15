export function calculateParcelWeight({ actual, length, width, height, divisor }) {
  const values = [actual, length, width, height, divisor].map(Number);
  if (values.some(value => !Number.isFinite(value) || value <= 0)) return null;
  const [mass, l, w, h, d] = values;
  const volumetric = l * w * h / d;
  if (!Number.isFinite(volumetric) || volumetric <= 0) return null;
  return { volumetric, basis: Math.max(mass, volumetric) };
}
