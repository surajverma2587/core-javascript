import { calculator, authentication } from "./01";

describe("functions", () => {
  describe("calculator", () => {
    it("should return the expected result when 2 numbers are added", () => {
      const expected = 5;
      const actual = calculator(2, 3, "ADD");

      expect(actual).toEqual(expected);
    });

    it("should return the expected result when 2 numbers are subtracted", () => {
      const expected = 7;
      const actual = calculator(10, 3, "SUBTRACT");

      expect(actual).toEqual(expected);
    });

    it("should return the expected result when 2 numbers are multiplied", () => {
      const expected = 30;
      const actual = calculator(10, 3, "MULTIPLY");

      expect(actual).toEqual(expected);
    });

    it("should return the expected result when 2 numbers are divided", () => {
      const expected = 2;
      const actual = calculator(10, 5, "DIVIDE");

      expect(actual).toEqual(expected);
    });

    it("should return the expected result as modulus of 2 numbers", () => {
      const expected = 1;
      const actual = calculator(10, 3, "MODULUS");

      expect(actual).toEqual(expected);
    });

    it("should return the expected message for an invalid operation", () => {
      const expected = "Invalid operation";
      const actual = calculator(10, 3, "FOO");

      expect(actual).toEqual(expected);
    });
  });

  describe("authentication", () => {
    it("should return the expected message on successful authentication", () => {
      const expected = "Success";
      const actual = authentication("bobsmith", "Password123!");

      expect(actual).toEqual(expected);
    });

    it("should return the expected message on unsuccessful authentication", () => {
      const expected = "Invalid credentials";
      const actual = authentication("alicesmith", "Password123!");

      expect(actual).toEqual(expected);
    });

    it("should return the expected message on missing email", () => {
      const expected = "Missing credentials";
      const actual = authentication("", "Password123!");

      expect(actual).toEqual(expected);
    });

    it("should return the expected message on missing password", () => {
      const expected = "Missing credentials";
      const actual = authentication("bobsmith", "");

      expect(actual).toEqual(expected);
    });
  });
});
