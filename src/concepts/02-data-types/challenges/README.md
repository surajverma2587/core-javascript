# Data Types

## User Story

As a developer I should be able to declare different data types in my codebase.

## Acceptance Criteria

- I should be able to perform the following operations with primitive data types:

  - declare a variable with a string value of `Tesla` and log the value and `typeof` in the console
  - declare a variable with a number value of `80000` and log the value and `typeof` in the console
  - declare a variable with a boolean value of `true` and log the value and `typeof` in the console
  - declare a variable with a big integer value of `12345678900000000n` and log the value and `typeof` in the console

- I should be able to perform the following operations with object data types:

  - declare a variable with an object value containing key value pairs: brand `"Apple"` | device: `"MacBook Pro"` | year: `2024`, and log the value and `typeof` in the console
  - declare a variable with an array value of strings: `"Alice Smith"`, `"Bob Smith"`, `"Carol Smith"` and log the value and `typeof` in the console
  - declare a variable with a function value and log the `typeof` in the console
  - declare a variable with an instance of Date as the value and log the `instanceof` in the console
  - declare a variable with an instance of RegExp as the value and log the `instanceof` in the console

- I should be able to perform the following operations with special data types:
  - declare a Map with `firstName` as `"Bob"` and `lastName` as `"Smith"`

## Getting Started

Run the following command in your terminal to start the test runner to run in watch mode.

```shell
npm run test:data-types
```

Complete the code in the [challenges folder](../challenges/) and ensure that all tests are passing.
