'use strict';

let average_uneven = collection => {
  let odd = collection.filter(item => item % 2 === 1);
  return odd.reduce((acc, cur) => acc + cur) / odd.length;
};

module.exports = average_uneven;
