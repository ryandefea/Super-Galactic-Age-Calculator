import ageCalculator from './../src/js/calculator.js';

describe('ageCalculator', () => {
   
  test('should return users age in Mercury years (32/.24)', () => {
    let testPerson = new ageCalculator()
    expect(testPerson.mercuryAge).toBeCloseTo(133.2);
   });
 });