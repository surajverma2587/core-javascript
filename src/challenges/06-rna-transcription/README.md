# RNA Transcription

## User Story

> As a user I should be able to retrieve the RNA complement for a given DNA strand.

## DNA and RNA

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in **DNA** are:

- adenine **(A)**
- cytosine **(C)**
- guanine **(G)**
- thymine **(T)**

The four nucleotides found in **RNA** are:

- adenine **(A)**
- cytosine **(C)**
- guanine **(G)**
- uracil **(U)**

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

| DNA | RNA |
| --- | :-: |
| G   |  C  |
| C   |  G  |
| T   |  A  |
| A   |  U  |

## Acceptance Criteria

### 1

```
Given I want to convert the DNA strand sequence "ACGTGGTCTTAA"

When I enter the DNA strand sequence

Then I should be presented with a message "RNA strand: UGCACCAGAAUU"
```

### 2

```
Given I want to convert the DNA strand sequence "ACGT"

When I enter the DNA strand sequence

Then I should be presented with a message "RNA strand: UGCA"
```

### 3

```
Given I want to convert the DNA strand sequence "acgtggtcttaa"

When I enter the DNA strand sequence

Then I should be presented with a message "RNA strand: UGCACCAGAAUU"
```

### 4

```
Given I want to convert the DNA strand sequence "ACgTgGTcTtaA"

When I enter the DNA strand sequence

Then I should be presented with a message "RNA strand: UGCACCAGAAUU"
```

### 5

```
Given I want to convert the DNA strand sequence "ACXGT"

When I enter the DNA strand sequence

Then I should be presented with a message "Failed to retrieve RNA transcription: Invalid DNA strand"
```

### 6

```
Given I want to convert the DNA strand sequence "A2CGT"

When I enter the DNA strand sequence

Then I should be presented with a message "Failed to retrieve RNA transcription: Invalid DNA strand"
```

### 7

```
Given I want to convert the DNA strand sequence "ACG!T"

When I enter the DNA strand sequence

Then I should be presented with a message "Failed to retrieve RNA transcription: Invalid DNA strand"
```

### 8

```
Given I want to convert the DNA strand sequence "ACX2G!T"

When I enter the DNA strand sequence

Then I should be presented with a message "Failed to retrieve RNA transcription: Invalid DNA strand"
```

### 9

```
Given I want to convert an undefined DNA strand sequence

When I enter the undefined DNA strand sequence

Then I should be presented with a message "Failed to retrieve RNA transcription: Invalid DNA strand"
```

### 10

```
Given I want to convert an empty DNA strand sequence

When I enter the empty DNA strand sequence

Then I should be presented with a message "Failed to retrieve RNA transcription: Invalid DNA strand"
```

### 11

```
Given I want to convert an DNA strand sequence that is not a string (123)

When I enter the invalid DNA strand sequence

Then I should be presented with a message "Failed to retrieve RNA transcription: Invalid DNA strand"
```

## Getting Started

- Open your [test file](./index.test.js) and complete the tests for the above mentioned acceptance criteria
- Open your [source file](./index.js) and complete the code until all your test cases pass

## Resources

- JavaScript docs [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- Jest docs [here](https://jestjs.io/docs/getting-started)
