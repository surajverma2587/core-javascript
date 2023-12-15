# Random Password Generator

## User Story

> As a user I should be able to retrieve a random password based on certain password criteria.

## Password Criteria

- Should select a minimum of 2 password criteria:

  - Lowercase - `abcdefghijklmnopqrstuvwxyz`
  - Uppercase - `ABCDEFGHIJKLMNOPQRTSUVWXYZ`
  - Numeric - `1234567890`
  - Special character - `!@£$%^&*()_+`

- Should have a minimum length of 8 and a maximum length of 128 characters

## Acceptance Criteria

### 1

```
Given I want a randomly generated password

When I select the following criteria: lowercase and uppercase

And when I enter a length of 10

Then I should be presented with a message "Random password: jghGUIgIUH"
```

### 2

```
Given I want a randomly generated password

When I select the following criteria: lowercase and numeric

And when I enter a length of 10

Then I should be presented with a message "Random password: h325h453it"
```

### 3

```
Given I want a randomly generated password

When I select the following criteria: lowercase and special character

And when I enter a length of 10

Then I should be presented with a message "Random password: hwip&^%hiu"
```

### 4

```
Given I want a randomly generated password

When I select the following criteria: uppercase and numeric

And when I enter a length of 10

Then I should be presented with a message "Random password: H325H453IT"
```

### 5

```
Given I want a randomly generated password

When I select the following criteria: uppercase and special characters

And when I enter a length of 10

Then I should be presented with a message "Random password: HWIP&^%HIU"
```

### 6

```
Given I want a randomly generated password

When I select the following criteria: numeric and special characters

And when I enter a length of 10

Then I should be presented with a message "Random password: 65&^%&^76!"
```

### 7

```
Given I want a randomly generated password

When I select the following criteria: lowercase, uppercase and numeric

And when I enter a length of 10

Then I should be presented with a message "Random password: j2hG6Ig4UH"
```

### 8

```
Given I want a randomly generated password

When I select the following criteria: lowercase, uppercase and special characters

And when I enter a length of 10

Then I should be presented with a message "Random password: j*hG&Ig!UH"
```

### 9

```
Given I want a randomly generated password

When I select the following criteria: uppercase, numeric and special characters

And when I enter a length of 10

Then I should be presented with a message "Random password: J*H2&IG!U6"
```

### 10

```
Given I want a randomly generated password

When I select the following criteria: lowercase, numeric and special characters

And when I enter a length of 10

Then I should be presented with a message "Random password: j*h2&ig!u6"
```

### 11

```
Given I want a randomly generated password

When I select the following criteria: lowercase, uppercase, numeric and special characters

And when I enter a length of 10

Then I should be presented with a message "Random password: j*H2&iG!u6"
```

### 12

```
Given I want a randomly generated password

When I select the following criteria: lowercase and uppercase

And when I enter a length of 7

Then I should be presented with a message "Error: Please enter a valid length between 8 and 128 characters."
```

### 13

```
Given I want a randomly generated password

When I select the following criteria: lowercase and uppercase

And when I enter a length of 129

Then I should be presented with a message "Error: Please enter a valid length between 8 and 128 characters."
```

### 14

```
Given I want a randomly generated password

When I select the following criteria: lowercase and uppercase

And when I enter a length of -10

Then I should be presented with a message "Error: Please enter a valid length between 8 and 128 characters."
```

### 15

```
Given I want a randomly generated password

When I select the following criteria: lowercase and uppercase

And when I enter a length of 10.5

Then I should be presented with a message "Error: Please enter a valid length between 8 and 128 characters."
```

### 16

```
Given I want a randomly generated password

When I select the following criteria: lowercase and uppercase

And when I enter a length of -10.5

Then I should be presented with a message "Error: Please enter a valid length between 8 and 128 characters."
```

### 17

```
Given I want a randomly generated password

When I select the following criteria: lowercase

And when I enter a length of 10

Then I should be presented with a message "Error: Please select a minimum of 2 password criteria."
```

## Getting Started

- Open your [test file](./index.test.js) and complete the tests for the above mentioned acceptance criteria
- Open your [source file](./index.js) and complete the code until all your test cases pass

## Resources

- JavaScript docs [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- Jest docs [here](https://jestjs.io/docs/getting-started)
