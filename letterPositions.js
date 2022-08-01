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
