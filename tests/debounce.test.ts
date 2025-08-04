import { debounce } from "../src/debounce";

jest.useFakeTimers();

describe("debounce", () => {
  it("should call the function only after delay", () => {
    const mockFn = jest.fn();
    const debounced = debounce(mockFn, 100);

    debounced();
    debounced();
    debounced();

    // Fast-forward time less than the delay: function should not be called yet
    jest.advanceTimersByTime(99);
    expect(mockFn).not.toHaveBeenCalled();

    // Fast-forward time past the delay: function should be called once
    jest.advanceTimersByTime(2);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should pass arguments to the original function", () => {
    const mockFn = jest.fn();
    const debounced = debounce(mockFn, 50);

    debounced("hello", 42);
    jest.advanceTimersByTime(51);

    expect(mockFn).toHaveBeenCalledWith("hello", 42);
  });
});
