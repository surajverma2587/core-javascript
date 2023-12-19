# Fake Twitter Data

## User Story

> As a user I should be able to get my transformed fake twitter data.

## Acceptance Criteria

- Function should accept an object to be transformed to a resultant object containing tweets and likes
- Should filter out the tweets that contain hashtags `"honda"`, `"audi"` and `"bmw"`
- Should sort the tweets by `id` in descending order
- Should insert the total likes of all valid tweets with a key of `likes`
- Should change the `hashtags` value of each valid tweet to a string. For example `#cars #nissan #newcar`
- Should add a new field `title` with a string value that uses the `username`. For example `Tweet from Alice`

### Sample input tweets

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

## Resultant tweets

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

## Tasks

- Write a function `fakeTwitterData` which accepts parameters comprising of the `tweets`
- `fakeTwitterData` function returns the array of transformed tweets
- Write unit tests for the `fakeTwitterData` function

## Usage

> To run tests use `npm run test fake-twitter-data`
