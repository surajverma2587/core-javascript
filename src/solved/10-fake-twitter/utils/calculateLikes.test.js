import { calculateLikes } from "./calculateLikes";

describe("calculateLikes", () => {
  it("should return the expected number of likes", () => {
    const expected = 30;

    const actual = calculateLikes([
      {
        likes: 10,
      },
      {
        likes: 20,
      },
    ]);

    expect(actual).toEqual(expected);
  });

  it("should return 0 if no likes present", () => {
    const expected = 0;

    const actual = calculateLikes([
      {
        likes: 0,
      },
      {
        likes: 0,
      },
    ]);

    expect(actual).toEqual(expected);
  });
});
