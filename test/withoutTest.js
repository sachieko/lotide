const without = require('../without');
const assert = require('chai').assert;

// Test cases
const a = [0, 1, 2, 3];
const b = [1, 3];
const wordsOriginal = ["Poor", "old", "Socrates"];
const words = ["Poor", "old", "Socrates"];

describe('#without function tests:', () => {
  it(`should return an array without [1, 3] from [0, 1, 2, 3]`, () => {
    assert.deepEqual(without(a, b), [0, 2]);
  });
  it(`should return an array without "old" from ${JSON.stringify(wordsOriginal)}`, () => {
    assert.deepEqual(without(words, ["old"]), ["Poor", "Socrates"]);
  });
  it(`should not modify the original array of ${JSON.stringify(wordsOriginal)}`, () => {
    assert.deepEqual(words, wordsOriginal);
  });
});