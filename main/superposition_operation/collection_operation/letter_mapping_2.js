'use strict';

function average_to_letter(collection) {
  let average = collection.reduce(sum) / collection.length;
  return convertNumberToLetter(Math.ceil(average));
}

function sum(last, current) {
  return last + current;
}

function convertNumberToLetter(number) {
  return String.fromCharCode(number + 96);
}

module.exports = average_to_letter;

