'use strict';

let grouping_count = collection => {
  return collection.reduce((acc, cur) => {
    acc[cur] = (acc[cur] + 1) || 1;
    return acc;
  }, {});
}

module.exports = grouping_count;
