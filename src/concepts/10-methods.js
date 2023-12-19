console.log("hello");

const myMath = {
  num1: 3,
  num2: 2,
};

console.log(myMath);

myMath.add = function (num1, num2) {
  return num1 + num2;
};

const addResult = myMath.add(5, 5);
console.log(addResult);

myMath.multiply = function () {
  return this.num1 * this.num2;
};

const multiplyResult = myMath.multiply();
console.log(multiplyResult);

const user = {
  firstName: "Bob",
  lastName: "Smith",
  greeting: function () {
    return `Welcome ${this.firstName} ${this.lastName}`;
  },
  goodbye: () => {
    return `Goodbye ${this.firstName} ${this.lastName}`;
  },
};

const message1 = user.greeting();
console.log(message1);

const message2 = user.goodbye();
console.log(message2);
