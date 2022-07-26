// A true test would be implementing actual pig latin rules. :)
const pigString = function(str) {
  let pigStr = "";
  for (let i = 1; i < str.length; i++) {
    pigStr += str[i];
  }
  pigStr += str[0] + 'ay';
  return pigStr;
};
// Returns an array after a specified index. We will use 2.
const tail = function(arr,i) {
  let arr2 = arr.slice(i);  return arr2;
};
// Constructs the strings into one after translating each to pig latin.
const pigArg = function(arr) {
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    output += `${pigString(arr[i])} `;
  }
  output = output.trim();
  return output;
};
console.log(pigArg(tail(process.argv,2)));