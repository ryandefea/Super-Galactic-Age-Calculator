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

  formatValue(value) {
    //1.formatValue accepts the argument of value
    //2.value is chopped off after the first decimal point by toFixed- toFixed turns it into a string
    //3.value is turned back into a number from a string
    //4.returns the value
    return (parseFloat(value.toFixed(1)));
  }

  mercuryYearsLeft() {
    let mercuryExpectancy = this.formatValue(this.lifeExpectancy / .24)
    return this.formatValue(mercuryExpectancy - this.getMercuryAge());
  }

  venusYearsLeft() {
    let venusExpectancy = this.formatValue(this.lifeExpectancy / .62)
    // was returning too many decimal places
    return this.formatValue(venusExpectancy - this.getVenusAge());
  }

  marsYearsLeft() {
    let marsExpectancy =this.formatValue(this.lifeExpectancy / 1.88) 
    // was returning too many decimal places
    return this.formatValue(marsExpectancy - this.getMarsAge());
  }

  jupiterYearsLeft() {
    let jupiterExpectancy = this.formatValue(this.lifeExpectancy / 11.86)
    return this.formatValue(jupiterExpectancy - this.getJupiterAge());
  }

}
