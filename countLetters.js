// Debugging with console.assert function
const assertEqual = function(actual, expected) {
  console.assert(expected === actual, `🔥🔥🔥 ${actual} !== ${expected}`);
  if (actual === expected) {
    
    console.log(`Assertion Passed: ✔️✔️✔️ ${actual} === ${expected}`);
  }
};

const countLetters = function(string) {
  // Use string.toUpperCase() in the loop to count letters regardless of case
  const resultObj = {};
  for (let letter of string) {
    // allows you to count only letters not spaces.
    if (letter !== " ") {
      resultObj[letter] ? resultObj[letter] += 1 : resultObj[letter] = 1; 
    }
  }
  return resultObj;
};

let test1 = countLetters("l l l 4 4 2 1")
console.log(test1);
assertEqual(test1['l'], 3);
assertEqual(test1['4'], 2);
assertEqual(test1['2'], 1);
assertEqual(test1['1'], 1);