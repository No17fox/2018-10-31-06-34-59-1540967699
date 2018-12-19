'use strict';
var single_element = function(collection){
  let evenPositionElement = collection.filter((item, index) => index % 2 === 1);
  return evenPositionElement.filter(function (element) {
    let repeatTimes = 0;
    for (let item of evenPositionElement) {
      if (element === item) {
        repeatTimes++;
      }
    }
    return repeatTimes === 1;
  });
};

module.exports = single_element;
