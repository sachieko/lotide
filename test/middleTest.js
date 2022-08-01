const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle function tests', () => {
  it("returns [5, 6] for [4, 5, 6, 7] (2 values for even arrays)", () => {
    assert.deepEqual(middle([4, 5, 6, 7]), [5, 6]);
  });
  it("returns [] for arrays with only 2 elements", () => {
    assert.deepEqual(middle(['Poor', 'Socrates']), []);
  });
  it("returns [4] for [1, 2, 3, 4, 5, 6, 7] (1 value for odd arrays)", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
  it("returns [[]] for [[], [], []] with odd elements of empty arrays", () => {
    assert.deepEqual(middle([[], [], []]), [[]]);
  });
  it("returns [] for [] arrays", () => {
    assert.deepEqual(middle([]), []);
  });
});