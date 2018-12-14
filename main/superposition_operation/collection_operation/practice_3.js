'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(isOdd).map(multipleThreeAddFive).reduce(sum);
}

function sum(last, current) {
  return last + current;
}

function multipleThreeAddFive(element) {
  return element * 3 + 5;
}

function isOdd(number) {
  return number % 2 === 1;
}


module.exports = hybrid_operation_to_uneven;

