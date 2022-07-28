// Debugging with console.assert function
const assertEqual = function(actual, expected) {
  console.assert(expected === actual, `🔥🔥🔥 ${actual} !== ${expected} 🔥`);
  if (actual === expected) {
    
    console.log(`Assertion Passed: ✔️✔️✔️ ${actual} === ${expected} ✔️`);
  }
};
// We need eqArrays so findKeyByValue can work if the value of a key in the object is an array
// We will need to do something similar if the key is an object.
// This cannot check nested arrays or objects, returns boolean of whether 2 arrays are equal.
const eqArrays = function(arrActual, arrExpected) {
  //If lengths are different they're not the same array.
  let bool = false;
  if (!Array.isArray(arrActual) || !Array.isArray(arrExpected)) {
    return bool;
  }
  if (arrActual.length !== arrExpected.length) {
    return bool;
  }
  //If any types or values are different they're different arrays.
  for (let i = 0; i < arrActual.length; i++) {
    if (arrActual[i] !== arrExpected[i]) {
      bool = false;
      return bool;
    }
  }
  //If neither of these checks flagged then they are the same array.
  bool = true;
  return bool;
};

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
    if (eqArrays(object[key], value)) {
      return key;
    }
  }
  return undefined;
};

// TEST CASES ---
const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const favorites = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: ["Hotpot", "Ramen", "Sushi", "Wonton soup", "Pho", "Chips"],
  Person: "Tyler"
};

assertEqual(findKeyByValue(favorites, ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"]), "Metal");
assertEqual(findKeyByValue(favorites, ["Psycho-pass"]), "Anime");
assertEqual(findKeyByValue(favorites, ["Hotpot", "Ramen", "Sushi", "Wonton soup", "Pho", "Chips"]), "Food");
assertEqual(findKeyByValue(favorites, "Tyler"), "Person");