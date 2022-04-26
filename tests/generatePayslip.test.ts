import { expect } from 'chai';
import generatePayslip from '../src/generatePayslip';

const TEST_DATA = {
  firstName: 'Andrew',
  lastName: 'Smith',
  annualSalary: 60050,
  superRate: '9%',
  payPeriod: '01 March - 31 March',
};

const TEST_DATA2 = {
  firstName: 'Test',
  lastName: 'User',
  annualSalary: 15000,
  superRate: '5%',
  payPeriod: '01 March - 31 March',
};

describe('generatePayslip', () => {
  it('should calculate correct payslip values', () => {
    const result = generatePayslip(TEST_DATA);
    const result2 = generatePayslip(TEST_DATA2);

    expect(result).to.deep.equal({
      name: 'Andrew Smith',
      payPeriod: '01 March - 31 March',
      grossIncome: 5004,
      incomeTax: 922,
      netIncome: 4082,
      superAmount: 450,
    });

    expect(result2).to.deep.equal({
      name: 'Test User',
      payPeriod: '01 March - 31 March',
      grossIncome: 1250,
      incomeTax: 0,
      netIncome: 1250,
      superAmount: 63,
    });
  });

  it('should throw an error when annualSalary value is invalid', () => {
    expect(() =>
      generatePayslip({ ...TEST_DATA, annualSalary: -1 }),
    ).to.throw();
  });
});
