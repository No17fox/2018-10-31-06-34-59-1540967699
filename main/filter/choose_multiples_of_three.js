'use strict';

let choose_multiples_of_three = collection => collection.filter(isMultipleOfThree);

let isMultipleOfThree = number => number % 3 === 0;

module.exports = choose_multiples_of_three;
