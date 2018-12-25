'use strict';

let collect_max_number = collection => collection.reduce(findBiggerNumber);

let findBiggerNumber = (max, current) => (max > current) ? max : current;

module.exports = collect_max_number;
