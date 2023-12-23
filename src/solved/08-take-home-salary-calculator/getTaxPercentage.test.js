import { getTaxPercentage } from "./getTaxPercentage";

describe("getTaxPercentage", () => {
  describe("tax year 2021/2022", () => {
    it("should return the expected tax percentage for annual salary 30000", () => {
      const expected = 20;

      const actual = getTaxPercentage(30000, "2021/2022");

      expect(actual).toEqual(expected);
    });

    it("should return the expected tax percentage for annual salary 50000", () => {
      const expected = 40;

      const actual = getTaxPercentage(50000, "2021/2022");

      expect(actual).toEqual(expected);
    });

    it("should return the expected tax percentage for annual salary 150000", () => {
      const expected = 45;

      const actual = getTaxPercentage(150000, "2021/2022");

      expect(actual).toEqual(expected);
    });

    it("should return the expected tax percentage for annual salary 30000", () => {
      const expected = 0;

      const actual = getTaxPercentage(10000, "2021/2022");

      expect(actual).toEqual(expected);
    });
  });

  describe("tax year 2022/2023", () => {
    it("should return the expected tax percentage for annual salary 30000", () => {
      const expected = 18;

      const actual = getTaxPercentage(30000, "2022/2023");

      expect(actual).toEqual(expected);
    });

    it("should return the expected tax percentage for annual salary 50000", () => {
      const expected = 35;

      const actual = getTaxPercentage(50000, "2022/2023");

      expect(actual).toEqual(expected);
    });

    it("should return the expected tax percentage for annual salary 150000", () => {
      const expected = 40;

      const actual = getTaxPercentage(150000, "2022/2023");

      expect(actual).toEqual(expected);
    });

    it("should return the expected tax percentage for annual salary 30000", () => {
      const expected = 0;

      const actual = getTaxPercentage(10000, "2022/2023");

      expect(actual).toEqual(expected);
    });
  });

  describe("invalid cases", () => {
    it("should return undefined for an invalid negative salary", () => {
      const expected = undefined;

      const actual = getTaxPercentage(-30000, "2022/2023");

      expect(actual).toEqual(expected);
    });

    it("should return undefined for an invalid tax year", () => {
      const expected = undefined;

      const actual = getTaxPercentage(-30000, "2020/2021");

      expect(actual).toEqual(expected);
    });
  });
});
