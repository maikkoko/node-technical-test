const percentageToDecimal = (percentage: string) => {
  const decimal = parseFloat(percentage) / 100;

  // Return 0 when input is invalid
  return decimal || 0;
};

export default percentageToDecimal;
