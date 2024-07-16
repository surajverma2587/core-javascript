# Arrays

## User Story

As a developer I should be able to use JavaScript strings in my codebase.

## Acceptance Criteria

- create a function `sanitize` that accepts an email address and returns a sanitized version of the email address
  - the sanitized version should only contain lowercase letters and all trailing and ending white spaces removed
- create a function `formatAddress` that accepts an address object and returns a formatted version of the address

  - the formatted version should be a single string with each line separated by a comma and a space
  - the `secondLine` in the address object is optional and if it is not present then it should not be included in the formatted address

  ```js
  const address = {
    firstLine: "123, 4th Street"
    secondLine: "5th Block",
    city: "New York",
    state: "NY",
    zip: "10001"
  }
  ```
