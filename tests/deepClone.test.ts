import { deepClone } from "../src/deepClone";

describe("deepClone", () => {
  it("clones primitive values", () => {
    expect(deepClone(42)).toBe(42);
    expect(deepClone("test")).toBe("test");
    expect(deepClone(null)).toBeNull();
  });

  it("clones arrays", () => {
    const arr = [1, 2, { a: 3 }];
    const cloned = deepClone(arr);
    expect(cloned).toEqual(arr);
    expect(cloned).not.toBe(arr); // different reference
    expect(cloned[2]).not.toBe(arr[2]); // deep clone
  });

  it("clones objects", () => {
    const obj = { a: 1, b: { c: 2 } };
    const cloned = deepClone(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
    expect(cloned.b).not.toBe(obj.b);
  });
});
