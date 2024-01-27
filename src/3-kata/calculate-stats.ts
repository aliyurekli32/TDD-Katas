export const calculateStats = (
  numbers: number[]
): { min: number; max: number; length: number; average: number } => {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    length: numbers.length,
    average: numbers.reduce((a, b) => a + b, 0) / numbers.length,
  };
};
