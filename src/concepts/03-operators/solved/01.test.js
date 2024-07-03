import { operators } from "./01";

describe("operators", () => {
  let consoleSpy;

  beforeEach(() => {
    jest.resetAllMocks();

    consoleSpy = jest.spyOn(console, "log");
  });

  it("should display the expected take home annual salary", () => {
    operators();

    expect(consoleSpy).toHaveBeenNthCalledWith(
      1,
      "Your take home salary is £38750"
    );
  });
});
