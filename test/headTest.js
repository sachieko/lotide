const head = require('../head.js');
const assertEqual = require('../assertEqual');

assertEqual(head([5]), 5); // => pass
assertEqual(head([]), undefined); // => pass
assertEqual(head(['poor','socrates']), 'poor'); // => pass
assertEqual(head([4,3,2]), 3); // => fail