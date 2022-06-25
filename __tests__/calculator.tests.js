import ageCalculator from './../src/js/calculator.js';

describe('ageCalculator', () => {
   const usersAge = 32;
  test('should return users age in Mercury years (32/.24)', () => {
    let testPerson = new ageCalculator(usersAge)
    expect(testPerson.getMercuryAge()).toBeCloseTo(133.3);
   });
  test('should return users age in Venus years (32/.62)', () => {
    let testPerson = new ageCalculator(usersAge);
    expect(testPerson.getVenusAge()).toBeCloseTo(51.6);
  });
  test('should return users age in Mars years (32/1.88)', () => {
    let testPerson = new ageCalculator(usersAge);
    expect(testPerson.getMarsAge()).toBeCloseTo(17);
  });
  test('should return users age in Jupiter years (32/379.52)', () => {
    let testPerson = new ageCalculator(usersAge);
    expect(testPerson.getJupiterAge()).toBeCloseTo(2.7);
  });
  test('should return users years left on Earth', () => {
    let testPerson = new ageCalculator(usersAge);
    expect(testPerson.earthYearsLeft()).toEqual(68);
  });
  test('should return users years left on Mercury', () => {
    let testPerson = new ageCalculator(usersAge);
    // 1. convert earth years to mercury years
    // 2. life expectancy minus users age
    // 3. mercury age equals 133 life expectancy equals 416.6
    expect(testPerson.mercuryYearsLeft()).toEqual(283.6);
  });

 });