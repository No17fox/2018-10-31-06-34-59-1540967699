'use strict';

function collect_min_number(collection) {
  return collection.reduce(findSmallerNumber);
}

function findSmallerNumber(min, current) {
  return (min < current) ? min : current;
}

module.exports = collect_min_number;

