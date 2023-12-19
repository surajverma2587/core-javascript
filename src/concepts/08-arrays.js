const users = ["Alice", "Bob", "Carol", "Dave"];
console.log(users);

users.push("Eve");
console.log(users);

users.pop();
console.log(users);

users.pop();
console.log(users);

const indexOf3 = users.indexOf(3);
console.log(indexOf3);

const indexOf4 = users.indexOf(4);
console.log(indexOf4);

// get value from array by index number
const user = users[2];
console.log(user);

const newArray = new Array(5);
console.log(newArray);

newArray.push("hello");
console.log(newArray);

const fillArray = newArray.fill("*");
console.log(fillArray);
