'use strict';

let choose_even = collection => collection.filter(isEven);

let isEven = number => number % 2 === 0;

module.exports = choose_even;
