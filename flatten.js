//Flatten function takes an array and returns a flattened version of the array.
'use strict';
const flatten = arr => {
  let flatArray = [],
    index = -1;
  // We should just make a new array without mutating, so let's make a new array to push elements to.
  // I'll loop over the input array, and if an element is not an array we'll try to push it to
  while (++index < arr.length) {
    let value = arr[index];
    if (Array.isArray(value)) {
      for (let ele of value) {
        flatArray.push(ele);
      }
    }
    if (!Array.isArray(value)) {
      flatArray.push(value);
    }
  }
  return flatArray;
};

//Debugging array functions
//assert whether two arrays are equal and log a message to console depending on result
const assertArraysEqual = function(actual, expected) {
  let bool = eqArrays(actual, expected) === true;
  console.assert(bool === true, `🔥🔥🔥 [${actual}] !== [${expected}]🔥`);
  if (bool) {
    console.log(`Assertion Passed: ✔️✔️✔️ [${actual}] === [${expected}]✔️`);
  }
};
// This cannot check nested arrays or objects, returns boolean of whether 2 arrays are equal.
const eqArrays = (arrActual, arrExpected) => {
  //If lengths are different they're not the same array.
  let bool = false;
  if (arrActual.length !== arrExpected.length) {
    return bool;
  }
  //If any types or values are different they're different arrays.
  for (let i = 0; i < arrActual.length; i++) {
    if (arrActual[i] !== arrExpected[i]) {
      bool = false;
      return bool;
    }
  }
  //If neither of these checks flagged then they are the same array.
  bool = true;
  return bool;
};

// Test cases below
const a = [1, 2, [3, 4], 5, [6]];

let test1 = flatten(a);  // => [1, 2, 3, 4, 5, 6]
console.log(test1);
assertArraysEqual(test1, [1, 2, 3, 4, 5, 6]);

const b = ['h', 0, ['p', 3]];
let test2 = flatten(b); // => ['h', 0, 'p', 3]
console.log(test2);
assertArraysEqual(test2, ['h', 0, 'p', 3]);
