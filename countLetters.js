//countLetters will return an object with Letter: Freq key:value pairs on a string.
const countLetters = function(string) {
  // Use string.toUpperCase() in the loop to count letters regardless of case
  const resultObj = {};
  for (let letter of string) {
    // allows you to count only letters not spaces.
    if (letter !== " ") {
      resultObj[letter] ? resultObj[letter] += 1 : resultObj[letter] = 1;
    }
  }
  return resultObj;
};
module.exports = countLetters;
