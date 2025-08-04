import { sleep } from "../src/sleep";

describe("sleep", () => {
  jest.useFakeTimers();

  it("resolves after the given time", async () => {
    const promise = sleep(500);
    jest.advanceTimersByTime(500);
    await expect(promise).resolves.toBeUndefined();
  });
});
