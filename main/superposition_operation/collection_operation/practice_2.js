'use strict';

let hybrid_operation_to_uneven = collection => collection.filter(isOdd).map(item => item * 3 + 2);

let isOdd = number => number % 2 === 1;

module.exports = hybrid_operation_to_uneven;

