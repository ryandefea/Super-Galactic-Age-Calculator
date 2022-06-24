import ageCalculator from './../src/js/calculator.js';

describe('ageCalculator', () => {
   
  test('should return users age in Mercury years (32/.24)', () => {
    let testPerson = new ageCalculator()
    expect(testPerson.getMercuryAge()).toBeCloseTo(133.3);
   });
  test('should return users age in Venus years (32/.62)', () => {
    let testPerson = new ageCalculator();
    expect(testPerson.getVenusAge()).toBeCloseTo(51.6);
  });
  test('should return users age in Mars years (32/1.88)', () => {
    let testPerson = new ageCalculator();
    expect(testPerson.getMarsAge()).toBeCloseTo(17);
  });
  test('should return users age in Jupiter years (32/379.52)', () => {
    let testPerson = new ageCalculator();
    expect(testPerson.jupiterAge).toBeCloseTo(2.7);
  });
 });