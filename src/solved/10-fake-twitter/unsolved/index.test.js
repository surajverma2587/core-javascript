import fakeTwitterData from ".";

describe("fakeTwitterData", () => {
  test("should return expected result", () => {
    const expected = {
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
      likes: 58720,
    };

    const actual = fakeTwitterData({
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
      ],
    });

    expect(actual).toEqual(expected);
  });

  test("should return an empty array ", () => {
    const expected = {
      tweets: [],
      likes: 0,
    };

    const actual = fakeTwitterData({
      tweets: [],
    });

    expect(actual).toEqual(expected);
  });
});
