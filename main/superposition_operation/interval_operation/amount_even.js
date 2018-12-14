'use strict';

function amount_even(collection) {
  return collection.filter(isEven).reduce(sum);
}

function sum(last, current) {
  return last + current;
}

function isEven(number) {
  return number % 2 === 0;
}

module.exports = amount_even;
