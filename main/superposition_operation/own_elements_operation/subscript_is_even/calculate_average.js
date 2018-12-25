'use strict';

let calculate_average = collection =>{
  let evenPositionElement = collection.filter((element, index) => index % 2 === 1);
  return evenPositionElement.reduce((acc, cur) => acc + cur) / evenPositionElement.length;
};

module.exports = calculate_average;
