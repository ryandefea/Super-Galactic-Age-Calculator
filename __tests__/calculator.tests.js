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
  test('should return users age in Jupiter years (32/11.86)', () => {
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
    expect(testPerson.mercuryYearsLeft()).toEqual(283.4);
  });
  test('should return users years left on Venus', () => {
    let testPerson = new ageCalculator(usersAge);
    // 1. convert earth years to venus years
    // 2. life expectancy minus users age
    // 3. venus age equals 51.6 life expectancy equals 161.2
    expect(testPerson.venusYearsLeft()).toEqual(109.7);
  });
  test('should return users years left on Mars', () => {
    let testPerson = new ageCalculator(usersAge);
    // 1. convert earth years to mars years
    // 2. life expectancy minus users age
    // 3. mars age equals 17 life expectancy equals 53.1
    expect(testPerson.marsYearsLeft()).toEqual(36.2);
  });
  test('should return users years left on Jupiter', () => {
    let testPerson = new ageCalculator(usersAge);
    // 1. convert earth years to Jupiter years
    // 2. life expectancy minus users age
    // 3. jupiter age equals 2.7 life expectancy equals 8.4
    expect(testPerson.jupiterYearsLeft()).toEqual(5.7);
  });
  test('should return years past life expectancy', () => {
    let testPerson = new ageCalculator(130);
    // 1. if im 130 years old im 30 years past life expectancy
    expect(testPerson.earthYearsLeft()).toEqual(30);
  });

 });