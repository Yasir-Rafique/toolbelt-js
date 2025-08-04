import { clamp } from "../src/clamp";

describe("clamp", () => {
  it("returns the number if within bounds", () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });

  it("returns min if number is below min", () => {
    expect(clamp(-3, 0, 7)).toBe(0);
  });

  it("returns max if number is above max", () => {
    expect(clamp(100, 0, 50)).toBe(50);
  });

  it("works if min > max (swaps bounds)", () => {
    expect(clamp(3, 10, 1)).toBe(3); // 1-10, so still 3
    expect(clamp(-3, 10, 1)).toBe(1); // min is now 1, max is 10
    expect(clamp(100, 10, 1)).toBe(10); // max is 10
  });
});
