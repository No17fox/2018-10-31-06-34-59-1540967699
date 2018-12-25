'use strict';

let double_to_one = collection => collection.reduce((acc, cur) => {
    return acc.concat(cur);
  },[]);

module.exports = double_to_one;
