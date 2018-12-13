'use strict';

function grouping_count(collection) {
  let elementType = collection.filter(uniqueElement);
  let repeatTimes = {};
  for (let index = 0; index < elementType.length; index++) {
    repeatTimes[elementType[index]] = 0;
  }
  for (let index = 0; index < collection.length; index++) {
    for (const key in repeatTimes) {
      if (repeatTimes.hasOwnProperty(key)) {
        if (collection[index] === parseInt(key)) {
          repeatTimes[key] += 1;
        }
      }
    }
  }
  return repeatTimes;
}

function uniqueElement(element, index, array) {
  return array.indexOf(element) === index;
}

module.exports = grouping_count;
