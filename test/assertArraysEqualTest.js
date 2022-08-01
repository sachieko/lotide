const assertArraysEqual = require('../assertArraysEqual.js');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => fail
assertArraysEqual([[]], [[]]); // => pass
