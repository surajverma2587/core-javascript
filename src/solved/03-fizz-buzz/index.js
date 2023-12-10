export const fizzBuzz = (stoppingNumber) => {
  if (
    !stoppingNumber ||
    !Number.isInteger(stoppingNumber) ||
    stoppingNumber < 0
  ) {
    return "Please enter a valid ending number, should be a positive integer.";
  }

  const results = [];

  for (let i = 1; i <= stoppingNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("FizzBuzz");
    } else if (i % 3 === 0) {
      results.push("Fizz");
    } else if (i % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(i);
    }
  }

  return results.join(", ");
};
