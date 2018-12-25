'use strict';

let amount_even = collection => collection.filter(item => item % 2 === 0).reduce((acc, cur) => acc + cur);

module.exports = amount_even;
