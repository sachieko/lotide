const reverse = require('../reverse');
const assert = require('chai').assert;

describe('#reverse function tests:', () => {
  it('should reverse Socrates to setarcoS', () => {
    assert.equal(reverse('Socrates'), 'setarcoS');
  });
});

// const reverseArg = function(arr) {
//// for (let i = 0; i < arr.length; i++) {
////// console.log(reverseString(arr[i]));
//// }
// };
// reverseArg(tail(process.argv,2));