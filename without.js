// Main function of without
const without = function(source, itemsToRemove) {
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

//Debugging array functions
//assert whether two arrays are equal and log a message to console depending on result
const assertArraysEqual = function(actual, expected) {
  let bool = eqArrays(actual, expected) === true;
  console.assert(bool === true, `🔥🔥🔥 [${actual}] !== [${expected}]`);
  if (bool) {
    console.log(`Assertion Passed: ✔️✔️✔️ [${actual}] === [${expected}]`);
  }
};
// returns boolean of whether 2 arrays are equal, cannot check objects
const eqArrays = function(arrActual, arrExpected) {
  //If lengths are different they're not the same array, same as if either isn't an array.
  if (arrActual.length !== arrExpected.length) {
    return false;
  }
  let bool = true;
  //If any types or values are different they're different arrays.
  for (let i = 0; i < arrActual.length; i++) {
    Array.isArray(arrActual[i]) ? bool = eqArrays(arrActual[i], arrExpected[i]) : bool = arrActual[i] === arrExpected[i];
    bool === false ? false : null;
  }
  //If neither of these checks flagged then they are the same array.
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