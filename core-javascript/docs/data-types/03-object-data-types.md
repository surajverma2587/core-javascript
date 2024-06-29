---
sidebar_position: 3
---

# Object Data Types

## What are object data types in JavaScript?

Object data types represent collections of values or more complex entities. These types are built on the Object data type and include various structures that can store multiple values and properties.

## Types of object data types

There are 5 object data types in JavaScript.

### Object

This data type includes a collection of properties, where each property is a key-value pair.

```js
const user = {
  firstName: "Bob",
  lastName: "Smith",
  age: 30,
};
```

### Array

This data type includes a list-like object used to store multiple values in a single variable.

```js
const colors = ["red", "green", "blue"];
```

### Function

This data type includes a block of code designed to perform a particular task.

```js
function greeting(name) {
  return "Hello, " + name;
}
```

### Date

This data type represents date and time formats.

```js
const now = new Date();
```

### RegExp

This data type represents regular expressions, used for pattern matching within strings.

```js
const pattern = /^[A-Za-z0-9]*$/;
```
