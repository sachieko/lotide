const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

let test0 = [1];
let test1 = [1, 2, 3, 4, 5];
let test2 = [1, 2, 3, 4];

assertArraysEqual(middle(test0), []);
assertArraysEqual(middle(test1), [3]);
assertArraysEqual(middle(test2), [2, 3]);
