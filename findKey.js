//findKey will search for a key in an object whose value matches the provided function's truthy value for true.
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(key)) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKey;
