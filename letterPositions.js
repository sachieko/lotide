// Returns an object of letter: array key:value pairs where value is an array of a letter's indices in the input string
const letterPositions = function(string) {
  const resultObj = {};
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    // allows you to count only letters not spaces.
    if (letter !== " ") {
      resultObj[letter] ? resultObj[letter].push(i) : resultObj[letter] = [i];
    }
  }
  return resultObj;
};
module.exports = letterPositions;
