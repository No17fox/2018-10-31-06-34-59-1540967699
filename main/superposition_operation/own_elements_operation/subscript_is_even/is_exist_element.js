'use strict';
var is_exist_element = function(collection, element){
  let evenSubscript = [];
  for (let i = 0; i < Math.floor(collection.length / 2); i++) {
    evenSubscript.push(collection[i * 2]);
  }
  return isExist(element,evenSubscript);
};

function isExist(element, collection) {
  let intersection = collection.filter(function (current) {
    return element === current;
  });
  if (intersection.length === 0) {
    return false;
  } else {
    return true;
  }
}
module.exports = is_exist_element;
