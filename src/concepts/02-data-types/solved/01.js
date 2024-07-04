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
  const user = new Map();

  user.set("firstName", "Bob");
  user.set("lastName", "Smith");

  console.log(user.get("firstName"));
  console.log(user.get("lastName"));
};

export const setDataType = () => {
  const numbers = new Set();

  numbers.add(1);
  numbers.add(2);

  console.log(numbers.size);
};
