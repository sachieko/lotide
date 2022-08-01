const eqArrays = require('./eqArrays');

// ACTUAL FUNCTION
const eqObjects = function(object1, object2) {
  let bool = false;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return bool;
  }
  for (const key in object1) {
    // We need some booleans so we don't compare an array or object as if they're primitives!
    let arrayBool = Array.isArray(object2[key]) && Array.isArray(object1[key]);
    let objBool = typeof object2[key] === "object" && typeof object1[key] === "object";
    // If value for key is an array, Array.isArray() will flag it first. If typeof value returns object after this, it will be an object since it wasn't an array.
    if (arrayBool) {
      if (!eqArrays(object1[key], object2[key])) {
        return bool;
      }
    }
    // If the key isn't an array, check if it's an object.
    if (!arrayBool && objBool) {
      // If it's an object, we should return the false bool if the objects aren't equal. Call the object again!
      if (!eqObjects(object1[key], object2[key])) {
        return bool;
      }
    }
    // If it's not an array or an object, we can compare primitive types and return false if they don't match.
    if (object1[key] !== object2[key] && !arrayBool && !objBool) {
      return bool;
    }
  }
  // If it passed all flags, it should be true unless scary edge case exists.
  bool = true;
  return bool;
};
module.exports = eqObjects;