'use strict';

let choose_divisible_integer = (collection_a, collection_b) => {
  return collection_a.filter(element_a => {
    for (let element_b of collection_b) {
      if (element_a % element_b === 0) {
        return true;
      }      
    }
    return false;
  })
};

module.exports = choose_divisible_integer;
