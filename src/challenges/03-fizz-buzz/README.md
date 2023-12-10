# Fizz Buzz

## User Story

> As a user I should be able to play the fizz buzz game until a certain number.

## Game Rules

Starting from the number 1 every multiple of 3 is replaced by the word "Fizz" and every multiple of 5 is replaced by the word "Buzz" and for numbers that are multiples of 3 and 5 it is replaced by the word FizzBuzz. This is all done until the count reaches the provided stopping number.

## Acceptance Criteria

### 1

```
Given my stopping number is 6

When I play the fizz buzz game

Then I should be presented with the following sequence "1, 2, Fizz, 4, Buzz, Fizz"
```

### 2

```
Given my stopping number is 16

When I play the fizz buzz game

Then I should be presented with the following sequence "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16"
```

### 3

```
Given my stopping number is 3

When I play the fizz buzz game

Then I should be presented with the following sequence "1, 2, Fizz"
```

### 4

```
Given my stopping number is 5

When I play the fizz buzz game

Then I should be presented with the following sequence "1, 2, Fizz, 4, Buzz"
```

### 5

```
Given my stopping number is a negative number -6

When I play the fizz buzz game

Then I should be presented with the following sequence "Please enter a valid ending number, should be a positive integer."
```

### 6

```
Given my stopping number is a negative number 6.5

When I play the fizz buzz game

Then I should be presented with the following sequence "Please enter a valid ending number, should be a positive integer."
```

### 7

```
Given my stopping number is a negative number -6.5

When I play the fizz buzz game

Then I should be presented with the following sequence "Please enter a valid ending number, should be a positive integer."
```

### 8

```
Given my stopping number is undefined

When I play the fizz buzz game

Then I should be presented with the following sequence "Please enter a valid ending number, should be a positive integer."
```

## Getting Started

- Open your [test file](./index.test.js) and complete the tests for the above mentioned acceptance criteria
- Open your [source file](./index.js) and complete the code until all your test cases pass

## Resources

- JavaScript docs [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- Jest docs [here](https://jestjs.io/docs/getting-started)
