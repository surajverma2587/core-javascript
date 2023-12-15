import { getRandomIndex } from "./getRandomIndex";

describe("getRandomIndex", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the expected index for an non-empty array", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.6);

    const expected = 3;

    const actual = getRandomIndex(["1", "2", "3", "4", "5"]);

    expect(actual).toEqual(expected);
  });

  it("should return 0 for an empty array", () => {
    const expected = 0;

    const actual = getRandomIndex([]);

    expect(actual).toEqual(expected);
  });
});
