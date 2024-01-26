import { even_or_odd } from "./even-or-odd";

describe("Even or Odd", () => {
  it("should return 'even' if the number is even", () => {
    expect(even_or_odd(2)).toBe("even");
  });
});
