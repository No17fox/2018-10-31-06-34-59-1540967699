'use strict';

function choose_no_repeat_number(collection) {
  let differentTimes = 0;
  let elementType = [collection[0]];
  for (let i = 0; i < collection.length; i++) {
    for (let j = 0; j < elementType.length; j++) {
      if (collection[i] != elementType[j]) {
        differentTimes++;
      }
    }
    if (differentTimes === elementType.length) {
      elementType.push(collection[i]);
    }
    differentTimes = 0;
  }
  return elementType;
}

module.exports = choose_no_repeat_number;
