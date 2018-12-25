'use strict';

let hybrid_operation_to_uneven = collection => collection.filter(isOdd).map(multipleThreeAddFive).reduce(sum);

let sum = (last, current) => last + current;

let multipleThreeAddFive = element => element * 3 + 5;

let isOdd = number => number % 2 === 1;


module.exports = hybrid_operation_to_uneven;

