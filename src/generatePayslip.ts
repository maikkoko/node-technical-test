import percentageToDecimal from './percentageToDecimal';
import TAX_BRACKETS from './taxBrackets';
import { InputData, OutputData } from './types';

export const generatePayslip = ({
  annualSalary,
  superRate,
  firstName,
  lastName,
  payPeriod,
}: InputData): OutputData => {
  const grossIncome = Math.round(annualSalary / 12);

  if (annualSalary < 0) {
    throw new Error('Invalid annualSalary value.');
  }

  for (let i = 0; i < TAX_BRACKETS.length; i++) {
    const { minimumIncome, maximumIncome, baseTax, addlTaxPerDollar } =
      TAX_BRACKETS[i];

    if (annualSalary > minimumIncome && annualSalary <= maximumIncome) {
      // Annual Income Tax
      const annualIncomeTax =
        baseTax + addlTaxPerDollar * (annualSalary - minimumIncome);
      // Income Tax (Annual Income / 12)
      const incomeTax = Math.round(annualIncomeTax / 12);
      // Net Income (Gross Income - Income Tax)
      const netIncome = Math.round(grossIncome - incomeTax);
      // Super (Gross Income x Super Rate)
      const superAmount = Math.round(
        grossIncome * percentageToDecimal(superRate),
      );

      return {
        name: `${firstName} ${lastName}`,
        payPeriod,
        grossIncome,
        incomeTax,
        netIncome,
        superAmount,
      };
    }
  }
};

export default generatePayslip;
