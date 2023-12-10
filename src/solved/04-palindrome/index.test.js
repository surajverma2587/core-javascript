import { palindrome } from ".";

describe("palindrome", () => {
  it("should return expected message for a valid palindrome", () => {
    const expected = "Hurray, noon a palindrome!";
    const actual = palindrome("noon");

    expect(actual).toEqual(expected);
  });

  it("should return expected message for a valid palindrome regardless of casing", () => {
    const expected = "Hurray, NoOn a palindrome!";
    const actual = palindrome("NoOn");

    expect(actual).toEqual(expected);
  });

  it("should return expected message for an invalid palindrome", () => {
    const expected = "Sorry, moon is not a palindrome!";
    const actual = palindrome("moon");

    expect(actual).toEqual(expected);
  });

  it("should return an error message when the string contains white-spacing", () => {
    const expected = "Error, invalid input string!";
    const actual = palindrome("  NoOn   ");

    expect(actual).toEqual(expected);
  });

  it("should return an error message when the string contains a number", () => {
    const expected = "Error, invalid input string!";
    const actual = palindrome("noon123");

    expect(actual).toEqual(expected);
  });

  it("should return an error message when the string contains a special character", () => {
    const expected = "Error, invalid input string!";
    const actual = palindrome("noon!");

    expect(actual).toEqual(expected);
  });

  it("should return an error message when the string contains mixed characters", () => {
    const expected = "Error, invalid input string!";
    const actual = palindrome("noon123!");

    expect(actual).toEqual(expected);
  });

  it("should return an error message when the string is empty", () => {
    const expected = "Error, invalid input string!";
    const actual = palindrome("");

    expect(actual).toEqual(expected);
  });

  it("should return an error message when the string is undefined", () => {
    const expected = "Error, invalid input string!";
    const actual = palindrome();

    expect(actual).toEqual(expected);
  });

  it("should return an error message when the input is not a string", () => {
    const expected = "Error, invalid input string!";
    const actual = palindrome(111);

    expect(actual).toEqual(expected);
  });
});
