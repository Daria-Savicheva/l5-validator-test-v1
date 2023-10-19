export default class NumberSchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(item) {
    return this.validators.every((validator) => validator(item) === true);
  }

  even() {
    const validator = (value) => value % 2 === 0;
    return new NumberSchema([...this.validators, validator]);
  }

  odd() {
    const validator = (value) => value % 2 !== 0;
    return new NumberSchema([...this.validators, validator]);
  }
}
