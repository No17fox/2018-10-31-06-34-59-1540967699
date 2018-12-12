'use strict';

function get_letter_interval(number_a, number_b) {
  const range = number_b - number_a;
  let index = 0;
  let collection = [];
  if (range === 0) {
    pushAnChartInArray(collection, number_a);
  } else if (range > 0) {
    for (index; index < range + 1; index++) {
      pushAnChartInArray(collection, number_a);
      number_a++;
    }
  } else {
    for (index; index < - range + 1; index++) {
      pushAnChartInArray(collection, number_a);
      number_a--;
    }
  }
  return collection;
}

function pushAnChartInArray(array, number) {
  return array.push(numberToString(number));
}

function numberToString(number) {
  return String.fromCharCode(number + 96);
}

module.exports = get_letter_interval;
