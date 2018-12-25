'use strict';

let count_same_elements = collection => convertObjToArr(count(collection));

let count = collection => {
  return collection.reduce((acc, cur) => {
    let key = cur.match(/[A-Za-z]+/g)[0];
    let number = cur.match(/\d+/g);
    let sum = number ? number[0] : 1;
    acc[key] = (acc[key] + parseInt(sum)) || parseInt(sum);
    return acc;
  }, {});
};

let convertObjToArr = obj => {
  return Object.keys(obj).map((element) => {
    return {
      name: element,
      summary: obj[element],
    };
  });
};

module.exports = count_same_elements;
