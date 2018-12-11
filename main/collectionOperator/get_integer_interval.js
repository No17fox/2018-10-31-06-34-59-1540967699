'use strict';

function get_integer_interval(number_a, number_b) {
  let collection = [];
  let range = number_b - number_a;
  let index = 0;
  let number = number_a;
  if (range === 0) {
    collection[0] = number_a;
  } else if (range > 0) {
    for (index = 0; index < range + 1; index++) {
      collection.push(number);
      number++;
    }
  } else {
    for (index = 0; index < (- range) + 1; index++) {
      collection.push(number);
      number--;      
    }
  }
  return collection;
}

module.exports = get_integer_interval;

