'use strict';
var calculate_median = function(collection){
  let evenPositionElement = [];
  for (let i = 0; i < Math.floor(collection.length / 2); i++) {
    evenPositionElement.push(collection[i * 2 + 1]);
  }
  return median(evenPositionElement);
};

function median(collection) {
  let medianPosition = Math.floor(collection.length / 2);
  if (collection.length % 2 === 1) {
    return collection[medianPosition];
  } else {
    return (collection[medianPosition] + collection[medianPosition - 1]) / 2;
  }
}

module.exports = calculate_median;
