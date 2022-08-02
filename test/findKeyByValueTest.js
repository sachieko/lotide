const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

// TEST CASES ---
const favorites = {
  Metal: ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"],
  Anime: ["Psycho-pass"],
  Food: ["Hotpot", "Ramen", "Sushi", "Wonton soup", "Pho", "Chips"],
  Person: "Tyler"
};

const test1 = {
  favorite: favorites
};
describe("#findKey function tests", () => {
  it(`should return a key "Metal" that maps to object "${favorites.Metal}" via value comparison`, () => {
    assert.strictEqual(findKeyByValue(favorites, ["Nothing More", "STARSET", "Savage Hands", "Motionless in White"]), "Metal");
  });
  it(`should return a key "Anime" that maps to object "${favorites.Anime}" via value comparison`, () => {
    assert.strictEqual(findKeyByValue(favorites, ["Psycho-pass"]), "Anime");
  });
  it(`should return a key "Food" that maps to object "${favorites.Food}" via value comparison`, () => {
    assert.strictEqual(findKeyByValue(favorites, ["Hotpot", "Ramen", "Sushi", "Wonton soup", "Pho", "Chips"]), "Food");
  });
  it(`should return a key "Person" that maps to object "${favorites.Person}" via value comparison`, () => {
    assert.strictEqual(findKeyByValue(favorites, "Tyler"), "Person");
  });
  it(`should return a key "favorite" that maps to object "${test1}" via value comparison`, () => {
    assert.strictEqual(findKeyByValue(test1, favorites), "favorite");
  });
});