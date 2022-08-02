//Outdated due to Mocha chai testing
const assertArraysEqual = require('./assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => fail
assertArraysEqual([[]], [[]]); // => pass
