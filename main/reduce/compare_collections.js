'use strict';

let compare_collections = (collection_a, collection_b) => collection_a.reduce((acc, cur, idx) => acc && cur === collection_b[idx], true);

module.exports = compare_collections;


