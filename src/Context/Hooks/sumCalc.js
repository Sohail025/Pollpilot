export const SumCalc = (Array) => {
  const totalSum = Array.optionValues.reduce((total, curr) => {
    const sum = total + curr;
    return sum;
  }, 0);
  return [totalSum];
};
