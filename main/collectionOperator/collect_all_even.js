'use strict';

function collect_all_even(collection) {
  let evenCollection = [];
  for (let index = 0; index < collection.length; index++) {
    if (isEven(collection[index])) {
      evenCollection.push(collection[index]);
    };    
  }
  return evenCollection;
}

function isEven(number) {
  return number % 2 === 0;
}

module.exports = collect_all_even;
