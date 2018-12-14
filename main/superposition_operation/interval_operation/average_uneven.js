'use strict';

function average_uneven(collection) {
  let odd = collection.filter(isOdd);
  return odd.reduce(sum) / odd.length;
}

function isOdd(number) {
  return number % 2 === 1;
}

function sum(last, current) {
  return last + current;
}

module.exports = average_uneven;
