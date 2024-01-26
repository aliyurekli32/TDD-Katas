describe("VendorCalculator", () => {
  test("should calculate vendor correctly", () => {
    const vendorCalculator = new VendorCalculator();
    const vendor = vendorCalculator.calculateVendor(1.25, 2.0, "US");
    expect(vendor).toStrictEqual([25, 25, 25]);
  });
  test("should calculate vendor correctly", () => {
    const vendorCalculator = new VendorCalculator();
    const vendor = vendorCalculator.calculateVendor(1.25, 2.0, "GB");
    expect(vendor).toStrictEqual([50, 20, 5]);
  });
  test("should calculate vendor correctly", () => {
    const vendorCalculator = new VendorCalculator();
    const vendor = vendorCalculator.calculateVendor(1.25, 2.0, "NR");
    expect(vendor).toStrictEqual([20, 20, 20, 10, 5]);
  });
});

export class VendorCalculator {
  allCountryCoins: Record<string, number[]> = {
    GB: [50, 20, 10, 5, 2, 1],
    US: [25, 10, 5, 1],
    NR: [20, 10, 5, 1],
  };
  calculateVendor(price: number, payment: number, country: string) {
    const fillArrayWithNumber = (count: number, number: number) => {
      const validateInput = (count: number) =>
        Number.isInteger(count) && count > 0;

      const fillArray = (count: number, number: number) =>
        Array(count).fill(number);

      if (validateInput(count)) {
        return fillArray(count, number);
      } else {
        console.error(
          "Invalid input. Please provide a positive integer for count."
        );
        return [];
      }
    };

    const countryCoins = this.allCountryCoins[country];
    let backMoney = 100 * (payment - price);
    const change: number[] = [];
    while (backMoney > 0) {
      const countryCoin = Math.floor(backMoney / countryCoins[0]);
      if (countryCoin !== 0) {
        change.push(...fillArrayWithNumber(countryCoin, countryCoins[0]));
        backMoney = backMoney - countryCoin * countryCoins[0];
      } else {
        countryCoins.shift();
      }
    }
    return change;
  }
}
