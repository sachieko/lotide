const findKey = require('../findKey');
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');

const favorites = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: ["Hotpot", "Ramen", "Sushi", "Wonton soup", "Pho", "Chips"],
  Person: "Tyler"
};
const objOfObj = {
  favorite: favorites
};
const test1 = findKey(favorites, x => x === "Metal");
const test2 = findKey(favorites, x => eqArrays(favorites[x], ['Psycho-pass']));
const test3 = findKey(objOfObj, x => eqObjects(objOfObj[x], favorites));
describe("#findKey function tests", () => {
  it(`should return a key that matches the input of "${test1}" by matching name of key`, () => {
    assert.strictEqual(test1, "Metal");
  });
  it(`should return a key that matches the input of "${test2}" by using a value`, () => {
    assert.strictEqual(test2, "Anime");
  });
  it(`should return a key that matches the input of "${test3} for an object of objects" by using an object as a value`, () => {
    assert.strictEqual(test3, "favorite");
  });
});
