export const calculateStats = (numbers: number[]): { min: number } => {
  return {
    min: Math.min(...numbers),
  };
};
