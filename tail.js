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

const test = [1,2,3,4,5,6];
console.log(test.length);
console.log(tail(test));
console.log(test);
assertEqual(test.length, 6);