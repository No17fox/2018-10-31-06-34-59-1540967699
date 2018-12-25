'use strict';

var rank_asc = collection => collection.sort((a, b) => a - b).reverse();

module.exports = rank_asc;
