/**
 * deepClone
 * ---------
 * Creates a deep copy of any plain JavaScript object or array.
 * All nested objects and arrays are cloned recursively, so the clone and original are completely independent.
 * Does not support special objects like Date, Map, Set, or functions.
 *
 * Example:
 *   const a = { x: 1, y: { z: 2 } };
 *   const b = deepClone(a);
 *   // b is { x: 1, y: { z: 2 } }, with its own nested objects
 */

export function deepClone<T>(value: T): T {
  if (value === null || typeof value !== "object") return value;

  if (Array.isArray(value)) {
    return value.map(deepClone) as unknown as T;
  }

  const clonedObj: any = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clonedObj[key] = deepClone((value as any)[key]);
    }
  }
  return clonedObj as T;
}
