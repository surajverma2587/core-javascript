export const getTaxPercentage = (annualIncome, taxYear) => {
  if (taxYear === "2021/2022") {
    if (annualIncome > 0 && annualIncome <= 12500) {
      return 0;
    }

    if (annualIncome > 12500 && annualIncome <= 40000) {
      return 20;
    }

    if (annualIncome > 40000 && annualIncome <= 100000) {
      return 40;
    }

    if (annualIncome > 100000) {
      return 45;
    }
  }

  if (taxYear === "2022/2023") {
    if (annualIncome > 0 && annualIncome <= 12500) {
      return 0;
    }

    if (annualIncome > 12500 && annualIncome <= 40000) {
      return 18;
    }

    if (annualIncome > 40000 && annualIncome <= 100000) {
      return 35;
    }

    if (annualIncome > 100000) {
      return 40;
    }
  }
};
