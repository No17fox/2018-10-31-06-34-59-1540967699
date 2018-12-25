'use strict';

let getIntegerInterval = require('./get_integer_interval.js');

let get_integer_interval_2 = (number_a, number_b) => getIntegerInterval(number_a, number_b).filter(isEven);

let isEven = number => number % 2 === 0;

module.exports = get_integer_interval_2;
