const numbers = [1, 2, 3, 4];
console.log(numbers);

numbers.push(5);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.pop();
console.log(numbers);

const indexOf3 = numbers.indexOf(3);
console.log(indexOf3);

const indexOf4 = numbers.indexOf(4);
console.log(indexOf4);

// get value from array by index number
const value = numbers[2];
console.log(value);

const newArray = new Array(5);
console.log(newArray);

newArray.push("hello");
console.log(newArray);

const fillArray = newArray.fill("*");
console.log(fillArray);
