// Debugging with console.assert function
const assertEqual = function(actual, expected) {
  console.assert(expected === actual, `🔥🔥🔥 ${actual} !== ${expected} 🔥`);
  if (actual === expected) {
    
    console.log(`Assertion Passed: ✔️✔️✔️ ${actual} === ${expected} ✔️`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const resultObj = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      resultObj[item] ? resultObj[item] += 1 : resultObj[item] = 1;
    }
  }
  return resultObj;
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