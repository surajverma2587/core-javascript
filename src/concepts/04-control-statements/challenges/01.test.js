import { getInfoByUvIndex, countdown } from "./01";

describe("control statements", () => {
  let consoleSpy;

  beforeEach(() => {
    jest.resetAllMocks();
    consoleSpy = jest.spyOn(console, "log");
  });

  describe("getInfoByUvIndex", () => {
    it("should display the UV index as Low for 1", () => {
      getInfoByUvIndex(1);

      expect(consoleSpy).toHaveBeenLastCalledWith("Low");
    });

    it("should display the UV index as Low for 2", () => {
      getInfoByUvIndex(2);

      expect(consoleSpy).toHaveBeenLastCalledWith("Low");
    });

    it("should display the UV index as Moderate for 3", () => {
      getInfoByUvIndex(3);

      expect(consoleSpy).toHaveBeenLastCalledWith("Moderate");
    });

    it("should display the UV index as Moderate for 4", () => {
      getInfoByUvIndex(4);

      expect(consoleSpy).toHaveBeenLastCalledWith("Moderate");
    });

    it("should display the UV index as Moderate for 5", () => {
      getInfoByUvIndex(5);

      expect(consoleSpy).toHaveBeenLastCalledWith("Moderate");
    });

    it("should display the UV index as High for 6", () => {
      getInfoByUvIndex(6);

      expect(consoleSpy).toHaveBeenLastCalledWith("High");
    });

    it("should display the UV index as High for 7", () => {
      getInfoByUvIndex(7);

      expect(consoleSpy).toHaveBeenLastCalledWith("High");
    });

    it("should display the UV index as Very High for 8", () => {
      getInfoByUvIndex(8);

      expect(consoleSpy).toHaveBeenLastCalledWith("Very High");
    });

    it("should display the UV index as Very High for 9", () => {
      getInfoByUvIndex(9);

      expect(consoleSpy).toHaveBeenLastCalledWith("Very High");
    });

    it("should display the UV index as Very High for 10", () => {
      getInfoByUvIndex(10);

      expect(consoleSpy).toHaveBeenLastCalledWith("Very High");
    });

    it("should display the UV index as Extreme", () => {
      getInfoByUvIndex(15);

      expect(consoleSpy).toHaveBeenLastCalledWith("Extreme");
    });

    it("should display 'ERROR: UV Index should be a positive integer' for negative numbers", () => {
      getInfoByUvIndex(-1);

      expect(consoleSpy).toHaveBeenLastCalledWith(
        "ERROR: UV Index should be a positive integer"
      );
    });

    it("should display 'ERROR: UV Index should be a positive integer' for 0", () => {
      getInfoByUvIndex(0);

      expect(consoleSpy).toHaveBeenLastCalledWith(
        "ERROR: UV Index should be a positive integer"
      );
    });

    it("should display 'ERROR: UV Index should be a positive integer' for decimal numbers", () => {
      getInfoByUvIndex(4.5);

      expect(consoleSpy).toHaveBeenLastCalledWith(
        "ERROR: UV Index should be a positive integer"
      );
    });
  });

  describe("countdown", () => {
    it("should display the countdown messages from 5 to 0", () => {
      countdown();

      expect(consoleSpy).toHaveBeenNthCalledWith(1, "Time remaining: 5");
      expect(consoleSpy).toHaveBeenNthCalledWith(2, "Time remaining: 4");
      expect(consoleSpy).toHaveBeenNthCalledWith(3, "Time remaining: 3");
      expect(consoleSpy).toHaveBeenNthCalledWith(4, "Time remaining: 2");
      expect(consoleSpy).toHaveBeenNthCalledWith(5, "Time remaining: 1");
      expect(consoleSpy).toHaveBeenNthCalledWith(6, "GAME OVER");
    });
  });
});
