'use strict';
var even_asc_odd_desc = function(collection){
  let even = collection.filter(isEven).sort(compare);
  let odd = collection.filter(isOdd).sort(compare).reverse();
  return even.concat(odd);
};

function compare(last, current) {
  return last - current;
}

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 === 1;
}
module.exports = even_asc_odd_desc;
