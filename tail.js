const tail = function(arr) {
  let arr2 = arr.slice(1);  return arr2;
};

// Debugging with console.assert function
const assertEqual = function(actual, expected) {
  console.assert(expected === actual, `🔥🔥🔥 ${actual} !== ${expected}`);
  if (actual === expected) {
    console.log(`Assertion Passed: ✔️✔️✔️ ${actual} === ${expected}`);
  }
};

const test = [];
console.log(test.length);
console.log(tail(test));
console.log(test);
assertEqual(test.length, 1);