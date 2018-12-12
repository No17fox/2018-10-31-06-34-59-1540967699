'use strict';

function get_union(collection_a, collection_b) {
  let collection = collection_a;
  for (let i = 0; i < collection_b.length; i++) {
    if (!isInCollection(collection_b[i], collection_a)) {
      collection.push(collection_b[i]);
    }
  }
  return collection;
}

function isInCollection(number, collection) {
  for (let index = 0; index < collection.length; index++) {
    if (number === collection[index]) {
      return true;
    }
  }
  return false;
}

module.exports = get_union;

