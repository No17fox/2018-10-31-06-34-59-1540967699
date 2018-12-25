'use strict';

let split_to_zero = (number, interval) => {
  let collection = [];
  decrease(collection, number * 10, interval * 10);
  return collection;
}

let decrease = (collection, number, interval) => {
  if (number <= 0) {
    return collection.push(number / 10);
  } else {
    collection.push(number / 10);
    number -= interval;
    return decrease(collection, number, interval);
  }
};

module.exports = split_to_zero;
