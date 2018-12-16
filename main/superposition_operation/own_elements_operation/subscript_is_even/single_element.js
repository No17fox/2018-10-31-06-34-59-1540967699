'use strict';
var single_element = function(collection){
  let evenPositionElement = [];
  for (let i = 0; i < Math.floor(collection.length / 2); i++) {
    evenPositionElement.push(collection[i * 2 + 1]);
  }
  return evenPositionElement.filter(function (element) {
    let repeatTimes = 0;
    for (let i = 0; i < evenPositionElement.length; i++) {
      if (element === evenPositionElement[i]) {
        repeatTimes++;
      }
    }
    return repeatTimes === 1;
  });
};

module.exports = single_element;
