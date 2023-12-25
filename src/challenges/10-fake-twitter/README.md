# Fake Twitter Data

## User Story

> As a user I should be able to get my transformed fake twitter data.

## Acceptance Criteria

- tweets with restricted hashtags (bmw, audi, honda) should not be included in the result
- tweets should be sorted in descending order of IDs
- each tweet object should contain a new key `title` with a formatted message `Tweet from <username>`
- each tweet object should contain a new key `hashtags` with a formatted string of all hashtags of the tweet, for instance hashtags tag1 and tag2 will become `#tag1 #tag2`
- result should contain an array of transformed tweets and the total number of likes of all valid tweets

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
