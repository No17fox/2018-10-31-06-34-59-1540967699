'use strict';

let hybrid_operation = collection => collection.map(item => item * 3 + 2).reduce((acc, cur) => acc + cur);

module.exports = hybrid_operation;

