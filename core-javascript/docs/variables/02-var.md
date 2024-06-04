---
sidebar_position: 2
---

# var

## What is the var keyword in JavaScript?

The `var` statement in JavaScript is used to declare a variable that can be either globally-scoped or function-scoped.

Variables that are declared using the `var` statement can be replaced in value.

```js
var x = 1;
console.log(x); // 1

x = 2;
console.log(x); // 2
```

When using the `var` statement if the variable is not assigned a value then JavaScript will implicitly assign a value of `undefined` to the variable;

```js
var x;
console.log(x); // undefined
```

## globally-scoped var

```js
var x = 1;
console.log(x); // 1
```

The `var` statement is not blocked scoped which means any variables declared within control statements like `if/else` or `for` loops, etc. can be accessed outside the block.

```js
const x = 1;
console.log(x); // 1

if (x === 1) {
  var y = 2;
}

console.log(y); // 2
```

The `var` statement can re-declare a globally-scoped variable within a block if is has already been declared.

```js
var x = 1;
console.log(x); // 1

if (x === 1) {
  var x = 2;
  console.log(x); // 2
}

console.log(x); // 2
```

## function-scoped var

```js
var x = 1;
console.log(x); // 1

function foo() {
  console.log(x); // undefined

  var x = 2;
  console.log(x); // 2
}

foo();

console.log(x); // 1
```

The first variable `x` is hoisted within the global scope and a value of `undefined` is assigned to the variable `x` after which a value of `1` is assigned to it followed by the first console log which displays `1`. Due to variable hoisting in JavaScript, the variable `x` inside the function `foo` is hoisted to the top of the function scope of `foo` with a value of `undefined` followed by the second console log which displays `undefined`. Later on in the function `foo` the value of `x` is assigned to `2` followed by the third console log which displays `2`. The final console log still references the globally-scoped value of `x` which is `1`.

## var hoisting

`var` declarations, wherever they occur in a script, are processed before any code within the script is executed. Declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behaviour is called hoisting, as it appears that the variable declaration is moved to the top of the function, static initialization block, or script source in which it occurs.

```js
x = 1;
console.log(x): // 1

var x;
```

In the above example, the variable `x` is hoisted before the script is executed and has a value of `undefined`. The variable `x` is then assigned a value of `1` which results in a console log of `1`.
