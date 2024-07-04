import { variables } from "./02";

describe("variables", () => {
  let consoleSpy;

  beforeEach(() => {
    jest.resetAllMocks();

    consoleSpy = jest.spyOn(console, "log");
  });

  it("should display a value of a var declaration", () => {
    variables();

    expect(consoleSpy).toHaveBeenNthCalledWith(1, "Tesla");
  });

  it("should display a value of a let declaration", () => {
    variables();

    expect(consoleSpy).toHaveBeenNthCalledWith(2, 0);
  });

  it("should display a value of a const declaration", () => {
    variables();

    expect(consoleSpy).toHaveBeenNthCalledWith(3, 60);
  });
});
