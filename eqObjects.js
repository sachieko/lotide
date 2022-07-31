// Debugging with console.assert function
const assertEqual = function(actual, expected) {
  console.assert(expected === actual, `🔥🔥🔥 ${actual} !== ${expected} 🔥`);
  if (actual === expected) {
    
    console.log(`Assertion Passed: ✔️✔️✔️ ${actual} === ${expected} ✔️`);
  }
};
// returns boolean of whether 2 arrays are equal, cannot check objects
const eqArrays = function(arrActual, arrExpected) {
  //If lengths are different they're not the same array, same as if either isn't an array.
  if (arrActual.length !== arrExpected.length) {
    return false;
  }
  let bool = true;
  //If any types or values are different they're different arrays.
  for (let i = 0; i < arrActual.length; i++) {
    Array.isArray(arrActual[i]) ? bool = eqArrays(arrActual[i], arrExpected[i]) : bool = arrActual[i] === arrExpected[i];
    bool === false ? false : null;
  }
  //If neither of these checks flagged then they are the same array.
  return bool;
};
// ACTUAL FUNCTION
const eqObjects = function(object1, object2) {
  let bool = false;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return bool;
  }
  for (const key in object1) {
    // We need some booleans so we don't compare an array or object as if they're primitives!
    let arrayBool = Array.isArray(object2[key]) && Array.isArray(object1[key]);
    let objBool = typeof object2[key] === "object" && typeof object1[key] === "object";
    // If value for key is an array, Array.isArray() will flag it first. If typeof value returns object after this, it will be an object since it wasn't an array.
    if (arrayBool) {
      if (!eqArrays(object1[key], object2[key])) {
        return bool;
      }
    }
    // If the key isn't an array, check if it's an object.
    if (!arrayBool && objBool) {
      // If it's an object, we should return the false bool if the objects aren't equal. Call the object again!
      if (!eqObjects(object1[key], object2[key])) {
        return bool;
      }
    }
    // If it's not an array or an object, we can compare primitive types and return false if they don't match.
    if (object1[key] !== object2[key] && !arrayBool && !objBool) {
      return bool;
    }
  }
  // If it passed all flags, it should be true unless scary edge case exists.
  bool = true;
  return bool;
};

// TEST CODE BELOW HERE --- Do not modify it's huge!

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
console.log('- - - - - Test 1 - - - - -');
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
console.log('- - - - - Test 2 - - - - -');
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
console.log('- - - - - Test 3 - - - - -');
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => False

console.log('- - - - - Test 4 - - - - -');
const test1 = eqObjects(testObj1, testObj2);
assertEqual(test1, true); // => pass
console.log('- - - - - Test 5 - - - - -');
const test2 = eqObjects(testObj1, testObj3);
assertEqual(test2, false); // => pass
console.log('- - - - - Test 6 - - - - -');
const test3 = eqObjects(testObj5, testObj4);
assertEqual(test3, true); // => pass
console.log('- - - - - Test 7 - - - - -');
const test4 = eqObjects(testObj5, testObj6);
assertEqual(test4, false); // => pass