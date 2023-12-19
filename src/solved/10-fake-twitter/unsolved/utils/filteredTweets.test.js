import { filteredTweets } from "./filteredTweets";

describe("filteredTweets", () => {
  test("should filter out the tweets containing hashtag bmw", () => {
    const expected = [
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

    const actual = filteredTweets([
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
    ]);

    expect(actual).toEqual(expected);
  });

  test("should filter out the tweets containing hashtag honda", () => {
    const expected = [
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

    const actual = filteredTweets([
      {
        id: 256,
        likes: 2432,
        message: "This is my first tweet!!",
        username: "Kate",
        hashtags: ["cars", "honda", "newcar"],
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
    ]);

    expect(actual).toEqual(expected);
  });

  test("should filter out the tweets containing hashtag audi", () => {
    const expected = [
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

    const actual = filteredTweets([
      {
        id: 256,
        likes: 2432,
        message: "This is my first tweet!!",
        username: "Kate",
        hashtags: ["cars", "audi", "newcar"],
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
    ]);

    expect(actual).toEqual(expected);
  });

  test("should filter out the tweets containing all restricted hashtags", () => {
    const expected = [
      {
        id: 300,
        likes: 6378,
        message: "Kia was over-rated!!",
        username: "Alice",
        hashtags: ["cars", "kia", "newcar"],
      },
    ];

    const actual = filteredTweets([
      {
        id: 256,
        likes: 2432,
        message: "This is my first tweet!!",
        username: "Kate",
        hashtags: ["cars", "honda", "newcar"],
      },
      {
        id: 121,
        likes: 52342,
        message: "I love my new nissan!!",
        username: "Bob",
        hashtags: ["audi", "bmw", "newcar"],
      },
      {
        id: 300,
        likes: 6378,
        message: "Kia was over-rated!!",
        username: "Alice",
        hashtags: ["cars", "kia", "newcar"],
      },
    ]);

    expect(actual).toEqual(expected);
  });

  test("should filter the tweets not containing restricted", () => {
    const expected = [
      {
        id: 256,
        likes: 2432,
        message: "This is my first tweet!!",
        username: "Kate",
        hashtags: ["cars", "nissan", "newcar"],
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

    const actual = filteredTweets([
      {
        id: 256,
        likes: 2432,
        message: "This is my first tweet!!",
        username: "Kate",
        hashtags: ["cars", "nissan", "newcar"],
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
    ]);

    expect(actual).toEqual(expected);
  });
});
