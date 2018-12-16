'use strict';
var calculate_average = function(collection){
  let evenPositionElement = [];
  for (let i = 0; i < Math.floor(collection.length / 2); i++) {
    evenPositionElement.push(collection[i * 2 + 1]);
  }
  return evenPositionElement.reduce(sum) / evenPositionElement.length;
};

function sum(last, current) {
  return last + current;
}

module.exports = calculate_average;
