import { chunkArray } from "../src/chunkArray";

describe("chunkArray", () => {
  it("splits array into chunks of given size", () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("handles empty arrays", () => {
    expect(chunkArray([], 2)).toEqual([]);
  });

  it("throws for non-positive chunk size", () => {
    expect(() => chunkArray([1, 2, 3], 0)).toThrow();
    expect(() => chunkArray([1, 2, 3], -1)).toThrow();
  });

  it("last chunk is smaller if not enough elements", () => {
    expect(chunkArray([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });
});
