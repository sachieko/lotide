const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

let test1 = 'Poor Socrates, look what they did to my boy';
describe('#letterPosition function tests:', () => {
  it('should return an array with a single value if a letter shows up only once', () => {
    assert.deepEqual(letterPositions(test1)['S'], [5]);
  });
  it('should return an array of multiple values of that letter\'s indices if a letter occurs more than once', () => {
    assert.deepEqual(letterPositions(test1)['o'], [1, 2, 6, 16, 17, 35, 41]);
  });
});