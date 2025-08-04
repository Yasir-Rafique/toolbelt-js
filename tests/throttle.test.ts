import { throttle } from "../src/throttle";

describe("throttle", () => {
  jest.useFakeTimers();

  it("should only allow function to run once per interval", () => {
    const mockFn = jest.fn();
    const throttled = throttle(mockFn, 100);

    // Call multiple times in quick succession
    throttled();
    throttled();
    throttled();

    expect(mockFn).toHaveBeenCalledTimes(1);

    // Advance time less than interval, call again
    jest.advanceTimersByTime(50);
    throttled();
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Advance time past interval, call again
    jest.advanceTimersByTime(51);
    throttled();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("should pass arguments to the original function", () => {
    const mockFn = jest.fn();
    const throttled = throttle(mockFn, 100);

    throttled("foo", 42);
    expect(mockFn).toHaveBeenCalledWith("foo", 42);
  });
});
