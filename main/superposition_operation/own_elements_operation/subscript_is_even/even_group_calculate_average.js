'use strict';
var even_group_calculate_average = function(collection){
  let even = collection.filter(function (element, index) {
    return index % 2 === 1 && element % 2 === 0;
  });
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

function generateDigitObj(collection) {
  let tmp = {};
  for (let item of collection) {
    if (tmp[item.toString().length]) {
      tmp[item.toString().length].push(item);
    } else {
      tmp[item.toString().length] = [item];
    }
  }
  return tmp;
}

function average(collection) {
  return collection.reduce(sum) / collection.length;
}

function sum(last, current) {
  return last + current;
}

module.exports = even_group_calculate_average;
