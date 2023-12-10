# Driver License

## User Story

> As a user I should be able to determine my driving expectations for a given age.

## Acceptance Criteria

### 1

```
Given I am 18 years of age

When I enter my age

Then I should be presented with a message "Great news, you are cleared to drive until the age of 65."
```

### 2

```
Given I am 65 years of age

When I enter my age

Then I should be presented with a message "Great news, you are cleared to drive until the age of 65."
```

### 3

```
Given I am 40 years of age

When I enter my age

Then I should be presented with a message "Great news, you are cleared to drive until the age of 65."
```

### 4

```
Given I am 17 years of age

When I enter my age

Then I should be presented with a message "Sorry, you are not allowed to drive until you turn 18 years of age."
```

### 5

```
Given I am 66 years of age

When I enter my age

Then I should be presented with a message "Attention, you need to apply for a senior's license by taking the senior's driving test."
```

### 6

```
Given I am 0 years of age

When I enter my age

Then I should be presented with a message "Please enter a valid age, your age should be a positive integer."
```

### 7

```
Given I am -1 years of age

When I enter my age

Then I should be presented with a message "Please enter a valid age, your age should be a positive integer."
```

### 8

```
Given I am 20.5 years of age

When I enter my age

Then I should be presented with a message "Please enter a valid age, your age should be a positive integer."
```

### 9

```
Given I am -10.5 years of age

When I enter my age

Then I should be presented with a message "Please enter a valid age, your age should be a positive integer."
```

### 10

```
Given my age is undefined

When I enter my age

Then I should be presented with a message "Please enter a valid age, your age should be a positive integer."
```

## Getting Started

- Open your [test file](./index.test.js) and complete the tests for the above mentioned acceptance criteria
- Open your [source file](./index.js) and complete the code until all your test cases pass

## Resources

- JavaScript docs [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- Jest docs [here](https://jestjs.io/docs/getting-started)
