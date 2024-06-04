---
sidebar_position: 5
---

# Temporal Dead Zone

## What is the Temporal Dead Zone?

A variable declared with `let`, `const`, or `class` is said to be in a **temporal dead zone** (TDZ) from the start of the block until code execution reaches the place where the variable is declared and initialized.

While inside the TDZ, the variable has not been initialized with a value, and any attempt to access it will result in a ReferenceError. The variable is initialized with a value when execution reaches the place in the code where it was declared. If no initial value was specified with the variable declaration, it will be initialized with a value of `undefined`. This differs from `var` variables, which will return a value of `undefined` if they are accessed before they are declared.

```js
console.log(x); // undefined
console.log(y); // ReferenceError: Cannot access 'y' before initialization

var x = 1;
let y = 2;
```

The term **temporal** is used because the zone depends on the order of execution (time) rather than the order in which the code is written (position).
