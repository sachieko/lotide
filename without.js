// Main function of without will remove all elements in the itemsToRemove array from the source array.
const without = function(source, itemsToRemove) {
  //Create slice of source so we do not mutate it
  let output = source.slice(0);
  //Use filter to filter out each element of itemsToRemove
  for (let item of itemsToRemove) {
    output = output.filter(element => element !== item);
  }
  //Return the array
  return output;
};
module.exports = without;