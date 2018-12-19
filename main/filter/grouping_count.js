'use strict';

function grouping_count(collection) {
  let countList = {};
  for (let element of collection) {
    if (countList[element]) {
      countList[element] += 1;
    } else {
      countList[element] = 1;
    }
  }
  return countList;
}

module.exports = grouping_count;
