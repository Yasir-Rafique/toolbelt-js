/**
 * flattenArray
 * ------------
 * Flattens nested arrays of any depth into a single-level array.
 *
 * Example:
 *   flattenArray([1, [2, [3, 4]], 5]); // [1, 2, 3, 4, 5]
 */
export function flattenArray(arr: any[]): any[] {
  return arr.flat(Infinity);
}
