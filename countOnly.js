// Taking in an array allItems and object itemsToCount, for each element in the array if that key exists in the object it will count the number of times
// the key shows up in the array and return an object of { key: sum } pairs
const countOnly = function(allItems, itemsToCount) {
  const resultObj = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      resultObj[item] ? resultObj[item] += 1 : resultObj[item] = 1;
    }
  }
  return resultObj;
};
module.exports = countOnly;