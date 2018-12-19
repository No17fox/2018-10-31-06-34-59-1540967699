'use strict';

function get_integer_interval(number_a, number_b) {
  let collection = [];
  let start = (number_a > number_b) ? number_b : number_a;
  let end = (number_a > number_b) ? number_a : number_b;
  for (; start <= end; start++) {
    collection.push(start);
  }
  return (number_a <= number_b) ? collection : collection.reverse();
}

module.exports = get_integer_interval;

