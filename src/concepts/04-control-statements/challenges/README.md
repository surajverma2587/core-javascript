# Control Statements

## User Story

As a developer I should be able to use JavaScript control statements in my codebase.

## Acceptance Criteria

- the `getInfoByUvIndex` function has a parameter called `uvIndex` which accepts a value of UV index as a number.

  - when I pass a UV index with a value less than or equal to 0 then I should see a message `"ERROR: UV Index should be a positive integer"` displayed in the console
  - when I pass a UV index with a decimal value then I should see a message `"ERROR: UV Index should be a positive integer"` displayed in the console
  - when I pass a UV index value of 1 or 2 then I should see a message `"Low"` displayed in the console
  - when I pass a UV index value of 3, 4 or 5 then I should see a message `"Moderate"` displayed in the console
  - when I pass a UV index value of 6 or 7 then I should see a message `"High"` displayed in the console
  - when I pass a UV index value of 8, 9 or 10 then I should see a message `"Very High"` displayed in the console
  - when I pass a UV index value greater than 11 then I should see a message `"Extreme"` displayed in the console

- the `countdown` function displays the countdown values from 5 to 1 as follows:
  - when countdown value is 5 then display `"Time remaining: 5"`
  - when countdown value is 4 then display `"Time remaining: 4"`
  - when countdown value is 3 then display `"Time remaining: 3"`
  - when countdown value is 2 then display `"Time remaining: 2"`
  - when countdown value is 1 then display `"Time remaining: 1"`
  - when countdown value is 0 then display `"GAME OVER"`

## Getting Started

Run the following command in your terminal to start the test runner to run in watch mode.

```shell
npm run test:control-statements
```

Complete the code in the [challenges folder](../challenges/) and ensure that all tests are passing.
