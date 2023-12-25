import { transformHashtags } from "./transformHashtags";

describe("transformHashtags", () => {
  it("should return the expected transformed hashtags for a single tweet", () => {
    const expected = [
      {
        hashtags: "#cars #nissan #newcar",
      },
    ];

    const actual = transformHashtags([
      {
        hashtags: ["cars", "nissan", "newcar"],
      },
    ]);

    expect(actual).toEqual(expected);
  });

  it("should return the expected transformed hashtags for a multiple tweets", () => {
    const expected = [
      {
        hashtags: "#cars #nissan #newcar",
      },
      {
        hashtags: "#cars #kia #newcar",
      },
    ];

    const actual = transformHashtags([
      {
        hashtags: ["cars", "nissan", "newcar"],
      },
      {
        hashtags: ["cars", "kia", "newcar"],
      },
    ]);

    expect(actual).toEqual(expected);
  });

  it("should return transformed hashtags as an empty string when no hashtags", () => {
    const expected = [{ hashtags: "" }];

    const actual = transformHashtags([{ hashtags: [] }]);

    expect(actual).toEqual(expected);
  });
});
