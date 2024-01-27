export const calculateStats = (
  numbers: number[]
): { min: number; max: number; length: number } => {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    length: numbers.length,
  };
};
