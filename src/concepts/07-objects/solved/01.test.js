import { objects } from "./01";

describe("objects", () => {
  let car;

  beforeEach(() => {
    car = objects();
  });

  test("car object has correct initial properties", () => {
    expect(car).toHaveProperty("make", "Toyota");
    expect(car).toHaveProperty("model", "Corolla");
    expect(car).toHaveProperty("year", 2023);
    expect(car).toHaveProperty("color", "Silver");
    expect(car).toHaveProperty("price", 25000);
  });

  test("getInfo method returns correct string", () => {
    expect(car.getInfo()).toBe("Toyota | Corolla | 2023 | Silver | 25000");
  });

  test("displayPrice method returns correct formatted price", () => {
    expect(car.displayPrice()).toBe("£25000");
  });

  test("mileage property is added correctly", () => {
    expect(car).toHaveProperty("mileage", 8000);
  });

  test("drive method returns correct string", () => {
    expect(car.drive()).toBe("You drove 8000 miles");
  });
});
