# Pangram Challenge

## User Story

> As a user I should be able to determine if a given sentence is a pangram.

## What is a pangram?

A pangram is a sentence that contains every letter of the English alphabet. For example:

> The quick brown fox jumps over the lazy dog

## Acceptance Criteria

### 1

```
Given I want to check the sentence "The quick brown fox jumps over the lazy dog"

When I enter the sentence

Then I should be presented with a message "Hurray, it is a pangram!"
```

### 2

```
Given I want to check the sentence "THe qUiCk BroWn fOx JUMPS oVer ThE laZy dOG"

When I enter the sentence

Then I should be presented with a message "Hurray, it is a pangram!"
```

### 3

```
Given I want to check the sentence "123 THe qUiCk BroWn fOx JUMPS oVer ThE laZy dOG"

When I enter the sentence

Then I should be presented with a message "Hurray, it is a pangram!"
```

### 4

```
Given I want to check the sentence "123 THe qUiCk BroWn fOx JUMPS oVer ThE laZy dOG!!"

When I enter the sentence

Then I should be presented with a message "Hurray, it is a pangram!"
```

### 5

```
Given I want to check the sentence "   123 THe qUiCk BroWn fOx JUMPS oVer ThE laZy dOG!!   "

When I enter the sentence

Then I should be presented with a message "Hurray, it is a pangram!"
```

### 6

```
Given I want to check the sentence "I love JavaScript"

When I enter the sentence

Then I should be presented with a message "Sorry, it is NOT a pangram!"
```

### 7

```
Given I want to check the sentence "123 I love JavaScript"

When I enter the sentence

Then I should be presented with a message "Sorry, it is NOT a pangram!"
```

### 8

```
Given I want to check the sentence "123 I love JavaScript!!"

When I enter the sentence

Then I should be presented with a message "Sorry, it is NOT a pangram!"
```

### 9

```
Given I want to check the sentence "   123 I love JavaScript!!  "

When I enter the sentence

Then I should be presented with a message "Sorry, it is NOT a pangram!"
```

### 10

```
Given I want to check the sentence "123$%^"

When I enter the sentence

Then I should be presented with a message "Sorry, it is NOT a pangram!"
```

### 11

```
Given I want to check the sentence ""

When I enter the sentence

Then I should be presented with a message "Error, invalid sentence!"
```

### 12

```
Given I want to check an undefined sentence

When I enter the sentence

Then I should be presented with a message "Error, invalid sentence!"
```

## Getting Started

- Open your [test file](./index.test.js) and complete the tests for the above mentioned acceptance criteria
- Open your [source file](./index.js) and complete the code until all your test cases pass

## Resources

- JavaScript docs [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- Jest docs [here](https://jestjs.io/docs/getting-started)
