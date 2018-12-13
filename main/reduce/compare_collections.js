'use strict';

function compare_collections(collection_a, collection_b) {
  return isSame(collection_a, collection_b).reduce(isAllTrue);
}

function isAllTrue(last, current) {
  return last && current;
}

function isSame(collection_a, collection_b) {
  return collection_a.map(function (element_a, i) {
    return element_a === collection_b[i];
  });
}

module.exports = compare_collections;


