import { filterTweets } from "./filterTweets";

describe("filterTweets", () => {
  it("should filter out the tweets containing hashtag bmw", () => {
    const expected = [
      {
        hashtags: ["cars", "nissan", "newcar"],
      },
      {
        hashtags: ["cars", "kia", "newcar"],
      },
    ];

    const actual = filterTweets([
      {
        hashtags: ["cars", "bmw", "newcar"],
      },
      {
        hashtags: ["cars", "nissan", "newcar"],
      },
      {
        hashtags: ["cars", "kia", "newcar"],
      },
    ]);

    expect(actual).toEqual(expected);
  });

  it("should filter out the tweets containing hashtag honda", () => {
    const expected = [
      {
        hashtags: ["cars", "nissan", "newcar"],
      },
      {
        hashtags: ["cars", "kia", "newcar"],
      },
    ];

    const actual = filterTweets([
      {
        hashtags: ["cars", "honda", "newcar"],
      },
      {
        hashtags: ["cars", "nissan", "newcar"],
      },
      {
        hashtags: ["cars", "kia", "newcar"],
      },
    ]);

    expect(actual).toEqual(expected);
  });

  it("should filter out the tweets containing hashtag audi", () => {
    const expected = [
      {
        hashtags: ["cars", "nissan", "newcar"],
      },
      {
        hashtags: ["cars", "kia", "newcar"],
      },
    ];

    const actual = filterTweets([
      {
        hashtags: ["cars", "audi", "newcar"],
      },
      {
        hashtags: ["cars", "nissan", "newcar"],
      },
      {
        hashtags: ["cars", "kia", "newcar"],
      },
    ]);

    expect(actual).toEqual(expected);
  });

  it("should filter out the tweets containing all restricted hashtags", () => {
    const expected = [
      {
        hashtags: ["cars", "kia", "newcar"],
      },
    ];

    const actual = filterTweets([
      {
        hashtags: ["cars", "honda", "newcar"],
      },
      {
        hashtags: ["audi", "bmw", "newcar"],
      },
      {
        hashtags: ["cars", "kia", "newcar"],
      },
    ]);

    expect(actual).toEqual(expected);
  });

  it("should filter the tweets not containing restricted", () => {
    const expected = [
      {
        hashtags: ["cars", "nissan", "newcar"],
      },
      {
        hashtags: ["cars", "nissan", "newcar"],
      },
      {
        hashtags: ["cars", "kia", "newcar"],
      },
    ];

    const actual = filterTweets([
      {
        hashtags: ["cars", "nissan", "newcar"],
      },
      {
        hashtags: ["cars", "nissan", "newcar"],
      },
      {
        hashtags: ["cars", "kia", "newcar"],
      },
    ]);

    expect(actual).toEqual(expected);
  });

  it("should filter the tweets to an empty array of tweets", () => {
    const expected = [];

    const actual = filterTweets([
      {
        hashtags: ["cars", "bmw", "newcar"],
      },
      {
        hashtags: ["cars", "audi", "newcar"],
      },
      {
        hashtags: ["cars", "honda", "newcar"],
      },
    ]);

    expect(actual).toEqual(expected);
  });
});
