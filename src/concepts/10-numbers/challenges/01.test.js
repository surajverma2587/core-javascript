import { areaAndPerimeter } from "./01";

describe("areaAndPerimeter", () => {
  it("should return correct area and perimeter for a square", () => {
    const result = areaAndPerimeter("SQUARE", 5, 5);
    expect(result).toEqual({ area: 25, perimeter: 20 });
  });

  it("should return correct area and perimeter for a rectangle", () => {
    const result = areaAndPerimeter("RECTANGLE", 4, 6);
    expect(result).toEqual({ area: 24, perimeter: 20 });
  });

  it("should return 'Invalid shape!' for an invalid shape", () => {
    const result = areaAndPerimeter("CIRCLE", 5, 5);
    expect(result).toBe("Invalid shape!");
  });

  it("should return 'Invalid side!' for non-integer sides", () => {
    const result = areaAndPerimeter("SQUARE", 5.5, 5);
    expect(result).toBe("Invalid side!");
  });

  it("should return 'Invalid side!' for negative sides", () => {
    const result = areaAndPerimeter("RECTANGLE", -4, 6);
    expect(result).toBe("Invalid side!");
  });

  it("should return 'Invalid side!' for zero sides", () => {
    const result = areaAndPerimeter("SQUARE", 0, 5);
    expect(result).toBe("Invalid side!");
  });

  it("should return 'Invalid side!' for NaN sides", () => {
    const result = areaAndPerimeter("RECTANGLE", "foo", 6);
    expect(result).toBe("Invalid side!");
  });
});
