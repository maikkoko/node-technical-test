import input from '../data.json';
import { generatePayslip, InputData, OutputData } from './';

const generate = (data: InputData[]): OutputData[] => {
  const output = [];
  data.forEach((d) => {
    const { grossIncome, incomeTax, netIncome, superAmount } =
      generatePayslip(d);

    output.push({
      name: `${d.firstName} ${d.lastName}`,
      payPeriod: d.payPeriod,
      grossIncome,
      incomeTax,
      netIncome,
      superAmount,
    });
  });

  return output;
};

console.log(generate(input));
