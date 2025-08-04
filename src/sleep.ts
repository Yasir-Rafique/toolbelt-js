/**
 * sleep
 * -----
 * Returns a Promise that resolves after a given number of milliseconds.
 * Useful for pausing async functions or creating delays.
 *
 * Example:
 *   await sleep(1000); // pauses for 1 second
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
