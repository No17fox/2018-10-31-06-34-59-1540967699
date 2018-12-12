'use strict';

var map_to_four_multiples_add_one = function(collection){
  return collection.map(fourMultiplesAndAddOne);
};

function fourMultiplesAndAddOne(number) {
  return number * 4 + 1;
}

module.exports = map_to_four_multiples_add_one;
