'use strict';

function double_to_one(collection) {
  let oneDimArry = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] instanceof Array) {
      for (let j = 0; j < collection[i].length; j++) {
        oneDimArry.push(collection[i][j]);
      }
    } else {
      oneDimArry.push(collection[i]);
    }
  }
  return oneDimArry;
}

module.exports = double_to_one;
