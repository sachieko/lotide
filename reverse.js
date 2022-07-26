'use strict';
const reverseString = function(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
};
const tail = function(arr,i) {
  let arr2 = arr.slice(i);  return arr2;
};
const reverseArg = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(reverseString(arr[i]));
  }
};
reverseArg(tail(process.argv,2));

