'use strict';

function double_to_one(collection) {
  let oneDimArry = collection.reduce(function (acc, cur) {
    return acc.concat(cur);
  },[]);
  return oneDimArry.filter(uniqueElement);
}

function uniqueElement(element, index, array) {
  return array.indexOf(element) === index;
}

module.exports = double_to_one;
