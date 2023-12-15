import {
  lowercase,
  uppercase,
  numbers,
  specialCharacters,
  randomPasswordGenerator,
} from ".";
import { getRandomIndex } from "./getRandomIndex";

jest.mock("./getRandomIndex");

const mockCharacter = (character, index) => {
  let characterIndex;

  if (lowercase.includes(character)) {
    characterIndex = lowercase.indexOf(character);
  }

  if (uppercase.includes(character)) {
    characterIndex = uppercase.indexOf(character);
  }

  if (numbers.includes(character)) {
    characterIndex = numbers.indexOf(character);
  }

  if (specialCharacters.includes(character)) {
    characterIndex = specialCharacters.indexOf(character);
  }

  getRandomIndex.mockReturnValueOnce(index).mockReturnValueOnce(characterIndex);
};

describe("randomPasswordGenerator", () => {
  it("should return the expected password for lowercase and uppercase", () => {
    mockCharacter("j", 0);
    mockCharacter("g", 0);
    mockCharacter("h", 0);
    mockCharacter("G", 1);
    mockCharacter("U", 1);
    mockCharacter("I", 1);
    mockCharacter("g", 0);
    mockCharacter("I", 1);
    mockCharacter("U", 1);
    mockCharacter("H", 1);

    const expected = "Random password: jghGUIgIUH";

    const actual = randomPasswordGenerator(10, {
      isLowercase: true,
      isUppercase: true,
      isNumeric: false,
      isSpecial: false,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected password for lowercase and numeric", () => {
    mockCharacter("h", 0);
    mockCharacter("3", 1);
    mockCharacter("2", 1);
    mockCharacter("5", 1);
    mockCharacter("h", 0);
    mockCharacter("4", 1);
    mockCharacter("5", 1);
    mockCharacter("3", 1);
    mockCharacter("i", 0);
    mockCharacter("t", 0);

    const expected = "Random password: h325h453it";

    const actual = randomPasswordGenerator(10, {
      isLowercase: true,
      isUppercase: false,
      isNumeric: true,
      isSpecial: false,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected password for lowercase and special characters", () => {
    mockCharacter("h", 0);
    mockCharacter("w", 0);
    mockCharacter("i", 0);
    mockCharacter("p", 0);
    mockCharacter("&", 1);
    mockCharacter("^", 1);
    mockCharacter("%", 1);
    mockCharacter("h", 0);
    mockCharacter("i", 0);
    mockCharacter("u", 0);

    const expected = "Random password: hwip&^%hiu";

    const actual = randomPasswordGenerator(10, {
      isLowercase: true,
      isUppercase: false,
      isNumeric: false,
      isSpecial: true,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected password for uppercase and numeric", () => {
    mockCharacter("H", 0);
    mockCharacter("3", 1);
    mockCharacter("2", 1);
    mockCharacter("5", 1);
    mockCharacter("H", 0);
    mockCharacter("4", 1);
    mockCharacter("5", 1);
    mockCharacter("3", 1);
    mockCharacter("I", 0);
    mockCharacter("T", 0);

    const expected = "Random password: H325H453IT";

    const actual = randomPasswordGenerator(10, {
      isLowercase: false,
      isUppercase: true,
      isNumeric: true,
      isSpecial: false,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected password for uppercase and special characters", () => {
    mockCharacter("H", 0);
    mockCharacter("W", 0);
    mockCharacter("I", 0);
    mockCharacter("P", 0);
    mockCharacter("&", 1);
    mockCharacter("^", 1);
    mockCharacter("%", 1);
    mockCharacter("H", 0);
    mockCharacter("I", 0);
    mockCharacter("U", 0);

    const expected = "Random password: HWIP&^%HIU";

    const actual = randomPasswordGenerator(10, {
      isLowercase: false,
      isUppercase: true,
      isNumeric: false,
      isSpecial: true,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected password for numeric and special characters", () => {
    mockCharacter("6", 0);
    mockCharacter("5", 0);
    mockCharacter("&", 1);
    mockCharacter("^", 1);
    mockCharacter("%", 1);
    mockCharacter("&", 1);
    mockCharacter("^", 1);
    mockCharacter("7", 0);
    mockCharacter("6", 0);
    mockCharacter("!", 1);

    const expected = "Random password: 65&^%&^76!";

    const actual = randomPasswordGenerator(10, {
      isLowercase: false,
      isUppercase: false,
      isNumeric: true,
      isSpecial: true,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected password for lowercase, uppercase and numeric", () => {
    mockCharacter("j", 0);
    mockCharacter("2", 2);
    mockCharacter("h", 0);
    mockCharacter("G", 1);
    mockCharacter("6", 2);
    mockCharacter("I", 1);
    mockCharacter("g", 0);
    mockCharacter("4", 2);
    mockCharacter("U", 1);
    mockCharacter("H", 1);

    const expected = "Random password: j2hG6Ig4UH";

    const actual = randomPasswordGenerator(10, {
      isLowercase: true,
      isUppercase: true,
      isNumeric: true,
      isSpecial: false,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected password for lowercase, uppercase and special characters", () => {
    mockCharacter("j", 0);
    mockCharacter("*", 2);
    mockCharacter("h", 0);
    mockCharacter("G", 1);
    mockCharacter("&", 2);
    mockCharacter("I", 1);
    mockCharacter("g", 0);
    mockCharacter("!", 2);
    mockCharacter("U", 1);
    mockCharacter("H", 1);

    const expected = "Random password: j*hG&Ig!UH";

    const actual = randomPasswordGenerator(10, {
      isLowercase: true,
      isUppercase: true,
      isNumeric: false,
      isSpecial: true,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected password for uppercase, numeric and special characters", () => {
    mockCharacter("J", 0);
    mockCharacter("*", 2);
    mockCharacter("H", 0);
    mockCharacter("2", 1);
    mockCharacter("&", 2);
    mockCharacter("I", 0);
    mockCharacter("G", 0);
    mockCharacter("!", 2);
    mockCharacter("U", 0);
    mockCharacter("6", 1);

    const expected = "Random password: J*H2&IG!U6";

    const actual = randomPasswordGenerator(10, {
      isLowercase: false,
      isUppercase: true,
      isNumeric: true,
      isSpecial: true,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected password for lowercase, numeric and special characters", () => {
    mockCharacter("j", 0);
    mockCharacter("*", 2);
    mockCharacter("h", 0);
    mockCharacter("2", 1);
    mockCharacter("&", 2);
    mockCharacter("i", 0);
    mockCharacter("g", 0);
    mockCharacter("!", 2);
    mockCharacter("u", 0);
    mockCharacter("6", 1);

    const expected = "Random password: j*h2&ig!u6";

    const actual = randomPasswordGenerator(10, {
      isLowercase: true,
      isUppercase: false,
      isNumeric: true,
      isSpecial: true,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected password for lowercase, uppercase, numeric and special characters", () => {
    mockCharacter("j", 0);
    mockCharacter("*", 3);
    mockCharacter("H", 1);
    mockCharacter("2", 2);
    mockCharacter("&", 3);
    mockCharacter("i", 0);
    mockCharacter("G", 1);
    mockCharacter("!", 3);
    mockCharacter("u", 0);
    mockCharacter("6", 2);

    const expected = "Random password: j*H2&iG!u6";

    const actual = randomPasswordGenerator(10, {
      isLowercase: true,
      isUppercase: true,
      isNumeric: true,
      isSpecial: true,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected error message for password length 7", () => {
    const expected =
      "Error: Please enter a valid length between 8 and 128 characters.";

    const actual = randomPasswordGenerator(7, {
      isLowercase: true,
      isUppercase: true,
      isNumeric: false,
      isSpecial: false,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected error message for password length 129", () => {
    const expected =
      "Error: Please enter a valid length between 8 and 128 characters.";

    const actual = randomPasswordGenerator(129, {
      isLowercase: true,
      isUppercase: true,
      isNumeric: false,
      isSpecial: false,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected error message for password length -10", () => {
    const expected =
      "Error: Please enter a valid length between 8 and 128 characters.";

    const actual = randomPasswordGenerator(-10, {
      isLowercase: true,
      isUppercase: true,
      isNumeric: false,
      isSpecial: false,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected error message for password length 10.5", () => {
    const expected =
      "Error: Please enter a valid length between 8 and 128 characters.";

    const actual = randomPasswordGenerator(10.5, {
      isLowercase: true,
      isUppercase: true,
      isNumeric: false,
      isSpecial: false,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected error message for password length -10.5", () => {
    const expected =
      "Error: Please enter a valid length between 8 and 128 characters.";

    const actual = randomPasswordGenerator(-10.5, {
      isLowercase: true,
      isUppercase: true,
      isNumeric: false,
      isSpecial: false,
    });

    expect(actual).toEqual(expected);
  });

  it("should return the expected error message when only one password criteria is selected", () => {
    const expected =
      "Error: Please enter a valid length between 8 and 128 characters.";

    const actual = randomPasswordGenerator(10, {
      isLowercase: false,
      isUppercase: false,
      isNumeric: false,
      isSpecial: false,
    });

    expect(actual).toEqual(expected);
  });
});
