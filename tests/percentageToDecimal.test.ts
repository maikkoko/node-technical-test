import { expect } from 'chai';
import percentageToDecimal from '../src/percentageToDecimal';

describe('percentageToDecimal', () => {
  it('should return correct decimal value', () => {
    const result1 = percentageToDecimal('101%');
    const result2 = percentageToDecimal('15%');
    const result3 = percentageToDecimal('5%');

    expect(result1).to.equal(1.01);
    expect(result2).to.equal(0.15);
    expect(result3).to.equal(0.05);
  });

  it('should return 0 when input has an invalid format', () => {
    const result1 = percentageToDecimal('helloworld');
    const result2 = percentageToDecimal('?15%');

    expect(result1).to.equal(0);
    expect(result2).to.equal(0);
  });
});
