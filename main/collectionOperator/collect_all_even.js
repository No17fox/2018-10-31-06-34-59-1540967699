'use strict';

let collect_all_even = collection => collection.filter(isEven);

let isEven = number => number % 2 === 0;

module.exports = collect_all_even;
