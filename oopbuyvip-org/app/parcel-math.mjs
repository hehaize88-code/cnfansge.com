/** Compare measured mass with dimensional mass. No rates or route rules are assumed. */
export function parcelWeights(grams, length, width, height, divisor) {
  if (![grams, length, width, height, divisor].every(value => Number.isFinite(value) && value > 0)) return null;
  const volume = length * width * height;
  const actual = grams / 1000;
  const volumetric = volume / divisor;
  if (![volume, actual, volumetric].every(Number.isFinite)) return null;
  return { volume, actual, volumetric, comparison: Math.max(actual, volumetric) };
}
