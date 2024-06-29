---
sidebar_position: 2
---

# Primitive Data Types

## What are primitive data types in JavaScript?

Primitive data types are the most basic data types. Most of the time, a primitive value is represented directly at the lowest level of the language implementation.

In JavaScript, they are not objects and do not have methods or properties associated with them. All primitives are immutable; that is, they cannot be altered.

## Types of primitive data types

There are 7 primitive data types in JavaScript.

### Number

This data type represents both integer and floating-point numbers.

```js
const num1 = 30;
const num2 = 0.3;
const num3 = -10;
const num4 = -10.7;
const num5 = 0;
```

### String

This data type represents a sequence of characters. It is always encapsulated within single quotes `''` or double quotes `""`.

```js
const str1 = "Hello, World!";
const str2 = "JavaScript";
const str3 = "10";
const str4 = "-10.7";
const str5 = "£35.00";
```

### Boolean

This data type represents a logical entity and can have two values: `true` or `false`.

```js
const bool1 = true;
const bool2 = false;
```

### Undefined

This data type represents a variable that has been declared but has not yet been assigned a value.

```js
let x; // x has a value of undefined
```

### Null

This data type represents the intentional absence of any variable value.

```js
let x = null; // x has a value of null
```

### Symbol

This data type represents a unique and immutable identifier.

```js
let sym = Symbol("description");
```

### BigInt

This data type represents whole numbers larger than the `Number` type can safely represent. A `BigInt` is created by appending `n` to the end of an integer or by calling the `BigInt()` function.

```js
const bigInt1 = 1234567890123456789012345678901234567890n; // BigInt value of 1234567890123456789012345678901234567890n
const bigInt2 = BigInt(12); // BigInt value of 12n
```

## Primitives as methods

Primitives have no methods but still behave as if they do. When properties are accessed on primitives, JavaScript auto-boxes the value into a wrapper object and accesses the property on that object instead. For example, `"foo".includes("f")` implicitly creates a `String` wrapper object and calls `String.prototype.includes()` on that object. This auto-boxing behaviour is not observable in JavaScript code but is a good mental model of various behaviours.
