'use strict';

let compute_chain_median = collection => {
  let array = collection.split('->').map(Number).sort((a, b) => a - b);
  return findMedian(array);
};

let findMedian = array => {
  if (array.length % 2 === 0) {
    return (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
  } else {
    return array[(array.length - 1) / 2];
  }
};

module.exports = compute_chain_median;
