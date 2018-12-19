'use strict';

function get_integer_interval_2(number_a, number_b) {
  let collection = [];
  const range = number_b - number_a;
  let firstElement = 0;
  if (range === 0 && isEven(number_a)) {
    collection.push(number_a);
  } else if (range > 0) {
    firstElement = number_a + 1;
    for (let index = 0; index < (range + 1) / 2; index++) {
      collection.push(firstElement);
      firstElement += 2;
    }
  } else if (range < 0) {
    firstElement = number_a;
    for (let index = 0; index < (- range + 1) / 2; index++) {
      collection.push(firstElement);
      firstElement -= 2;
    }
  }
  return collection;
}

function isEven(number) {
  return number % 2 === 0;
}

module.exports = get_integer_interval_2;
