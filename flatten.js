//Flatten function takes an array and returns a flattened version of the array. Will flatten COMPLETELY!
'use strict';
const flatten = arr => {
  let flatArray = [],
    index = -1;
  // We should just make a new array without mutating, so let's make a new array to push elements to.
  // I'll loop over the input array, and if an element is not an array we'll try to push it to
  while (++index < arr.length) {
    let value = arr[index];
    if (Array.isArray(value)) {
      const subArray = flatten(value);
      for (let ele of subArray) {
        flatArray.push(ele);
      }
    }
    if (!Array.isArray(value)) {
      flatArray.push(value);
    }
  }
  return flatArray;
};
module.exports = flatten;

/*
If the element it needs to push to the flattened array is an array itself, it should first push that array to the flattened array.

if value = array, then you should flatten that array before pushing it.
*/