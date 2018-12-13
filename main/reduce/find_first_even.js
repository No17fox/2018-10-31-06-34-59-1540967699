'use strict';

function find_first_even(collection) {
  let even = collection.reduce(isEven, []);
  return collection[even.indexOf(1)];
}

function isEven(result, element, index) {
  if (element % 2 === 0) {
    result[index] = 1;
  } else {
    result[index] = 0;
  }
  return result;
}

module.exports = find_first_even;

