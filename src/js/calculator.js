//business logic

export default class ageCalculator {
    constructor() {
      this.usersAge = 32;
      this.marsAge = parseFloat((32/1.88).toFixed(1));
      this.jupiterAge = parseFloat((32/11.86).toFixed(1));
  }

  getMercuryAge() {
    return parseFloat((this.usersAge / 0.24).toFixed(1))
  }

  getVenusAge() {
    return parseFloat((this.usersAge / 0.62).toFixed(1))
  }
}
