export type InputData = {
  firstName: string;
  lastName: string;
  annualSalary: number;
  superRate: string;
  payPeriod: string;
};

export type TaxBracketData = {
  minimumIncome: number;
  maximumIncome: number;
  baseTax: number;
  addlTaxPerDollar: number;
};

export type OutputData = {
  name: string;
  payPeriod: string;
  grossIncome: number;
  incomeTax: number;
  netIncome: number;
  superAmount: number;
};
