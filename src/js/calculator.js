//business logic

export default class ageCalculator {
    constructor(usersAge) {
      this.usersAge = usersAge;

  }

  getMercuryAge() {
    return parseFloat((this.usersAge / 0.24).toFixed(1))
  }

  getVenusAge() {
    return parseFloat((this.usersAge / 0.62).toFixed(1))
  }

  getMarsAge() {
    return parseFloat((this.usersAge / 1.88).toFixed(1))
  }

  getJupiterAge() {
    return parseFloat((this.usersAge / 11.86).toFixed(1))
  }
}
