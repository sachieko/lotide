const flatten = require('../flatten');
const assert = require('chai').assert;

// Test cases below
const a = [1, 2, [3, 4], 5, [6]];
const b = ['h', 0, ['p', 3]];

describe('#flatten  function tests', () => {
  it('should return an array with 1 level of nesting without any nesting', () => {
    assert.deepEqual(flatten(a), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(flatten(b), ['h', 0, 'p', 3]);
  });
  it('should return an already flat array with no changes', () => {
    assert.deepEqual(flatten([1, 2, 1, 2, 3, 5]), [1, 2, 1, 2, 3, 5]);
  });
  it('should return an array with 2 levels of nesting with no levels of nesting', () => {
    assert.deepEqual(flatten([[1, 2], [1, [2, 3]], [5]]), [1, 2, 1, 2, 3, 5]);
  });
  it('should return an array with 3 levels of nesting with no levels of nesting', () => {
    assert.deepEqual(flatten([[1, 2], [[1, [2, 3]], 4], [5]]), [1, 2, 1, 2, 3, 4, 5]);
  });
  it('should return an array with 5 levels of nesting with no levels of nesting', () => {
    assert.deepEqual(flatten([[[[1]]]]), [1]);
  });
});