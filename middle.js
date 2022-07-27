//Debugging functions
//assert whether two arrays are equal and log a message to console depending on result
const assertArraysEqual = (actual, expected) => {
  let bool = eqArrays(actual, expected) === true;
  console.assert(bool === true, `🔥🔥🔥 ${actual} !== ${expected}`);
  if (bool) {
    console.log(`Assertion Passed: ✔️✔️✔️ ${actual} === ${expected}`);
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

// ACTUAL FUNCTION here ugh. It takes in an array, and it MUST be an array haha, and then outputs the middle element(s) of the array. Does not mutate.
const middle = array => {
// Arrays with one or two elements should return an empty array
  if (array.length <= 2) {
    return [];
  } 
// Arrays with an odd number of elements should return an array of the single middle element
  if (array.length % 2 !== 0) {
    return [array[Math.floor(array.length / 2)]];
  }
// Arrays with even should return two middle elements.
  if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1], array[array.length / 2]]
  }
};

let test0 = [1];
let test1 = [1, 2, 3, 4, 5];
let test2 = [1, 2, 3, 4];

assertArraysEqual(middle(test0), []);
assertArraysEqual(middle(test1), [3]);
assertArraysEqual(middle(test2), [2, 3]);
