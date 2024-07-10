# Functions

## User Story

As a developer I should be able to use JavaScript functions in my codebase.

## Acceptance Criteria

### calculator

- create a function `calculator` which accepts the following parameters:
  - `num1`: the first number you want to perform a math operation on
  - `num2`: the second number you want to perform a math operation on
  - `operation`: the math operation you want to perform which accepts the following values
    - ADD
    - SUBTRACT
    - MULTIPLY
    - DIVIDE
    - MODULUS
- the function should return the result of the math operation
- the function should return an error message if an invalid operation is passed as `"Invalid operation"`

### authentication

- create a function `authentication` which accepts the following parameters:
  - username: required string value
  - password: required string value
- the function should check if the username is equal to `"bobsmith"` and password is equal to `"Password123!"` and if they are equal the function returns a string `"Success"`
- the function should return `"Missing credentials"` if username or password is missing
- the function should return `"Invalid credentials"` if username and password is not equal to `"bobsmith"` and `"Password123!"`

## Getting Started

Run the following command in your terminal to start the test runner to run in watch mode.

```shell
npm run test:functions
```

Complete the code in the [challenges folder](../challenges/) and ensure that all tests are passing.
