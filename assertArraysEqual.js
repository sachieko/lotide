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
const eqArrays = function(arrActual, arrExpected) {
  //If lengths are different they're not the same array.
  let bool = false;
  if (!Array.isArray(arrActual) || !Array.isArray(arrExpected)) {
    return bool;
  }
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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => fail