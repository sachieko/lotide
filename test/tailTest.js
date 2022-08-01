const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

const test = tail([3, 4, [4, 5]]);
assertEqual(test.length, 2);
assertArraysEqual(test, [4, [4, 5]]);