import { greeting } from "./01";

describe("greeting", () => {
  it("should display the UV index as Low for 1", () => {
    const expected = "Good morning, Alice Smith!!";
    const actual = greeting("morning", {
      firstName: "Alice",
      lastName: "Smith",
    });

    expect(actual).toEqual(expected);
  });

  it("should display the UV index as Low for 2", () => {
    const expected = "Good afternoon, Bob Smith!!";
    const actual = greeting("noon", {
      firstName: "Bob",
      lastName: "Smith",
    });

    expect(actual).toEqual(expected);
  });

  it("should display the UV index as Moderate for 3", () => {
    const expected = "Good evening, Carol Smith!!";
    const actual = greeting("evening", {
      firstName: "Carol",
      lastName: "Smith",
    });

    expect(actual).toEqual(expected);
  });

  it("should display the UV index as Moderate for 4", () => {
    const expected = "Goodnight, Dave Smith!!";
    const actual = greeting("night", {
      firstName: "Dave",
      lastName: "Smith",
    });

    expect(actual).toEqual(expected);
  });

  it("should return undefined for an invalid time of day", () => {
    const actual = greeting("foo", {
      firstName: "Bob",
      lastName: "Smith",
    });

    expect(actual).toBeUndefined();
  });
});
