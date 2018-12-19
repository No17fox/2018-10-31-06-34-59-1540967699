'use strict';

function get_union(collection_a, collection_b) {
  let collection = collection_a;
  for (let element of collection_b) {
    if (!collection_a.includes(element)) {
      collection.push(element);
    }
  }
  return collection;
}

module.exports = get_union;

