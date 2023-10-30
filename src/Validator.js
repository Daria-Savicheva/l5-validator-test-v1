import ArraySchema from './ArraySchema.js';
import NumberSchema from './NumberSchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  number() {
    return new NumberSchema([(value) => typeof value === 'number']);
  }

  // eslint-disable-next-line class-methods-use-this
  array() {
    return new ArraySchema([(item) => Array.isArray(item)]);
  }

  // eslint-disable-next-line class-methods-use-this
  object() {
    return new ObjectSchema();
  }
}
