/**
 * isEmpty
 * -------
 * Checks if a value is empty.
 * Works for strings, arrays, plain objects, Map, Set, null, and undefined.
 * Returns true if the value has no content, false otherwise.
 *
 * Example:
 *   isEmpty([]);       // true
 *   isEmpty({});       // true
 *   isEmpty("abc");    // false
 *   isEmpty(null);     // true
 */

export function isEmpty(value: any): boolean {
  if (value == null) return true; // null or undefined
  if (typeof value === "string" || Array.isArray(value))
    return value.length === 0;
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}
