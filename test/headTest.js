const head = require('../head');
const assert = require('chai').assert;

describe('#head function tests', () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("returns poor for ['poor', 'socrates']", () => {
    assert.strictEqual(head(['poor','socrates']), 'poor');
  });
  it("returns [1, 4] for [[1, 4], 3, 5]", () => {
    assert.deepEqual(head([[1, 4], 3, 5]), [1, 4]);
  });
});