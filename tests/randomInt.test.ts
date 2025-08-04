import { randomInt } from "../src/randomInt";

describe("randomInt", () => {
  it("should return a value between min and max (inclusive)", () => {
    for (let i = 0; i < 100; i++) {
      const n = randomInt(1, 5);
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(5);
    }
  });

  it("should work even if min > max", () => {
    for (let i = 0; i < 100; i++) {
      const n = randomInt(10, 5);
      expect(n).toBeGreaterThanOrEqual(5);
      expect(n).toBeLessThanOrEqual(10);
    }
  });

  it("should throw if min or max is not finite", () => {
    expect(() => randomInt(NaN, 2)).toThrow();
    expect(() => randomInt(1, Infinity)).toThrow();
  });
});
