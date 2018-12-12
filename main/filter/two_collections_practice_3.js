'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let divisibleNumber = [];
  for (let i = 0; i < collection_a.length; i++) {
    if (isDivisible(collection_a[i], collection_b)) {
      divisibleNumber.push(collection_a[i]);
    }
  }
  return divisibleNumber;
}

function isDivisible(number, collection) {
  for (let i = 0; i < collection.length; i++) {
    if (number % collection[i] === 0) {
      return true;
    }
  }
  return false;
}

module.exports = choose_divisible_integer;
