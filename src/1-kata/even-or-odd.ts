const pipe =
  (...fns: Function[]) =>
  (x: any) =>
    fns.reduce((acc, fn) => fn(acc), x);

const sum = (numbers: number[]): number =>
  numbers.reduce((acc: number, num: number) => acc + num, 0);

const isEven = (n: number): boolean => n % 2 === 0;

const toEvenOrOddString = (isEven: boolean): string =>
  isEven ? "even" : "odd";
export const evenOrOdd = pipe(sum, isEven, toEvenOrOddString);
