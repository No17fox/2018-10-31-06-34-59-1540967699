'use strict';

function collect_max_number(collection) {
  return collection.reduce(findBiggerNumber);
}

function findBiggerNumber(max, current) {
  if (max > current) {
    return max;
  } else {
    return current;
  }
}

module.exports = collect_max_number;
