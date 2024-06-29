---
sidebar_position: 4
---

# Special Data Types

## What are special data types in JavaScript?

Special data types can refer to advanced or less commonly used types that extend beyond the basic primitives and standard objects. These special data types include structures and features that facilitate more complex data handling and programming patterns.

### Types of special data types

### Map

This special data type includes a collection of keyed data items, like an object. Keys can be any type. Maintains the insertion order of keys.

```js
const map = new Map();

map.set("name", "Bob Smith");
map.set(123, ["a", "b", "c"]);

console.log(map.get(123)); // Output: ["a", "b", "c"]
```

### Set

This special data type includes a collection of unique values, meaning no duplicates are allowed.

```js
const set = new Set();

set.add(1);
set.add(2);
set.add(2); // Duplicate, will be ignored

console.log(set.size); // Output: 2
```
