import { AgeCalculator } from "../age-calculator";

describe("AgeCalculator", () => {
  test.skip("should calculate age correctly", () => {
    const ageCalculator = new AgeCalculator();
    const age1 = ageCalculator.calculateAge(
      "28 October 2016",
      "29 October 2022"
    );
    const age2 = ageCalculator.calculateAge(
      "28 October 2016",
      "27 October 2022"
    );

    const age3 = ageCalculator.calculateAge(
      "28 October 2016",
      "28 October 2022"
    );
    expect(age1).toBe(6);
    expect(age2).toBe(5);
    expect(age3).toBe(6);
  });

  test.skip("should throw an error if birth date is after current date", () => {
    const ageCalculator = new AgeCalculator();
    const age = ageCalculator.calculateAge(
      "28 October 2022",
      "28 October 2016"
    );
    expect(age).toBe("Invalid date format");
  });

  test.skip("should return September 3, 2017; If I was born on September 9, 2017", () => {
    const ageCalculator = new AgeCalculator();
    const startDateOfBirthdayWeek =
      ageCalculator.calculateStartDateOfBirthdayWeek("September 9, 2017");

    expect(startDateOfBirthdayWeek).toBe("September 3, 2017");
  });
  test.skip("should return August 28, 2017; If I was born on September 3, 2017", () => {
    const ageCalculator = new AgeCalculator();
    const startDateOfBirthdayWeek =
      ageCalculator.calculateStartDateOfBirthdayWeek("September 3, 2017");

    expect(startDateOfBirthdayWeek).toBe("August 28, 2017");
  });
});
