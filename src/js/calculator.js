//business logic

export default class ageCalculator {
    constructor() {
      this.usersAge = 32;
      this.mercuryAge = parseFloat((32/.24).toFixed(1));
      this.venusAge = parseFloat((32/.62).toFixed(1));
      this.marsAge = parseFloat((32*1.88).toFixed(1));
      this.jupiterAge = parseFloat((32*11.86).toFixed(1));
  }
}
