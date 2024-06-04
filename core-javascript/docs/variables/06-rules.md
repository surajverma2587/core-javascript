---
sidebar_position: 6
---

# Rules

## What are the best practices when using variables?

> **Use `let` and `const` instead of `var`**

`let` and `const` are block scoped which prevents common scoping issues that occur with `var`.

> **Prefer `const` by default**

Always use `const` to declare variables unless you want to reassign which is when you use `let`

> **Use descriptive and meaningful names**

Naming your variables with the appropriate names is very important to ensure that your codebase is readable by other engineers and also yourself.

> **Avoid Global Variables**

Avoid declaring variables globally and instead declare variables where they are used like within functions or blocks. Only declare a variable globally when the entire module requires access to that variable. Note that if you declare variables globally you can induce potential naming conflicts and bugs.

> **Initialise variables at the time of declaration**

Whenever possible, initialise variables with a value when you declare them to avoid undefined values being initialised to the variable.

> **Group related variable declarations**

Group related variables together for better readability, and separate them from unrelated declarations.

> **Use CamelCase for Variable Names**

This is a widely accepted convention in JavaScript. For example a variable name (first name) with 2 words is written like this using camel case: `firstName` where the first word is all lowercase and the first character in the second word is uppercase.

> **Avoid using reserved words as variable names**

Do not use JavaScript reserved words or keywords as variable names. For instance `const for = 5;` as `for` is a reserved keyword in JavaScript.

> **Declare variables in the narrowest scope possible**

Always ensure that you declare variables closest to where they are used and this will ensure that they have a narrow scope and can prevent potential conflicts and bugs.

> **Avoid implicit globals**

Implicit global declarations occur when a variable has no `var`, `let` or `const` keyword used in the variable declaration. For instance `x = 1;` will ensure that `x` is a global variable no matter where is it defined in the codebase.
