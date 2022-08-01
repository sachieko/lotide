const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail function tests', () => {
  it("returns [4, [4, 5]] for [3, 4, [4, 5]]", () => {
    assert.deepEqual(tail([3, 4, [4, 5]]), [4, [4, 5]]);
  });
  it("returns ['Socrates'] for ['Poor', 'Socrates']", () => {
    assert.deepEqual(tail(['Poor', 'Socrates']), ['Socrates']);
  });
  it("returns [2, 3, 4, 5, 6, 7, 8] for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6, 7, 8]), [2, 3, 4, 5, 6, 7, 8]);
  });
  it("returns [[]] for [[], []]", () => {
    assert.deepEqual(tail([[], []]), [[]]);
  });
});