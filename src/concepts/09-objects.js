const user = {
  firstName: "Bob",
  lastName: "Smith",
  age: 30,
  isPremium: true,
};

console.log(user);

user.email = "bobsmith@email.com";
console.log(user);

const fullName = `${user.firstName} ${user.lastName}`;
console.log(fullName);

const objectKey = "contact";

user[objectKey] = "1234567890";
console.log(user);

const contactNumber = user[objectKey];
console.log(contactNumber);

const unknownValue = user.foo;
console.log(unknownValue);
