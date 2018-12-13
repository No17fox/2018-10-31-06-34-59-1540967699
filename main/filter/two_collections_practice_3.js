'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(function (element) {
    for (let index = 0; index < collection_b.length; index++) {
      if (element % collection_b[index] === 0) {
        return true;
      }      
    }
    return false;
  })
}

module.exports = choose_divisible_integer;
