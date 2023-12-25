import { transformTitle } from "./transformTitle";

describe("transformTitle", () => {
  it("should return the expected title for a single tweet", () => {
    const expected = [
      {
        username: "Alice",
        title: "Tweet from Alice",
      },
    ];

    const actual = transformTitle([
      {
        username: "Alice",
      },
    ]);

    expect(actual).toEqual(expected);
  });

  it("should return the expected title for multiple tweets", () => {
    const expected = [
      {
        username: "Alice",
        title: "Tweet from Alice",
      },
      {
        username: "Bob",
        title: "Tweet from Bob",
      },
    ];

    const actual = transformTitle([
      {
        username: "Alice",
      },
      {
        username: "Bob",
      },
    ]);

    expect(actual).toEqual(expected);
  });
});
