'use strict';

let collect_min_number = collection => collection.reduce(findSmallerNumber);

let findSmallerNumber = (min, current) => (min < current) ? min : current;

module.exports = collect_min_number;

