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

const letterPositions = function(string) {
  const resultObj = {};
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    // allows you to count only letters not spaces.
    if (letter !== " ") {
      resultObj[letter] ? resultObj[letter].push(i) : resultObj[letter] = [i];
    }
  }
  return resultObj;
};

console.log(letterPositions('lighthouse in the house'));
let test1 = 'hello';
assertArraysEqual(letterPositions(test1)['h'], [0]);
assertArraysEqual(letterPositions(test1)['e'], [1]);
assertArraysEqual(letterPositions(test1)['l'], [2, 3]);
assertArraysEqual(letterPositions(test1)['o'], [4]);