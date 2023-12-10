console.log("hello");

const myMath = {
  num1: 3,
  num2: 2,
};

console.log(myMath);

myMath.add = function (num1, num2) {
  return num1 + num2;
};

const result1 = myMath.add(5, 5);
console.log(result1);

myMath.multiply = function () {
  return this.num1 * this.num2;
};

const result2 = myMath.multiply();
console.log(result2);

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
