// Takes in a string and outputs that string in reverse. Used to log words to console but is not the intent of this function anymore.
const reverseString = function(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
};
module.exports = reverseString;


