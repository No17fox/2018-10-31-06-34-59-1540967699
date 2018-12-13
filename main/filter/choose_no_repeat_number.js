'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter(uniqueElement);
}

function uniqueElement(element, index, array) {
  return array.indexOf(element) === index;
}



module.exports = choose_no_repeat_number;
