'use strict';
var calculate_median = function(collection){
  return median(collection.filter((element, index) => index % 2 === 1));
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
