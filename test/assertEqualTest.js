// Outdated due to Mocha chai testing.
const assertEqual = require('./assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); // => Fail
assertEqual(1, 1); // => Pass
assertEqual(1, '1'); // => Fail
assertEqual('String', 'String'); // => Pass
assertEqual('Poor Socrates ', 'Poor Socrates '); // => Pass