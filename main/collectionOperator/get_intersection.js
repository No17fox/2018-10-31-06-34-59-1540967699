'use strict';

function get_intersection(collection_a, collection_b) {
  let intersection = [];
  for (let element of collection_b) {
    if (collection_a.includes(element)) {
      intersection.push(element);
    }
  }
  return intersection;
}

module.exports = get_intersection;
