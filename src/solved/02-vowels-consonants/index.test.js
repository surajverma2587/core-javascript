import { vowelsAndConsonants } from ".";

describe("vowelsAndConsonants", () => {
  it("should return the expected count of vowels and consonants for a valid sentence", () => {
    const expected = "Vowels: 5 | Consonants: 8";
    const actual = vowelsAndConsonants("This is amazing");

    expect(actual).toEqual(expected);
  });

  it("should return the expected count of vowels as 0 and consonants as non-zero for a valid sentence", () => {
    const expected = "Vowels: 0 | Consonants: 17";
    const actual = vowelsAndConsonants("Try my dry rhythm cry");

    expect(actual).toEqual(expected);
  });

  it("should return the expected count of vowels as non-zero and consonants as 0 for a valid sentence", () => {
    const expected = "Vowels: 11 | Consonants: 0";
    const actual = vowelsAndConsonants("oo ooo ooouuu");

    expect(actual).toEqual(expected);
  });

  it("should return the expected count of vowels and consonants for a sentence containing numbers", () => {
    const expected = "Vowels: 7 | Consonants: 9";
    const actual = vowelsAndConsonants("Welcome to the year 2050");

    expect(actual).toEqual(expected);
  });

  it("should return the expected count of vowels and consonants for a sentence containing special characters", () => {
    const expected = "Vowels: 5 | Consonants: 10";
    const actual = vowelsAndConsonants("Dude where's my car?");

    expect(actual).toEqual(expected);
  });

  it("should return the expected count of vowels and consonants for a sentence containing special characters and numbers", () => {
    const expected = "Vowels: 5 | Consonants: 12";
    const actual = vowelsAndConsonants("Dude where's my 2nd car?");

    expect(actual).toEqual(expected);
  });

  it("should return the error message when no alphabetical characters are present in the sentence", () => {
    const expected =
      "Error: Invalid sentence, should contain alphabetical characters at minimum";
    const actual = vowelsAndConsonants("#123");

    expect(actual).toEqual(expected);
  });

  it("should return the error message when sentence is an empty string", () => {
    const expected =
      "Error: Invalid sentence, should contain alphabetical characters at minimum";
    const actual = vowelsAndConsonants("");

    expect(actual).toEqual(expected);
  });

  it("should return the error message when sentence is undefined", () => {
    const expected =
      "Error: Invalid sentence, should contain alphabetical characters at minimum";
    const actual = vowelsAndConsonants();

    expect(actual).toEqual(expected);
  });
});
