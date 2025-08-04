import { capitalize } from "../src/capitalize";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
    expect(capitalize("a")).toBe("A");
  });

  it("should not change the rest of the string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
    expect(capitalize("javaScript")).toBe("JavaScript");
  });

  it("should handle empty or non-string values", () => {
    expect(capitalize("")).toBe("");
    // @ts-expect-error
    expect(capitalize(null)).toBe(null);
    // @ts-expect-error
    expect(capitalize(undefined)).toBe(undefined);
  });
});
