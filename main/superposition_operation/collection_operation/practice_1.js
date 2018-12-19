'use strict';

function hybrid_operation(collection) {
  return collection.map(multipleThreeAddTwo).reduce(sum);
}

function sum(last, current) {
  return last + current;
}

function multipleThreeAddTwo(element) {
  return element * 3 + 2;
}

module.exports = hybrid_operation;

