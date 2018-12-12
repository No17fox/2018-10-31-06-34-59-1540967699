'use strict';

var map_to_three_multiples = function(collections){
  return collections.map(threeMultiples);
};

function threeMultiples(number) {
  return number * 3;
}

module.exports = map_to_three_multiples;
