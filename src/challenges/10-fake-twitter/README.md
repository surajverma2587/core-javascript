# Fake Twitter Data

## User Story

> As a user I should be able to get my transformed fake twitter data.

## Acceptance Criteria

### 1

```
Given I want to receive my transformed data

When I process my data with multiple tweets

Then I should be presented with the transformed data
```

### 2

```
Given I want to receive my transformed tweets

When I process my tweets containing restricted hashtags (#bmw, #audi, #honda)

Then I should be presented with the filtered tweets
```

### 3

```
Given I want to receive my transformed tweets

When I process my tweets in mixed order of IDs

Then I should be presented with the transformed tweets in descending order of IDs
```

### 4

```
Given I want to receive my transformed tweets

When I process my tweets with likes

Then I should be presented with the total likes of all valid tweets
```

### 4

```
Given I want to receive my transformed tweets

When I process my tweets with usernames

Then each tweet should contain a new field (hashtags) with the formatted hashtag string "#cars #nissan #newcar" as a value
```

### 5

```
Given I want to receive my transformed tweets

When I process my tweets with multiple tweets

Then each tweet should contain a new field (title) with the formatted message of "Tweet from <username>"
```

### Example Data

```javascript
{
  tweets: [
    {
      id: 256,
      likes: 2432,
      message: "This is my first tweet!!",
      username: "Kate",
      hashtags: ["cars", "bmw", "newcar"],
    },
    {
      id: 121,
      likes: 52342,
      message: "I love my new nissan!!",
      username: "Bob",
      hashtags: ["cars", "nissan", "newcar"],
    },
    {
      id: 300,
      likes: 6378,
      message: "Kia was over-rated!!",
      username: "Alice",
      hashtags: ["cars", "kia", "newcar"],
    },
  ];
}
```

## Example Result

```javascript
{
  tweets: [
    {
      id: 300,
      likes: 6378,
      username: "Alice",
      message: "Kia was over-rated!!",
      title: "Tweet from Alice",
      hashtags: "#cars #kia #newcar",
    },
    {
      id: 121,
      likes: 52342,
      username: "Bob",
      message: "I love my new nissan!!",
      title: "Tweet from Bob",
      hashtags: "#cars #nissan #newcar",
    },
  ],
  likes: 58720
}
```

## Getting Started

- Open your [test file](./index.test.js) and complete the tests for the above mentioned acceptance criteria
- Open your [source file](./index.js) and complete the code until all your test cases pass

## Resources

- JavaScript docs [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
- Jest docs [here](https://jestjs.io/docs/getting-started)
