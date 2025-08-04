/**
 * throttle
 * --------
 * Returns a throttled version of a function that ensures it is only called at most once every specified interval (ms).
 * Useful for limiting repeated calls to functions triggered by events like scrolling or mouse movement.
 *
 * Example:
 *   const throttledFn = throttle(() => console.log('Tick'), 1000);
 *   // Even if called every 100ms, "Tick" will only log once per second.
 */

export function throttle<T extends (...args: any[]) => void>(
  fn: T,
  interval: number
): (...args: Parameters<T>) => void {
  let lastTime = 0;

  return function (...args: Parameters<T>) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn(...args);
    }
  };
}
