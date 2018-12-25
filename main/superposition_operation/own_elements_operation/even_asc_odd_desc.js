'use strict';

let even_asc_odd_desc = collection => {
  let even = collection.filter(item => item % 2 === 0).sort(compare);
  let odd = collection.filter(item => item % 2 === 1).sort(compare).reverse();
  return even.concat(odd);
};

let compare = (last, current) => last - current;

module.exports = even_asc_odd_desc;
