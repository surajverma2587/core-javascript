const vehicle = new Map();

vehicle.set("make", "Tesla");
vehicle.set("model", "Model S");

console.log(vehicle.get("make"));
console.log(vehicle.get("model"));

vehicle.set("model", "Model T");
console.log(vehicle.get("model"));

const userIds = new Set();

userIds.add(111);
userIds.add(222);
userIds.add(333);
userIds.add(222);

console.log(userIds);
console.log(userIds.size);
