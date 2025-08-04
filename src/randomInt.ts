/**
 * randomInt
 * ---------
 * Generates a random integer between min and max (inclusive).
 * Both min and max should be finite numbers.
 *
 * Example:
 *   randomInt(1, 5); // could return 1, 2, 3, 4, or 5
 */

export function randomInt(min: number, max: number): number {
  // Ensure min and max are integers and min <= max
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    throw new Error("min and max must be finite numbers");
  }
  if (min > max) [min, max] = [max, min];
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
