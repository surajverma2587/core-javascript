export const primitiveDataTypes = () => {
  const vehicleMake = "Tesla";
  console.log(vehicleMake);
  console.log(typeof vehicleMake);

  const price = 80000;
  console.log(price);
  console.log(typeof price);

  const isNew = true;
  console.log(isNew);
  console.log(typeof isNew);

  const totalRevenue = 12345678900000000n;
  console.log(totalRevenue);
  console.log(typeof totalRevenue);
};

export const objectDataTypes = () => {
  const product = {
    brand: "Apple",
    device: "MacBook Pro",
    year: 2024,
  };
  console.log(product);
  console.log(typeof product);

  const users = ["Alice Smith", "Bob Smith", "Carol Smith"];
  console.log(users);
  console.log(typeof users);

  const greeting = () => {};
  console.log(typeof greeting);

  const now = new Date();
  console.log(now instanceof Date);

  const pattern = new RegExp(/^[a-z]$/);
  console.log(pattern instanceof RegExp);
};

export const mapDataType = () => {
  // declare a variable with a Map type
  const user = new Map();
  // set the firstName as a key
  user.set("firstName", "Bob");
  // set the lastName as a key
  user.set("lastName", "Smith");
  // display the value of firstName in the console
  console.log(user.get("firstName"));
  // display the value of lastName in the console
  console.log(user.get("lastName"));
};

export const setDataType = () => {
  // declare a variable with a Set type
  const numbers = new Set();
  // add one item to the set
  numbers.add(1);
  // add one item to the set
  numbers.add(2);
  // display the size of the set in the console
  console.log(numbers.size);
};
