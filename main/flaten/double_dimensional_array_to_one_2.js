'use strict';

function double_to_one(collection) {
  let oneDimArry = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] instanceof Array) {
      for (let j = 0; j < collection[i].length; j++) {
        pushUniqueElement(collection[i][j], oneDimArry);
      }
    } else {
      pushUniqueElement(collection[i][j], oneDimArry);
    }
  }
  return oneDimArry;
}

function isInCollection(element, collection) {
  for (let index = 0; index < collection.length; index++) {
    if (element === collection[index]) {
      return true;
    }
  }
  return false;
}

function pushUniqueElement(element, collection) {
  if(!isInCollection(element, collection)) {
    collection.push(element);
  }
}

module.exports = double_to_one;
