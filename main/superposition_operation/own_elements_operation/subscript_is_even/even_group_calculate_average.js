'use strict';

let even_group_calculate_average = collection => {
  let even = collection.filter((element, index) => index % 2 === 1 && element % 2 === 0);
  let result = [];
  if (even.length === 0) {
    result.push(0);
  } else {
    let tmpObj = generateDigitObj(even);
    for (let attr in tmpObj) {
      result.push(average(tmpObj[attr]));
    }
  }
  return result;
};

let generateDigitObj = collection => {
  let tmp = {};
  for (let item of collection) {
    if (tmp[item.toString().length]) {
      tmp[item.toString().length].push(item);
    } else {
      tmp[item.toString().length] = [item];
    }
  }
  return tmp;
};

let average = collection => collection.reduce((acc, cur) => acc + cur) / collection.length;

module.exports = even_group_calculate_average;
