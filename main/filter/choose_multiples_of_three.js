'use strict';

function choose_multiples_of_three(collection) {
  let evenCollection = [];
  for (let index = 0; index < collection.length; index++) {
    if (isMultipleOfThree(collection[index])) {
      evenCollection.push(collection[index]);
    } 
  }
  return evenCollection;
}

function isMultipleOfThree(number) {
  return number % 3 === 0;
}

module.exports = choose_multiples_of_three;
