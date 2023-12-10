const firstName = "Bob";
const lastName = "Smith";

const concatenatedString = "Welcome " + firstName + " " + lastName + "!";
console.log(concatenatedString);

const templateString = `Welcome ${firstName} ${lastName}!`;
console.log(templateString);

const result = `Result: ${3 + 2}`;
console.log(result);

const sum = (num1, num2) => {
  return num1 + num2;
};

const anotherResult = `Result: ${sum(3, 2)}`;
console.log(anotherResult);

const isLoggedIn = true;

const message = `Please ${isLoggedIn ? "logout" : "login"}`;
console.log(message);
