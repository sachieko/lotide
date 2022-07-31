//Debugging array functions
//Poor Socrates
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
// Actual function.
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
let string = "Is every single code I write going to lament Socrates and his demise?";
let test1 = takeUntil(string.split(" "), x => x === "and");
assertArraysEqual(test1, ['Is', 'every', 'single', 'code', 'I', 'write', 'going', 'to', 'lament', 'Socrates']);
console.log('---');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);