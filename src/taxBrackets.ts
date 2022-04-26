import { TaxBracketData } from './types';

/**
 * Tax Table based on ATO: https://www.ato.gov.au/Rates/Individual-income-tax-rates)
 */
const TAX_BRACKETS: TaxBracketData[] = [
  {
    minimumIncome: 0,
    maximumIncome: 18200,
    baseTax: 0,
    addlTaxPerDollar: 0,
  },
  {
    minimumIncome: 18201,
    maximumIncome: 37000,
    baseTax: 0,
    addlTaxPerDollar: 0.19,
  },
  {
    minimumIncome: 37001,
    maximumIncome: 87000,
    baseTax: 3572,
    addlTaxPerDollar: 0.325,
  },
  {
    minimumIncome: 87001,
    maximumIncome: 180000,
    baseTax: 19822,
    addlTaxPerDollar: 0.37,
  },
  {
    minimumIncome: 180001,
    maximumIncome: Infinity,
    baseTax: 54232,
    addlTaxPerDollar: 0.45,
  },
];

export default TAX_BRACKETS;
