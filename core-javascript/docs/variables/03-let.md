---
sidebar_position: 3
---

# let

## What is the let keyword in JavaScript?

The `let` statement in JavaScript is used to declare a variable that is block-scoped.

Variables that are declared using the `let` statement can be replaced in value.

```js
let x = 1;
console.log(x); // 1

x = 2;
console.log(x); // 2
```

When using the `let` statement if the variable is not assigned a value then JavaScript will implicitly assign a value of `undefined` to the variable;

```js
let x;
console.log(x); // undefined
```

## block-scoped let

A block in JavaScript is a group of zero or more statements. The block is represented by a pair of curly braces `{}`. Variables declared using the `let` statement are block scoped meaning they are only made available within the block they are defined in. Blocks are usually associated with `if` or `if/else` statements, `for` loops, `function` blocks, `switch` statements, `try/catch` blocks, static blocks, etc.

```js
let x = 1;

if (x === 1) {
  let x = 2;
  console.log(x); // 2
}

console.log(x); // 1
```

The first `x` variable is globally scoped meaning it is accessible within the current module globally and logs `1` whereas the second `x` variable within the `if` statement is only scoped to the `if` block which logs `2`.

If you try to access a variable declared using the `let` keyword outside it's scope then an `Uncaught ReferenceError` is thrown by JavaScript which indicates that JavaScript was unable to reference the variable by name and hence failed to retrieve the value.

```js
if (true) {
  let x = 1;
  console.log(x); // 1
}

console.log(x); // Uncaught ReferenceError: x is not defined
```

## Redeclaration Rules

We cannot redeclare a block-scoped `let` variable within the same scope. However, with `var` variables they can be redeclared within the same scope.

```js
if (true) {
  let x = 1;
  console.log(x); // 1

  let x = 2;
  console.log(x); // Uncaught SyntaxError: Identifier 'x' has already been declared
}
```

```js
if (true) {
  let x = 1;
  console.log(x); // 1
}

let x = 2;
console.log(x); // 2
```

```js
if (true) {
  var x = 1;
  console.log(x); // 1

  var x = 2;
  console.log(x); // 2
}
```
