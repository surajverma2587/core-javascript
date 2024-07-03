export const operators = () => {
  const grossSalary = 50000;
  const taxFreeAmount = 12500;
  const taxableAmount = grossSalary - taxFreeAmount;
  const taxPercentage = 30;
  const taxAmount = (taxableAmount * taxPercentage) / 100;
  const takeHomeSalary = grossSalary - taxAmount;
  console.log("Your take home salary is £" + takeHomeSalary);
};
