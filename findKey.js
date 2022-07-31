// Object debug for poor Socrates
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
const assertEqual = function(actual, expected) {
  console.assert(expected === actual, `🔥🔥🔥 ${actual} !== ${expected}`);
  if (actual === expected) {
    
    console.log(`Assertion Passed: ✔️✔️✔️ ${actual} === ${expected}`);
  }
};
// compares Objects and returns truthy value
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


// ACTUAL FUNCTION findKey here
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(key)) {
      return key;
    }
  }
  return undefined;
};

const favorites = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: ["Hotpot", "Ramen", "Sushi", "Wonton soup", "Pho", "Chips"],
  Person: "Tyler"
};

const objOfObj = {
  favorite: favorites
};

let test1 = findKey(favorites, x => x === "Metal");
assertEqual(test1, "Metal");
let test2 = findKey(favorites, x => eqArrays(favorites[x], ['Psycho-pass']));
assertEqual(test2, 'Anime');
let test3 = findKey(objOfObj, x => eqObjects(objOfObj[x], favorites));
assertEqual(test3, 'favorite');
