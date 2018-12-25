'use strict';

let rank_by_two_large_one_small = collection =>{
  collection.sort((a, b) => a - b);
  for (let i = 0; i < Math.floor(collection.length / 3); i++) {
    let smallest = collection.splice(i * 3, 1);
    collection.splice(i * 3 + 2, 0, smallest[0]);
  }
  return collection;
};

module.exports = rank_by_two_large_one_small;
