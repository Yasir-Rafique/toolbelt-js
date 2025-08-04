/**
 * chunkArray
 * ----------
 * Splits an array into multiple arrays ("chunks") of a specified size.
 * The last chunk may be smaller if there aren't enough elements.
 *
 * Example:
 *   chunkArray([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 */
export function chunkArray<T>(arr: T[], size: number): T[][] {
  if (size <= 0) throw new Error("Chunk size must be greater than 0");
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
