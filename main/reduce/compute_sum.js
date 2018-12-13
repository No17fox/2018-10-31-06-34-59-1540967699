'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce(sum);
}

function sum(accumulate, currentElement) {
  return accumulate + currentElement;
}

module.exports = calculate_elements_sum;

