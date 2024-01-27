export const isLeapYear = (year: number): boolean => {
  return year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0;
};
