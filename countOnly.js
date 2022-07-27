// Debugging with console.assert function
const assertEqual = (actual, expected) => {
  console.assert(expected === actual, `🔥🔥🔥 ${actual} !== ${expected}`);
  if (actual === expected) {
    
    console.log(`Assertion Passed: ✔️✔️✔️ ${actual} === ${expected}`);
  }
};

// Given an array and an object which lists which values to count as {value: true/false} pairs, returns {value: count}
// So our function will need to take an array and object as parameters.
const countOnly = function(array, itemsToCount) {
  const returnObj = {};
  // Create an object with keys for only those we would like to count. Takes in an array and object, returns object with keys only if key: true.
  for (let value in itemsToCount) {
    if (itemsToCount.hasOwnProperty(value)) {
      let sum = countValues(array, value);
      setKeyToSum(itemsToCount, returnObj, value, sum);
    }
  }
  return returnObj;
};
// Helper functions for countOnly
// Sets a key of object[value] to sum only if the sum is not 0.
const setKeyToSum = function(inputObject, outputObject, value, sum) {
  if (sum > 0 && inputObject[value] === true) {
    outputObject[value] = sum;
  }
};
// This function takes in an array and counts how many elements in the array match the given key.
const countValues = function(array, key) {
  let count = 0;
  for (const value of array) {
    if (key === value) {
      count += 1;
    }
  }
  return count;
};

// Test cases ---
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

const result2 = countOnly(firstNames, { "Karl": true, "Salima": true, "Sachieko": true});

console.log(result2);
assertEqual(result2["Karl"], 1);
assertEqual(result2["Salima"], 2);
assertEqual(result2["Sachieko"], undefined);