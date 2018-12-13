'use strict';

function compute_chain_median(collection) {
  let array = collection.split('->').map(Number).sort(compare);
  return findMedian(array);
}

function findMedian(array) {
  if (array.length % 2 === 0) {
    return (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
  } else {
    return array[(array.length - 1) / 2];
  }
}

function compare(num_a, num_b) {
  if (num_a < num_b) {
    return -1;
  } else if (num_a > num_b) {
    return 1;
  } else {
    return 0;
  }
}

module.exports = compute_chain_median;
