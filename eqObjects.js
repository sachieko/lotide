// Debugging with console.assert function
const assertEqual = function(actual, expected) {
  console.assert(expected === actual, `🔥🔥🔥 ${actual} !== ${expected} 🔥`);
  if (actual === expected) {
    
    console.log(`Assertion Passed: ✔️✔️✔️ ${actual} === ${expected} ✔️`);
  }
};
// This cannot check nested arrays or objects, returns boolean of whether 2 arrays are equal.
const eqArrays = function(arrActual, arrExpected) {
  //If lengths are different they're not the same array, same as if either isn't an array.
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
// ACTUAL FUNCTION
const eqObjects = function(object1, object2) {
  let bool = false;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return bool;
  }
  for (const key in object1) {
    // We need some booleans so we don't compare an array or object as if they're primitives!
    let arrayBool = Array.isArray(object2[key]);
    let objBool = typeof object2[key] === "object" && typeof object1[key] === "object";
    // If value for key is an array, Array.isArray() will flag it first. If typeof value returns object after this, it will be an object since it wasn't an array.
    // If it's an array it will be compared here and if any arrays aren't equal it will return the false bool.
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const test = [eqObjects(ab, ba), eqObjects(ab, abc)]; // ==> [true, false]
assertEqual(test[0], true); // Pass
assertEqual(test[1], false); // Pass

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const test0 = [eqObjects(cd, dc), eqObjects(cd, cd2)]; // => [true, false]
assertEqual(test0[0], true); // Both should pass tests now.
assertEqual(test0[1], false); //

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

const test1 = eqObjects(testObj1, testObj2);
assertEqual(test1, true); // => pass
const test2 = eqObjects(testObj1, testObj3);
assertEqual(test2, false); // => pass
const test3 = eqObjects(testObj5, testObj4);
assertEqual(test3, true); // => pass
const test4 = eqObjects(testObj5, testObj6);
assertEqual(test4, false); // => pass