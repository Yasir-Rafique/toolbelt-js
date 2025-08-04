/**
 * uniqueArray
 * -----------
 * Removes duplicate values from an array, returning a new array with only unique elements.
 * Preserves the order of first appearance.
 *
 * Example:
 *   uniqueArray([1, 2, 2, 3, 1]); // [1, 2, 3]
 */
export function uniqueArray<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}
