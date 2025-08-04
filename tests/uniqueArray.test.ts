import { uniqueArray } from "../src/uniqueArray";

describe("uniqueArray", () => {
  it("removes duplicate numbers", () => {
    expect(uniqueArray([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it("removes duplicate strings", () => {
    expect(uniqueArray(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
  });

  it("works with empty arrays", () => {
    expect(uniqueArray([])).toEqual([]);
  });

  it("works with objects by reference", () => {
    const obj = { a: 1 };
    expect(uniqueArray([obj, obj, { a: 1 }])).toHaveLength(2);
  });
});
