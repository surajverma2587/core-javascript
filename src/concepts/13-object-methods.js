const user = {
  firstName: "Bob",
  lastName: "Smith",
  age: 30,
  address: {
    addressLine1: "123, 4th Street",
    addressLine2: "",
    city: "London",
    postcode: "L1 234",
  },
};

const objectKeys = Object.keys(user);
console.log(objectKeys);

const hasKeyAge = objectKeys.includes("email");
console.log(hasKeyAge);

const objectValues = Object.values(user);
console.log(objectValues);

const objectEntries = Object.entries(user);
console.log(objectEntries);

const formattedAddress = Object.entries(user.address)
  .filter((entry) => {
    return entry[1];
  })
  .map((entry) => {
    return entry[1];
  })
  .join(", ");

console.log(formattedAddress);
