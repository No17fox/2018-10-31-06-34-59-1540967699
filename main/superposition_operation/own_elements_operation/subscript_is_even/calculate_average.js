'use strict';
var calculate_average = function(collection){
  let evenPositionElement = collection.filter((element, index) => index % 2 === 1);
  return evenPositionElement.reduce(sum) / evenPositionElement.length;
};

function sum(last, current) {
  return last + current;
}

module.exports = calculate_average;
