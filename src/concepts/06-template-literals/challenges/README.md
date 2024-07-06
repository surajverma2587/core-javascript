# Variables

## User Story

As a developer I should be able to use JavaScript template literals in my codebase.

## Acceptance Criteria

- create a function `greeting` which accepts the following parameters:

  - `timeOfDay`: accepts only one of the following string values

    - `"morning"`
    - `"afternoon"`
    - `"evening"`
    - `"night"`

  - `user`: accepts an object with the following keys:

    - `firstName` with a string value
    - `lastName` with a string value

  - should return `"Good morning, Alice Smith!!"` when `timeOfDay` is `"morning"`
  - should return `"Good afternoon, Alice Smith!!"` when `timeOfDay` is `"afternoon"`
  - should return `"Good evening, Alice Smith!!"` when `timeOfDay` is `"evening"`
  - should return `"Goodnight, Alice Smith!!"` when `timeOfDay` is `"night"`

## Getting Started

Run the following command in your terminal to start the test runner to run in watch mode.

```shell
npm run test:template-literals
```

Complete the code in the [challenges folder](../challenges/) and ensure that all tests are passing.
