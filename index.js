// index.js is an object for exporting our library's functions
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const reverse = require('./reverse');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  map,
  middle,
  reverse,
  tail,
  takeUntil,
  without
};