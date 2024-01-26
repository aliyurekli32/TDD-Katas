export const even_or_odd = (numbers: number[]): string => {
  const sum = (numbers: number[]): number => {
    if (numbers.length === 0) {
      return 0;
    } else if (numbers.length === 1) {
      return numbers[0];
    }
    return sum(numbers.slice(1));
  };
  if (sum(numbers) % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
