// Debugging with console.assert function
const assertEqual = (actual, expected) => {
  console.assert(expected === actual, `🔥🔥🔥 ${actual} !== ${expected}`);
  if (actual === expected) {
    
    console.log(`Assertion Passed: ✔️✔️✔️ ${actual} === ${expected}`);
  }
};

const eqArrays = (arrActual, arrExpected) => {
  if (arrActual.length !== arrExpected.length) {
    console.log(`🔥🔥🔥 Array Length Mismatch! 🔥🔥🔥`);
    process.exit();
  }
  for (let i = 0; i < arrActual.length; i++) {
    assertEqual(arrActual[i], arrExpected[i]);
  } 
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false