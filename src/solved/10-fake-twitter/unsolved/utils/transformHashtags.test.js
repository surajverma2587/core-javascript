import { transformHashtags } from "./transformHashtags";

describe("transformHashtags", () => {
  test("should return transformed hashtags", () => {
    const expected = [
      {
        id: 256,
        likes: 2432,
        message: "This is my first tweet!!",
        username: "Kate",
        hashtags: "#cars #bmw #newcar",
      },
    ];

    const actual = transformHashtags([
      {
        id: 256,
        likes: 2432,
        message: "This is my first tweet!!",
        username: "Kate",
        hashtags: ["cars", "bmw", "newcar"],
      },
    ]);

    expect(actual).toEqual(expected);
  });

  test("should return hashtags as empty string", () => {
    const expected = [
      {
        id: 256,
        likes: 2432,
        message: "This is my first tweet!!",
        username: "Kate",
        hashtags: "",
      },
    ];

    const actual = transformHashtags([
      {
        id: 256,
        likes: 2432,
        message: "This is my first tweet!!",
        username: "Kate",
        hashtags: [],
      },
    ]);

    expect(actual).toEqual(expected);
  });
});
