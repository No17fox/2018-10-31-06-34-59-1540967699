'use strict';

function compute_median(collection) {
  return findMedian(collection.sort(compare));
}

function compare(num_a, num_b) {
  return num_a - num_b;
}

function findMedian(array) {
  if (array.length % 2 === 0) {
    return (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
  } else {
    return array[(array.length - 1) / 2];
  }
}

module.exports = compute_median;


