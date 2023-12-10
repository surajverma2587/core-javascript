// Boolean Type
const isLoggedIn = true;
console.log(isLoggedIn);

// Null Type
const user = null;
console.log(user);

// Undefined Type
let counter;
console.log(counter);

// Number Type
const result = 100;
console.log(result);
// Min -(2^53) - 1
// Max 2^53 - 1

// String Type
const email = "bobsmith@email.com";
console.log(email);

// BigInt Type
const transactions = BigInt(Number.MAX_SAFE_INTEGER) + 1000n;
console.log(transactions);
// 9007199254740991n = 2^53 - 1

// Symbol Type
const fooSymbol = Symbol("foo");
console.log(fooSymbol);
Symbol.for("foo"); // Symbol("foo")
Symbol.keyFor(Symbol.for("foo")); // foo
