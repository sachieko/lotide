// Dependent on these functions.
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
//findKeyByValue function searches for a key with input value.
const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
    if (eqArrays(object[key], value)) {
      return key;
    }
    if (eqObjects(object, value)) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKeyByValue;