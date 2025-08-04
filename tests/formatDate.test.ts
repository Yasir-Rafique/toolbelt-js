import { formatDate } from "../src/formatDate";

describe("formatDate", () => {
  it("should format date as YYYY-MM-DD", () => {
    const date = new Date(2020, 0, 5); // Jan 5, 2020
    expect(formatDate(date, "YYYY-MM-DD")).toBe("2020-01-05");
  });

  it("should format date as DD/MM/YYYY HH:mm", () => {
    const date = new Date(2020, 10, 5, 9, 7); // Nov 5, 2020, 09:07
    expect(formatDate(date, "DD/MM/YYYY HH:mm")).toBe("05/11/2020 09:07");
  });

  it("should format date as HH:mm:ss", () => {
    const date = new Date(2021, 3, 1, 18, 2, 9); // Apr 1, 2021, 18:02:09
    expect(formatDate(date, "HH:mm:ss")).toBe("18:02:09");
  });
});
