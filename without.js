// Main function of without
const without = (source, itemsToRemove) => {
  //Create slice of source so we do not mutate it
  let output = source.slice(0);
  //Mutate the output array by removing itemsToRemove
  //Use filter to filter out each element of itemsToRemove
  for (let item of itemsToRemove) {
    output = output.filter(element => element !== item);
  }
  //Return the array
  return output;
};

// HELPER FUNCTIONS BELOW HERE
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

// Test cases
const a = [0, 1, 2, 3];
const b = [1, 3];
assertArraysEqual(without(a, b), [0, 2]);
assertArraysEqual(a, [0, 1, 2, 3]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);