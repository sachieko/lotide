const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let bool = eqObjects(actual, expected) === true;
  console.assert(bool === true, `🔥🔥🔥 [${inspect(actual)}] !== [${inspect(expected)}]🔥`);
  if (bool) {
    console.log(`Assertion Passed: ✔️✔️✔️ [${inspect(actual)}] === [${inspect(expected)}]✔️`);
  }
};

const testObj1 = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: ["Hotpot", "Ramen", "Sushi", "Wonton soup", "Pho", "Chips"],
  Person: "Tyler"
};

const testObj2 = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: ["Hotpot", "Ramen", "Sushi", "Wonton soup", "Pho", "Chips"],
  Person: "Tyler"
};

const testObj3 = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: ["Hotpot", "Ramen", "Sushi", "Wonton soup", "Pho", "Chips"],
  Person: "Neil"
};

const testObj4 = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: {
    Soup: ["Ramen", "Pho", "Hotpot", "Wonton soup"],
    RiceDish: ["Sushi"]
  }
};

const testObj5 = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: {
    Soup: ["Ramen", "Pho", "Hotpot", "Wonton soup"],
    RiceDish: ["Sushi"]
  }
};

const testObj6 = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: {
    Soup: ["Ramen", "Pho", "Wonton soup"],
    RiceDish: ["Sushi"]
  }
};

assertObjectsEqual(testObj1, testObj2); // ==> Pass
assertObjectsEqual(testObj1, testObj3); // ==> Fail
assertObjectsEqual(testObj4, testObj5); // ==> Pass
assertObjectsEqual(testObj4, testObj6); // ==> Fail