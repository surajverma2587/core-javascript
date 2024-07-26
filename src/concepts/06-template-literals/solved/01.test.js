import { greeting } from "./01";

describe("greeting", () => {
  it("should display expected the good morning message", () => {
    const expected = "Good morning, Alice Smith!!";
    const actual = greeting("morning", {
      firstName: "Alice",
      lastName: "Smith",
    });

    expect(actual).toEqual(expected);
  });

  it("should display expected the good afternoon message", () => {
    const expected = "Good afternoon, Bob Smith!!";
    const actual = greeting("afternoon", {
      firstName: "Bob",
      lastName: "Smith",
    });

    expect(actual).toEqual(expected);
  });

  it("should display expected the good evening message", () => {
    const expected = "Good evening, Carol Smith!!";
    const actual = greeting("evening", {
      firstName: "Carol",
      lastName: "Smith",
    });

    expect(actual).toEqual(expected);
  });

  it("should display expected the goodnight message", () => {
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
