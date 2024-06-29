---
sidebar_position: 5
---

# typeof vs instanceof

## What is the typeof keyword in JavaScript?

The `typeof` is an operator that returns a string indicating the type of the operand's value.

```js
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a well-known quirk in JavaScript)
console.log(typeof Symbol()); // "symbol"
console.log(typeof 123n); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
```

## What is the instancof keyword in JavaScript?

To check the type of special data types, you can use the `instanceof` operator. It tests the presence of `constructor.prototype` in the prototype chain of an object.

`instanceof` does not work with primitive values (like string, number, boolean, symbol, bigint, undefined, and null). It always returns false when used with them.

```js
const map = new Map();

console.log(map instanceof Map); // true
console.log(30 instanceof Number); // false
```
