const countOnly = require('../countOnly');
const assert = require('chai').assert;

// Test cases ---
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Sachieko",
  "Kavith",
  "Jason",
  "Salima",
  "Joe",
  "Sachieko"
];

const test1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Sachieko": true, "Agouhanna": false, "Fang": true });

describe('#countLetters function test', () => {
  it(`Count of Jason in test object should be: 1`, () => {
    assert.strictEqual(test1['Jason'], 1);
  });
  it(`Count of Karima in test object should be: undefined due to mispelling`, () => {
    assert.strictEqual(test1['Karima'], undefined);
  });
  it(`Count of Sachieko in test object should be: 2`, () => {
    assert.strictEqual(test1['Sachieko'], 2);
  });
  it(`Count of Agouhanna in test object should be: undefined due to not counting it`, () => {
    assert.strictEqual(test1['Agouhanna'], undefined);
  });
  it(`Count of Fang in test object should be: undefined due to missing`, () => {
    assert.strictEqual(test1['Fang'], undefined);
  });
});

