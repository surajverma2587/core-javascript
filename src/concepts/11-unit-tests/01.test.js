import { math } from "./01";

describe("math", () => {
  test("should return the sum of 2 numbers", () => {
    const expected = "Result: 3 + 2 = 5";
    const actual = math(3, 2, "add");

    expect(actual).toEqual(expected);
  });

  test("should return the difference of 2 numbers", () => {
    const expected = "Result: 3 - 2 = 1";
    const actual = math(3, 2, "subtract");

    expect(actual).toEqual(expected);
  });

  test("should return the product of 2 numbers", () => {
    const expected = "Result: 3 * 2 = 6";
    const actual = math(3, 2, "multiply");

    expect(actual).toEqual(expected);
  });

  test("should return the quotient of 2 numbers", () => {
    const expected = "Result: 3 / 2 = 1.5";
    const actual = math(3, 2, "divide");

    expect(actual).toEqual(expected);
  });

  test("should return the error message for invalid operator", () => {
    const expected = "Please provide a valid operator.";
    const actual = math(3, 2, "modulus");

    expect(actual).toEqual(expected);
  });
});
