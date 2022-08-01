const countLetters = require('../countLetters');
const assert = require('chai').assert;
let test1 = countLetters("Poor Socrates poisoned for being a critic");

describe('#countLetters function test', () => {
  it(`Returns an object with [letter: frequency] value pairs for ${test1} case sensitive`, () => {
    assert.strictEqual(test1['P'], 1);
    assert.strictEqual(test1['S'], 1);
    assert.strictEqual(test1['c'], 3);
    assert.strictEqual(test1['o'], 6);
    assert.strictEqual(test1['r'], 4);
    assert.strictEqual(test1['p'], 1);
    assert.strictEqual(test1['t'], 2);
    assert.strictEqual(test1['s'], 2);
    assert.strictEqual(test1['e'], 3);
    assert.strictEqual(test1['a'], 2);
    assert.strictEqual(test1['i'], 4);
    assert.strictEqual(test1['n'], 2);
    assert.strictEqual(test1['g'], 1);
    assert.strictEqual(test1['d'], 1);
    assert.strictEqual(test1['b'], 1);
  });
});
