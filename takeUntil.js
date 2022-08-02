// takeUntil function.
const takeUntil = function(array, callback) {
  let newArray = [];
  for (let element of array) {
    if (callback(element)) {
      return newArray;
    }
    newArray.push(element);
  }
  return newArray;
};
module.exports = takeUntil;
