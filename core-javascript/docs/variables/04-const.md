---
sidebar_position: 4
---

# const

## What is the const keyword in JavaScript?

The `const` statement in JavaScript is used to also declare a variable that is block scoped. Once a value is assigned to the variable declared using the `const` statement it cannot be changed. However, this is not the case for values such as objects, arrays or function which will be covered later on.

```js
const x = 1;
console.log(x); // 1
```

All `const` statements should be followed by an assignment operation by using the assignment variable. If this does not happen then we see a JavaScript error being thrown which reads `Uncaught SyntaxError: Missing initializer in const declaration`

```js
const x; // Uncaught SyntaxError: Missing initializer in const declaration
```

## block-scoped let

A block in JavaScript is a group of zero or more statements. The block is represented by a pair of curly braces `{}`. Variables declared using the `let` statement are block scoped meaning they are only made available within the block they are defined in. Blocks are usually associated with `if` or `if/else` statements, `for` loops, `function` blocks, `switch` statements, `try/catch` blocks, static blocks, etc.

```js
const x = 1;

if (x === 1) {
  const x = 2;
  console.log(x); // 2
}

console.log(x); // 1
```

The first `x` variable is globally scoped meaning it is accessible within the current module globally and logs `1` whereas the second `x` variable (a different variable) within the `if` statement is only scoped to the `if` block which logs `2`.

If you try to access a variable declared using the `const` keyword outside it's scope then an `Uncaught ReferenceError` is thrown by JavaScript which indicates that JavaScript was unable to reference the variable by name and hence failed to retrieve the value.

```js
if (true) {
  const x = 1;
  console.log(x); // 1
}

console.log(x); // Uncaught ReferenceError: x is not defined
```

## const in objects and arrays

We can use the `const` statement to declare values as objects or arrays. We can mutate the values in the object or the array but we cannot replace the entire object or array with a new one.

```js
const myObj = {};
myObj = { foo: "bar" }; // Uncaught TypeError: Assignment to constant variable

const myArr = [];
myArr = [1, 2, 3]; // Uncaught TypeError: Assignment to constant variable
```

```js
const myObj = {};
myObj.foo = "bar"; // { foo: "bar" }

const myArr = [];
myArr.push(1); // [1]
myArr.push(2); // [1, 2]
myArr.push(3); // [1, 2, 3]
```
