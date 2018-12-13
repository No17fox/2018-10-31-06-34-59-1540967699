'use strict';

function compute_average(collection) {
  return collection.reduce(sum) / collection.length;
}

function sum(last, current) {
  return last + current;
}

module.exports = compute_average;

