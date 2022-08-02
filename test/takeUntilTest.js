const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

let string = "Is every single code I write going to lament Socrates and his demise?";
let test1 = takeUntil(string.split(" "), x => x === "and");
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

describe('#takeUntil function tests:', () => {
  it(`should return: ['Is', 'every', 'single', 'code', 'I', 'write', 'going', 'to', 'lament', 'Socrates'] without "and his demise?"`, () => {
    assert.deepEqual(test1, ['Is', 'every', 'single', 'code', 'I', 'write', 'going', 'to', 'lament', 'Socrates']);
  });
  it(`should return only numbers greater than 0: [1, 2, 5, 7, 2]`, () => {
    assert.deepEqual(results1, [ 1, 2, 5, 7, 2 ]);
  });
  it(`should return only numbers greater than 0: [1, 2, 5, 7, 2]`, () => {
    assert.deepEqual(results1, [ 1, 2, 5, 7, 2 ]);
  });
});
