// Debugging with console.assert function
const assertEqual = (actual, expected) => {
  console.assert(expected === actual, `🔥🔥🔥 ${actual} !== ${expected}`);
  if (actual === expected) {
    
    console.log(`Assertion Passed: ✔️✔️✔️ ${actual} === ${expected}`);
  }
};

const eqArrays = (arrActual, arrExpected) => {
  let bool = false;
  if (arrActual.length !== arrExpected.length) {
    return bool;
  }
  for (let i = 0; i < arrActual.length; i++) {
    if (arrActual[i] !== arrExpected[i]) {
      bool = false;
      return bool;
    }
  } 
  bool = true;
  return bool;
}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
