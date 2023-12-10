# Vowels and Consonants

## User Story

> As a user I should be able to get the number of vowels and consonants in a given sentence.

## Acceptance Criteria

### 1

```
Given I want to analyse the sentence "This is amazing"

When I enter the sentence

Then I should be presented with a message "Vowels: 5 | Consonants: 8"
```

### 2

```
Given I want to analyse the sentence "Try my dry rhythm cry"

When I enter the sentence

Then I should be presented with a message "Vowels: 0 | Consonants: 17"
```

### 3

```
Given I want to analyse the sentence "oo ooo ooouuu"

When I enter the sentence

Then I should be presented with a message "Vowels: 11 | Consonants: 0"
```

### 4

```
Given I want to analyse the sentence "Welcome to the year 2050"

When I enter the sentence

Then I should be presented with a message "Vowels: 7 | Consonants: 9"
```

### 5

```
Given I want to analyse the sentence "Dude where's my car?"

When I enter the sentence

Then I should be presented with a message "Vowels: 5 | Consonants: 10"
```

### 6

```
Given I want to analyse the sentence "Dude where's my 2nd car?"

When I enter the sentence

Then I should be presented with a message "Vowels: 5 | Consonants: 12"
```

### 7

```
Given I want to analyse the sentence "#123"

When I enter the sentence

Then I should be presented with a message "Error: Invalid sentence, should contain alphabetical characters at minimum"
```

### 8

```
Given I want to analyse an empty sentence

When I enter the sentence

Then I should be presented with a message "Error: Invalid sentence, should contain alphabetical characters at minimum"
```

### 8

```
Given I want to analyse an undefined sentence

When I enter the sentence

Then I should be presented with a message "Error: Invalid sentence, should contain alphabetical characters at minimum"
```

## Getting Started

- Open your [test file](./index.test.js) and complete the tests for the above mentioned acceptance criteria
- Open your [source file](./index.js) and complete the code until all your test cases pass

## Resources

- JavaScript docs [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- Jest docs [here](https://jestjs.io/docs/getting-started)
