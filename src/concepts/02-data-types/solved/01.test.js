import {
  primitiveDataTypes,
  objectDataTypes,
  mapDataType,
  setDataType,
} from "./01";

describe("data types", () => {
  let consoleSpy;

  beforeEach(() => {
    jest.resetAllMocks();

    consoleSpy = jest.spyOn(console, "log");
  });

  describe("primitiveDataTypes", () => {
    it("should display a value and typeof for string", () => {
      primitiveDataTypes();

      expect(consoleSpy).toHaveBeenNthCalledWith(1, "Tesla");
      expect(consoleSpy).toHaveBeenNthCalledWith(2, "string");
    });

    it("should display a value and typeof for number", () => {
      primitiveDataTypes();

      expect(consoleSpy).toHaveBeenNthCalledWith(3, 80000);
      expect(consoleSpy).toHaveBeenNthCalledWith(4, "number");
    });

    it("should display a value and typeof for boolean", () => {
      primitiveDataTypes();

      expect(consoleSpy).toHaveBeenNthCalledWith(5, true);
      expect(consoleSpy).toHaveBeenNthCalledWith(6, "boolean");
    });

    it("should display a value and typeof for big int", () => {
      primitiveDataTypes();

      expect(consoleSpy).toHaveBeenNthCalledWith(7, 12345678900000000n);
      expect(consoleSpy).toHaveBeenNthCalledWith(8, "bigint");
    });
  });

  describe("objectDataTypes", () => {
    it("should display a value and typeof for object", () => {
      objectDataTypes();

      expect(consoleSpy).toHaveBeenNthCalledWith(1, {
        brand: "Apple",
        device: "MacBook Pro",
        year: 2024,
      });
      expect(consoleSpy).toHaveBeenNthCalledWith(2, "object");
    });

    it("should display a value and typeof for array", () => {
      objectDataTypes();

      expect(consoleSpy).toHaveBeenNthCalledWith(3, [
        "Alice Smith",
        "Bob Smith",
        "Carol Smith",
      ]);
      expect(consoleSpy).toHaveBeenNthCalledWith(4, "object");
    });

    it("should display a value and typeof for function", () => {
      objectDataTypes();

      expect(consoleSpy).toHaveBeenNthCalledWith(5, "function");
    });

    it("should display a value and instanceof for Date", () => {
      objectDataTypes();

      expect(consoleSpy).toHaveBeenNthCalledWith(6, true);
    });

    it("should display a value and instanceof for RegExp", () => {
      objectDataTypes();

      expect(consoleSpy).toHaveBeenNthCalledWith(7, true);
    });
  });

  describe("mapDataType", () => {
    it("should return a map with expected values", () => {
      mapDataType();

      expect(consoleSpy).toHaveBeenNthCalledWith(1, "Bob");
      expect(consoleSpy).toHaveBeenNthCalledWith(2, "Smith");
    });
  });

  describe("setDataType", () => {
    it("should return a set with size 2", () => {
      setDataType();

      expect(consoleSpy).toHaveBeenNthCalledWith(1, 2);
    });
  });
});
