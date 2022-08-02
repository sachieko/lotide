const map = require('../map');
const assert = require('chai').assert;

const words = ["Look", "what", "they", "did", "to", "my", "poor", "boy", "Socrates"];
describe('#map function tests:', () => {
  it('should make an array using the function word => word[word.length - 1] on the array', () => {
    assert.deepEqual(map(words, word => word[word.length - 1]), ["k", "t", "y", "d", "o", "y", "r", "y", "s"]);
  });
  it(`should make an array using the function word => word + 'y' on the array`, () => {
    assert.deepEqual(map(words, word => word + 'y'), ["Looky", "whaty", "theyy", "didy", "toy", "myy", "poory", "boyy", "Socratesy"]);
  });
  it(`should make an array using the function word => word + 's' on the array`, () => {
    assert.deepEqual(map(words, word => word + 's'), ["Looks", "whats", "theys", "dids", "tos", "mys", "poors", "boys", "Socratess"]);
  });
});