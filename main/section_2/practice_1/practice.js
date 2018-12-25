'use strict';

let count_same_elements = collection => convertObjectToArray(collection.reduce((acc, cur) => {
  acc[cur] = (acc[cur] + 1) || 1;
  return acc;
}, {}));

let convertObjectToArray = obj => {
  return Object.keys(obj).map((element) => {
    return {
      key: element,
      count: obj[element],
    };
  });
};


module.exports = count_same_elements;
