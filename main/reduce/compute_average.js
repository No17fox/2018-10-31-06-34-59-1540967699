'use strict';

let compute_average = collection => collection.reduce(sum) / collection.length;

let sum = (last, current) => last + current;

module.exports = compute_average;

