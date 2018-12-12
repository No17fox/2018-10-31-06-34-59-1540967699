'use strict';

function grouping_count(collection) {
  let elementType = {};
  for (let i = 0; i < collection.length; i++) {
    let differentTimes = 0;
    for (const key in elementType) {
      if (elementType.hasOwnProperty(key)) {
        if (collection[i] === parseInt(key)) {
          elementType[key] += 1;
        } else {
          differentTimes++;
        }
      }
    }
    if (differentTimes === Object.keys(elementType).length) {
      elementType[collection[i]] = 1;
    }
  }
  return elementType;
}

module.exports = grouping_count;
