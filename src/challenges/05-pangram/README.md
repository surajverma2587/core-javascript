# Pangram Challenge

## User Story

> As a user I want to determine if a given string is a pangram where a pangram is a sentence using every letter of the alphabet at least once.

## Example

The best known English pangram is:

> The quick brown fox jumps over the lazy dog

## More Info

All alphabets from a to z must be included and is case insensitive. Any special characters and/or numbers must be ignored.

## Acceptance Criteria

- Should return a message `"Is a pangram"` for a sentence `"The quick brown fox jumps over the lazy dog"`
- Should return a message `"Is not a pangram"` for a sentence `"The brown fox jumps over the lazy dog"`

## Tasks

- Write a function `pangram` which accepts parameters comprising of the sentence
- `pangram` function returns the message
- Write unit tests for the `pangram` function

## Usage

> To run tests use `npm run test pangram`
