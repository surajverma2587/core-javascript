import { fizzBuzz } from ".";

describe("fizzBuzz", () => {
  test("should render the expected fizz buzz sequence until 6", () => {
    const expected = "1, 2, Fizz, 4, Buzz, Fizz";
    const actual = fizzBuzz(6);

    expect(actual).toEqual(expected);
  });

  test("should render the expected fizz buzz sequence until 16", () => {
    const expected =
      "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16";
    const actual = fizzBuzz(16);

    expect(actual).toEqual(expected);
  });

  test("should render the expected fizz buzz sequence until 3", () => {
    const expected = "1, 2, Fizz";
    const actual = fizzBuzz(3);

    expect(actual).toEqual(expected);
  });

  test("should render the expected fizz buzz sequence until 5", () => {
    const expected = "1, 2, Fizz, 4, Buzz";
    const actual = fizzBuzz(5);

    expect(actual).toEqual(expected);
  });

  test("should render the expected message for an ending number that is negative", () => {
    const expected =
      "Please enter a valid ending number, should be a positive integer.";
    const actual = fizzBuzz(-6);

    expect(actual).toEqual(expected);
  });

  test("should render the expected message for an ending number that is a decimal", () => {
    const expected =
      "Please enter a valid ending number, should be a positive integer.";
    const actual = fizzBuzz(6.5);

    expect(actual).toEqual(expected);
  });

  test("should render the expected message for an ending number that is a negative decimal", () => {
    const expected =
      "Please enter a valid ending number, should be a positive integer.";
    const actual = fizzBuzz(-6.5);

    expect(actual).toEqual(expected);
  });

  test("should render the expected message for an ending number that is undefined", () => {
    const expected =
      "Please enter a valid ending number, should be a positive integer.";
    const actual = fizzBuzz();

    expect(actual).toEqual(expected);
  });
});
