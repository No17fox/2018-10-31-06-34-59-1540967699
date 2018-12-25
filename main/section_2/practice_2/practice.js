'use strict';

let count_same_elements = collection => convertObjectToArray(count(collection));

let count = collection => {
  return collection.reduce((acc, cur) => {
    let key = cur.match(/[A-Za-z]+/g)[0];
    let number = cur.match(/\d+/g);
    let sum = number ? number[0] : 1;
    acc[key] = (acc[key] + parseInt(sum)) || parseInt(sum);
    return acc;
  }, {});
};

let convertObjectToArray = obj => {
  return Object.keys(obj).map((element) => {
    return {
      key: element,
      count: obj[element],
    };
  });
};

module.exports = count_same_elements;
