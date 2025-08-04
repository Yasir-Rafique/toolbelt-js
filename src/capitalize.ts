/**
 * capitalize
 * ----------
 * Capitalizes the first character of a string and returns the updated string.
 * If the input is empty, returns an empty string.
 *
 * Example:
 *   capitalize("hello"); // "Hello"
 *   capitalize("world"); // "World"
 */

export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
