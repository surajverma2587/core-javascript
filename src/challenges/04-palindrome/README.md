# Palindrome

## User Story

> As a user I should be able to determine if a given word is a palindrome.

## Acceptance Criteria

### 1

```
Given I want to check the word "noon"

When I enter the word

Then I should be presented with a message "Hurray, noon is a palindrome!"
```

### 2

```
Given I want to check the word "NoOn"

When I enter the word

Then I should be presented with a message "Hurray, NoOn is a palindrome!"
```

### 3

```
Given I want to check the word "moon"

When I enter the word

Then I should be presented with a message "Sorry, moon is not a palindrome!"
```

### 4

```
Given I want to check the word "  NoOn   "

When I enter the word

Then I should be presented with a message "Error, invalid input string!"
```

### 5

```
Given I want to check the word "noon123"

When I enter the word

Then I should be presented with a message "Error, invalid input string!"
```

### 6

```
Given I want to check the word "noon!"

When I enter the word

Then I should be presented with a message "Error, invalid input string!"
```

### 7

```
Given I want to check the word "noon123!"

When I enter the word

Then I should be presented with a message "Error, invalid input string!"
```

### 8

```
Given I want to check the word ""

When I enter the word

Then I should be presented with a message "Error, invalid input string!"
```

### 9

```
Given I want to check an undefined word

When I enter the word

Then I should be presented with a message "Error, invalid input string!"
```

### 10

```
Given I want to check the word 111 as a number

When I enter the word as a number

Then I should be presented with a message "Error, invalid input string!"
```

## Getting Started

- Open your [test file](./index.test.js) and complete the tests for the above mentioned acceptance criteria
- Open your [source file](./index.js) and complete the code until all your test cases pass

## Resources

- JavaScript docs [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- Jest docs [here](https://jestjs.io/docs/getting-started)
