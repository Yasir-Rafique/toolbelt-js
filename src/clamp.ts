/**
 * clamp
 * -----
 * Restricts a number within the provided minimum and maximum bounds.
 *
 * Example:
 *   clamp(5, 1, 10);    // 5
 *   clamp(-3, 0, 7);    // 0
 *   clamp(100, 0, 50);  // 50
 */
export function clamp(num: number, min: number, max: number): number {
  if (min > max) [min, max] = [max, min];
  return Math.max(min, Math.min(max, num));
}
