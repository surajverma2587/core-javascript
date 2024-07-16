import { sanitize, formatAddress } from "./01";

describe("sanitize", () => {
  test("trims whitespace and converts to lowercase", () => {
    expect(sanitize("  John@Example.com  ")).toBe("john@example.com");
  });

  test("handles already lowercase and trimmed email", () => {
    expect(sanitize("jane@example.com")).toBe("jane@example.com");
  });

  test("handles email with mixed case", () => {
    expect(sanitize("TeSt@ExAmPlE.cOm")).toBe("test@example.com");
  });

  test("handles empty string", () => {
    expect(sanitize("")).toBe("");
  });
});

describe("formatAddress", () => {
  test("formats address with secondLine", () => {
    const address = {
      firstLine: "123 Main St",
      secondLine: "Apt 4B",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    };
    expect(formatAddress(address)).toBe(
      "123 Main St, Apt 4B, Anytown, CA, 12345"
    );
  });

  test("formats address without secondLine", () => {
    const address = {
      firstLine: "456 Elm St",
      city: "Somewhere",
      state: "NY",
      zip: "67890",
    };
    expect(formatAddress(address)).toBe("456 Elm St, Somewhere, NY, 67890");
  });
});
