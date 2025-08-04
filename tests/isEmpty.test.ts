import { isEmpty } from "../src/isEmpty";

describe("isEmpty", () => {
  it("should return true for empty values", () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  it("should return false for non-empty values", () => {
    expect(isEmpty("abc")).toBe(false);
    expect(isEmpty([1, 2])).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty(new Map([["a", 1]]))).toBe(false);
    expect(isEmpty(new Set([1]))).toBe(false);
    expect(isEmpty(42)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });
});
