'use strict';

function choose_common_elements(collection_a, collection_b) {;
  return collection_a.filter(function (element) {
    for (let index = 0; index < collection_b.length; index++) {
      if (element === collection_b[index]) {
        return true;
      }      
    }
    return false;
  })
}

module.exports = choose_common_elements;
