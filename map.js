// Poor Socrates
//Debugging array functions
//assert whether two arrays are equal and log a message to console depending on result
const assertArraysEqual = function(actual, expected) {
  let bool = eqArrays(actual, expected) === true;
  console.assert(bool === true, `🔥🔥🔥 [${actual}] !== [${expected}]🔥`);
  if (bool) {
    console.log(`Assertion Passed: ✔️✔️✔️ [${actual}] === [${expected}]✔️`);
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

const words = ["Look", "what", "they", "did", "to", "my", "poor", "boy", "Socrates"];
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
// Test code
assertArraysEqual(map(words, word => word[word.length - 1]), ["k", "t", "y", "d", "o", "y", "r", "y", "s"]);
assertArraysEqual(map(words, word => word + 'y'), ["Looky", "whaty", "theyy", "didy", "toy", "myy", "poory", "boyy", "Socratesy"]);
assertArraysEqual(map(words, word => word + 's'), ["Looks", "whats", "theys", "dids", "tos", "mys", "poors", "boys", "Socratess"]);