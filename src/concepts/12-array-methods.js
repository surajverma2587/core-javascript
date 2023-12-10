const numbers = [1, 2, 3, 4, 5];

const numbersString = numbers.join("");
console.log(numbersString);

const hasNumber5 = numbers.includes(5);
console.log(hasNumber5);

const displayNumber = (number) => {
  console.log(`This is number ${number}`);
};

numbers.forEach(displayNumber);

const doubleEachNumber = (number) => {
  return number * 2;
};

const doubleNumbers = numbers.map(doubleEachNumber);
console.log(doubleNumbers);

const getEvenNumber = (number) => {
  return number % 2 === 0;
};

const evenNumbers = numbers.filter(getEvenNumber);
console.log(evenNumbers);

const addNumberToSum = (accumulator, number) => {
  return accumulator + number;
};

const sum = numbers.reduce(addNumberToSum, 0);
console.log(sum);

const newArrayWithEmptyStrings = new Array(5).fill("");
console.log(newArrayWithEmptyStrings);
