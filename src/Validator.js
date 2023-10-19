import ArraySchema from './ArraySchema.js';
import NumberSchema from './NumberSchema.js';

export default class Validator {
  number() {
    return new NumberSchema([(value) => typeof value === 'number']);
  }

  array() {
    return new ArraySchema([(item) => Array.isArray(item)]);
  }
}
