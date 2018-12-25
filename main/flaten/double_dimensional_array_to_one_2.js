'use strict';

let double_to_one = collection => {
  let oneDimArry = collection.reduce((acc, cur) => {
    return acc.concat(cur);
  },[]);
  return oneDimArry.filter(uniqueElement);
};

let uniqueElement = (element, index, array) => array.indexOf(element) === index;

module.exports = double_to_one;
