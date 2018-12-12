'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let uniqueElement = [];
  for (let i = 0; i < collection_a.length; i++) {
    if (!isInCollection(collection_a[i], collection_b)) {
      uniqueElement.push(collection_a[i]);
    }
  }
  return uniqueElement;
}

function isInCollection(element, collection) {
  for (let i = 0; i < collection.length; i++) {
    if (element === collection[i]) {
      return true;
    }
  }
  return false;
}

module.exports = choose_no_common_elements;
