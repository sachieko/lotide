// Returns an array minus the very first value without mutating the input array.
const tail = function(arr) {
  let arr2 = arr.slice(1);  return arr2;
};
module.exports = tail;
