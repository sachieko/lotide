// It takes in an array, it MUST be an array haha, and then outputs the middle element(s) of the array. Does not mutate.
const middle = function(array) {
// Arrays with one or two elements should return an empty array
  if (array.length <= 2) {
    return [];
  }
  let halfIndex = array.length / 2;
  let isEven = array.length % 2 === 0;
  // Arrays with an odd number of elements should return an array of the single middle element
  if (!isEven) {
    return [array[Math.floor(halfIndex)]];
  }
  // Arrays with even should return two middle elements.
  if (isEven) {
    return [array[halfIndex - 1], array[halfIndex]];
  }
};
module.exports = middle;
