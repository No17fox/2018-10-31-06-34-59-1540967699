'use strict';
function rank_by_two_large_one_small(collection){
  collection.sort(compare);
  let multiple = Math.floor(collection.length / 3);
  for (let i = 0; i < multiple; i++) {
    let smallest = collection.splice(i * 3, 1);
    collection.splice(i * 3 + 2, 0, smallest[0]);
  }
  return collection;
}

function compare(last, current) {
  return last - current;
}

module.exports = rank_by_two_large_one_small;
