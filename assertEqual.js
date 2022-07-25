const assertEqual = function(actual, expected) {
  console.assert(expected === actual, '🔥🔥🔥 ' + actual + ' !== ' + expected);
  if (actual === expected) {
    console.log(' Assertion Passed:✨✨✨ ' + actual + ' === ' + expected);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, '1');
assertEqual('String', 'String');
