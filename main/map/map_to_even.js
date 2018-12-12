'use strict';

function map_to_even(collection){
  return collection.map(double);
}

function double(number) {
  return number * 2;
}

module.exports = map_to_even;
