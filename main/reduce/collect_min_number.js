'use strict';

function collect_min_number(collection) {
  return collection.reduce(findSmallerNumber);
}

function findSmallerNumber(min, current) {
  if (min < current) {
    return min;
  } else {
    return current;
  }
}

module.exports = collect_min_number;

