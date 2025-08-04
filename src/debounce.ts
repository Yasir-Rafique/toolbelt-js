/**
 * debounce
 * --------
 * Returns a debounced version of a function that delays its execution until after a wait period has passed since the last call.
 * Useful for reducing how often a function runs in response to events like typing or resizing.
 *
 * Example:
 *   const debouncedFn = debounce(() => console.log('Hello'), 300);
 *   debouncedFn(); debouncedFn(); debouncedFn();
 *   // "Hello" will only be logged once, 300ms after the last call.
 */

export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
