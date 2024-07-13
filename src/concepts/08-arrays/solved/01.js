export const double = (numbers) => {
  const multiplyByTwo = (number) => {
    return number * 2;
  };

  return numbers.map(multiplyByTwo);
};

export const average = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((acc, number) => {
    return acc + number;
  }, 0);

  return sum / numbers.length;
};

export const evenNumbers = (numbers) => {
  const isEven = (number) => {
    return number % 2 === 0;
  };

  return numbers.filter(isEven);
};

export const contains = (numbers, target) => {
  return numbers.includes(target);
};
