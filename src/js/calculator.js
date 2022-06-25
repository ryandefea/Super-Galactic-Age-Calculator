//business logic

export default class ageCalculator {
    constructor(usersAge) {
      this.usersAge = usersAge;
      this.lifeExpectancy = 100;

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

  earthYearsLeft() {
    return this.lifeExpectancy - this.usersAge;
  }

  mercuryYearsLeft() {
    let mercuryExpectancy = parseFloat((this.lifeExpectancy / 0.24).toFixed(1))
    return mercuryExpectancy - this.getMercuryAge();
  }

  venusYearsLeft() {
    let venusExpectancy = parseFloat((this.lifeExpectancy / 0.62).toFixed(1))
    // was returning too many decimal places
    return parseFloat(( venusExpectancy - this.getVenusAge()).toFixed(1));
  }

  marsYearsLeft() {
    let marsExpectancy = parseFloat((this.lifeExpectancy / 1.88).toFixed(1))
    // was returning too many decimal places
    return parseFloat(( marsExpectancy - this.getMarsAge()).toFixed(1));
  }

  jupiterYearsLeft() {
    let jupiterExpectancy = parseFloat((this.lifeExpectancy / 11.86).toFixed(1))
    // was returning too many decimal places
    return parseFloat(( jupiterExpectancy - this.getJupiterAge()).toFixed(1));
  }


}
