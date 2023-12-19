import { transformTitle } from "./transformTitle";

describe("transformTitle", () => {
  test("should append expected title in tweet", () => {
    const expected = [
      {
        id: 300,
        likes: 6378,
        message: "Kia was over-rated!!",
        username: "Alice",
        hashtags: ["cars", "kia", "newcar"],
        title: "Tweet from Alice",
      },
    ];

    const actual = transformTitle([
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
