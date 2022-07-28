// Debugging with console.assert function
const assertEqual = function(actual, expected) {
  console.assert(expected === actual, `🔥🔥🔥 ${actual} !== ${expected} 🔥`);
  if (actual === expected) {
    
    console.log(`Assertion Passed: ✔️✔️✔️ ${actual} === ${expected} ✔️`);
  }
};

const head = function(arr) {
  return arr[0];
};

assertEqual(head([5]), 5); // => pass
assertEqual(head([]), undefined); // => pass
assertEqual(head([4,3,2]), 3); // => fail