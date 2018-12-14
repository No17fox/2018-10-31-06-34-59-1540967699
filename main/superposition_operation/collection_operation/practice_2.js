'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(isOdd).map(threeTimesAddTwo);
}

function  multipleThreeAddTwo(element) {
  return element * 3 + 2;
}

function isOdd(number) {
  return number % 2 === 1;
}

module.exports = hybrid_operation_to_uneven;

