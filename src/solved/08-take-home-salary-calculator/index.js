import { getTaxPercentage } from "./getTaxPercentage";

export const takeHomeSalaryCalculator = (annualIncome, taxYear) => {
  if (annualIncome <= 0) {
    return "Please enter a valid salary!";
  }

  if (taxYear !== "2021/2022" && taxYear !== "2022/2023") {
    return "Please enter a valid tax year!";
  }

  if (annualIncome <= 12500) {
    return {
      annualIncome,
      taxYear,
      taxableIncome: 0,
      taxPercentage: 0,
      taxAmount: 0,
      takeHomeSalary: annualIncome,
    };
  }

  const taxableIncome = annualIncome - 12500;

  const taxPercentage = getTaxPercentage(annualIncome, taxYear);

  const taxAmount = (taxableIncome * taxPercentage) / 100;

  const takeHomeSalary = annualIncome - taxAmount;

  return {
    annualIncome,
    taxYear,
    taxableIncome,
    taxPercentage,
    taxAmount,
    takeHomeSalary,
  };
};
