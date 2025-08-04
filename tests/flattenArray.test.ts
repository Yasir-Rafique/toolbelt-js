import { flattenArray } from "../src/flattenArray";

describe("flattenArray", () => {
  it("flattens nested arrays", () => {
    expect(flattenArray([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("flattens deeply nested arrays", () => {
    expect(flattenArray([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles empty arrays", () => {
    expect(flattenArray([])).toEqual([]);
  });

  it("returns the same array if already flat", () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
