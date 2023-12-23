import { takeHomeSalaryCalculator } from ".";

describe("takeHomeSalaryCalculator", () => {
  describe("tax year 2021/2022", () => {
    it("should return the expected object for annual salary of 30000", () => {
      const expected = {
        annualIncome: 30000,
        taxYear: "2021/2022",
        taxableIncome: 17500,
        taxPercentage: 20,
        taxAmount: 3500,
        takeHomeSalary: 26500,
      };

      const actual = takeHomeSalaryCalculator(30000, "2021/2022");

      expect(actual).toEqual(expected);
    });

    it("should return the expected object for annual salary of 50000", () => {
      const expected = {
        annualIncome: 50000,
        taxYear: "2021/2022",
        taxableIncome: 37500,
        taxPercentage: 40,
        taxAmount: 15000,
        takeHomeSalary: 35000,
      };

      const actual = takeHomeSalaryCalculator(50000, "2021/2022");

      expect(actual).toEqual(expected);
    });

    it("should return the expected object for annual salary of 150000", () => {
      const expected = {
        annualIncome: 150000,
        taxYear: "2021/2022",
        taxableIncome: 137500,
        taxPercentage: 45,
        taxAmount: 61875,
        takeHomeSalary: 88125,
      };

      const actual = takeHomeSalaryCalculator(150000, "2021/2022");

      expect(actual).toEqual(expected);
    });

    it("should return the expected object for annual salary of 10000", () => {
      const expected = {
        annualIncome: 10000,
        taxYear: "2021/2022",
        taxableIncome: 0,
        taxPercentage: 0,
        taxAmount: 0,
        takeHomeSalary: 10000,
      };

      const actual = takeHomeSalaryCalculator(10000, "2021/2022");

      expect(actual).toEqual(expected);
    });
  });

  describe("tax year 2022/2023", () => {
    it("should return the expected object for annual salary of 30000", () => {
      const expected = {
        annualIncome: 30000,
        taxYear: "2022/2023",
        taxableIncome: 17500,
        taxPercentage: 18,
        taxAmount: 3150,
        takeHomeSalary: 26850,
      };

      const actual = takeHomeSalaryCalculator(30000, "2022/2023");

      expect(actual).toEqual(expected);
    });

    it("should return the expected object for annual salary of 50000", () => {
      const expected = {
        annualIncome: 50000,
        taxYear: "2022/2023",
        taxableIncome: 37500,
        taxPercentage: 35,
        taxAmount: 13125,
        takeHomeSalary: 36875,
      };

      const actual = takeHomeSalaryCalculator(50000, "2022/2023");

      expect(actual).toEqual(expected);
    });

    it("should return the expected object for annual salary of 150000", () => {
      const expected = {
        annualIncome: 150000,
        taxYear: "2022/2023",
        taxableIncome: 137500,
        taxPercentage: 40,
        taxAmount: 55000,
        takeHomeSalary: 95000,
      };

      const actual = takeHomeSalaryCalculator(150000, "2022/2023");

      expect(actual).toEqual(expected);
    });

    it("should return the expected object for annual salary of 10000", () => {
      const expected = {
        annualIncome: 10000,
        taxYear: "2022/2023",
        taxableIncome: 0,
        taxPercentage: 0,
        taxAmount: 0,
        takeHomeSalary: 10000,
      };

      const actual = takeHomeSalaryCalculator(10000, "2022/2023");

      expect(actual).toEqual(expected);
    });
  });

  describe("error scenarios", () => {
    it("should return the expected error message when year is invalid", () => {
      const expected = "Please enter a valid tax year!";

      const actual = takeHomeSalaryCalculator(30000, "2020/2021");

      expect(actual).toEqual(expected);
    });

    it("should return the expected error message when salary is 0", () => {
      const expected = "Please enter a valid salary!";

      const actual = takeHomeSalaryCalculator(0, "2020/2021");

      expect(actual).toEqual(expected);
    });

    it("should return the expected error message when year is a negative number", () => {
      const expected = "Please enter a valid salary!";

      const actual = takeHomeSalaryCalculator(-30000, "2021/2022");

      expect(actual).toEqual(expected);
    });
  });
});
