export const math = (num1, num2, operator) => {
  if (operator === "add") {
    return `Result: ${num1} + ${num2} = ${num1 + num2}`;
  } else if (operator === "subtract") {
    return `Result: ${num1} - ${num2} = ${num1 - num2}`;
  } else if (operator === "multiply") {
    return `Result: ${num1} * ${num2} = ${num1 * num2}`;
  } else if (operator === "divide") {
    return `Result: ${num1} / ${num2} = ${num1 / num2}`;
  } else {
    return "Please provide a valid operator.";
  }
};
