import { calculateLikes } from "./calculateLikes";

describe("calculateLikes", () => {
  test("should return the expected number of likes", () => {
    const expected = 58720;

    const actual = calculateLikes([
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

  test("should return 0 if no likes present", () => {
    const expected = 0;

    const actual = calculateLikes([
      {
        id: 121,
        likes: 0,
        message: "I love my new nissan!!",
        username: "Bob",
        hashtags: ["cars", "nissan", "newcar"],
      },
      {
        id: 300,
        likes: 0,
        message: "Kia was over-rated!!",
        username: "Alice",
        hashtags: ["cars", "kia", "newcar"],
      },
    ]);

    expect(actual).toEqual(expected);
  });
});
