import { double, average, evenNumbers, contains } from "./01";

describe("Array operations", () => {
  describe("double", () => {
    test("should double each number in a non-empty array", () => {
      expect(double([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
    });

    test("should return an empty array when given an empty array", () => {
      expect(double([])).toEqual([]);
    });

    test("should handle negative numbers", () => {
      expect(double([-1, -2, 0, 2])).toEqual([-2, -4, 0, 4]);
    });
  });

  describe("average", () => {
    test("should calculate the correct average for positive numbers", () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
    });

    test("should handle an array with a single number", () => {
      expect(average([42])).toBe(42);
    });

    test("should handle negative numbers", () => {
      expect(average([-1, 0, 1])).toBe(0);
    });

    test("should return 0 for an empty array", () => {
      expect(average([])).toBe(0);
    });
  });

  describe("evenNumbers", () => {
    test("should return only even numbers from a mixed array", () => {
      expect(evenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    });

    test("should return an empty array when no even numbers are present", () => {
      expect(evenNumbers([1, 3, 5, 7])).toEqual([]);
    });

    test("should handle negative even numbers", () => {
      expect(evenNumbers([-2, -1, 0, 1, 2])).toEqual([-2, 0, 2]);
    });

    test("should return an empty array for an empty input array", () => {
      expect(evenNumbers([])).toEqual([]);
    });
  });

  describe("contains", () => {
    test("should return true when the target is in the array", () => {
      expect(contains([1, 2, 3, 4, 5], 3)).toBe(true);
    });

    test("should return false when the target is not in the array", () => {
      expect(contains([1, 2, 3, 4, 5], 6)).toBe(false);
    });

    test("should handle an empty array", () => {
      expect(contains([], 1)).toBe(false);
    });

    test("should work with negative numbers", () => {
      expect(contains([-1, -2, -3], -2)).toBe(true);
    });
  });
});
