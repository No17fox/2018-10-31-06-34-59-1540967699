'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  return collection_a.filter(function (element) {
    for (let index = 0; index < collection_b.length; index++) {
      if (element === collection_b[index]) {
        return false;
      }      
    }
    return true;
  })
}

module.exports = choose_no_common_elements;
