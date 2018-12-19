'use strict';

let getIntegerInterval = require('./get_integer_interval.js');

function get_integer_interval_2(number_a, number_b) {
  let collection = getIntegerInterval(number_a, number_b);
  return collection.filter(isEven);
}

function isEven(number) {
  return number % 2 === 0;
}

module.exports = get_integer_interval_2;
