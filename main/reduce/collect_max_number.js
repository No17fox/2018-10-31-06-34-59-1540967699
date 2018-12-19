'use strict';

function collect_max_number(collection) {
  return collection.reduce(findBiggerNumber);
}

function findBiggerNumber(max, current) {
  return (max > current) ? max : current;
}

module.exports = collect_max_number;
